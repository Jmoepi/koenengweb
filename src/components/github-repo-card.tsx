'use client';

import { ArrowUpRight, Code2, GitFork, Play, Star } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

interface GithubRepoCardProps {
  repo: {
    name: string;
    description: string | null;
    stargazers_count: number;
    forks_count: number;
    language: string | null;
    html_url: string;
    homepage: string | null;
  };
}

const languageColorMapping: Record<string, string> = {
  TypeScript: 'bg-sky-500',
  JavaScript: 'bg-amber-400',
  Python: 'bg-emerald-500',
  Java: 'bg-rose-500',
  HTML: 'bg-orange-500',
  CSS: 'bg-violet-500',
  Go: 'bg-cyan-500',
  Rust: 'bg-orange-700',
};

const GithubRepoCard = ({ repo }: GithubRepoCardProps) => {
  const language = repo.language ?? 'Multi-stack';
  const langColor = languageColorMapping[language] ?? 'bg-primary';
  const description =
    repo.description?.trim() ||
    'A recent build focused on practical execution, product thinking, and iterative learning.';

  return (
    <Card className="group flex h-full flex-col rounded-[30px] border border-primary/10 bg-white/78 shadow-[0_20px_60px_rgba(22,66,38,0.08)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_26px_80px_rgba(22,66,38,0.14)]">
      <CardHeader className="pb-4">
        <div className="flex items-center justify-between gap-4">
          <span className="rounded-full bg-secondary px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-secondary-foreground">
            Open source
          </span>
          <ArrowUpRight className="h-5 w-5 text-primary transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </div>
        <CardTitle className="mt-5 text-2xl text-foreground">{repo.name}</CardTitle>
        <CardDescription className="mt-3 min-h-[5.25rem] text-sm leading-7 text-muted-foreground">
          {description}
        </CardDescription>
      </CardHeader>

      <CardContent className="mt-auto flex flex-col gap-5">
        <div className="flex flex-wrap items-center gap-3 text-sm text-muted-foreground">
          <span className="inline-flex items-center gap-2 rounded-full border border-primary/10 bg-background/70 px-3 py-2">
            <span className={cn('h-2.5 w-2.5 rounded-full', langColor)} />
            {language}
          </span>
          <span className="inline-flex items-center gap-2 rounded-full border border-primary/10 bg-background/70 px-3 py-2">
            <Star className="h-4 w-4" />
            {repo.stargazers_count}
          </span>
          <span className="inline-flex items-center gap-2 rounded-full border border-primary/10 bg-background/70 px-3 py-2">
            <GitFork className="h-4 w-4" />
            {repo.forks_count}
          </span>
        </div>

        <div className={cn('grid gap-3', repo.homepage ? 'sm:grid-cols-2' : 'grid-cols-1')}>
          {repo.homepage ? (
            <Button asChild variant="outline" className="h-12 rounded-full border-primary/15 bg-white hover:bg-background">
              <a href={repo.homepage} target="_blank" rel="noopener noreferrer">
                <Play className="h-4 w-4" />
                Live demo
              </a>
            </Button>
          ) : null}
          <Button asChild className="h-12 rounded-full shadow-[0_14px_30px_rgba(34,87,42,0.2)]">
            <a href={repo.html_url} target="_blank" rel="noopener noreferrer">
              <Code2 className="h-4 w-4" />
              View code
            </a>
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default GithubRepoCard;
