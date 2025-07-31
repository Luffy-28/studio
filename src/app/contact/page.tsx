import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Phone, MapPin, Clock } from "lucide-react";

export default function ContactPage() {
  return (
    <div className="container py-12 md:py-16">
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-headline font-bold tracking-tight">Get in Touch</h1>
        <p className="mt-4 text-lg text-muted-foreground">We'd love to hear from you. Visit us or give us a call.</p>
      </div>

      <div className="grid md:grid-cols-2 gap-12">
        <div>
          <Card className="shadow-lg h-full">
            <CardHeader>
              <CardTitle className="font-headline text-2xl">Contact Information</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6 text-lg">
              <div className="flex items-center">
                <MapPin className="h-6 w-6 mr-4 text-primary" />
                <span>123 Zestful Ave, Flavor Town, 12345</span>
              </div>
              <div className="flex items-center">
                <Phone className="h-6 w-6 mr-4 text-primary" />
                <span>(555) 123-4567</span>
              </div>
              <div className="flex items-center">
                <Clock className="h-6 w-6 mr-4 text-primary" />
                <span>Mon - Sun: 11:00 AM - 10:00 PM</span>
              </div>
            </CardContent>
          </Card>
        </div>
        <div>
          <Card className="shadow-lg h-full">
            <CardHeader>
              <CardTitle className="font-headline text-2xl">Our Location</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="aspect-video w-full bg-secondary rounded-lg flex items-center justify-center">
                <p className="text-muted-foreground">Map placeholder</p>
              </div>
               <p className="text-xs text-muted-foreground mt-2">
                This is a placeholder for an interactive map. An API key would be required for a real map implementation.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
