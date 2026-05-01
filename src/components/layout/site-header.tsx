import Link from 'next/link';
import Logo from '@/components/logo';
import { Button } from '@/components/ui/button';
import { Sheet, SheetClose, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { ArrowRight, Menu } from 'lucide-react';

const navItems = [
  { name: 'Home', href: '/#home' },
  { name: 'About', href: '/#about' },
  { name: 'Services', href: '/#services' },
  { name: 'Work', href: '/#work' },
  { name: 'Team', href: '/#team' },
  { name: 'Contact', href: '/#contact' },
];

const SiteHeader = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/60 bg-background/70 backdrop-blur-xl">
      <div className="section-frame flex h-20 items-center justify-between gap-4">
        <Link href="/" className="flex min-w-0 items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-primary/10 text-primary shadow-[0_12px_30px_rgba(34,87,42,0.12)]">
            <Logo className="h-7 w-7" />
          </div>
          <div className="min-w-0">
            <span className="block truncate font-headline text-lg font-semibold text-foreground sm:text-xl">Koeneng Hub</span>
            <span className="hidden text-xs uppercase tracking-[0.24em] text-muted-foreground sm:block">Youth-led innovation studio</span>
          </div>
        </Link>

        <nav className="hidden items-center gap-1 rounded-full border border-primary/10 bg-white/70 p-1 shadow-[0_12px_40px_rgba(22,66,38,0.08)] backdrop-blur lg:flex">
          {navItems.map((item) => (
            <Button
              key={item.name}
              variant="ghost"
              asChild
              className="rounded-full px-4 text-sm text-foreground hover:bg-primary/10 hover:text-primary"
            >
              <Link href={item.href}>{item.name}</Link>
            </Button>
          ))}
        </nav>

        <div className="hidden lg:block">
          <Button asChild className="rounded-full px-6 shadow-[0_14px_32px_rgba(34,87,42,0.22)]">
            <Link href="/#contact">
              Start a conversation
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </div>

        <div className="lg:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon" className="rounded-full border-primary/15 bg-white/80">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Open menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[88vw] border-l border-primary/10 bg-background/95 px-6 py-8 sm:max-w-sm">
              <div className="flex h-full flex-col gap-8">
                <Link href="/" className="flex items-center gap-3">
                  <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                    <Logo className="h-7 w-7" />
                  </div>
                  <div>
                    <span className="block font-headline text-lg font-semibold">Koeneng Hub</span>
                    <span className="text-xs uppercase tracking-[0.24em] text-muted-foreground">Future-ready experiences</span>
                  </div>
                </Link>

                <div className="rounded-[28px] border border-primary/10 bg-white/80 p-3 shadow-[0_18px_40px_rgba(22,66,38,0.08)]">
                  {navItems.map((item) => (
                    <SheetClose asChild key={item.name}>
                      <Link
                        href={item.href}
                        className="flex items-center justify-between rounded-2xl px-4 py-3 text-base font-medium text-foreground transition-colors hover:bg-primary/10 hover:text-primary"
                      >
                        {item.name}
                        <ArrowRight className="h-4 w-4" />
                      </Link>
                    </SheetClose>
                  ))}
                </div>

                <div className="mt-auto rounded-[28px] bg-primary px-5 py-6 text-primary-foreground shadow-[0_20px_50px_rgba(34,87,42,0.28)]">
                  <p className="text-sm uppercase tracking-[0.24em] text-primary-foreground/70">Let&apos;s build</p>
                  <p className="mt-3 text-lg font-semibold leading-snug">A more polished digital presence for your next move.</p>
                  <SheetClose asChild>
                    <Button asChild variant="secondary" className="mt-5 w-full rounded-full bg-white text-primary hover:bg-white/90">
                      <Link href="/#contact">
                        Contact Koeneng Hub
                        <ArrowRight className="h-4 w-4" />
                      </Link>
                    </Button>
                  </SheetClose>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};

export default SiteHeader;
