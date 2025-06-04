import { Button } from '@/components/ui/button';
import Link from 'next/link';
import Image from 'next/image';

const HeroSection = () => {
  return (
    <section id="home" className="py-16 md:py-24 bg-gradient-to-br from-background to-secondary/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="text-center md:text-left">
            <h1 className="font-headline text-4xl sm:text-5xl lg:text-6xl font-bold text-primary tracking-tight">
              Koeneng Hub
            </h1>
            <p className="mt-4 font-headline text-xl sm:text-2xl text-foreground">
              Youth-led. Tech-Driven. Future-Ready.
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
          <div className="relative aspect-square max-w-md mx-auto md:max-w-none">
            <Image 
              src="https://placehold.co/600x600.png" 
              alt="Koeneng Hub concept image" 
              fill
              className="object-cover rounded-xl shadow-2xl"
              priority
              data-ai-hint="abstract technology youth"
            />
             <div className="absolute inset-0 bg-primary/20 rounded-xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
