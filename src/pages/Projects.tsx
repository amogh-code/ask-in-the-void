
import React, { useState, useEffect, useMemo } from 'react';
import RepoCard from '@/components/RepoCard';
import { Button } from '@/components/ui/button';
import { Search, Filter } from 'lucide-react';
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
        // This is a placeholder. In a real app, you'd fetch from the actual GitHub API with your username
        // const response = await fetch('https://api.github.com/users/YOUR_USERNAME/repos');
        
        // For demonstration, we'll use mock data
        await new Promise(resolve => setTimeout(resolve, 1000)); // Simulate API delay
        
        const mockRepos: Repository[] = [
          {
            id: '1',
            name: 'portfolio-website',
            description: 'My personal portfolio website built with React and Tailwind CSS',
            language: 'TypeScript',
            stargazers_count: 12,
            forks_count: 3,
            html_url: 'https://github.com',
            topics: ['react', 'typescript', 'portfolio', 'tailwindcss']
          },
          {
            id: '2',
            name: 'e-commerce-platform',
            description: 'A full-stack e-commerce platform with product management, cart functionality, and payment processing',
            language: 'JavaScript',
            stargazers_count: 45,
            forks_count: 8,
            html_url: 'https://github.com',
            topics: ['react', 'nodejs', 'mongodb', 'ecommerce']
          },
          {
            id: '3',
            name: 'chat-application',
            description: 'Real-time chat application built with Socket.io and Express',
            language: 'JavaScript',
            stargazers_count: 29,
            forks_count: 6,
            html_url: 'https://github.com',
            topics: ['socket.io', 'express', 'react', 'real-time']
          },
          {
            id: '4',
            name: 'machine-learning-projects',
            description: 'Collection of machine learning models and experiments',
            language: 'Python',
            stargazers_count: 18,
            forks_count: 4,
            html_url: 'https://github.com',
            topics: ['machine-learning', 'data-science', 'python', 'tensorflow']
          },
          {
            id: '5',
            name: 'inventory-management-system',
            description: 'Web-based inventory management system for small businesses',
            language: 'TypeScript',
            stargazers_count: 23,
            forks_count: 5,
            html_url: 'https://github.com',
            topics: ['angular', 'typescript', 'business', 'inventory']
          },
          {
            id: '6',
            name: 'mobile-fitness-app',
            description: 'A fitness tracking mobile application built with React Native',
            language: 'JavaScript',
            stargazers_count: 32,
            forks_count: 7,
            html_url: 'https://github.com',
            topics: ['react-native', 'mobile', 'fitness', 'expo']
          },
          {
            id: '7',
            name: 'weather-dashboard',
            description: 'Weather forecast dashboard using OpenWeatherMap API',
            language: 'JavaScript',
            stargazers_count: 15,
            forks_count: 3,
            html_url: 'https://github.com',
            topics: ['api', 'weather', 'javascript', 'dashboard']
          },
          {
            id: '8',
            name: 'personal-blog',
            description: 'My personal blog built with Gatsby and GraphQL',
            language: 'JavaScript',
            stargazers_count: 8,
            forks_count: 2,
            html_url: 'https://github.com',
            topics: ['gatsby', 'blog', 'graphql', 'markdown']
          },
          {
            id: '9',
            name: 'task-management-app',
            description: 'Kanban-style task management application',
            language: 'TypeScript',
            stargazers_count: 27,
            forks_count: 6,
            html_url: 'https://github.com',
            topics: ['react', 'typescript', 'productivity', 'drag-and-drop']
          }
        ];
        
        setRepositories(mockRepos);
        setIsLoading(false);
      } catch (err) {
        setError('Failed to fetch repositories');
        setIsLoading(false);
        console.error('Error fetching repositories:', err);
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
            From web applications to machine learning experiments, there's a bit of everything.
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
            <div className="text-center text-destructive p-8 border border-destructive/20 rounded-lg">
              <p>{error}</p>
              <Button 
                variant="outline" 
                className="mt-4" 
                onClick={() => window.location.reload()}
              >
                Try Again
              </Button>
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
