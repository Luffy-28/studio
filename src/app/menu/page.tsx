"use client";

import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { menuItems } from '@/lib/data';
import { useCart } from '@/context/CartContext';
import { useToast } from '@/hooks/use-toast';
import { PlusCircle } from 'lucide-react';
import type { Dish } from '@/lib/types';

export default function MenuPage() {
  const { addToCart } = useCart();
  const { toast } = useToast();

  const handleAddToCart = (item: Dish) => {
    addToCart(item);
    toast({
      title: "Added to cart",
      description: `${item.name} has been added to your cart.`,
    });
  };
  
  const foodItems = menuItems.filter(item => item.category === 'Food');
  const drinkItems = menuItems.filter(item => item.category === 'Drink');

  return (
    <div className="container py-12 md:py-16">
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-headline font-bold tracking-tight">Our Menu</h1>
        <p className="mt-4 text-lg text-muted-foreground">Fresh, flavorful, and unforgettable. Explore our culinary creations.</p>
      </div>
      
      <div>
        <h2 className="text-3xl font-headline font-bold tracking-tight mb-8">Food</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {foodItems.map((item) => (
            <Card key={item.id} className="flex flex-col overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300">
              <CardHeader className="p-0">
                <Image
                  src={item.imageUrl}
                  alt={item.name}
                  data-ai-hint={item.aiHint}
                  width={400}
                  height={300}
                  className="object-cover w-full h-48"
                />
              </CardHeader>
              <CardContent className="p-6 flex-grow">
                <CardTitle className="font-headline text-xl mb-2">{item.name}</CardTitle>
                <CardDescription>{item.description}</CardDescription>
              </CardContent>
              <CardFooter className="flex justify-between items-center p-6 pt-0">
                <p className="text-xl font-semibold text-primary">${item.price.toFixed(2)}</p>
                <Button onClick={() => handleAddToCart(item)} variant="outline">
                  <PlusCircle className="mr-2 h-5 w-5" />
                  Add to Cart
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>

      <div className="mt-16">
        <h2 className="text-3xl font-headline font-bold tracking-tight mb-8">Drinks</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {drinkItems.map((item) => (
            <Card key={item.id} className="flex flex-col overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300">
              <CardHeader className="p-0">
                <Image
                  src={item.imageUrl}
                  alt={item.name}
                  data-ai-hint={item.aiHint}
                  width={400}
                  height={300}
                  className="object-cover w-full h-48"
                />
              </CardHeader>
              <CardContent className="p-6 flex-grow">
                <CardTitle className="font-headline text-xl mb-2">{item.name}</CardTitle>
                <CardDescription>{item.description}</CardDescription>
              </CardContent>
              <CardFooter className="flex justify-between items-center p-6 pt-0">
                <p className="text-xl font-semibold text-primary">${item.price.toFixed(2)}</p>
                <Button onClick={() => handleAddToCart(item)} variant="outline">
                  <PlusCircle className="mr-2 h-5 w-5" />
                  Add to Cart
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
