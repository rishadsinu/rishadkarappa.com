'use client';

import React, { useState, useEffect } from 'react';
import { Moon, Sun, Download, Calendar, Github, Linkedin, Mail, Code2, Database, Server, Container, ArrowRight, ExternalLink } from 'lucide-react';
import Image from 'next/image';

interface Skill {
  frontend: string[];
  backend: string[];
  database: string[];
  devops: string[];
  architecture: string[];
}

interface Project {
  title: string;
  description: string;
  tech: string[];
  highlights: string[];
  link?: string;
}

interface SkillCardProps {
  title: string;
  icon: React.ReactNode;
  skills: string[];
  darkMode: boolean;
}

interface ProjectCardProps {
  project: Project;
  darkMode: boolean;
}

export default function Home() {
  const [darkMode, setDarkMode] = useState<boolean>(true);
  const [activeSection, setActiveSection] = useState<string>('home');
  const [scrolled, setScrolled] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
      
      const sections = ['home', 'skills', 'projects', 'contact'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleResumeDownload = () => {
    const link = document.createElement('a');
    link.href = '/resume.pdf';
    link.download = 'Muhammed_Rishad_Karappa_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleScheduleMeeting = () => {
    // window.open('https://calendly.com/your-link', '_blank');
  };

  const handleEmail = () => {
    window.location.href = 'mailto:rishadkarappa@gmail.com';
  };

  const handleLinkedIn = () => {
    window.open('https://www.linkedin.com/in/rishad-dev/', '_blank');
  };

  const handleGitHub = () => {
    window.open('https://github.com/rishadsinu', '_blank');
  };

  const skills: Skill = {
    frontend: ['React.js', 'TypeScript', 'Tailwind CSS', 'Redux'],
    backend: ['Node.js', 'Express.js', 'Microservices', 'GraphQL'],
    database: ['PostgreSQL', 'MongoDB', 'Redis'],
    devops: ['Docker', 'Kubernetes', 'AWS', 'CI/CD'],
    architecture: ['Microservices', 'Event-Driven', 'DDD', 'CQRS']
  };

  const projects: Project[] = [
    {
      title: 'E-Commerce Platform',
      description: 'Enterprise microservices architecture with real-time inventory and payment integration.',
      tech: ['Next.js', 'Node.js', 'PostgreSQL', 'Docker', 'Kubernetes'],
      highlights: ['Microservices', 'Real-time', 'Payments']
    },
    {
      title: 'Labour Marketplace',
      description: 'Intelligent matching platform with geo-location and secure payment processing.',
      tech: ['MERN', 'Socket.io', 'PostgreSQL', 'Docker'],
      highlights: ['Real-time', 'Geo-location', 'Ratings']
    },
    {
      title: 'Professional Journey',
      description: 'Social platform for documenting professional growth and career milestones.',
      tech: ['MERN', 'Socket.io', 'PostgreSQL', 'AWS'],
      highlights: ['Analytics', 'Real-time', 'Tracking']
    }
  ];

  return (
    <div className={`min-h-screen transition-colors duration-200 ${darkMode ? 'bg-black text-white' : 'bg-white text-black'}`}>
      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-200 ${
        scrolled 
          ? (darkMode ? 'bg-black/80 border-b border-white/10' : 'bg-white/80 border-b border-black/10') 
          : 'bg-transparent'
      } backdrop-blur-md`}>
        <div className="max-w-5xl mx-auto px-4 sm:px-6 py-3 flex justify-between items-center">
          <button onClick={() => scrollToSection('home')} className="text-sm font-semibold tracking-tight hover:opacity-60 transition-opacity">
            Rishad Karappa
          </button>

          <div className="hidden md:flex gap-6 text-sm">
            {['home', 'skills', 'projects', 'contact'].map(section => (
              <button
                key={section}
                onClick={() => scrollToSection(section)}
                className={`capitalize transition-opacity hover:opacity-100 ${
                  activeSection === section ? 'opacity-100' : 'opacity-40'
                }`}
              >
                {section}
              </button>
            ))}
          </div>

          <button
            onClick={() => setDarkMode(!darkMode)}
            className={`p-1.5 rounded-md transition-colors ${darkMode ? 'hover:bg-white/10' : 'hover:bg-black/10'}`}
            aria-label="Toggle theme"
          >
            {darkMode ? <Sun size={16} /> : <Moon size={16} />}
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center px-4 sm:px-6 pt-16">
        <div className="max-w-3xl w-full text-center space-y-8">
          {/* Profile Image - Small & Centered */}
          <div className="flex justify-center">
            <div className="relative">
              <div className={`absolute inset-0 rounded-full blur-2xl opacity-10 ${darkMode ? 'bg-white' : 'bg-black'}`}></div>
              <div className={`relative w-24 h-24 sm:w-28 sm:h-28 rounded-full overflow-hidden border-2 ${
                darkMode ? 'border-white/10' : 'border-black/10'
              }`}>
                <Image 
                  src="/portfolio.png"
                  alt="Rishad Karappa" 
                  fill 
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </div>

          {/* Text Content */}
          <div className="space-y-4">
            <div className="space-y-2">
              <h1 className="text-4xl sm:text-5xl font-bold tracking-tight">
                Muhammed Rishad Karappa
              </h1>
              <p className={`text-base sm:text-lg ${darkMode ? 'text-white/60' : 'text-black/60'}`}>
                Full-Stack Developer
              </p>
            </div>

            <p className={`text-sm sm:text-base max-w-xl mx-auto leading-relaxed ${darkMode ? 'text-white/60' : 'text-black/60'}`}>
              Building scalable microservices and cloud-native applications with MERN stack, Docker, Kubernetes, and modern DevOps practices.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-3 justify-center">
            <button
              onClick={handleScheduleMeeting}
              className={`group px-5 py-2.5 rounded-md text-sm font-medium transition-all flex items-center gap-2 ${
                darkMode ? 'bg-white text-black hover:bg-white/90' : 'bg-black text-white hover:bg-black/90'
              }`}
            >
              Schedule Meeting
              <ArrowRight size={14} className="group-hover:translate-x-0.5 transition-transform" />
            </button>
            <button
              onClick={handleResumeDownload}
              className={`px-5 py-2.5 rounded-md text-sm font-medium border transition-colors ${
                darkMode ? 'border-white/20 hover:bg-white/5' : 'border-black/20 hover:bg-black/5'
              }`}
            >
              Download Resume
            </button>
          </div>

          {/* Social Links */}
          <div className="flex gap-3 justify-center pt-2">
            <button 
              onClick={handleGitHub} 
              className={`p-2 rounded-md transition-colors ${darkMode ? 'hover:bg-white/10' : 'hover:bg-black/10'}`} 
              aria-label="GitHub"
            >
              <Github size={18} />
            </button>
            <button 
              onClick={handleLinkedIn} 
              className={`p-2 rounded-md transition-colors ${darkMode ? 'hover:bg-white/10' : 'hover:bg-black/10'}`} 
              aria-label="LinkedIn"
            >
              <Linkedin size={18} />
            </button>
            <button 
              onClick={handleEmail} 
              className={`p-2 rounded-md transition-colors ${darkMode ? 'hover:bg-white/10' : 'hover:bg-black/10'}`} 
              aria-label="Email"
            >
              <Mail size={18} />
            </button>
          </div>

          {/* About */}
          <div className={`mt-8 p-6 rounded-lg border text-left ${darkMode ? 'border-white/10 bg-white/5' : 'border-black/10 bg-black/5'}`}>
            <p className={`text-sm leading-relaxed ${darkMode ? 'text-white/70' : 'text-black/70'}`}>
              Passionate about clean architecture and scalable systems. I specialize in microservices orchestration, database optimization, and delivering maintainable enterprise solutions.
            </p>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className={`py-16 px-4 sm:px-6 border-t ${darkMode ? 'border-white/10' : 'border-black/10'}`}>
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-bold mb-8">Technical Stack</h2>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
            <SkillCard title="Frontend" icon={<Code2 size={16} />} skills={skills.frontend} darkMode={darkMode} />
            <SkillCard title="Backend" icon={<Server size={16} />} skills={skills.backend} darkMode={darkMode} />
            <SkillCard title="Database" icon={<Database size={16} />} skills={skills.database} darkMode={darkMode} />
            <SkillCard title="DevOps" icon={<Container size={16} />} skills={skills.devops} darkMode={darkMode} />
            <SkillCard title="Architecture" icon={<Server size={16} />} skills={skills.architecture} darkMode={darkMode} />
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className={`py-16 px-4 sm:px-6 border-t ${darkMode ? 'border-white/10' : 'border-black/10'}`}>
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-bold mb-8">Featured Projects</h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {projects.map((project, index) => (
              <ProjectCard key={index} project={project} darkMode={darkMode} />
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className={`py-16 px-4 sm:px-6 border-t ${darkMode ? 'border-white/10' : 'border-black/10'}`}>
        <div className="max-w-3xl mx-auto text-center space-y-6">
          <h2 className="text-2xl font-bold">Let&apos;s Connect</h2>
          <p className={`text-sm ${darkMode ? 'text-white/60' : 'text-black/60'}`}>
            Available for freelance projects and full-time opportunities
          </p>

          <div className="flex flex-wrap gap-3 justify-center">
            <button
              onClick={handleEmail}
              className={`px-4 py-2 rounded-md text-sm font-medium border transition-colors flex items-center gap-2 ${
                darkMode ? 'border-white/20 hover:bg-white/5' : 'border-black/20 hover:bg-black/5'
              }`}
            >
              <Mail size={16} />
              Email
            </button>
            <button
              onClick={handleScheduleMeeting}
              className={`px-4 py-2 rounded-md text-sm font-medium border transition-colors flex items-center gap-2 ${
                darkMode ? 'border-white/20 hover:bg-white/5' : 'border-black/20 hover:bg-black/5'
              }`}
            >
              <Calendar size={16} />
              Schedule
            </button>
            <button
              onClick={handleLinkedIn}
              className={`px-4 py-2 rounded-md text-sm font-medium border transition-colors flex items-center gap-2 ${
                darkMode ? 'border-white/20 hover:bg-white/5' : 'border-black/20 hover:bg-black/5'
              }`}
            >
              <Linkedin size={16} />
              LinkedIn
            </button>
            <button
              onClick={handleGitHub}
              className={`px-4 py-2 rounded-md text-sm font-medium border transition-colors flex items-center gap-2 ${
                darkMode ? 'border-white/20 hover:bg-white/5' : 'border-black/20 hover:bg-black/5'
              }`}
            >
              <Github size={16} />
              GitHub
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className={`py-6 px-4 sm:px-6 border-t ${darkMode ? 'border-white/10' : 'border-black/10'}`}>
        <div className="max-w-5xl mx-auto text-center">
          <p className={`text-xs ${darkMode ? 'text-white/40' : 'text-black/40'}`}>
            © 2025 Rishad Karappa · Built with Next.js & Tailwind CSS
          </p>
        </div>
      </footer>
    </div>
  );
}

function SkillCard({ title, icon, skills, darkMode }: SkillCardProps) {
  return (
    <div className={`p-3 rounded-lg border transition-all hover:scale-[1.02] ${
      darkMode ? 'border-white/10 hover:border-white/20 bg-white/5' : 'border-black/10 hover:border-black/20 bg-black/5'
    }`}>
      <div className="flex items-center gap-2 mb-2">
        {icon}
        <h3 className="text-xs font-semibold">{title}</h3>
      </div>
      <ul className="space-y-0.5">
        {skills.map((skill, index) => (
          <li key={index} className={`text-xs ${darkMode ? 'text-white/60' : 'text-black/60'}`}>
            {skill}
          </li>
        ))}
      </ul>
    </div>
  );
}

function ProjectCard({ project, darkMode }: ProjectCardProps) {
  return (
    <div className={`group p-5 rounded-lg border transition-all hover:scale-[1.02] ${
      darkMode ? 'border-white/10 hover:border-white/20 bg-white/5' : 'border-black/10 hover:border-black/20 bg-black/5'
    }`}>
      <h3 className="text-base font-semibold mb-2">{project.title}</h3>
      <p className={`text-xs mb-3 leading-relaxed ${darkMode ? 'text-white/60' : 'text-black/60'}`}>
        {project.description}
      </p>

      <div className="flex flex-wrap gap-1.5 mb-3">
        {project.highlights.map((highlight, index) => (
          <span
            key={index}
            className={`text-xs px-2 py-0.5 rounded-md ${darkMode ? 'bg-white/10' : 'bg-black/10'}`}
          >
            {highlight}
          </span>
        ))}
      </div>

      <div className="flex flex-wrap gap-1">
        {project.tech.map((tech, index) => (
          <span
            key={index}
            className={`text-xs px-1.5 py-0.5 rounded ${darkMode ? 'text-white/40' : 'text-black/40'}`}
          >
            {tech}
          </span>
        ))}
      </div>
    </div>
  );
}
