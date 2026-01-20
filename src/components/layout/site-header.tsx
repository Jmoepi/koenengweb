import Link from 'next/link';
import Logo from '@/components/logo';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Menu } from 'lucide-react';

const SiteHeader = () => {
  const navItems = [
    { name: 'Home', href: '/#home' },
    { name: 'About', href: '/#about' },
    { name: 'Services', href: '/#services' },
    { name: 'Work', href: '/#work' },
    { name: 'Team', href: '/#team' },
    { name: 'Contact', href: '/#contact' },
  ];

  return (
    <header className="bg-background/80 backdrop-blur-sm sticky top-0 z-50 w-full border-b">
      <div className="container mx-auto flex h-16 items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-2">
          <Logo className="h-8 w-8 text-primary" />
          <span className="font-headline text-xl font-semibold text-primary">Koeneng Hub</span>
        </Link>
        <nav className="hidden md:flex gap-1">
          {navItems.map((item) => (
            <Button key={item.name} variant="ghost" asChild>
              <Link href={item.href} className="text-sm font-medium text-foreground hover:text-primary">
                {item.name}
              </Link>
            </Button>
          ))}
        </nav>
        <div className="md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Open menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left">
              <div className="flex flex-col gap-4 py-8">
                <Link href="/" className="flex items-center gap-2 mb-4">
                  <Logo className="h-8 w-8 text-primary" />
                  <span className="font-headline text-xl font-semibold text-primary">Koeneng Hub</span>
                </Link>
                {navItems.map((item) => (
                  <Button key={item.name} variant="ghost" asChild>
                    <Link href={item.href} className="text-lg font-medium text-foreground hover:text-primary">
                      {item.name}
                    </Link>
                  </Button>
                ))}
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};

export default SiteHeader;
