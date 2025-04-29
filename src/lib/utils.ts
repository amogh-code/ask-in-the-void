
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function getRandomDelay(): string {
  const delay = Math.random() * 1.5;
  return `${delay}s`;
}

export function shortenText(text: string, maxLength: number): string {
  if (text.length <= maxLength) return text;
  return text.slice(0, maxLength) + '...';
}

export function generateId(): string {
  return Math.random().toString(36).substring(2, 9);
}

export function formatDate(date: string | Date): string {
  return new Date(date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  });
}

export function debounce<T extends (...args: any[]) => any>(
  func: T,
  wait: number
): (...args: Parameters<T>) => void {
  let timeout: ReturnType<typeof setTimeout> | null = null;
  
  return function(...args: Parameters<T>): void {
    const later = () => {
      timeout = null;
      func(...args);
    };
    
    if (timeout !== null) {
      clearTimeout(timeout);
    }
    timeout = setTimeout(later, wait);
  };
}

export function shuffle<T>(array: T[]): T[] {
  const newArray = [...array];
  for (let i = newArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
  }
  return newArray;
}

// Animation observer
export function setupIntersectionObserver(): void {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animated');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });

  const elements = document.querySelectorAll('.animate-on-scroll');
  elements.forEach(el => observer.observe(el));
}

// Cursor trail effect
export function setupCursorTrail(): void {
  const trail: HTMLDivElement[] = [];
  const trailLength = 10;
  
  for (let i = 0; i < trailLength; i++) {
    const dot = document.createElement('div');
    dot.className = 'cursor-trail';
    document.body.appendChild(dot);
    trail.push(dot);
  }
  
  window.addEventListener('mousemove', (e) => {
    trail.forEach((dot, index) => {
      setTimeout(() => {
        dot.style.left = e.pageX + 'px';
        dot.style.top = e.pageY + 'px';
        dot.style.opacity = String(1 - index / trailLength);
        dot.style.width = 10 - (index * 0.5) + 'px';
        dot.style.height = 10 - (index * 0.5) + 'px';
      }, index * 30);
    });
  });
}

// Scroll progress bar
export function setupScrollProgressBar(): void {
  const progressBar = document.querySelector('.scroll-progress-bar') as HTMLElement;
  
  if (!progressBar) return;
  
  window.addEventListener('scroll', () => {
    const scrollTotal = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrollProgress = (window.scrollY / scrollTotal) * 100;
    progressBar.style.width = scrollProgress + '%';
  });
}
