import React from 'react';
import { Briefcase, Layers, Smartphone, Sparkles, Code2, CheckCircle, ArrowRight, Terminal } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

const iconMap = {
  Briefcase: Briefcase,
  Layers: Layers,
  Smartphone: Smartphone,
  Sparkles: Sparkles,
};

export default function About() {
  return (
    <section id="about" className="py-24 relative overflow-hidden bg-[#090a0f]">
      {/* Background radial glow */}
      <div className="absolute top-1/2 right-0 w-[450px] h-[450px] bg-[#10f279]/5 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-widest text-[#10f279] mb-3">
              <span className="w-6 h-px bg-[#10f279]"></span>
              <span>01 / ABOUT ME</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
              Engineering with Purpose, <br className="hidden sm:inline" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#10f279] via-emerald-400 to-[#38bdf8]">
                Crafting Modern Web Experiences.
              </span>
            </h2>
          </div>
          
          <div className="text-sm font-mono text-slate-400 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#10f279] animate-pulse"></span>
            <span>Based in Jaipur, India • Open for Roles</span>
          </div>
        </div>

        {/* Narrative & Quick Bio Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-16">
          
          {/* Main Biography Block */}
          <div className="lg:col-span-7 glass-panel p-8 sm:p-10 rounded-2xl border border-white/10 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#10f279]/10 rounded-full blur-2xl pointer-events-none" />

            <div className="flex items-center gap-3 mb-6 pb-4 border-b border-white/10">
              <div className="w-10 h-10 rounded-xl bg-[#10f279]/10 border border-[#10f279]/30 flex items-center justify-center text-[#10f279]">
                <Code2 className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-white">Full-Stack Craftsmanship</h3>
                <p className="text-xs font-mono text-slate-400">MERN Stack • React.js • REST APIs</p>
              </div>
            </div>

            <p className="text-base sm:text-lg leading-relaxed text-slate-200 font-normal">
              "{personalInfo.aboutText}"
            </p>

            {/* Core Values / Philosophy */}
            <div className="mt-8 pt-6 border-t border-white/10 grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs font-mono text-slate-300">
              <div className="flex items-start gap-2.5">
                <CheckCircle className="w-4 h-4 text-[#10f279] shrink-0 mt-0.5" />
                <span>Clean, modular, and maintainable React component structures</span>
              </div>
              <div className="flex items-start gap-2.5">
                <CheckCircle className="w-4 h-4 text-[#10f279] shrink-0 mt-0.5" />
                <span>Production deployment &amp; real client delivery experience</span>
              </div>
              <div className="flex items-start gap-2.5">
                <CheckCircle className="w-4 h-4 text-[#10f279] shrink-0 mt-0.5" />
                <span>Strong foundational programming &amp; API integration skills</span>
              </div>
              <div className="flex items-start gap-2.5">
                <CheckCircle className="w-4 h-4 text-[#10f279] shrink-0 mt-0.5" />
                <span>Passionate about learning new tools &amp; modern engineering</span>
              </div>
            </div>
          </div>

          {/* Quick Facts Card */}
          <div className="lg:col-span-5 space-y-4">
            <div className="glass-panel p-6 sm:p-7 rounded-2xl border border-white/10 space-y-4">
              <div className="flex items-center justify-between pb-3 border-b border-white/10">
                <span className="text-xs font-mono uppercase tracking-wider text-slate-400">Profile Snapshot</span>
                <span className="px-2 py-0.5 rounded text-[11px] font-mono font-semibold bg-[#10f279]/15 text-[#10f279] border border-[#10f279]/30">
                  Fresher / Ready
                </span>
              </div>

              <div className="space-y-3 text-xs font-mono">
                <div className="flex justify-between py-1.5 border-b border-white/5">
                  <span className="text-slate-400">Primary Stack</span>
                  <span className="text-white font-semibold">MERN (React, Node, Express, Mongo)</span>
                </div>
                <div className="flex justify-between py-1.5 border-b border-white/5">
                  <span className="text-slate-400">Education</span>
                  <span className="text-white font-semibold">MCA (Pursuing) | BCA (7.89 CGPA)</span>
                </div>
                <div className="flex justify-between py-1.5 border-b border-white/5">
                  <span className="text-slate-400">Production Experience</span>
                  <span className="text-[#10f279] font-semibold">Nielacare &amp; Poiya Health</span>
                </div>
                <div className="flex justify-between py-1.5 border-b border-white/5">
                  <span className="text-slate-400">Internships</span>
                  <span className="text-white font-semibold">Simtrak Solutions &amp; BR Softech</span>
                </div>
                <div className="flex justify-between py-1.5 border-b border-white/5">
                  <span className="text-slate-400">Notice Period</span>
                  <span className="text-[#10f279] font-semibold">Immediate Joiner</span>
                </div>
                <div className="flex justify-between pt-1">
                  <span className="text-slate-400">Location Flexibility</span>
                  <span className="text-white font-semibold">Jaipur / Remote / Relocation</span>
                </div>
              </div>
            </div>

            {/* Quick CTA banner */}
            <div className="p-5 rounded-2xl bg-gradient-to-br from-[#101320] to-[#151a2d] border border-white/10 flex items-center justify-between">
              <div>
                <p className="text-xs text-slate-400 font-mono">Looking for a motivated developer?</p>
                <p className="text-sm font-bold text-white mt-0.5">Let's discuss your team's goals</p>
              </div>
              <a
                href="#contact"
                className="p-2.5 rounded-xl bg-[#10f279] text-[#090a0f] hover:bg-[#0ee06e] transition-all transform hover:scale-105 shadow-[0_0_15px_rgba(16,242,121,0.3)]"
                aria-label="Contact Shivang"
              >
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>

        </div>

        {/* 4 Highlights Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {personalInfo.highlights.map((item, index) => {
            const Icon = iconMap[item.iconName] || Briefcase;
            return (
              <div
                key={index}
                className="group glass-panel p-6 rounded-2xl border border-white/10 hover:border-[#10f279]/50 transition-all duration-300 hover:shadow-[0_10px_30px_rgba(16,242,121,0.1)] relative overflow-hidden"
              >
                {/* Glow on hover */}
                <div className="absolute top-0 right-0 w-24 h-24 bg-[#10f279]/0 group-hover:bg-[#10f279]/10 rounded-full blur-xl transition-all duration-300 pointer-events-none" />

                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-xl bg-[#141724] border border-white/10 group-hover:border-[#10f279]/40 group-hover:bg-[#10f279]/10 flex items-center justify-center text-slate-300 group-hover:text-[#10f279] transition-all duration-300">
                    <Icon className="w-5 h-5" />
                  </div>
                  <span className="px-2.5 py-1 rounded-full text-[10px] font-mono uppercase font-semibold bg-white/5 border border-white/10 text-slate-400 group-hover:text-[#10f279] group-hover:border-[#10f279]/30 transition-colors">
                    {item.tag}
                  </span>
                </div>

                <h3 className="text-base font-bold text-white mb-2 group-hover:text-[#10f279] transition-colors">
                  {item.title}
                </h3>
                <p className="text-xs leading-relaxed text-slate-400">
                  {item.desc}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
