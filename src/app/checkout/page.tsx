"use client";

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { loadStripe } from '@stripe/stripe-js';
import { Elements, PaymentElement, useStripe, useElements } from '@stripe/react-stripe-js';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { useCart } from '@/context/CartContext';
import { PartyPopper, Loader2 } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!);

function CheckoutForm() {
  const stripe = useStripe();
  const elements = useElements();
  const { clearCart } = useCart();
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!stripe || !elements) {
      return;
    }
    setIsLoading(true);

    const { error } = await stripe.confirmPayment({
      elements,
      confirmParams: {
        return_url: `${window.location.origin}/checkout`,
      },
    });

    if (error.type === "card_error" || error.type === "validation_error") {
      toast({
        variant: "destructive",
        title: "Payment failed",
        description: error.message,
      });
    } else {
        toast({
            variant: "destructive",
            title: "An unexpected error occurred",
            description: "Please try again.",
        });
    }
    setIsLoading(false);
  };
  
  useEffect(() => {
    if (!stripe) {
      return;
    }

    const clientSecret = new URLSearchParams(window.location.search).get(
      "payment_intent_client_secret"
    );

    if (!clientSecret) {
      return;
    }

    stripe.retrievePaymentIntent(clientSecret).then(({ paymentIntent }) => {
      switch (paymentIntent?.status) {
        case "succeeded":
          setIsSubmitted(true);
          clearCart();
          break;
        case "processing":
           toast({ title: "Payment processing.", description: "We'll update you when payment is received." });
          break;
        case "requires_payment_method":
          toast({ variant: "destructive", title: "Payment failed.", description: "Please try another payment method." });
          break;
        default:
          toast({ variant: "destructive", title: "Something went wrong." });
          break;
      }
    });
  }, [stripe, clearCart, toast]);


  if (isSubmitted) {
    return (
      <div className="container flex flex-col items-center justify-center text-center py-24">
        <PartyPopper className="h-16 w-16 text-primary" />
        <h1 className="mt-4 text-3xl font-headline font-bold">Thank You for Your Order!</h1>
        <p className="mt-2 text-muted-foreground">Your order has been placed successfully. We'll see you soon!</p>
        <Button asChild className="mt-6">
          <Link href="/">Back to Home</Link>
        </Button>
      </div>
    );
  }

  return (
     <form onSubmit={handleSubmit}>
        <CardContent>
            <PaymentElement />
        </CardContent>
        <CardFooter>
            <Button type="submit" disabled={isLoading || !stripe || !elements} size="lg" className="w-full">
                {isLoading ? <Loader2 className="mr-2 h-5 w-5 animate-spin" /> : `Pay now`}
            </Button>
        </CardFooter>
    </form>
  )
}

export default function CheckoutPage() {
  const { totalPrice } = useCart();
  const [clientSecret, setClientSecret] = useState("");

  const finalPrice = Math.round(totalPrice * 1.1 * 100);

  useEffect(() => {
    if (totalPrice > 0) {
        fetch('/api/create-payment-intent', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ amount: finalPrice }),
        })
        .then((res) => res.json())
        .then((data) => setClientSecret(data.clientSecret));
    }
  }, [totalPrice, finalPrice]);

  const options = {
    clientSecret,
    appearance: {
        theme: 'stripe' as const,
        variables: {
            colorPrimary: '#f97316',
            colorBackground: '#ffffff',
            colorText: '#333333',
        },
    }
  };

  return (
    <div className="container py-12 md:py-16 flex justify-center">
      <Card className="w-full max-w-2xl shadow-xl">
        <CardHeader>
          <CardTitle className="font-headline text-3xl">Checkout</CardTitle>
          <CardDescription>Total: ${(finalPrice / 100).toFixed(2)}</CardDescription>
        </CardHeader>
        {clientSecret ? (
          <Elements options={options} stripe={stripePromise}>
            <CheckoutForm />
          </Elements>
        ) : (
          <div className="flex justify-center items-center h-48">
            <Loader2 className="h-8 w-8 animate-spin text-primary" />
          </div>
        )}
      </Card>
    </div>
  );
}
