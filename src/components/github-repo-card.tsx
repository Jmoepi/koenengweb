
'use client';

import { Star, GitFork, Play, Code } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

interface GithubRepoCardProps {
  repo: {
    name: string;
    description: string;
    stargazers_count: number;
    forks_count: number;
    language: string;
    html_url: string;
    homepage: string | null;
  };
}

const languageColorMapping: { [key: string]: string } = {
  TypeScript: 'bg-blue-500',
  JavaScript: 'bg-yellow-500',
  Python: 'bg-green-500',
  Java: 'bg-red-500',
  HTML: 'bg-orange-500',
  CSS: 'bg-purple-500',
  Go: 'bg-cyan-500',
  Rust: 'bg-orange-700',
};

const GithubRepoCard = ({ repo }: GithubRepoCardProps) => {
  const langColor = languageColorMapping[repo.language] || 'bg-gray-500';

  return (
    <Card className="h-full hover:border-primary transition-colors duration-300 flex flex-col">
      <CardHeader>
        <CardTitle className="text-xl font-bold text-primary">{repo.name}</CardTitle>
        <CardDescription className="text-muted-foreground mt-1 h-12 overflow-hidden">{repo.description}</CardDescription>
      </CardHeader>
      <CardContent className="flex-grow flex flex-col justify-between">
        <div className="flex items-center text-sm text-muted-foreground">
            <div className="flex items-center">
                <div className={`w-3 h-3 rounded-full mr-1.5 ${langColor}`}></div>
                <span>{repo.language}</span>
            </div>
            <div className="flex items-center ml-auto">
                <Star className="w-4 h-4 mr-1" />
                <span>{repo.stargazers_count}</span>
            </div>
            <div className="flex items-center ml-4">
                <GitFork className="w-4 h-4 mr-1" />
                <span>{repo.forks_count}</span>
            </div>
        </div>
        <div className="flex items-center space-x-2 mt-4">
          {repo.homepage && (
            <a href={repo.homepage} target="_blank" rel="noopener noreferrer" className="flex-1">
              <Button variant="outline" className="w-full">
                <Play className="w-4 h-4 mr-2" />
                Live Demo
              </Button>
            </a>
          )}
          <a href={repo.html_url} target="_blank" rel="noopener noreferrer" className={`flex-1 ${!repo.homepage ? 'w-full' : ''}`}>
            <Button variant="secondary" className="w-full">
                <Code className="w-4 h-4 mr-2" />
                View Code
            </Button>
          </a>
        </div>
      </CardContent>
    </Card>
  );
};

export default GithubRepoCard;
