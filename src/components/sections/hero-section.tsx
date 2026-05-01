import Link from 'next/link';
import {
  ArrowRight,
  Bot,
  BriefcaseBusiness,
  Building2,
  Code2,
  Database,
  Globe2,
  LineChart,
  Rocket,
  ShieldCheck,
  Sparkles,
  Workflow,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import SpinningGlobe from '@/components/spinning-globe';

const focusAreas = [
  {
    title: 'Custom software',
    description:
      'We build web platforms, business systems, dashboards, and digital tools designed around real operational needs.',
    icon: Code2,
  },
  {
    title: 'Business automation',
    description:
      'We help organizations replace manual processes with smarter workflows that save time, reduce errors, and improve visibility.',
    icon: Workflow,
  },
  {
    title: 'AI-ready innovation',
    description:
      'We explore practical AI solutions for reporting, document processing, customer support, and business intelligence.',
    icon: Bot,
  },
];

const proofStats = [
  {
    value: '01',
    label: 'Software-first delivery',
  },
  {
    value: '02',
    label: 'Business-focused solutions',
  },
  {
    value: '03',
    label: 'Future-ready innovation',
  },
];

const capabilityCards = [
  {
    icon: BriefcaseBusiness,
    title: 'Business strategy',
    description: 'Turning ideas into clear digital products and execution plans.',
  },
  {
    icon: Database,
    title: 'Smart systems',
    description: 'Dashboards, portals, automation tools, and data-driven workflows.',
  },
  {
    icon: ShieldCheck,
    title: 'Credible delivery',
    description: 'Professional interfaces, technical planning, and scalable foundations.',
  },
];

const HeroSection = () => {
  return (
    <section id="home" className="section-shell pb-12 pt-10 sm:pt-14 lg:pt-16">
      <div className="section-frame">
        <div className="glass-panel subtle-grid relative overflow-hidden rounded-[40px] px-6 py-10 sm:px-8 sm:py-12 lg:px-12 lg:py-14">
          <div className="absolute -left-20 top-10 h-56 w-56 rounded-full bg-primary/12 blur-3xl" />
          <div className="absolute right-0 top-0 h-72 w-72 rounded-full bg-accent/15 blur-3xl" />
          <div className="absolute bottom-0 left-1/2 h-56 w-56 -translate-x-1/2 rounded-full bg-primary/8 blur-3xl" />

          <div className="relative grid items-center gap-12 lg:grid-cols-[1.08fr_0.92fr]">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-primary/15 bg-white/75 px-4 py-2 shadow-[0_14px_35px_rgba(22,66,38,0.08)] backdrop-blur">
                <span className="flex h-7 w-7 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <Sparkles className="h-4 w-4" />
                </span>
                <span className="text-xs font-semibold uppercase tracking-[0.22em] text-primary/80">
                  Johannesburg-born digital innovation hub
                </span>
              </div>

              <h1 className="mt-6 max-w-5xl font-headline text-4xl font-semibold leading-[1.02] text-foreground sm:text-5xl lg:text-6xl xl:text-7xl">
                We build software, automation, and digital products for businesses ready to move smarter.
              </h1>

              <p className="mt-6 max-w-2xl text-base leading-8 text-muted-foreground sm:text-lg">
                Koeneng Hub helps businesses, startups, communities, and organizations turn ideas into practical digital solutions. We combine software development, business thinking, AI exploration, and modern design to create systems that are useful, scalable, and commercially valuable.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Button
                  asChild
                  size="lg"
                  className="rounded-full px-7 shadow-[0_18px_40px_rgba(34,87,42,0.22)]"
                >
                  <Link href="/#contact">
                    Start a project
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>

                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="rounded-full border-primary/20 bg-white/75 px-7 text-foreground hover:bg-white"
                >
                  <Link href="/#services">Explore our services</Link>
                </Button>
              </div>

              <div className="mt-10 grid gap-3 sm:grid-cols-3">
                {proofStats.map((stat) => (
                  <div
                    key={stat.label}
                    className="rounded-[22px] border border-primary/10 bg-white/70 p-4 shadow-[0_16px_45px_rgba(22,66,38,0.07)] backdrop-blur"
                  >
                    <p className="text-sm font-semibold text-primary">{stat.value}</p>
                    <p className="mt-2 text-sm leading-6 text-muted-foreground">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>

              <div className="mt-8 grid gap-4 sm:grid-cols-3">
                {focusAreas.map((item) => (
                  <div
                    key={item.title}
                    className="group rounded-[26px] border border-primary/10 bg-white/72 p-5 shadow-[0_16px_50px_rgba(22,66,38,0.08)] backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_24px_70px_rgba(22,66,38,0.13)]"
                  >
                    <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-primary/10 text-primary transition-transform duration-300 group-hover:scale-110">
                      <item.icon className="h-5 w-5" />
                    </div>

                    <h3 className="mt-4 text-lg font-semibold text-foreground">
                      {item.title}
                    </h3>

                    <p className="mt-2 text-sm leading-6 text-muted-foreground">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative mx-auto w-full max-w-[35rem]">
              <div className="absolute -left-3 top-8 z-10 hidden rounded-2xl border border-white/20 bg-white/14 px-4 py-3 text-white shadow-[0_20px_50px_rgba(0,0,0,0.24)] backdrop-blur-md sm:block">
                <div className="flex items-center gap-3">
                  <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-white/12">
                    <LineChart className="h-4 w-4" />
                  </span>
                  <div>
                    <p className="text-xs uppercase tracking-[0.24em] text-white/70">
                      Growth systems
                    </p>
                    <p className="mt-1 text-sm font-medium">
                      Strategy, software, and measurable execution.
                    </p>
                  </div>
                </div>
              </div>

              <div className="absolute -bottom-4 right-2 z-10 hidden rounded-2xl border border-white/20 bg-white/14 px-4 py-3 text-white shadow-[0_20px_50px_rgba(0,0,0,0.24)] backdrop-blur-md sm:block">
                <div className="flex items-center gap-3">
                  <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-white/12">
                    <Building2 className="h-4 w-4" />
                  </span>
                  <div>
                    <p className="text-xs uppercase tracking-[0.24em] text-white/70">
                      Built for clients
                    </p>
                    <p className="mt-1 text-sm font-medium">
                      SMEs, startups, public sector, and communities.
                    </p>
                  </div>
                </div>
              </div>

              <div className="relative overflow-hidden rounded-[38px] bg-[linear-gradient(160deg,#102719_0%,#1d5a2a_48%,#0d2415_100%)] px-6 py-7 text-white shadow-[0_32px_110px_rgba(17,46,26,0.32)] sm:px-8 sm:py-8">
                <div className="absolute left-1/2 top-0 h-32 w-32 -translate-x-1/2 rounded-full bg-accent/25 blur-3xl" />
                <div className="absolute right-0 top-16 h-44 w-44 rounded-full bg-white/10 blur-3xl" />
                <div className="absolute bottom-0 left-0 h-44 w-44 rounded-full bg-primary/20 blur-3xl" />

                <div className="relative flex items-center justify-between gap-4 rounded-full border border-white/15 bg-white/8 px-4 py-3">
                  <div>
                    <p className="text-xs uppercase tracking-[0.24em] text-white/70">
                      Koeneng Hub operating system
                    </p>
                    <p className="mt-1 text-sm font-medium text-white">
                      Build. Automate. Launch. Improve.
                    </p>
                  </div>

                  <span className="hidden rounded-full bg-white/12 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-white/80 sm:inline-flex">
                    Software + AI
                  </span>
                </div>

                <div className="relative mx-auto mt-8 aspect-square w-full max-w-[20rem] rounded-full border border-white/10 bg-white/5 p-5 backdrop-blur animate-float">
                  <div className="absolute inset-3 rounded-full border border-white/10" />
                  <div className="absolute inset-8 rounded-full border border-white/10" />
                  <div className="absolute inset-0 rounded-full bg-accent/10 blur-3xl animate-pulse-soft" />

                  <div className="absolute -right-2 top-12 rounded-2xl border border-white/15 bg-white/10 px-3 py-2 text-xs font-medium backdrop-blur">
                    Digital products
                  </div>

                  <div className="absolute -left-2 bottom-16 rounded-2xl border border-white/15 bg-white/10 px-3 py-2 text-xs font-medium backdrop-blur">
                    Smart workflows
                  </div>

                  <SpinningGlobe className="relative h-full w-full" />
                </div>

                <div className="relative mt-8 grid gap-4">
                  {capabilityCards.map((card) => (
                    <div
                      key={card.title}
                      className="rounded-[24px] border border-white/12 bg-white/8 p-5 backdrop-blur"
                    >
                      <div className="flex gap-4">
                        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-white/10 text-white">
                          <card.icon className="h-5 w-5" />
                        </div>

                        <div>
                          <h3 className="text-base font-semibold text-white">
                            {card.title}
                          </h3>
                          <p className="mt-1 text-sm leading-6 text-white/68">
                            {card.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="relative mt-6 rounded-[24px] border border-white/12 bg-white/8 p-5">
                  <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                    <div>
                      <p className="text-xs uppercase tracking-[0.24em] text-white/65">
                        Delivery mindset
                      </p>
                      <p className="mt-2 text-lg font-semibold leading-snug">
                        Practical technology that creates business value.
                      </p>
                    </div>

                    <div className="flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm font-medium text-white/85">
                      <Globe2 className="h-4 w-4" />
                      Local roots. Global standards.
                    </div>
                  </div>
                </div>
              </div>

              <div className="absolute -right-6 top-1/2 hidden h-24 w-24 -translate-y-1/2 rounded-full border border-primary/10 bg-white/60 shadow-[0_20px_60px_rgba(22,66,38,0.10)] backdrop-blur lg:block" />
              <div className="absolute -right-2 top-1/2 hidden h-10 w-10 -translate-y-1/2 rounded-full bg-primary/20 blur-2xl lg:block" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;