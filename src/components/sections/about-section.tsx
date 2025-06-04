import Image from 'next/image';

const AboutSection = () => {
  return (
    <section id="about" className="py-16 md:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-headline text-3xl sm:text-4xl font-bold text-primary">About Us</h2>
          <p className="mt-2 text-lg text-muted-foreground">Discover Our Mission and Vision</p>
        </div>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="font-headline text-2xl font-semibold text-foreground mb-4">
              Fostering Innovation, Empowering Youth
            </h3>
            <p className="text-muted-foreground mb-4 leading-relaxed">
              Koeneng Hub is a dynamic, youth-led organization passionately dedicated to igniting technological innovation and nurturing sustainable growth. We firmly believe in the transformative power of technology and strive to empower the next generation of leaders, thinkers, and creators.
            </p>
            <p className="text-muted-foreground mb-4 leading-relaxed">
              Our core mission is to provide young individuals with the essential skills, cutting-edge resources, and invaluable mentorship they need to thrive in an ever-evolving digital landscape. We aim to build a vibrant community where creativity flourishes, ideas are exchanged, and a future-ready world is collectively shaped.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              At Koeneng Hub, we're not just preparing youth for the future; we're empowering them to build it.
            </p>
          </div>
          <div className="relative aspect-video rounded-lg overflow-hidden shadow-lg">
            <Image 
              src="https://placehold.co/600x400.png" 
              alt="Diverse group of young people collaborating on tech projects" 
              fill
              className="object-cover"
              data-ai-hint="collaboration teamwork youth"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
