import React, { useState, useEffect, useMemo } from 'react';
import RepoCard from '@/components/RepoCard';
import { Button } from '@/components/ui/button';
import { Search } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { setupIntersectionObserver } from '@/lib/utils';

interface Repository {
  id: string;
  name: string;
  description: string;
  language: string;
  stargazers_count: number;
  forks_count: number;
  html_url: string;
  topics: string[];
}

const Projects: React.FC = () => {
  const [repositories, setRepositories] = useState<Repository[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedLanguage, setSelectedLanguage] = useState('');
  const [selectedTopic, setSelectedTopic] = useState('');
  
  // Fetch repositories from GitHub API
  useEffect(() => {
    const fetchRepositories = async () => {
      setIsLoading(true);
      setError(null);
      
      try {
        // Fetch from GitHub API for amogh-code
        const response = await fetch('https://api.github.com/users/amogh-code/repos');
        
        if (!response.ok) {
          throw new Error('Failed to fetch repositories');
        }
        
        let repos = await response.json();
        
        // Map to our Repository interface
        repos = repos.map((repo: any) => ({
          id: repo.id.toString(),
          name: repo.name,
          description: repo.description || 'No description available',
          language: repo.language || 'Not specified',
          stargazers_count: repo.stargazers_count,
          forks_count: repo.forks_count,
          html_url: repo.html_url,
          topics: repo.topics || []
        }));
        
        setRepositories(repos);
        setIsLoading(false);
      } catch (err) {
        // If the GitHub API fails, use the mock data as fallback
        console.error('Error fetching repositories:', err);
        
        const mockRepos: Repository[] = [
          {
            id: '1',
            name: 'frontend-client-task',
            description: 'A frontend client task using React and TypeScript',
            language: 'TypeScript',
            stargazers_count: 4,
            forks_count: 2,
            html_url: 'https://github.com/amogh-code/frontend-client-task',
            topics: ['react', 'typescript', 'frontend']
          },
          {
            id: '2',
            name: 'calculator',
            description: 'Simple calculator application with HTML, CSS and JavaScript',
            language: 'JavaScript',
            stargazers_count: 3,
            forks_count: 1,
            html_url: 'https://github.com/amogh-code/calculator',
            topics: ['javascript', 'html', 'css', 'calculator']
          },
          {
            id: '3',
            name: 'personal-portfolio',
            description: 'My personal portfolio website showcasing my projects and skills',
            language: 'JavaScript',
            stargazers_count: 5,
            forks_count: 0,
            html_url: 'https://github.com/amogh-code/personal-portfolio',
            topics: ['portfolio', 'react', 'tailwind']
          },
          {
            id: '4',
            name: 'weather-app',
            description: 'Weather application that uses OpenWeatherMap API',
            language: 'JavaScript',
            stargazers_count: 2,
            forks_count: 1,
            html_url: 'https://github.com/amogh-code/weather-app',
            topics: ['javascript', 'api', 'weather']
          },
          {
            id: '5',
            name: 'todo-app',
            description: 'A simple todo application built with React',
            language: 'JavaScript',
            stargazers_count: 1,
            forks_count: 0,
            html_url: 'https://github.com/amogh-code/todo-app',
            topics: ['react', 'frontend', 'todo']
          }
        ];
        
        setRepositories(mockRepos);
        setError('Using fallback data. Unable to connect to GitHub API.');
        setIsLoading(false);
      }
    };
    
    fetchRepositories();
  }, []);
  
  // Set up animation on scroll
  useEffect(() => {
    setupIntersectionObserver();
  }, []);
  
  // Extract unique languages and topics for filters
  const languages = useMemo(() => {
    const langs = new Set(repositories.map(repo => repo.language));
    return Array.from(langs).filter(Boolean);
  }, [repositories]);
  
  const topics = useMemo(() => {
    const allTopics = repositories.flatMap(repo => repo.topics);
    const uniqueTopics = new Set(allTopics);
    return Array.from(uniqueTopics).filter(Boolean);
  }, [repositories]);
  
  // Filter repositories based on search term and filters
  const filteredRepositories = useMemo(() => {
    return repositories.filter(repo => {
      const matchesSearch = searchTerm === '' || 
        repo.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
        (repo.description && repo.description.toLowerCase().includes(searchTerm.toLowerCase()));
      
      const matchesLanguage = selectedLanguage === '' || repo.language === selectedLanguage;
      
      const matchesTopic = selectedTopic === '' || repo.topics.includes(selectedTopic);
      
      return matchesSearch && matchesLanguage && matchesTopic;
    });
  }, [repositories, searchTerm, selectedLanguage, selectedTopic]);
  
  return (
    <div className="min-h-screen pb-20">
      <section className="py-20 bg-gradient-to-br from-purpleask/20 via-background to-netflix/10">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-center animate-on-scroll">My Experiments in Code & Chaos</h1>
          <p className="text-lg text-center mb-12 text-muted-foreground max-w-2xl mx-auto animate-on-scroll">
            Browse through my GitHub repositories to see what I've been working on. 
            From web applications to experiments, here's a glimpse into my coding journey.
          </p>
          
          {/* Search and Filter */}
          <div className="mb-8 animate-on-scroll">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="relative flex-grow">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                <Input
                  type="text"
                  placeholder="Search repositories..."
                  className="pl-10"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
              
              <div className="flex gap-2">
                <select
                  className="bg-card text-foreground border border-border rounded-md px-4 py-2 w-full md:w-auto"
                  value={selectedLanguage}
                  onChange={(e) => setSelectedLanguage(e.target.value)}
                >
                  <option value="">All Languages</option>
                  {languages.map(language => (
                    <option key={language} value={language}>{language}</option>
                  ))}
                </select>
                
                <select
                  className="bg-card text-foreground border border-border rounded-md px-4 py-2 w-full md:w-auto"
                  value={selectedTopic}
                  onChange={(e) => setSelectedTopic(e.target.value)}
                >
                  <option value="">All Topics</option>
                  {topics.map(topic => (
                    <option key={topic} value={topic}>{topic}</option>
                  ))}
                </select>
                
                <Button 
                  variant="ghost" 
                  onClick={() => {
                    setSearchTerm('');
                    setSelectedLanguage('');
                    setSelectedTopic('');
                  }}
                >
                  Reset
                </Button>
              </div>
            </div>
          </div>
          
          {/* Repositories */}
          {isLoading ? (
            <div className="flex justify-center items-center h-64">
              <div className="animate-pulse space-y-2">
                <div className="h-4 w-32 bg-muted rounded"></div>
                <div className="h-2 w-48 bg-muted rounded"></div>
              </div>
            </div>
          ) : error ? (
            <div className="bg-card/20 backdrop-blur-sm rounded-lg p-5 mb-6 text-muted-foreground text-center animate-on-scroll">
              <p>{error}</p>
              <p className="text-sm mt-2">Showing available repository data.</p>
            </div>
          ) : filteredRepositories.length === 0 ? (
            <div className="text-center text-muted-foreground p-8 border border-border rounded-lg">
              <p>No repositories found matching your criteria.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredRepositories.map((repo, index) => (
                <div key={repo.id} className="animate-on-scroll" style={{ animationDelay: `${index * 0.1}s` }}>
                  <RepoCard repo={repo} />
                </div>
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default Projects;
