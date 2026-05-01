import { Mail, MapPin, Phone, ShieldCheck } from 'lucide-react';
import ContactForm from '@/components/contact-form';

const contactPoints = [
  {
    title: 'Email',
    value: 'koenenghub@gmail.com',
    href: 'mailto:koenenghub@gmail.com',
    icon: Mail,
  },
  {
    title: 'Phone',
    value: '+27 66 151 9713',
    href: 'tel:+27661519713',
    icon: Phone,
  },
  {
    title: 'Location',
    value: 'Cosmo City, Johannesburg, Gauteng, South Africa',
    href: null,
    icon: MapPin,
  },
];

const ContactSection = () => {
  return (
    <section id="contact" className="section-shell">
      <div className="section-frame">
        <div className="grid gap-10 xl:grid-cols-[0.88fr_1.12fr]">
          <div>
            <span className="section-kicker">Contact us</span>
            <h2 className="section-heading text-balance">Ready to elevate the experience your audience sees first?</h2>
            <p className="section-copy">
              If you want a stronger website, a sharper digital presence, or a conversation about youth innovation and technology, start here.
            </p>

            <div className="mt-8 grid gap-4">
              {contactPoints.map((point) => (
                <div key={point.title} className="rounded-[28px] border border-primary/10 bg-white/78 p-5 shadow-[0_18px_50px_rgba(22,66,38,0.08)]">
                  <div className="flex items-start gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                      <point.icon className="h-5 w-5" />
                    </div>
                    <div className="min-w-0">
                      <p className="text-sm uppercase tracking-[0.24em] text-primary">{point.title}</p>
                      {point.href ? (
                        <a href={point.href} className="mt-2 block break-words text-base font-medium text-foreground transition-colors hover:text-primary sm:text-lg">
                          {point.value}
                        </a>
                      ) : (
                        <p className="mt-2 text-base font-medium text-foreground sm:text-lg">{point.value}</p>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-6 overflow-hidden rounded-[32px] bg-[linear-gradient(155deg,#15381f_0%,#1e5b2c_100%)] p-6 text-white shadow-[0_24px_70px_rgba(17,46,26,0.22)]">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10 text-white">
                <ShieldCheck className="h-6 w-6" />
              </div>
              <h3 className="mt-5 text-2xl font-semibold text-white">A better digital first impression starts with the right structure.</h3>
              <p className="mt-3 text-sm leading-7 text-white/80 sm:text-base">
                Clear navigation, balanced content, and responsive layouts are not extras. They define whether a site feels trustworthy in the first few seconds.
              </p>
            </div>
          </div>

          <div className="glass-panel rounded-[34px] p-2 sm:p-3">
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
