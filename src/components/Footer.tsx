import Link from 'next/link';
import { UtensilsCrossed } from 'lucide-react';

export function Footer() {
  return (
    <footer className="w-full border-t border-border/40 bg-background/95">
      <div className="container flex flex-col items-center justify-between gap-4 py-10 md:h-24 md:flex-row md:py-0">
        <div className="flex flex-col items-center gap-4 px-8 md:flex-row md:gap-2 md:px-0">
          <UtensilsCrossed className="h-6 w-6 text-primary" />
          <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
            Built by Zestful Bites. &copy; {new Date().getFullYear()} All Rights Reserved.
          </p>
        </div>
        <div className="flex items-center gap-4">
          <Link href="/menu" className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary">Menu</Link>
          <Link href="/contact" className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary">Contact</Link>
        </div>
      </div>
    </footer>
  );
}
