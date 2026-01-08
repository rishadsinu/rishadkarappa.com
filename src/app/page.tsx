'use client';

import React, { useState, useEffect } from 'react';
import { Moon, Sun, Github, Linkedin, Mail, Code2, Database, Server, Container, ArrowRight, X, AlertCircle, Download, Calendar } from 'lucide-react';
import Image from 'next/image';
import LightRays from '../components/LightRays';



// Add X (Twitter) icon
const XIcon = () => (
  <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

export default function Home() {
  const [darkMode, setDarkMode] = useState<boolean>(true);
  const [activeSection, setActiveSection] = useState<string>('home');
  const [scrolled, setScrolled] = useState<boolean>(false);
  const [mounted, setMounted] = useState<boolean>(false);

  useEffect(() => {
    setMounted(true);

    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const sections = ['home', 'skills', 'projects'];
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

  const handleEmail = () => {
    window.location.href = 'mailto:rishadkarappa@gmail.com';
  };

  const handleLinkedIn = () => {
    window.open('https://www.linkedin.com/in/rishad-dev/', '_blank');
  };

  const handleGitHub = () => {
    window.open('https://github.com/rishadsinu', '_blank');
  };

  const handleX = () => {
    window.open('https://x.com/rishaddl', '_blank');
  };

  const skills = {
    frontend: ['React.js', 'TypeScript'],
    backend: ['Node.js', 'Express.js', 'Microservices Architecture'],
    messaging: ['RabbitMQ', 'gRPC', 'REST APIs'],
    database: ['MongoDB', 'PostgreSQL'],
    devops: ['AWS', 'Docker', 'Kubernetes'],
    architecture: ['Clean Architecture', 'Repository Pattern', 'MVC']
  };


  const projects = [
  {
    title: 'WorkBee – Unskilled Labour Platform',
    description: 'A location-based marketplace connecting clients with unskilled workers (students, helpers) for tasks like flat moving, cleaning, catering, mounting, purchasing assistance, and other local services. Empowers students and unskilled workers to earn money through flexible work opportunities.',
    tech: ['MongoDB', 'Express.js', 'React.js', 'Node.js', 'WebSocket', 'WebRTC', 'RabbitMQ', 'Docker', 'Kubernetes'],
    architecture: ['Microservices Backend', 'Clean Architecture', 'SOLID Principles'],
    keyFeatures: [
      'Post and browse local unskilled work opportunities',
      'Real-time bidding and chat system via WebSocket',
      'Video consultation using WebRTC',
      'Geo-location based worker discovery and matching',
      'Push notification (ws)',
      'Message queue with RabbitMQ for scalability',
      'Multi-role system (Client, Worker, Admin)',
      'Secure payment integration with escrow workflow',
      'Rating and review system for trust building',
      'Push notifications for new jobs and bids',
      'Docker containerization for deployment',
      'CI/CD pipeline with Kubernetes orchestration',
      'Microservices architecture for independent scaling'
    ],
    highlights: ['Microservices', 'Real-time', 'WebRTC', 'Geo-location', 'Clean Architecture'],
    github: [
      { label: 'Backend', url: 'https://github.com/rishadsinu/workbee-backend' },
      { label: 'Frontend', url: 'https://github.com/rishadsinu/workbee-frontend' }
    ]
  },
  {
    title: 'WristWise – Watch E-Commerce Platform',
    description: 'Advanced e-commerce platform for watch retail with comprehensive admin panel and customer features. Built with Node.js and Express, offering seamless shopping experience with dynamic filtering, secure payments via Razorpay, and powerful backend management tools.',
    tech: ['MongoDB', 'Express.js', 'Node.js', 'EJS', 'Bootstrap', 'HTML/CSS', 'Razorpay', 'AWS', 'Nginx'],
    architecture: ['MVC (Model-View-Controller)'],
    keyFeatures: [
      'Advanced product search and filtering system',
      'Dynamic sorting by price, rating, and popularity',
      'Secure payment integration with Razorpay',
      'Admin dashboard with visual data representation',
      'Coupon creation and offer management',
      'Comprehensive sales reports (daily, weekly, monthly)',
      'User authentication with Passport.js',
      'Email notifications via Nodemailer',
      'PDF invoice generation with PDFKit',
      'Product and inventory management',
      'Order tracking and management system',
      'Responsive design with Bootstrap',
      'AWS deployment with Nginx server',
      'Session management and user cart persistence'
    ],
    highlights: ['E-Commerce', 'Rezorpay ( payment gateway )', 'Admin Dashboard', 'AWS Hosting', 'MVC'],
    github: [
      { label: 'Repository', url: 'https://github.com/rishadsinu/wrist-wise-e-commerce-website' }
    ]
  }
];



  return (

    <div className={`min-h-screen pb-24 transition-colors duration-300 ${darkMode ? 'bg-black text-white' : 'bg-white text-black'}`}>

      {/* Light rays background effect */}
      <div style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', zIndex: 0, pointerEvents: 'none' }}>
        <LightRays
          raysOrigin="top-center"
          raysColor={darkMode ? "#00ffff" : "#ff00ff"}
          raysSpeed={1.5}
          lightSpread={0.8}
          rayLength={1.2}
          followMouse={true}
          mouseInfluence={0.1}
          noiseAmount={0.1}
          distortion={0.05}
        />
      </div>


      {/* Centered Compact Bottom Navigation Bar */}
      <nav className="fixed bottom-6 left-0 right-0 z-50 flex justify-center px-4">
        <div
          className={`
      flex items-center gap-2 px-6 py-3 rounded-full
      transition-all duration-300
      ${darkMode
              ? 'bg-white/2'
              : 'bg-black/2'
            }
    `}
          style={{
            backdropFilter: 'blur(5px)',
            WebkitBackdropFilter: 'blur(5px)',
            boxShadow: darkMode
              ? '0 8px 32px 0 rgba(0, 0, 0, 0.37), inset 0 1px 0 0 rgba(255, 255, 255, 0.1)'
              : '0 8px 32px 0 rgba(31, 38, 135, 0.37), inset 0 1px 0 0 rgba(255, 255, 255, 0.5)',
            background: darkMode
              ? 'linear-gradient(135deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.05) 100%)'
              : 'linear-gradient(135deg, rgba(255, 255, 255, 0.3) 0%, rgba(255, 255, 255, 0.1) 100%)',
          }}
        >

          {/* Social Media Icons */}
          <div className="flex items-center gap-1">
            

            <button
              onClick={handleGitHub}
              className={`p-2 rounded-full transition-all duration-200 ${darkMode
                ? 'hover:bg-white/10 text-white/70 hover:text-white active:scale-95'
                : 'hover:bg-black/10 text-black/70 hover:text-black active:scale-95'
                }`}
              style={{
                backdropFilter: 'blur(4px)',
                WebkitBackdropFilter: 'blur(4px)',
              }}
              aria-label="GitHub"
            >
              <Github size={18} />
            </button>

            <button
              onClick={handleLinkedIn}
              className={`p-2 rounded-full transition-all duration-200 ${darkMode
                ? 'hover:bg-white/10 text-white/70 hover:text-white active:scale-95'
                : 'hover:bg-black/10 text-black/70 hover:text-black active:scale-95'
                }`}
              style={{
                backdropFilter: 'blur(4px)',
                WebkitBackdropFilter: 'blur(4px)',
              }}
              aria-label="LinkedIn"
            >
              <Linkedin size={18} />
            </button>

            <button
              onClick={handleX}
              className={`p-2 rounded-full transition-all duration-200 ${darkMode
                ? 'hover:bg-white/10 text-white/70 hover:text-white active:scale-95'
                : 'hover:bg-black/10 text-black/70 hover:text-black active:scale-95'
                }`}
              style={{
                backdropFilter: 'blur(4px)',
                WebkitBackdropFilter: 'blur(4px)',
              }}
              aria-label="X (Twitter)"
            >
              <XIcon />
            </button>

            <button
              onClick={handleEmail}
              className={`p-2 rounded-full transition-all duration-200 ${darkMode
                ? 'hover:bg-white/10 text-white/70 hover:text-white active:scale-95'
                : 'hover:bg-black/10 text-black/70 hover:text-black active:scale-95'
                }`}
              style={{
                backdropFilter: 'blur(4px)',
                WebkitBackdropFilter: 'blur(4px)',
              }}
              aria-label="Email"
            >
              <Mail size={18} />
            </button>
          </div>

          {/* Divider */}
          <div
            className={`h-6 w-px mx-1 ${darkMode ? 'bg-white/20' : 'bg-black/20'}`}
            style={{
              boxShadow: darkMode
                ? '0 0 8px rgba(255, 255, 255, 0.1)'
                : '0 0 8px rgba(0, 0, 0, 0.1)'
            }}
          />

          {/* Theme Toggle */}
          <button
            onClick={() => setDarkMode(!darkMode)}
            className={`relative p-2.5 rounded-full transition-all duration-300 ${darkMode
              ? 'bg-white/10 hover:bg-white/20 active:scale-95'
              : 'bg-black/10 hover:bg-black/20 active:scale-95'
              }`}
            style={{
              backdropFilter: 'blur(4px)',
              WebkitBackdropFilter: 'blur(4px)',
              boxShadow: darkMode
                ? '0 4px 16px rgba(255, 255, 255, 0.1), inset 0 1px 0 rgba(255, 255, 255, 0.2)'
                : '0 4px 16px rgba(0, 0, 0, 0.1), inset 0 1px 0 rgba(255, 255, 255, 0.3)',
            }}
            aria-label="Toggle theme"
          >
            <div className="relative w-5 h-5">
              <Sun
                size={20}
                className={`absolute inset-0 transition-all duration-300 ${darkMode
                  ? 'opacity-0 rotate-90 scale-0'
                  : 'opacity-100 rotate-0 scale-100'
                  }`}
              />
              <Moon
                size={20}
                className={`absolute inset-0 transition-all duration-300 ${darkMode
                  ? 'opacity-100 rotate-0 scale-100'
                  : 'opacity-0 -rotate-90 scale-0'
                  }`}
              />
            </div>
          </button>
        </div>
      </nav>


      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center px-4 sm:px-6 pt-20 sm:pt-0">
        <div className="max-w-4xl w-full">
          <div className="flex flex-col md:flex-row items-center md:items-start gap-6 md:gap-8">
            {/* Profile Image - Left Side */}
            <div className="flex-shrink-0">
              <div className="relative">
                <div className={`absolute inset-0 rounded-full blur-2xl opacity-10 ${darkMode ? 'bg-white' : 'bg-black'}`}></div>
                <div className={`relative w-24 h-24 sm:w-28 sm:h-28 rounded-full overflow-hidden border-2 ${darkMode ? 'border-white/10' : 'border-black/10'
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

            {/* Content - Right Side */}
            <div className="flex-1 space-y-4 text-center md:text-left">
              <div className="space-y-2">
                <h1 className="text-1xl sm:text-1xl font-bold tracking-tight">
                  Muhammed Rishad Karappa
                </h1>
                <p className={`text-base sm:text ${darkMode ? 'text-white/60' : 'text-black/60'}`}>
                  MERN Stack Developer<br />
                </p>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-wrap gap-3 justify-center md:justify-start">
                <button
                  className={`group flex items-center gap-1.5 px-3 py-1 rounded-full text-[12px] font-medium border transition-all ${darkMode
                    ? 'border-white/20 hover:bg-white/5'
                    : 'border-black/20 hover:bg-black/5'
                    }`}
                >
                  Schedule Meeting
                  <Calendar size={12} className="group-hover:translate-x-0.5 transition-transform" />
                </button>

                <button
                  className={`flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[12px] font-medium border transition-colors ${darkMode
                    ? 'border-white/20 hover:bg-white/5'
                    : 'border-black/20 hover:bg-black/5'
                    }`}
                >
                  Resume
                  <Download size={12} />
                </button>


              </div>
            </div>
          </div>

          {/* About - Full Width Below */}
          <div className={`mt-12 p-6 rounded-lg border ${darkMode ? 'border-white/10 bg-white/5' : 'border-black/10 bg-black/5'}`}>
            <p className={`text-sm leading-relaxed ${darkMode ? 'text-white/70' : 'text-black/70'}`}>
              Hi <span className="inline-block animate-wave">👋</span> ,  I'm Rishad, MERN Stack Developer with a strong background in building scalable and high-performance web applications. My expertise spans both frontend and backend development, with hands-on experience in:
              <br /><br />
              Frontend: React.js, TypeScript<br />
              Backend: Node.js, Express.js, Microservices architecture<br />
              Messaging & Communication: RabbitMQ, gRPC, REST<br />
              Architecture: Clean Architecture, Repository Pattern, MVC<br />
              Databases: MongoDB, PostgreSQL<br />
              DevOps & Cloud: AWS, Docker, Kubernetes<br />
              <br />
              I focus on writing efficient, clean, and maintainable code while designing applications that are optimized for performance and scalability. I thrive in collaborative environments, enjoy solving problems, and am always eager to build.
            </p>
          </div>
        </div>
      </section>


      {/* Skills Section */}
      <section id="skills" className={`py-16 px-4 sm:px-6 border-t ${darkMode ? 'border-white/10' : 'border-black/10'}`}>
        <div className="max-w-5xl mx-auto">
          <h2 className="text-1xl font-bold mb-8">Technical Stack</h2>
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
          <h2 className="text-1xl font-bold mb-8">Projects</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {projects.map((project, index) => (
              <ProjectCard key={index} project={project} darkMode={darkMode} />
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}

function SkillCard({ title, icon, skills, darkMode }: any) {
  return (
    <div className={`p-3 rounded-lg border transition-all hover:scale-[1.02] ${darkMode ? 'border-white/10 hover:border-white/20 bg-white/5' : 'border-black/10 hover:border-black/20 bg-black/5'
      }`}>
      <div className="flex items-center gap-2 mb-2">
        {icon}
        <h3 className="text-xs font-semibold">{title}</h3>
      </div>
      <ul className="space-y-0.5">
        {skills.map((skill: string, index: number) => (
          <li key={index} className={`text-xs ${darkMode ? 'text-white/60' : 'text-black/60'}`}>
            {skill}
          </li>
        ))}
      </ul>
    </div>
  );
}

function ProjectCard({ project, darkMode }: any) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className={`group rounded-lg border transition-all ${
      darkMode ? 'border-white/10 hover:border-white/20 bg-white/5' : 'border-black/10 hover:border-black/20 bg-black/5'
    }`}>
      
      {/* Header - Always Visible */}
      <div className="p-5">
        <div className="flex items-start justify-between gap-2">
          <div className="flex-1">
            <h3 className="text-base font-semibold mb-2">{project.title}</h3>
            <p className={`text-xs leading-relaxed ${darkMode ? 'text-white/60' : 'text-black/60'}`}>
              {project.description}
            </p>
          </div>
          
          {/* Expand/Collapse Button */}
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className={`flex-shrink-0 p-2 rounded-full transition-all ${
              darkMode 
                ? 'hover:bg-white/10 text-white/70' 
                : 'hover:bg-black/10 text-black/70'
            }`}
            aria-label={isExpanded ? "Collapse details" : "Expand details"}
          >
            <ArrowRight 
              size={16} 
              className={`transition-transform duration-300 ${
                isExpanded ? 'rotate-90' : ''
              }`}
              style={{
                transform: isExpanded ? 'rotate(0deg)' : 'rotate(0deg)'
              }}
            />
          </button>
        </div>
      </div>

      {/* Expandable Content */}
      <div 
        className={`overflow-hidden transition-all duration-300 ease-in-out ${
          isExpanded ? 'max-h-[2000px] opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className={`px-5 pb-5 border-t ${darkMode ? 'border-white/10' : 'border-black/10'}`}>
          
          {/* Highlights */}
          {project.highlights && (
            <div className="mt-4">
              <div className="flex flex-wrap gap-1.5">
                {project.highlights.map((highlight: string, index: number) => (
                  <span 
                    key={index} 
                    className={`text-xs px-2 py-0.5 rounded-md ${
                      darkMode ? 'bg-white/10' : 'bg-black/10'
                    }`}
                  >
                    {highlight}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Architecture */}
          {project.architecture && (
            <div className="mt-4">
              <p className={`text-xs font-medium mb-2 ${
                darkMode ? 'text-white/80' : 'text-black/80'
              }`}>
                Architecture:
              </p>
              <div className="flex flex-wrap gap-1.5">
                {project.architecture.map((arch: string, index: number) => (
                  <span 
                    key={index} 
                    className={`text-xs px-2 py-1 rounded ${
                      darkMode 
                        ? 'bg-blue-500/20 text-blue-300' 
                        : 'bg-blue-500/20 text-blue-700'
                    }`}
                  >
                    {arch}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Tech Stack */}
          {project.tech && (
            <div className="mt-4">
              <p className={`text-xs font-medium mb-2 ${
                darkMode ? 'text-white/80' : 'text-black/80'
              }`}>
                Tech Stack:
              </p>
              <div className="flex flex-wrap gap-1">
                {project.tech.map((tech: string, index: number) => (
                  <span 
                    key={index} 
                    className={`text-xs px-2 py-0.5 rounded border ${
                      darkMode 
                        ? 'border-white/20 text-white/60' 
                        : 'border-black/20 text-black/60'
                    }`}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Key Features */}
          {project.keyFeatures && (
            <div className="mt-4">
              <p className={`text-xs font-medium mb-2 ${
                darkMode ? 'text-white/80' : 'text-black/80'
              }`}>
                Key Features ({project.keyFeatures.length}):
              </p>
              <ul className={`text-xs space-y-1.5 ${
                darkMode ? 'text-white/60' : 'text-black/60'
              }`}>
                {project.keyFeatures.map((feature: string, index: number) => (
                  <li key={index} className="flex items-start gap-2">
                    <span className={`mt-1 ${darkMode ? 'text-white/40' : 'text-black/40'}`}>
                      •
                    </span>
                    <span className="flex-1">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* GitHub Links */}
          {project.github && (
            <div className={`flex flex-wrap gap-2 mt-4 pt-4 border-t ${
              darkMode ? 'border-white/10' : 'border-black/10'
            }`}>
              {project.github.map((repo: any, index: number) => (
                <a
                  key={index}
                  href={repo.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`inline-flex items-center gap-1.5 text-xs px-3 py-1.5 rounded-full ${
                    darkMode 
                      ? 'bg-white/10 text-white/70 hover:bg-white/20 hover:text-white' 
                      : 'bg-black/10 text-black/70 hover:bg-black/20 hover:text-black'
                  } transition-all hover:scale-105`}
                >
                  <Github size={14} />
                  {repo.label}
                </a>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
