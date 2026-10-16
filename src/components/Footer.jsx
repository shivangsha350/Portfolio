import React from 'react';
import { ArrowUp, Mail, Heart, Sparkles, Download } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';
import { personalInfo } from '../data/portfolioData';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-[#07080c] border-t border-white/10 pt-16 pb-12 overflow-hidden text-slate-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Row */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-white/10">
          
          {/* Brand & Bio */}
          <div className="md:col-span-5 space-y-4 text-left">
            <div className="flex items-center gap-2 font-mono text-lg font-bold text-white">
              <div className="w-8 h-8 rounded-lg bg-[#11131c] border border-[#10f279]/30 flex items-center justify-center">
                <span className="text-[#10f279] text-sm font-black">&lt;&gt;</span>
              </div>
              <span className="text-white">Shivang</span>
              <span className="text-[#10f279]">.dev</span>
            </div>
            <p className="text-sm text-slate-400 max-w-sm font-sans leading-relaxed">
              MERN Stack Developer &amp; Software Developer Fresher dedicated to building responsive, scalable digital experiences and reliable software applications.
            </p>
            <div className="flex items-center gap-2 text-xs font-mono text-[#10f279]">
              <span className="w-2 h-2 rounded-full bg-[#10f279] animate-pulse"></span>
              <span>Available for Software Development Roles</span>
            </div>
          </div>

          {/* Quick Navigation Links */}
          <div className="md:col-span-4 space-y-3 text-left">
            <h4 className="text-xs font-mono uppercase tracking-wider text-white font-bold">
              Site Navigation
            </h4>
            <div className="grid grid-cols-2 gap-2 text-xs font-mono">
              <a href="#home" className="hover:text-[#10f279] transition-colors">Home</a>
              <a href="#about" className="hover:text-[#10f279] transition-colors">About</a>
              <a href="#skills" className="hover:text-[#10f279] transition-colors">Skills</a>
              <a href="#projects" className="hover:text-[#10f279] transition-colors">Projects</a>
              <a href="#experience" className="hover:text-[#10f279] transition-colors">Experience</a>
              <a href="#education" className="hover:text-[#10f279] transition-colors">Education</a>
              <a href="#contact" className="hover:text-[#10f279] transition-colors">Contact</a>
              <a
                href={personalInfo.contact.resumeUrl}
                download="Shivang_Sharma_Resume.pdf"
                className="text-[#10f279] hover:underline flex items-center gap-1"
              >
                <Download className="w-3 h-3" />
                <span>Resume PDF</span>
              </a>
            </div>
          </div>

          {/* Connect & Social Links */}
          <div className="md:col-span-3 space-y-4 text-left">
            <h4 className="text-xs font-mono uppercase tracking-wider text-white font-bold">
              Connect With Me
            </h4>
            <div className="flex items-center gap-3">
              <a
                href={personalInfo.contact.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl bg-[#121522] border border-white/10 hover:border-[#10f279]/40 hover:text-[#10f279] transition-colors"
                aria-label="GitHub"
              >
                <GithubIcon className="w-4 h-4" />
              </a>
              <a
                href={personalInfo.contact.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl bg-[#121522] border border-white/10 hover:border-[#38bdf8]/40 hover:text-[#38bdf8] transition-colors"
                aria-label="LinkedIn"
              >
                <LinkedinIcon className="w-4 h-4" />
              </a>
              <a
                href={`mailto:${personalInfo.contact.email}`}
                className="p-2.5 rounded-xl bg-[#121522] border border-white/10 hover:border-[#10f279]/40 hover:text-[#10f279] transition-colors"
                aria-label="Email"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
            <p className="text-xs font-mono text-slate-500">
              Jaipur, Rajasthan, India
            </p>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-slate-500">
          <div>
            &copy; {new Date().getFullYear()} Shivang Sharma. All rights reserved.
          </div>

          <div className="flex items-center gap-4">
            <button
              onClick={scrollToTop}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#141726] border border-white/10 hover:border-[#10f279]/40 hover:text-[#10f279] transition-all cursor-pointer"
            >
              <ArrowUp className="w-3.5 h-3.5" />
              <span>Back to Top</span>
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
}
