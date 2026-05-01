import Image from 'next/image';
import { CircuitBoard, Handshake, Sprout, Code2, BriefcaseBusiness, Rocket } from 'lucide-react';
import pic1Image from '@/components/image/pic1.jpg';

const pillars = [
  {
    title: 'Software solutions',
    description:
      'We design and build practical digital systems that help businesses improve operations, automate workflows, and serve customers better.',
    icon: Code2,
  },
  {
    title: 'Business execution',
    description:
      'We connect technology with real business goals, from idea validation and product planning to launch-ready digital platforms.',
    icon: BriefcaseBusiness,
  },
  {
    title: 'Innovation partnerships',
    description:
      'Koeneng Hub works with entrepreneurs, organizations, and communities to turn opportunities into scalable digital solutions.',
    icon: Rocket,
  },
];

const AboutSection = () => {
  return (
    <section id="about" className="section-shell">
      <div className="section-frame">
        <div className="grid items-center gap-12 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="relative order-last lg:order-first">
            <div className="absolute -left-4 bottom-8 h-24 w-24 rounded-full bg-accent/20 blur-3xl" />

            <div className="glass-panel relative overflow-hidden rounded-[34px] p-3">
              <div className="relative aspect-[4/5] overflow-hidden rounded-[28px] sm:aspect-[16/11] lg:aspect-[4/5]">
                <Image
                  src={pic1Image}
                  alt="Koeneng Hub software and business innovation team"
                  fill
                  className="object-cover"
                  placeholder="blur"
                  data-ai-hint="software business innovation"
                />

                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(10,25,14,0.04),rgba(10,25,14,0.62))]" />

                <div className="absolute inset-x-0 bottom-0 p-6 sm:p-8">
                  <div className="max-w-sm rounded-[24px] border border-white/18 bg-white/12 p-5 text-white backdrop-blur">
                    <p className="text-xs uppercase tracking-[0.24em] text-white/70">
                      Our mission
                    </p>
                    <p className="mt-3 text-lg font-semibold leading-snug">
                      Build software-driven solutions that help businesses, communities, and young innovators grow.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div>
            <span className="section-kicker">About Koeneng Hub</span>

            <h2 className="section-heading text-balance">
              A software and business innovation hub building practical digital solutions for real-world growth.
            </h2>

            <p className="section-copy">
              Koeneng Hub is focused on using technology to solve business and community challenges. 
              We build modern software, digital platforms, and innovation-driven solutions that help 
              organizations operate smarter, present themselves better, and unlock new opportunities.
            </p>

            <p className="mt-4 max-w-2xl text-base leading-8 text-muted-foreground sm:text-lg">
              Our work sits at the intersection of software development, business strategy, and digital 
              transformation. Whether we are building a website, internal system, automation tool, 
              tender-ready solution, or startup concept, the goal is simple: create technology that is 
              useful, scalable, and commercially valuable.
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              {pillars.map((pillar) => (
                <div
                  key={pillar.title}
                  className="rounded-[26px] border border-primary/10 bg-white/78 p-5 shadow-[0_16px_40px_rgba(22,66,38,0.08)]"
                >
                  <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                    <pillar.icon className="h-5 w-5" />
                  </div>

                  <h3 className="mt-4 text-lg font-semibold text-foreground">
                    {pillar.title}
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-muted-foreground">
                    {pillar.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;