import { Linkedin, Twitter, Instagram } from 'lucide-react';
import Link from 'next/link';
import Logo from '@/components/logo';

const socialLinks = [
  {
    name: 'LinkedIn',
    href: 'https://www.linkedin.com/in/selebalo-jeffrey-moepi/',
    icon: Linkedin,
  },
  {
    name: 'Twitter',
    href: '#',
    icon: Twitter,
  },
  {
    name: 'Instagram',
    href: '#',
    icon: Instagram,
  },
];

const SiteFooter = () => {
  return (
    <footer className="border-t bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row md:justify-between items-center gap-6">
          <div className="text-center md:text-left">
            <Link href="/" className="flex items-center justify-center md:justify-start gap-2 mb-2">
              <Logo className="h-8 w-8 text-primary" />
              <span className="font-headline text-xl font-semibold text-primary">Koeneng Hub</span>
            </Link>
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} Koeneng Hub. All rights reserved.
            </p>
          </div>
          <div className="flex justify-center md:justify-end space-x-4">
            {socialLinks.map((social) => (
              <Link
                key={social.name}
                href={social.href}
                aria-label={social.name}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <social.icon size={20} />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default SiteFooter;
