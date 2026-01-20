
'use client';

import { useState, useEffect } from 'react';
import GithubRepoCard from '@/components/github-repo-card';
import { Loader2, ArrowRight } from 'lucide-react';

interface Repo {
  id: number;
  name: string;
  description: string;
  stargazers_count: number;
  forks_count: number;
  language: string;
  html_url: string;
  homepage: string | null;
}

const ProductsSection = () => {
  const [repos, setRepos] = useState<Repo[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchRepos = async () => {
      try {
        const response = await fetch('https://api.github.com/users/Jmoepi/repos?sort=pushed&per_page=3');
        if (!response.ok) {
          throw new Error('Failed to fetch projects from GitHub.');
        }
        const data = await response.json();
        setRepos(data);
      } catch (err: any) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchRepos();
  }, []);

  return (
    <section id="work" className="container mx-auto py-12 md:py-24">
      <div className="text-center">
        <h2 className="text-3xl font-bold tracking-tight text-primary sm:text-4xl">
          My Latest Work
        </h2>
        <p className="mt-4 text-lg text-muted-foreground">
          Here are a few of my most recent projects. Check out my GitHub for more.
        </p>
      </div>
      <div className="mt-12">
        {loading ? (
          <div className="flex justify-center items-center h-64">
            <Loader2 className="w-12 h-12 animate-spin text-primary" />
          </div>
        ) : error ? (
          <div className="text-center text-destructive">
            <p>{error}</p>
          </div>
        ) : (
          <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {repos.map((repo) => (
              <GithubRepoCard key={repo.id} repo={repo} />
            ))}
          </div>
        )}
      </div>
      <div className="mt-12 text-center">
        <a
          href="https://github.com/Jmoepi"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-primary hover:bg-primary/90 transition-colors"
        >
          View All Projects
          <ArrowRight className="ml-2 h-5 w-5" />
        </a>
      </div>
    </section>
  );
};

export default ProductsSection;
