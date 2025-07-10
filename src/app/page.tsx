import dynamic from 'next/dynamic';
import HeroSection from '@/components/sections/hero-section';
import { Skeleton } from '@/components/ui/skeleton';

const LoadingSkeleton = () => (
  <section className="py-16 md:py-24">
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <Skeleton className="h-96 w-full rounded-lg" />
    </div>
  </section>
);

const AboutSection = dynamic(() => import('@/components/sections/about-section'), {
  loading: () => <LoadingSkeleton />,
});
const ServicesSection = dynamic(() => import('@/components/sections/services-section'), {
  loading: () => <LoadingSkeleton />,
});
const TeamSection = dynamic(() => import('@/components/sections/team-section'), {
  loading: () => <LoadingSkeleton />,
});
const ContactSection = dynamic(() => import('@/components/sections/contact-section'), {
  loading: () => <LoadingSkeleton />,
});

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <TeamSection />
      <ContactSection />
    </>
  );
}
