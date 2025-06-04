import ContactForm from '@/components/contact-form';
import { Mail, Phone, MapPin } from 'lucide-react';

const ContactSection = () => {
  return (
    <section id="contact" className="py-16 md:py-24 bg-secondary/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-headline text-3xl sm:text-4xl font-bold text-primary">Contact Us</h2>
          <p className="mt-2 text-lg text-muted-foreground">We'd Love to Hear From You</p>
        </div>
        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div>
              <h3 className="font-headline text-2xl font-semibold text-foreground mb-4">Get in Touch</h3>
              <p className="text-muted-foreground mb-6">
                Have questions, ideas, or want to collaborate? Reach out to us through any of the channels below, or use the contact form. We're excited to connect with you!
              </p>
            </div>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <Mail size={24} className="text-primary mt-1 shrink-0" />
                <div>
                  <h4 className="font-semibold text-foreground">Email</h4>
                  <a href="mailto:info@koenenghub.com" className="text-muted-foreground hover:text-primary transition-colors">
                    info@koenenghub.com
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Phone size={24} className="text-primary mt-1 shrink-0" />
                <div>
                  <h4 className="font-semibold text-foreground">Phone</h4>
                  <a href="tel:+1234567890" className="text-muted-foreground hover:text-primary transition-colors">
                    +123 456 7890
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <MapPin size={24} className="text-primary mt-1 shrink-0" />
                <div>
                  <h4 className="font-semibold text-foreground">Address</h4>
                  <p className="text-muted-foreground">123 Tech Avenue, Innovation City, Gauteng, South Africa</p>
                </div>
              </div>
            </div>
          </div>
          <div>
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
