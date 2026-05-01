import Image from 'next/image';
import { ArrowUpRight, Linkedin, Mail, Sparkles, Target, Users } from 'lucide-react';
import Link from 'next/link';
import selebaloMopeiImage from '@/components/image/moepi.jpg';

const teamMembers = [
  {
    name: 'Selebalo Moepi',
    role: 'Director & Lead Developer',
    image: selebaloMopeiImage,
    bio: 'Selebalo leads Koeneng Hub with a builder’s mindset: thoughtful about the details, ambitious about the standard, and committed to creating work that feels both useful and future-facing.',
    linkedin: 'https://www.linkedin.com/in/selebalo-jeffrey-moepi/',
    email: 'jeffreymoepi@gmail.com',
  },
];

const principles = [
  {
    title: 'Execution over noise',
    description: 'The goal is not just ideas. It is delivering work that reads clearly, feels premium, and functions well.',
    icon: Target,
  },
  {
    title: 'People-first growth',
    description: 'We want young talent to gain confidence, experience, and visibility through practical digital work.',
    icon: Users,
  },
  {
    title: 'Curiosity with discipline',
    description: 'Experimentation matters, but it needs structure to become something the world can trust.',
    icon: Sparkles,
  },
];

const TeamSection = () => {
  const member = teamMembers[0];

  return (
    <section id="team" className="section-shell bg-[linear-gradient(180deg,rgba(27,80,39,0.06),rgba(255,255,255,0))]">
      <div className="section-frame">
        <div className="grid gap-12 xl:grid-cols-[1.04fr_0.96fr]">
          <div>
            <span className="section-kicker">Leadership</span>
            <h2 className="section-heading text-balance">The people shaping the mission behind Koeneng Hub.</h2>
            <p className="section-copy">
              The team is focused on combining technical curiosity with real-world delivery standards so ideas do not just exist, they present well and move forward.
            </p>

            <div className="mt-8 grid gap-4">
              {principles.map((principle) => (
                <div key={principle.title} className="rounded-[28px] border border-primary/10 bg-white/78 p-6 shadow-[0_18px_50px_rgba(22,66,38,0.08)]">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                    <principle.icon className="h-6 w-6" />
                  </div>
                  <h3 className="mt-5 text-xl font-semibold text-foreground">{principle.title}</h3>
                  <p className="mt-2 text-sm leading-7 text-muted-foreground">{principle.description}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="glass-panel overflow-hidden rounded-[34px] p-3">
            <div className="grid gap-6 rounded-[30px] bg-[linear-gradient(160deg,rgba(21,56,31,0.06),rgba(255,255,255,0.8))] p-5 sm:p-6">
              <div className="relative aspect-[4/4.6] overflow-hidden rounded-[28px] sm:aspect-[16/11] xl:aspect-[4/4.9]">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(6,18,10,0),rgba(6,18,10,0.52))]" />
              </div>

              <div>
                <div className="flex flex-wrap items-start justify-between gap-4">
                  <div>
                    <p className="text-sm uppercase tracking-[0.24em] text-primary">Featured leader</p>
                    <h3 className="mt-2 text-3xl font-semibold text-foreground">{member.name}</h3>
                    <p className="mt-1 text-base font-medium text-primary">{member.role}</p>
                  </div>
                  <span className="rounded-full bg-secondary px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-secondary-foreground">
                    Koeneng Hub
                  </span>
                </div>

                <p className="mt-5 text-base leading-8 text-muted-foreground">{member.bio}</p>

                <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                  <Link
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 rounded-full border border-primary/12 bg-white px-5 py-3 text-sm font-medium text-foreground transition-all hover:-translate-y-0.5 hover:text-primary"
                  >
                    <Linkedin className="h-4 w-4" />
                    LinkedIn
                    <ArrowUpRight className="h-4 w-4" />
                  </Link>
                  <Link
                    href={`mailto:${member.email}`}
                    className="inline-flex items-center justify-center gap-2 rounded-full border border-primary/12 bg-white px-5 py-3 text-sm font-medium text-foreground transition-all hover:-translate-y-0.5 hover:text-primary"
                  >
                    <Mail className="h-4 w-4" />
                    Email
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
