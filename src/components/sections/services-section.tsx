import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Cpu, Network, Users, Lightbulb, Code, GraduationCap } from 'lucide-react';

const services = [
  {
    icon: <Cpu size={36} className="text-primary" />,
    title: "Tech Workshops & Training",
    description: "Engage in hands-on workshops covering coding fundamentals, advanced AI, practical robotics, and other emerging technologies. Designed for all skill levels.",
    aiHint: "workshop classroom students"
  },
  {
    icon: <Network size={36} className="text-primary" />,
    title: "Innovation Hub Access",
    description: "Utilize our collaborative workspaces and state-of-the-art resources. A perfect environment for young innovators to connect, create, and develop groundbreaking projects.",
    aiHint: "modern office co-working"
  },
  {
    icon: <Users size={36} className="text-primary" />,
    title: "Mentorship Programs",
    description: "Benefit from our mentorship programs, connecting aspiring youth with experienced tech professionals and industry leaders for guidance and career development.",
    aiHint: "mentor discussion guidance"
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-16 md:py-24 bg-secondary/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-headline text-3xl sm:text-4xl font-bold text-primary">Our Services</h2>
          <p className="mt-2 text-lg text-muted-foreground">What We Offer to Empower Youth</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="flex flex-col hover:shadow-xl transition-shadow duration-300">
              <CardHeader className="items-center text-center">
                <div className="p-4 bg-primary/10 rounded-full mb-4">
                  {service.icon}
                </div>
                <CardTitle className="font-headline text-xl text-foreground">{service.title}</CardTitle>
              </CardHeader>
              <CardContent className="flex-grow text-center">
                <CardDescription className="text-muted-foreground leading-relaxed">{service.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
