'use client';

import { useEffect, useState } from 'react';
import {
  ArrowRight,
  BriefcaseBusiness,
  Code2,
  Layers3,
  Loader2,
  Sparkles,
} from 'lucide-react';
import GithubRepoCard from '@/components/github-repo-card';
import { Button } from '@/components/ui/button';

interface Repo {
  id: number;
  name: string;
  description: string | null;
  stargazers_count: number;
  forks_count: number;
  language: string | null;
  html_url: string;
  homepage: string | null;
  fork?: boolean;
  archived?: boolean;
  updated_at?: string;
}

const fallbackRepos: Repo[] = [
  {
    id: 1,
    name: 'Koeneng Hub Digital Platform',
    description:
      'A modern business and innovation website designed to position Koeneng Hub as a software, training, and digital transformation partner.',
    stargazers_count: 0,
    forks_count: 0,
    language: 'TypeScript',
    html_url: 'https://github.com/Jmoepi',
    homepage: null,
  },
  {
    id: 2,
    name: 'Business Automation Concepts',
    description:
      'Prototype ideas focused on helping organizations replace manual work with smarter digital workflows and operational dashboards.',
    stargazers_count: 0,
    forks_count: 0,
    language: 'Next.js',
    html_url: 'https://github.com/Jmoepi',
    homepage: null,
  },
  {
    id: 3,
    name: 'AI-Ready Software Solutions',
    description:
      'Experimental builds exploring practical AI use cases such as reporting, document processing, smart assistants, and business insights.',
    stargazers_count: 0,
    forks_count: 0,
    language: 'AI / Software',
    html_url: 'https://github.com/Jmoepi',
    homepage: null,
  },
];

const proofPoints = [
  {
    icon: Code2,
    label: 'Software builds',
    value: 'Web apps, dashboards, and internal systems',
  },
  {
    icon: BriefcaseBusiness,
    label: 'Business focus',
    value: 'Solutions shaped around real operational needs',
  },
  {
    icon: Layers3,
    label: 'Product thinking',
    value: 'From concept to prototype to launch-ready systems',
  },
];

const ProductsSection = () => {
  const [repos, setRepos] = useState<Repo[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const controller = new AbortController();

    const fetchRepos = async () => {
      try {
        const response = await fetch(
          'https://api.github.com/users/Jmoepi/repos?sort=pushed&per_page=12',
          {
            signal: controller.signal,
            headers: {
              Accept: 'application/vnd.github+json',
            },
          }
        );

        if (!response.ok) {
          throw new Error('GitHub projects could not be loaded right now.');
        }

        const data: Repo[] = await response.json();

        const featuredRepos = data
          .filter((repo) => !repo.fork && !repo.archived)
          .filter((repo) => repo.description || repo.language)
          .slice(0, 3);

        setRepos(featuredRepos.length > 0 ? featuredRepos : fallbackRepos);
      } catch (err) {
        if (err instanceof Error && err.name === 'AbortError') return;

        const message =
          err instanceof Error
            ? err.message
            : 'Unable to load projects right now.';

        setError(message);
        setRepos(fallbackRepos);
      } finally {
        setLoading(false);
      }
    };

    fetchRepos();

    return () => controller.abort();
  }, []);

  return (
    <section id="work" className="section-shell">
      <div className="section-frame">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <span className="section-kicker">Products & builds</span>

            <h2 className="section-heading text-balance">
              Practical software work that shows how we turn ideas into usable digital solutions.
            </h2>
          </div>

          <p className="max-w-xl text-base leading-7 text-muted-foreground sm:text-lg">
            Koeneng Hub builds with a business-first mindset. Our work connects clean interfaces,
            modern software engineering, and real operational value for organizations, startups,
            and community-driven innovation.
          </p>
        </div>

        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {proofPoints.map((item) => (
            <div
              key={item.label}
              className="rounded-[26px] border border-primary/10 bg-white/75 p-5 shadow-[0_16px_45px_rgba(22,66,38,0.07)]"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                <item.icon className="h-5 w-5" />
              </div>

              <h3 className="mt-4 text-base font-semibold text-foreground">
                {item.label}
              </h3>

              <p className="mt-2 text-sm leading-6 text-muted-foreground">
                {item.value}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-10">
          {loading ? (
            <div className="glass-panel flex min-h-[20rem] items-center justify-center rounded-[34px] p-8">
              <div className="flex flex-col items-center gap-4 text-center">
                <Loader2 className="h-10 w-10 animate-spin text-primary" />
                <p className="text-sm text-muted-foreground">
                  Loading Koeneng Hub&apos;s latest software work.
                </p>
              </div>
            </div>
          ) : (
            <>
              {error && (
                <div className="mb-5 rounded-[24px] border border-primary/10 bg-primary/5 p-5">
                  <div className="flex items-start gap-3">
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                      <Sparkles className="h-4 w-4" />
                    </div>

                    <div>
                      <p className="text-sm font-semibold text-foreground">
                        Showing featured work while GitHub is unavailable.
                      </p>
                      <p className="mt-1 text-sm leading-6 text-muted-foreground">
                        {error}
                      </p>
                    </div>
                  </div>
                </div>
              )}

              <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
                {repos.map((repo) => (
                  <GithubRepoCard key={repo.id} repo={repo} />
                ))}
              </div>
            </>
          )}
        </div>

        <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
          <Button
            asChild
            size="lg"
            className="rounded-full px-7 shadow-[0_18px_36px_rgba(34,87,42,0.22)]"
          >
            <a
              href="https://github.com/Jmoepi"
              target="_blank"
              rel="noopener noreferrer"
            >
              Explore the full GitHub profile
              <ArrowRight className="h-4 w-4" />
            </a>
          </Button>

          <p className="text-sm leading-6 text-muted-foreground">
            From prototypes to production-ready systems, our work is shaped around solving real
            business problems with practical technology.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;