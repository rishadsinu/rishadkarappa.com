'use client';

import React, { useState, useEffect } from 'react';
import { Moon, Sun, Download, Calendar, Github, Linkedin, Mail, Code2, Database, Server, Container } from 'lucide-react';

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
}

interface SkillCardProps {
  title: string;
  icon: React.ReactNode;
  skills: string[];
  darkMode: boolean;
  className?: string;
}

interface ProjectCardProps {
  project: Project;
  darkMode: boolean;
}

interface ContactButtonProps {
  icon: React.ReactNode;
  text: string;
  darkMode: boolean;
  onClick?: () => void;
}

export default function Home() {
  const [darkMode, setDarkMode] = useState<boolean>(true);
  const [activeSection, setActiveSection] = useState<string>('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'skills', 'projects', 'contact'];
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
    // Replace with your actual resume file path
    const link = document.createElement('a');
    link.href = '/resume.pdf'; // Place your resume.pdf in the public folder
    link.download = 'Muhammed_Rishad_Karappa_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleScheduleMeeting = () => {
    // Replace with your actual Calendly or scheduling link
    window.open('https://calendly.com/your-link', '_blank');
  };

  const handleEmail = () => {
    window.location.href = 'rishadkarappa@gmail.com';
  };

  const handleLinkedIn = () => {
    window.open('https://www.linkedin.com/in/muhammad-rishad', '_blank');
  };

  const handleGitHub = () => {
    window.open('https://github.com/rishadsinu', '_blank');
  };

  const skills: Skill = {
    frontend: ['React.js', 'TypeScript', 'Tailwind CSS', 'Redux'],
    backend: ['Node.js', 'Express.js', 'Microservices', 'RESTful APIs', 'GraphQL'],
    database: ['PostgreSQL', 'MongoDB', 'Redis', 'Database Design', 'Query Optimization'],
    devops: ['Docker', 'Kubernetes', 'CI/CD', 'AWS', 'Nginx'],
    architecture: ['Microservices', 'Event-Driven', 'CQRS', 'Domain-Driven Design', 'API Gateway']
  };

  const projects: Project[] = [
    {
      title: 'E-Commerce Platform',
      description: 'Full-stack e-commerce solution with microservices architecture, featuring real-time inventory management, payment integration, and admin dashboard.',
      tech: ['Next.js', 'Node.js', 'PostgreSQL', 'Docker', 'Kubernetes', 'Redis'],
      highlights: ['Microservices Architecture', 'Real-time Updates', 'Payment Gateway', 'Admin Panel']
    },
    {
      title: 'Unskilled Labour Platform',
      description: 'Connecting unskilled workers with employers through an intelligent matching system, featuring geo-location services, rating system, and secure payments.',
      tech: ['MERN Stack', 'Socket.io', 'PostgreSQL', 'Docker', 'AWS'],
      highlights: ['Real-time Matching', 'Geo-location', 'Rating System', 'Secure Payments']
    },
    {
      title: 'Social Media Platform for Documenting Disciplined Work & Professional Journeys',
      description: 'A unique social platform where individuals can share, document, and showcase their disciplined work, progress, and professional journey to inspire and connect with others.',
      tech: ['MERN Stack', 'Socket.io', 'PostgreSQL', 'Docker', 'AWS'],
      highlights: ['Real-time Collaboration', 'User Rating System']
    }

  ];

  return (
    <div className={`min-h-screen transition-colors duration-300 ${darkMode ? 'bg-black text-white' : 'bg-white text-black'}`}>
      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${darkMode ? 'bg-black/90' : 'bg-white/90'} backdrop-blur-sm border-b ${darkMode ? 'border-white/10' : 'border-black/10'}`}>
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-xl font-bold tracking-tight"></h1>

          <div className="hidden md:flex gap-8 text-sm">
            {['home', 'about', 'skills', 'projects', 'contact'].map(section => (
              <button
                key={section}
                onClick={() => scrollToSection(section)}
                className={`capitalize transition-opacity ${activeSection === section ? 'opacity-100 font-medium' : 'opacity-60 hover:opacity-100'}`}
              >
                {section}
              </button>
            ))}
          </div>

          <button
            onClick={() => setDarkMode(!darkMode)}
            className={`p-2 rounded-full transition-colors ${darkMode ? 'hover:bg-white/10' : 'hover:bg-black/10'}`}
            aria-label="Toggle dark mode"
          >
            {darkMode ? <Sun size={20} /> : <Moon size={20} />}
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center px-6">
        <div className="max-w-4xl w-full text-center space-y-8">
          <div className="space-y-4">
            <h2 className={`text-5xl md:text-7xl font-bold tracking-tight ${darkMode ? 'text-white' : 'text-black'}`}>
              Rishad
              <br />
              <span className={darkMode ? 'text-white/60' : 'text-black/60'}>Karappa</span>
            </h2>
            <p className={`text-xl md:text-2xl ${darkMode ? 'text-white/80' : 'text-black/80'}`}>
              MERN Stack Developer
            </p>
            <p className={`text-base md:text-lg max-w-2xl mx-auto ${darkMode ? 'text-white/60' : 'text-black/60'}`}>
              Architecting scalable microservices and cloud-native applications with expertise in Docker, Kubernetes, and modern web technologies
            </p>
          </div>

          <div className="flex flex-wrap gap-4 justify-center">
            <button
              onClick={handleScheduleMeeting}
              className={`px-8 py-3 rounded-full font-medium transition-all ${darkMode ? 'bg-white text-black hover:bg-white/90' : 'bg-black text-white hover:bg-black/90'}`}
            >
              <Calendar className="inline mr-2" size={18} />
              Schedule Meeting
            </button>
            <button
              onClick={handleResumeDownload}
              className={`px-8 py-3 rounded-full font-medium border transition-all ${darkMode ? 'border-white/20 hover:bg-white/10' : 'border-black/20 hover:bg-black/10'}`}
            >
              <Download className="inline mr-2" size={18} />
              Download Resume
            </button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className={`py-32 px-6 border-t ${darkMode ? 'border-white/10' : 'border-black/10'}`}>
        <div className="max-w-4xl mx-auto">
          <h3 className="text-4xl font-bold mb-12">About Me</h3>
          <div className="space-y-6 text-lg leading-relaxed">
            <p className={darkMode ? 'text-white/80' : 'text-black/80'}>
              Full-Stack Developer specializing in building scalable, high-performance web applications using the MERN stack. With deep expertise in microservices architecture and containerization, I design systems that are maintainable, resilient, and production-ready.
            </p>
            <p className={darkMode ? 'text-white/80' : 'text-black/80'}>
              My approach combines clean code principles, domain-driven design, and modern DevOps practices. I&apos;ve successfully delivered enterprise-level applications handling millions of requests, implemented CI/CD pipelines, and orchestrated complex distributed systems using Kubernetes.
            </p>
            <p className={darkMode ? 'text-white/80' : 'text-black/80'}>
              Beyond coding, I focus on system architecture, performance optimization, and mentoring junior developers. I believe in writing code that not only works but tells a story and stands the test of time.
            </p>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className={`py-32 px-6 border-t ${darkMode ? 'border-white/10' : 'border-black/10'}`}>
        <div className="max-w-6xl mx-auto">
          <h3 className="text-4xl font-bold mb-16 text-center">Technical Expertise</h3>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <SkillCard title="Frontend" icon={<Code2 size={24} />} skills={skills.frontend} darkMode={darkMode} />
            <SkillCard title="Backend" icon={<Server size={24} />} skills={skills.backend} darkMode={darkMode} />
            <SkillCard title="Database" icon={<Database size={24} />} skills={skills.database} darkMode={darkMode} />
            <SkillCard title="DevOps" icon={<Container size={24} />} skills={skills.devops} darkMode={darkMode} />
            <SkillCard title="Architecture" icon={<Server size={24} />} skills={skills.architecture} darkMode={darkMode} className="md:col-span-2 lg:col-span-1" />
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className={`py-32 px-6 border-t ${darkMode ? 'border-white/10' : 'border-black/10'}`}>
        <div className="max-w-6xl mx-auto">
          <h3 className="text-4xl font-bold mb-16 text-center">Featured Projects</h3>

          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <ProjectCard key={index} project={project} darkMode={darkMode} />
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className={`py-32 px-6 border-t ${darkMode ? 'border-white/10' : 'border-black/10'}`}>
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-4xl font-bold mb-8">Let&apos;s Work Together</h3>
          <p className={`text-xl mb-12 ${darkMode ? 'text-white/70' : 'text-black/70'}`}>
            Available for freelance projects and full-time opportunities
          </p>

          <div className="flex flex-wrap gap-6 justify-center mb-12">
            <ContactButton icon={<Mail size={20} />} text="Email Me" darkMode={darkMode} onClick={handleEmail} />
            <ContactButton icon={<Calendar size={20} />} text="Schedule Call" darkMode={darkMode} onClick={handleScheduleMeeting} />
            <ContactButton icon={<Linkedin size={20} />} text="LinkedIn" darkMode={darkMode} onClick={handleLinkedIn} />
            <ContactButton icon={<Github size={20} />} text="GitHub" darkMode={darkMode} onClick={handleGitHub} />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className={`py-8 px-6 border-t ${darkMode ? 'border-white/10' : 'border-black/10'}`}>
        <div className="max-w-6xl mx-auto text-center">
          <p className={darkMode ? 'text-white/50' : 'text-black/50'}>
            © 2025 Rishad Karappa
          </p>
        </div>
      </footer>
    </div>
  );
}

function SkillCard({ title, icon, skills, darkMode, className = '' }: SkillCardProps) {
  return (
    <div className={`p-6 rounded-2xl border transition-all hover:scale-105 ${darkMode ? 'border-white/10 bg-white/5' : 'border-black/10 bg-black/5'} ${className}`}>
      <div className="flex items-center gap-3 mb-4">
        {icon}
        <h4 className="text-xl font-semibold">{title}</h4>
      </div>
      <ul className="space-y-2">
        {skills.map((skill, index) => (
          <li key={index} className={`text-sm ${darkMode ? 'text-white/70' : 'text-black/70'}`}>
            • {skill}
          </li>
        ))}
      </ul>
    </div>
  );
}

function ProjectCard({ project, darkMode }: ProjectCardProps) {
  return (
    <div className={`p-8 rounded-2xl border transition-all hover:scale-105 ${darkMode ? 'border-white/10 bg-white/5' : 'border-black/10 bg-black/5'}`}>
      <h4 className="text-2xl font-bold mb-4">{project.title}</h4>
      <p className={`mb-6 ${darkMode ? 'text-white/70' : 'text-black/70'}`}>
        {project.description}
      </p>

      <div className="mb-6">
        <h5 className="text-sm font-semibold mb-3 uppercase tracking-wider">Key Features</h5>
        <div className="grid grid-cols-2 gap-2">
          {project.highlights.map((highlight, index) => (
            <span key={index} className={`text-sm ${darkMode ? 'text-white/60' : 'text-black/60'}`}>
              • {highlight}
            </span>
          ))}
        </div>
      </div>

      <div className="flex flex-wrap gap-2">
        {project.tech.map((tech, index) => (
          <span
            key={index}
            className={`text-xs px-3 py-1 rounded-full ${darkMode ? 'bg-white/10' : 'bg-black/10'}`}
          >
            {tech}
          </span>
        ))}
      </div>
    </div>
  );
}

function ContactButton({ icon, text, darkMode, onClick }: ContactButtonProps) {
  return (
    <button
      onClick={onClick}
      className={`flex items-center gap-2 px-6 py-3 rounded-full border transition-all hover:scale-105 ${darkMode ? 'border-white/20 hover:bg-white/10' : 'border-black/20 hover:bg-black/10'}`}
    >
      {icon}
      {text}
    </button>
  );
}