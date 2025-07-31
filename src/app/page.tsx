import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { featuredDishes } from '@/lib/data';
import { UtensilsCrossed } from 'lucide-react';

export default function Home() {
  return (
    <div className="flex flex-col">
      <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-secondary/50">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
             <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h1 className="font-headline text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                  Savor the Zest, Taste the Bliss
                </h1>
                <p className="max-w-[600px] text-muted-foreground md:text-xl">
                  Welcome to Zestful Bites, where every dish is a celebration of flavor. Fresh ingredients, masterful recipes.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Button asChild size="lg" className="font-semibold">
                  <Link href="/menu">Explore Menu</Link>
                </Button>
              </div>
            </div>
            <Image
              src="https://placehold.co/600x400.png"
              alt="Hero Dish"
              data-ai-hint="gourmet dish"
              width={600}
              height={400}
              className="mx-auto aspect-video overflow-hidden rounded-xl object-cover sm:w-full lg:order-last lg:aspect-square"
            />
          </div>
        </div>
      </section>

      <section id="featured" className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold font-headline tracking-tighter sm:text-5xl">Featured Dishes</h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Discover our chef's special recommendations. A selection of our most popular and flavorful creations.
              </p>
            </div>
          </div>
          <div className="mx-auto max-w-5xl py-12">
            <Carousel opts={{ align: "start", loop: true }} className="w-full">
              <CarouselContent>
                {featuredDishes.map((dish) => (
                  <CarouselItem key={dish.id} className="md:basis-1/2 lg:basis-1/3">
                    <div className="p-1">
                      <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300">
                        <CardContent className="flex aspect-square items-center justify-center p-0">
                          <Image
                            src={dish.imageUrl}
                            alt={dish.name}
                            data-ai-hint={dish.aiHint}
                            width={400}
                            height={400}
                            className="rounded-t-lg object-cover w-full h-full"
                          />
                        </CardContent>
                        <div className="p-4">
                          <h3 className="text-lg font-semibold font-headline">{dish.name}</h3>
                          <p className="text-sm text-muted-foreground">{dish.description}</p>
                        </div>
                      </Card>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
          </div>
        </div>
      </section>

      <section id="about" className="w-full py-12 md:py-24 lg:py-32 bg-secondary/50">
        <div className="container grid items-center justify-center gap-4 px-4 text-center md:px-6 lg:gap-10">
          <div className="space-y-3">
            <h2 className="text-3xl font-bold font-headline tracking-tighter sm:text-4xl md:text-5xl">Our Story</h2>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              From a humble kitchen to a beloved local eatery, our journey is fueled by passion and a love for authentic flavors.
            </p>
          </div>
          <div className="mx-auto grid max-w-5xl items-start gap-8 sm:grid-cols-2 md:gap-12">
            <div className="flex justify-center">
               <Image
                  src="https://placehold.co/550x310.png"
                  alt="Restaurant Owner"
                  data-ai-hint="chef portrait"
                  width={550}
                  height={310}
                  className="rounded-xl object-cover"
                />
            </div>
            <div className="flex flex-col justify-center space-y-4 text-left">
              <p className="text-muted-foreground">
                Zestful Bites was born from a dream to share the recipes passed down through generations. Our founder, Chef Elara, envisioned a place where people could not only eat but also connect and create memories. Every dish on our menu is a piece of our history, crafted with care and the finest local ingredients. We believe in food that comforts the soul and excites the palate. Thank you for being a part of our story.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
