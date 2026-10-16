import React, { useState, useEffect } from 'react';
import { Menu, X, Download, ArrowUpRight, Code, Sparkles } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

const navItems = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Education', href: '#education' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [activeSection, setActiveSection] = useState('home');
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      // Active section detection
      const sections = navItems.map((item) => item.href.substring(1));
      const scrollPosition = window.scrollY + 200;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i]);
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (e, href) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      setMobileMenuOpen(false);
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'py-3 bg-[#090a0f]/85 backdrop-blur-md border-b border-white/10 shadow-[0_4px_30px_rgba(0,0,0,0.5)]'
          : 'py-5 bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a
            href="#home"
            onClick={(e) => scrollToSection(e, '#home')}
            className="group flex items-center gap-2.5 font-mono text-base font-bold tracking-tight text-white focus:outline-none"
            aria-label="Shivang Sharma Home"
          >
            <div className="w-8 h-8 rounded-lg bg-[#11131c] border border-[#10f279]/30 flex items-center justify-center group-hover:border-[#10f279] group-hover:shadow-[0_0_15px_rgba(16,242,121,0.3)] transition-all duration-300">
              <span className="text-[#10f279] text-sm font-black">&lt;&gt;</span>
            </div>
            <div className="flex items-center gap-1.5">
              <span className="text-white group-hover:text-[#10f279] transition-colors">Shivang</span>
              <span className="text-[#10f279] font-black">.dev</span>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center gap-1 bg-[#10121a]/90 px-3 py-1.5 rounded-full border border-white/10 backdrop-blur-md">
            {navItems.map((item) => {
              const isActive = activeSection === item.href.substring(1);
              return (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={(e) => scrollToSection(e, item.href)}
                  className={`relative px-3.5 py-1.5 text-xs font-medium rounded-full transition-all duration-200 ${
                    isActive
                      ? 'text-[#090a0f] font-semibold bg-[#10f279] shadow-[0_0_15px_rgba(16,242,121,0.4)]'
                      : 'text-slate-300 hover:text-white hover:bg-white/5'
                  }`}
                >
                  {item.label}
                </a>
              );
            })}
          </nav>

          {/* Status & Resume Action */}
          <div className="hidden sm:flex items-center gap-3">
            {/* Available badge */}
            <div className="hidden xl:flex items-center gap-2 px-3 py-1 rounded-full bg-[#10f279]/10 border border-[#10f279]/20 text-[11px] font-medium text-[#10f279]">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#10f279] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#10f279]"></span>
              </span>
              <span>Available for Hire</span>
            </div>

            {/* Resume button */}
            <a
              href={personalInfo.contact.resumeUrl}
              download="Shivang_Sharma_Resume.pdf"
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-semibold text-white bg-[#161926] hover:bg-[#1f2438] border border-white/15 hover:border-[#10f279]/50 hover:text-[#10f279] transition-all duration-300 shadow-sm"
              title="Download Shivang's Resume PDF"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Resume</span>
            </a>

            {/* Direct Connect CTA */}
            <a
              href="#contact"
              onClick={(e) => scrollToSection(e, '#contact')}
              className="inline-flex items-center gap-1 px-4 py-2 rounded-full text-xs font-bold text-[#090a0f] bg-[#10f279] hover:bg-[#0fe070] transition-all duration-300 shadow-[0_0_20px_rgba(16,242,121,0.25)] hover:shadow-[0_0_25px_rgba(16,242,121,0.45)] transform hover:-translate-y-0.5"
            >
              <span>Let's Talk</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="flex sm:hidden items-center gap-2">
            <a
              href={personalInfo.contact.resumeUrl}
              download="Shivang_Sharma_Resume.pdf"
              className="p-2 rounded-lg bg-[#161926] border border-white/10 text-white hover:text-[#10f279]"
              aria-label="Download Resume"
            >
              <Download className="w-4 h-4" />
            </a>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg bg-[#11131c] border border-white/10 text-slate-300 hover:text-white focus:outline-none focus:ring-2 focus:ring-[#10f279]"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5 text-[#10f279]" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#0c0e17]/95 border-b border-white/10 backdrop-blur-xl px-4 pt-3 pb-6 space-y-2 mt-2 transition-all">
          <div className="flex items-center justify-between pb-3 mb-2 border-b border-white/5">
            <div className="flex items-center gap-2 text-xs font-medium text-[#10f279]">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#10f279] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#10f279]"></span>
              </span>
              <span>Available for Software Opportunities</span>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-1.5">
            {navItems.map((item) => {
              const isActive = activeSection === item.href.substring(1);
              return (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={(e) => scrollToSection(e, item.href)}
                  className={`px-3 py-2.5 rounded-lg text-sm font-medium transition-all ${
                    isActive
                      ? 'bg-[#10f279] text-[#090a0f] font-bold shadow-[0_0_15px_rgba(16,242,121,0.3)]'
                      : 'text-slate-300 hover:text-white hover:bg-white/5'
                  }`}
                >
                  {item.label}
                </a>
              );
            })}
          </div>
          <div className="pt-3 border-t border-white/10 flex flex-col gap-2">
            <a
              href="#contact"
              onClick={(e) => scrollToSection(e, '#contact')}
              className="w-full text-center py-2.5 rounded-xl font-bold text-sm text-[#090a0f] bg-[#10f279] shadow-[0_0_20px_rgba(16,242,121,0.3)]"
            >
              Get In Touch
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
