import {
  Bot,
  BriefcaseBusiness,
  CircuitBoard,
  Code2,
  Cpu,
  Rocket,
  ShieldCheck,
  Workflow,
} from 'lucide-react';

const services = [
  {
    icon: Code2,
    title: 'Custom software development',
    description:
      'We design and build web platforms, internal systems, dashboards, and digital tools that help organizations operate smarter and serve users better.',
    outcomes: ['Web applications', 'Business systems', 'Scalable platforms'],
  },
  {
    icon: Workflow,
    title: 'Business process automation',
    description:
      'We help businesses replace manual work with simple, reliable digital workflows that reduce errors, save time, and improve visibility.',
    outcomes: ['Workflow automation', 'Digital forms', 'Operational efficiency'],
  },
  {
    icon: Bot,
    title: 'AI and digital innovation',
    description:
      'We explore practical AI-powered solutions that support reporting, document processing, customer support, insights, and decision-making.',
    outcomes: ['AI tools', 'Smart assistants', 'Data insights'],
  },
  {
    icon: BriefcaseBusiness,
    title: 'Digital business consulting',
    description:
      'We help entrepreneurs, SMEs, and organizations shape ideas into clear digital products with strong strategy, user journeys, and execution plans.',
    outcomes: ['Product strategy', 'MVP planning', 'Go-to-market thinking'],
  },
  {
    icon: Rocket,
    title: 'Website and brand presence',
    description:
      'We build modern websites and digital profiles that help businesses look credible, communicate clearly, and convert interest into action.',
    outcomes: ['Responsive websites', 'Modern UI', 'Stronger positioning'],
  },
  {
    icon: ShieldCheck,
    title: 'Tender-ready digital solutions',
    description:
      'We support organizations with software concepts, prototypes, technical documentation, and digital solution planning for public and private opportunities.',
    outcomes: ['Solution design', 'Technical proposals', 'Prototype support'],
  },
  {
    icon: Cpu,
    title: 'Tech training and enablement',
    description:
      'We provide practical training in coding, digital tools, AI, and software thinking to help teams and young talent build real-world capability.',
    outcomes: ['Skills development', 'Hands-on learning', 'Team enablement'],
  },
  {
    icon: CircuitBoard,
    title: 'Innovation hub programmes',
    description:
      'We create spaces and programmes where ideas can be researched, prototyped, tested, and shaped into solutions with commercial potential.',
    outcomes: ['Incubation', 'Product thinking', 'Innovation support'],
  },
];

const ServicesSection = () => {
  return (
    <section
      id="services"
      className="section-shell bg-[linear-gradient(180deg,rgba(222,239,214,0.38),rgba(255,255,255,0))]"
    >
      <div className="section-frame">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <span className="section-kicker">What we do</span>

            <h2 className="section-heading text-balance">
              Software, automation, and digital innovation services built for real business growth.
            </h2>
          </div>

          <p className="max-w-xl text-base leading-7 text-muted-foreground sm:text-lg">
            Koeneng Hub helps businesses, organizations, and emerging innovators turn ideas into practical digital products, modern systems, and scalable solutions.
          </p>
        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="group flex h-full flex-col rounded-[30px] border border-primary/10 bg-white/78 p-6 shadow-[0_20px_60px_rgba(22,66,38,0.08)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_28px_80px_rgba(22,66,38,0.14)]"
            >
              <div className="flex items-start justify-between gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary transition-transform duration-300 group-hover:scale-110">
                  <service.icon className="h-6 w-6" />
                </div>

                <span className="text-xs font-semibold uppercase tracking-[0.24em] text-primary/65">
                  {String(index + 1).padStart(2, '0')}
                </span>
              </div>

              <h3 className="mt-6 text-xl font-semibold text-foreground">
                {service.title}
              </h3>

              <p className="mt-3 text-sm leading-7 text-muted-foreground">
                {service.description}
              </p>

              <div className="mt-auto pt-6">
                <div className="flex flex-wrap gap-2">
                  {service.outcomes.map((outcome) => (
                    <span
                      key={outcome}
                      className="rounded-full bg-secondary px-3 py-1 text-xs font-medium text-secondary-foreground"
                    >
                      {outcome}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;