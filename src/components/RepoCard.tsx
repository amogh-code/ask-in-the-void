
import React from 'react';
import { Star, GitFork } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn, shortenText } from '@/lib/utils';

interface RepoCardProps {
  repo: {
    id: string;
    name: string;
    description: string;
    language: string;
    stargazers_count: number;
    forks_count: number;
    html_url: string;
    topics: string[];
  };
  className?: string;
}

const RepoCard: React.FC<RepoCardProps> = ({ repo, className }) => {
  // Language colors
  const languageColors: Record<string, string> = {
    JavaScript: 'bg-yellow-400',
    TypeScript: 'bg-blue-500',
    Python: 'bg-green-500',
    Java: 'bg-orange-600',
    'C#': 'bg-purple-600',
    Ruby: 'bg-red-600',
    Go: 'bg-blue-400',
    HTML: 'bg-red-500',
    CSS: 'bg-purpleask',
    PHP: 'bg-indigo-600',
    Kotlin: 'bg-orange-500',
    Swift: 'bg-orange-400',
    Dart: 'bg-blue-300',
    default: 'bg-gray-500'
  };
  
  const languageColor = repo.language ? languageColors[repo.language] || languageColors.default : languageColors.default;
  
  return (
    <div 
      className={cn(
        "border border-border/50 bg-card/20 backdrop-blur-sm rounded-xl p-5 transition-all duration-300 hover:border-primary/50 hover:-translate-y-1 hover:shadow-lg hover:shadow-primary/5 flex flex-col h-full",
        className
      )}
    >
      <div className="flex-grow">
        <h3 className="text-lg font-semibold text-foreground mb-2 hover:text-primary transition-colors">
          <a href={repo.html_url} target="_blank" rel="noopener noreferrer" className="hover:underline">
            {repo.name}
          </a>
        </h3>
        
        <p className="text-muted-foreground text-sm mb-4">
          {repo.description ? shortenText(repo.description, 100) : 'No description available'}
        </p>
        
        {repo.topics && repo.topics.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-4">
            {repo.topics.slice(0, 3).map((topic) => (
              <span 
                key={topic} 
                className="text-xs px-2 py-1 rounded-full bg-secondary/20 text-secondary-foreground"
              >
                {topic}
              </span>
            ))}
            {repo.topics.length > 3 && (
              <span className="text-xs px-2 py-1 rounded-full bg-muted text-muted-foreground">
                +{repo.topics.length - 3} more
              </span>
            )}
          </div>
        )}
      </div>
      
      <div className="flex justify-between items-center mt-4 pt-3 border-t border-border/50">
        <div className="flex items-center gap-4">
          {repo.language && (
            <div className="flex items-center gap-1 text-xs text-muted-foreground">
              <span className={`w-3 h-3 rounded-full ${languageColor}`}></span>
              <span>{repo.language}</span>
            </div>
          )}
          
          <div className="flex items-center gap-1 text-xs text-muted-foreground">
            <Star className="w-3 h-3" />
            <span>{repo.stargazers_count}</span>
          </div>
          
          <div className="flex items-center gap-1 text-xs text-muted-foreground">
            <GitFork className="w-3 h-3" />
            <span>{repo.forks_count}</span>
          </div>
        </div>
        
        <Button variant="ghost" size="sm" asChild>
          <a href={repo.html_url} target="_blank" rel="noopener noreferrer">
            View
          </a>
        </Button>
      </div>
    </div>
  );
};

export default RepoCard;
