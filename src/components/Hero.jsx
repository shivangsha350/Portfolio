import React, { useState, useEffect } from 'react';
import { ArrowDown, Download, Mail, Sparkles, ChevronRight, ExternalLink } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';
import { personalInfo, marqueeTechs } from '../data/portfolioData';
import TerminalVisual from './TerminalVisual';

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(100);

  const roles = personalInfo.animatedRoles;

  // Typewriter effect for cycling roles
  useEffect(() => {
    const currentRole = roles[roleIndex];
    let timeout;

    if (!isDeleting && displayText === currentRole) {
      // Pause at full text
      timeout = setTimeout(() => {
        setIsDeleting(true);
        setTypingSpeed(45);
      }, 2200);
    } else if (isDeleting && displayText === '') {
      // Switch to next word
      setIsDeleting(false);
      setRoleIndex((prev) => (prev + 1) % roles.length);
      setTypingSpeed(90);
    } else {
      timeout = setTimeout(() => {
        const nextChar = isDeleting
          ? currentRole.substring(0, displayText.length - 1)
          : currentRole.substring(0, displayText.length + 1);
        setDisplayText(nextChar);
      }, typingSpeed);
    }

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, roleIndex, roles, typingSpeed]);

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="relative min-h-screen pt-28 pb-16 flex flex-col justify-between overflow-hidden bg-grid-pattern">
      {/* Background radial gradient spotlights */}
      <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-[#10f279]/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-1/3 right-1/4 translate-x-1/2 -translate-y-1/2 w-[450px] h-[450px] bg-[#38bdf8]/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full my-auto py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Intro & Content */}
          <div className="lg:col-span-7 space-y-6 text-left">
            
            {/* Status Badge */}
            <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-[#11131c] border border-[#10f279]/30 shadow-[0_0_20px_rgba(16,242,121,0.15)] backdrop-blur-md">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#10f279] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#10f279]"></span>
              </span>
              <span className="text-[11px] sm:text-xs font-mono font-bold tracking-wider text-[#10f279] uppercase">
                {personalInfo.statusLabel}
              </span>
            </div>

            {/* Main Heading */}
            <div className="space-y-2">
              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-tight">
                Hi, I'm <br />
                <span className="bg-gradient-to-r from-white via-slate-100 to-slate-400 bg-clip-text text-transparent">
                  Shivang Sharma.
                </span>
              </h1>

              {/* Dynamic Typewriter Role */}
              <div className="h-12 sm:h-16 flex items-center">
                <h2 className="text-2xl sm:text-4xl lg:text-4xl font-extrabold text-[#10f279] font-mono tracking-tight flex items-center">
                  <span>{displayText}</span>
                  <span className="w-1 h-8 sm:h-10 ml-1 bg-[#10f279] inline-block animate-blink"></span>
                </h2>
              </div>
            </div>

            {/* Supporting Text */}
            <p className="text-base sm:text-lg text-slate-300 max-w-2xl leading-relaxed">
              {personalInfo.supportingText}
            </p>

            {/* Primary Action Buttons */}
            <div className="pt-2 flex flex-wrap items-center gap-4">
              <button
                type="button"
                onClick={() => scrollToSection('projects')}
                className="group inline-flex items-center gap-2 px-7 py-3.5 rounded-full text-sm font-bold text-[#090a0f] bg-[#10f279] hover:bg-[#0ee06e] transition-all duration-300 shadow-[0_0_25px_rgba(16,242,121,0.35)] hover:shadow-[0_0_35px_rgba(16,242,121,0.55)] transform hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
              >
                <span>Explore My Work</span>
                <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              <a
                href={personalInfo.contact.resumeUrl}
                download="Shivang_Sharma_Resume.pdf"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full text-sm font-semibold text-white bg-[#131622] hover:bg-[#1a1f30] border border-white/15 hover:border-[#10f279]/50 hover:text-[#10f279] transition-all duration-300 shadow-md transform hover:-translate-y-0.5"
                title="Download Shivang's Resume PDF"
              >
                <Download className="w-4 h-4 text-[#10f279]" />
                <span>Download Resume</span>
              </a>
            </div>

            {/* Social Links & Highlights Bar */}
            <div className="pt-4 flex flex-wrap items-center gap-6 text-sm text-slate-400">
              <div className="flex items-center gap-3">
                <a
                  href={personalInfo.contact.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-xl bg-[#11131c] border border-white/10 hover:border-[#10f279]/50 hover:text-[#10f279] hover:bg-[#161a29] transition-all"
                  aria-label="GitHub Profile"
                  title="GitHub Profile"
                >
                  <GithubIcon className="w-5 h-5" />
                </a>

                <a
                  href={personalInfo.contact.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-xl bg-[#11131c] border border-white/10 hover:border-[#38bdf8]/50 hover:text-[#38bdf8] hover:bg-[#161a29] transition-all"
                  aria-label="LinkedIn Profile"
                  title="LinkedIn Profile"
                >
                  <LinkedinIcon className="w-5 h-5" />
                </a>

                <a
                  href={`mailto:${personalInfo.contact.email}`}
                  className="p-2.5 rounded-xl bg-[#11131c] border border-white/10 hover:border-[#10f279]/50 hover:text-[#10f279] hover:bg-[#161a29] transition-all"
                  aria-label="Email Shivang"
                  title={`Email: ${personalInfo.contact.email}`}
                >
                  <Mail className="w-5 h-5" />
                </a>
              </div>

              <div className="h-4 w-px bg-white/15 hidden sm:block" />

              <div className="flex items-center gap-2 text-xs font-mono text-slate-400">
                <span className="w-2 h-2 rounded-full bg-[#10f279]"></span>
                <span>Based in Jaipur, India • Ready for Remote &amp; On-Site</span>
              </div>
            </div>

          </div>

          {/* Right Column: Interactive Developer Terminal */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <TerminalVisual />
          </div>

        </div>
      </div>

      {/* Tech Ticker Marquee & Subtle Scroll Indicator */}
      <div className="w-full mt-auto pt-8 border-t border-white/10 bg-[#090a0f]/80 backdrop-blur-md">
        {/* Scroll indicator */}
        <div className="flex items-center justify-center pb-4">
          <button
            onClick={() => scrollToSection('about')}
            className="flex items-center gap-2 text-xs font-mono text-slate-400 hover:text-[#10f279] transition-colors focus:outline-none"
            aria-label="Scroll to About section"
          >
            <span className="w-4 h-7 rounded-full border border-slate-600 flex items-start justify-center p-1">
              <span className="w-1 h-2 rounded-full bg-[#10f279] animate-bounce" />
            </span>
            <span>Scroll to explore</span>
          </button>
        </div>

        {/* Marquee Ticker */}
        <div className="overflow-hidden py-3 bg-[#0d0f18]/90 border-y border-white/5 relative">
          <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-[#090a0f] to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-[#090a0f] to-transparent z-10 pointer-events-none" />
          
          <div className="animate-marquee flex items-center gap-8 whitespace-nowrap text-xs font-mono font-medium tracking-wider text-slate-400">
            {marqueeTechs.concat(marqueeTechs).map((tech, idx) => (
              <div key={idx} className="flex items-center gap-3">
                <span className="text-[#10f279] text-xs">◆</span>
                <span className="hover:text-white transition-colors">{tech}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
