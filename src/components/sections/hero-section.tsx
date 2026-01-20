
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import SpinningGlobe from '@/components/spinning-globe';

const HeroSection = () => {
  return (
    <section id="home" className="py-24 sm:py-32 bg-gradient-to-br from-background to-secondary/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="text-center md:text-left">
            <h1 className="font-headline text-4xl sm:text-5xl lg:text-6xl font-bold text-primary tracking-tight">
              Koeneng Hub
            </h1>
            <p className="mt-4 font-headline text-xl sm:text-2xl text-foreground">
              Where Youthful Energy Meets Intelligent Tech.
            </p>
            <p className="mt-6 text-lg text-muted-foreground max-w-xl mx-auto md:mx-0">
              Empowering the next generation with technology and innovation to shape a brighter tomorrow. Join us in building a future where potential meets opportunity.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <Button size="lg" asChild>
                <Link href="/#about">Learn More</Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/#contact">Get in Touch</Link>
              </Button>
            </div>
          </div>
          <div className="relative flex justify-center items-center aspect-square max-w-sm mx-auto md:max-w-none md:mx-0 order-first md:order-last">
            <div className="absolute inset-0 bg-primary/10 rounded-full animate-pulse-slow pointer-events-none -z-10 scale-110"></div>
            <SpinningGlobe className="w-full h-full transition-transform duration-500 ease-in-out hover:scale-105" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
