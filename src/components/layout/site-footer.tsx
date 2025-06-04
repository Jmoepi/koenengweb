import { Linkedin, Twitter, Instagram } from 'lucide-react';
import Link from 'next/link';
import Logo from '@/components/logo';

const SiteFooter = () => {
  return (
    <footer className="border-t bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid md:grid-cols-3 gap-8 items-center">
          <div className="flex flex-col items-center md:items-start">
            <Link href="/" className="flex items-center gap-2 mb-2">
              <Logo className="h-8 w-8 text-primary" />
              <span className="font-headline text-xl font-semibold text-primary">Koeneng Hub</span>
            </Link>
            <p className="text-sm text-muted-foreground text-center md:text-left">Where Youthful Energy Meets Intelligent Tech.</p>
          </div>
          
          <div className="text-center text-sm text-muted-foreground">
            © {new Date().getFullYear()} Koeneng Hub. All rights reserved.
          </div>

          <div className="flex justify-center md:justify-end space-x-4">
            <Link href="#" aria-label="LinkedIn" className="text-muted-foreground hover:text-primary">
              <Linkedin size={20} />
            </Link>
            <Link href="#" aria-label="Twitter" className="text-muted-foreground hover:text-primary">
              <Twitter size={20} />
            </Link>
            <Link href="#" aria-label="Instagram" className="text-muted-foreground hover:text-primary">
              <Instagram size={20} />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default SiteFooter;
