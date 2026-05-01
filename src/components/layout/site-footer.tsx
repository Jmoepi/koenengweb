import { Github, Linkedin, Mail, MapPin } from 'lucide-react';
import Link from 'next/link';
import Logo from '@/components/logo';

const navItems = [
  { name: 'About', href: '/#about' },
  { name: 'Services', href: '/#services' },
  { name: 'Work', href: '/#work' },
  { name: 'Team', href: '/#team' },
  { name: 'Contact', href: '/#contact' },
];

const socialLinks = [
  {
    name: 'LinkedIn',
    href: 'https://www.linkedin.com/in/selebalo-jeffrey-moepi/',
    icon: Linkedin,
  },
  {
    name: 'GitHub',
    href: 'https://github.com/Jmoepi',
    icon: Github,
  },
  {
    name: 'Email',
    href: 'mailto:koenenghub@gmail.com',
    icon: Mail,
  },
];

const SiteFooter = () => {
  return (
    <footer className="border-t border-primary/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.55),rgba(247,245,236,0.95))]">
      <div className="section-frame py-12 sm:py-16">
        <div className="grid gap-10 lg:grid-cols-[1.35fr_0.8fr_1fr]">
          <div className="space-y-5">
            <Link href="/" className="flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                <Logo className="h-7 w-7" />
              </div>
              <div>
                <span className="block font-headline text-xl font-semibold text-foreground">Koeneng Hub</span>
                <span className="text-xs uppercase tracking-[0.24em] text-muted-foreground">Youth-led innovation studio</span>
              </div>
            </Link>
            <p className="max-w-md text-sm leading-7 text-muted-foreground sm:text-base">
              We design polished digital experiences, nurture practical tech capability, and help bold ideas feel ready for the world.
            </p>
            <div className="flex flex-wrap gap-3">
              {socialLinks.map((social) => (
                <Link
                  key={social.name}
                  href={social.href}
                  aria-label={social.name}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-primary/10 bg-white/80 text-muted-foreground transition-all hover:-translate-y-0.5 hover:border-primary/30 hover:text-primary"
                >
                  <social.icon size={18} />
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.24em] text-primary">Navigate</h3>
            <div className="mt-5 grid gap-3">
              {navItems.map((item) => (
                <Link key={item.name} href={item.href} className="text-sm text-muted-foreground transition-colors hover:text-primary sm:text-base">
                  {item.name}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.24em] text-primary">Contact</h3>
            <div className="mt-5 space-y-4 text-sm text-muted-foreground sm:text-base">
              <div className="flex items-start gap-3">
                <Mail className="mt-0.5 h-5 w-5 text-primary" />
                <Link href="mailto:koenenghub@gmail.com" className="transition-colors hover:text-primary">
                  koenenghub@gmail.com
                </Link>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-5 w-5 text-primary" />
                <p>Cosmo City, Johannesburg, Gauteng, South Africa</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-primary/10 pt-6 text-sm text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Koeneng Hub. Crafted for modern screens, from phones to large desktops.</p>
          <p>Built in Johannesburg, South Africa.</p>
        </div>
      </div>
    </footer>
  );
};

export default SiteFooter;
