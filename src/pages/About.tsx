
import React, { useState, useEffect } from 'react';
import { Download } from 'lucide-react';
import { Button } from '@/components/ui/button';
import TimelineItem from '@/components/TimelineItem';
import CollapsibleCard from '@/components/CollapsibleCard';
import { setupIntersectionObserver } from '@/lib/utils';

const About: React.FC = () => {
  const [visibleSection, setVisibleSection] = useState('');
  
  useEffect(() => {
    setupIntersectionObserver();
    
    // Track which section is currently in view
    const handleScroll = () => {
      const sections = document.querySelectorAll('section[id]');
      let currentSection = '';
      
      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        
        if (window.scrollY >= sectionTop - 200 && window.scrollY < sectionTop + sectionHeight - 200) {
          currentSection = section.getAttribute('id') || '';
        }
      });
      
      setVisibleSection(currentSection);
    };
    
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  
  // Experience data
  const timelineItems = [
    {
      date: "2022 - Present",
      title: "Lead Developer",
      organization: "Tech Innovators Inc.",
      description: "Leading a team of developers to create cutting-edge web applications using React, TypeScript, and Node.js."
    },
    {
      date: "2020 - 2022",
      title: "Frontend Developer",
      organization: "Digital Solutions Ltd.",
      description: "Developed responsive web applications with modern JavaScript frameworks, improving user experience and performance metrics."
    },
    {
      date: "2018 - 2020",
      title: "UI/UX Designer",
      organization: "Creative Studios",
      description: "Designed user interfaces for mobile and web applications, focusing on user-centered design principles and accessibility."
    },
    {
      date: "2016 - 2018",
      title: "Freelance Web Developer",
      organization: "Self-employed",
      description: "Created websites and web applications for various clients across different industries, from e-commerce to portfolio sites."
    }
  ];
  
  // Certifications
  const certifications = [
    {
      title: "AWS Certified Developer",
      organization: "Amazon Web Services",
      date: "2023",
      description: "Certified in designing, developing, and deploying applications on AWS infrastructure."
    },
    {
      title: "Google UX Design Professional Certificate",
      organization: "Google",
      date: "2022",
      description: "Completed comprehensive UX design program covering user research, wireframing, prototyping, and usability testing."
    },
    {
      title: "React Developer Certification",
      organization: "Meta",
      date: "2021",
      description: "Advanced certification in React development, including state management, hooks, and performance optimization."
    }
  ];
  
  // Skills
  const skills = [
    {
      category: "Frontend",
      items: ["React", "TypeScript", "Next.js", "Tailwind CSS", "HTML/CSS", "JavaScript"]
    },
    {
      category: "Backend",
      items: ["Node.js", "Express", "MongoDB", "Firebase", "AWS", "REST APIs"]
    },
    {
      category: "Design",
      items: ["Figma", "Adobe XD", "Photoshop", "Illustrator", "UI/UX Design", "Design Systems"]
    },
    {
      category: "Others",
      items: ["Git", "GitHub", "Docker", "Agile Methodologies", "Project Management", "Technical Writing"]
    }
  ];
  
  // Fun facts
  const funFacts = [
    "I've coded for 24 hours straight during a hackathon (fueled by energy drinks and pizza).",
    "My first website was a fan page for my pet cat when I was 13.",
    "I collect vintage tech gadgets and have over 30 pieces in my collection.",
    "I can type at 110 WPM but still manage to misspell 'necessary' every single time.",
    "I once debugged code while on a roller coaster (not recommended)."
  ];
  
  return (
    <div className="min-h-screen pb-20">
      <section id="intro" className="py-20 bg-gradient-to-br from-babypink/10 via-background to-yellowask/10">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-center animate-on-scroll">
            The Walking Resume <span className="text-netflix">(With a Pulse)</span>
          </h1>
          <p className="text-lg text-center mb-12 text-muted-foreground max-w-2xl mx-auto animate-on-scroll">
            My professional journey, skills, and achievements all in one place. Scroll down to learn more about me.
          </p>
          
          <div className="max-w-2xl mx-auto mt-8 flex justify-center animate-on-scroll">
            <Button asChild className="gap-2">
              <a href="/resume.pdf" download>
                <Download className="h-4 w-4" />
                Download Resume
              </a>
            </Button>
          </div>
        </div>
      </section>
      
      {/* Experience Timeline */}
      <section id="experience" className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center animate-on-scroll">Work Experience</h2>
          
          <div className="max-w-4xl mx-auto">
            {timelineItems.map((item, index) => (
              <TimelineItem
                key={index}
                date={item.date}
                title={item.title}
                organization={item.organization}
                description={item.description}
                isLeft={index % 2 === 0}
                isFirst={index === 0}
                isLast={index === timelineItems.length - 1}
                className="animate-on-scroll"
              />
            ))}
          </div>
        </div>
      </section>
      
      {/* Certifications */}
      <section id="certifications" className="py-20 bg-gradient-to-r from-yellowask/10 to-purpleask/10">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center animate-on-scroll">Certifications</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {certifications.map((cert, index) => (
              <div 
                key={index} 
                className="border border-border bg-card/20 backdrop-blur-sm rounded-xl p-5 hover:border-primary/50 transition-all duration-300 hover:-translate-y-1 animate-on-scroll"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <h3 className="text-xl font-semibold mb-2">{cert.title}</h3>
                <p className="text-muted-foreground text-sm mb-1">{cert.organization}</p>
                <p className="text-netflix text-sm mb-3">{cert.date}</p>
                <p className="text-sm">{cert.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Collapsible Sections */}
      <section id="details" className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center animate-on-scroll">More About Me</h2>
          
          <div className="space-y-6 max-w-3xl mx-auto">
            <CollapsibleCard
              title="Skills & Expertise"
              description="Technical and creative skills I've developed over the years"
              defaultOpen
              className="animate-on-scroll"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {skills.map((skillGroup, index) => (
                  <div key={index} className="space-y-3">
                    <h4 className="font-semibold text-netflix">{skillGroup.category}</h4>
                    <div className="flex flex-wrap gap-2">
                      {skillGroup.items.map((skill, skillIndex) => (
                        <span 
                          key={skillIndex} 
                          className="text-sm px-3 py-1 rounded-full bg-muted/50 text-foreground inline-block"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </CollapsibleCard>
            
            <CollapsibleCard
              title="Fun Facts"
              description="Some quirky and interesting things about me"
              className="animate-on-scroll"
            >
              <ul className="space-y-3">
                {funFacts.map((fact, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <div className="w-5 h-5 min-w-5 rounded-full bg-purpleask/20 text-purpleask flex items-center justify-center mt-1">
                      <span className="text-xs font-bold">{index + 1}</span>
                    </div>
                    <span>{fact}</span>
                  </li>
                ))}
              </ul>
            </CollapsibleCard>
            
            <CollapsibleCard
              title="Goals & Aspirations"
              description="What I'm working towards in my career and life"
              className="animate-on-scroll"
            >
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-netflix mb-2">Short-term Goals</h4>
                  <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                    <li>Master TypeScript and advanced React patterns</li>
                    <li>Contribute to open-source projects regularly</li>
                    <li>Launch a SaaS product as a side project</li>
                    <li>Improve technical writing and documentation skills</li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-semibold text-netflix mb-2">Long-term Vision</h4>
                  <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                    <li>Build a successful tech startup focused on sustainability</li>
                    <li>Mentor and guide aspiring developers</li>
                    <li>Speak at international tech conferences</li>
                    <li>Create educational content to help others learn programming</li>
                  </ul>
                </div>
                
                <p className="text-sm mt-4 bg-muted/20 p-3 rounded-lg">
                  "I believe that technology should be both functional and beautiful. My aim is to create 
                  digital experiences that not only work flawlessly but also bring joy to their users."
                </p>
              </div>
            </CollapsibleCard>
          </div>
        </div>
      </section>
      
      {/* Navigation Sidebar */}
      <div className="fixed right-8 top-1/2 transform -translate-y-1/2 z-30 hidden lg:block">
        <div className="bg-card/20 backdrop-blur-sm border border-border rounded-full p-3 space-y-3">
          {['intro', 'experience', 'certifications', 'details'].map((section) => (
            <a
              key={section}
              href={`#${section}`}
              className={`w-3 h-3 rounded-full block transition-all duration-300 ${
                visibleSection === section 
                  ? 'bg-netflix scale-125' 
                  : 'bg-muted-foreground opacity-50 hover:opacity-80'
              }`}
              aria-label={`Navigate to ${section} section`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
