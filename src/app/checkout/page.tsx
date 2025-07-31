"use client";

import Link from 'next/link';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useCart } from '@/context/CartContext';
import { CheckCircle, PartyPopper } from 'lucide-react';

export default function CheckoutPage() {
  const { totalPrice, clearCart } = useCart();
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, you would process the payment here.
    setIsSubmitted(true);
    clearCart();
  };

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
    <div className="container py-12 md:py-16 flex justify-center">
      <Card className="w-full max-w-2xl shadow-xl">
        <CardHeader>
          <CardTitle className="font-headline text-3xl">Checkout</CardTitle>
          <CardDescription>Please enter your details to complete the order.</CardDescription>
        </CardHeader>
        <form onSubmit={handleSubmit}>
          <CardContent className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="name">Full Name</Label>
              <Input id="name" placeholder="John Doe" required />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email Address</Label>
              <Input id="email" type="email" placeholder="john@example.com" required />
            </div>
            <div className="space-y-2">
              <Label>Payment Details</Label>
              <div className="p-3 border rounded-md bg-secondary text-sm text-muted-foreground">
                This is a demo. No real payment will be processed.
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="card-number">Card Number</Label>
              <Input id="card-number" placeholder="**** **** **** 1234" disabled />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="expiry">Expiry Date</Label>
                <Input id="expiry" placeholder="MM/YY" disabled />
              </div>
              <div className="space-y-2">
                <Label htmlFor="cvc">CVC</Label>
                <Input id="cvc" placeholder="123" disabled />
              </div>
            </div>
          </CardContent>
          <CardFooter className="flex flex-col items-stretch">
            <div className="flex justify-between font-bold text-lg mb-4">
                <span>Total to Pay</span>
                <span>${(totalPrice * 1.1).toFixed(2)}</span>
              </div>
            <Button type="submit" size="lg" className="w-full">
              <CheckCircle className="mr-2 h-5 w-5" />
              Place Order
            </Button>
          </CardFooter>
        </form>
      </Card>
    </div>
  );
}
