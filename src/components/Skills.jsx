import React, { useState } from 'react';
import { 
  Code2, Terminal, Coffee, FileCode, Palette, 
  Atom, Layout, Wind, Server, Cpu, Database, 
  HardDrive, Network, ShieldCheck, GitBranch, 
  Code, Send, Cloud, ServerCog, Layers, CheckCircle2
} from 'lucide-react';
import { GithubIcon } from './Icons';
import { skillsData } from '../data/portfolioData';

const iconMap = {
  Code2,
  Terminal,
  Coffee,
  FileCode,
  Palette,
  Atom,
  Layout,
  Wind,
  Server,
  Cpu,
  Database,
  HardDrive,
  Network,
  ShieldCheck,
  GitBranch,
  Github: GithubIcon,
  Code,
  Send,
  Cloud,
  ServerCog
};

export default function Skills() {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', ...skillsData.map((s) => s.category)];

  const filteredSkills = selectedCategory === 'All'
    ? skillsData
    : skillsData.filter((s) => s.category === selectedCategory);

  return (
    <section id="skills" className="py-24 relative overflow-hidden bg-[#0c0e17]/60">
      {/* Background radial glow */}
      <div className="absolute top-1/3 left-10 w-[500px] h-[500px] bg-[#10f279]/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-widest text-[#10f279] mb-3">
              <span className="w-6 h-px bg-[#10f279]"></span>
              <span>02 / TECHNICAL ARSENAL</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
              Tools, Languages &amp; <br className="hidden sm:inline" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#10f279] to-[#38bdf8]">
                Modern Frameworks.
              </span>
            </h2>
          </div>
          <p className="text-slate-400 text-sm max-w-md font-mono">
            Practical hands-on technical skills applied across full-stack applications, client websites, and AI integrations. No arbitrary percentages.
          </p>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex flex-wrap items-center gap-2 mb-10 pb-4 border-b border-white/10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-xl text-xs font-mono font-medium transition-all duration-200 cursor-pointer ${
                selectedCategory === cat
                  ? 'bg-[#10f279] text-[#090a0f] font-bold shadow-[0_0_15px_rgba(16,242,121,0.3)]'
                  : 'bg-[#121522] text-slate-300 hover:text-white hover:bg-[#1a1f32] border border-white/5'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Skills Category Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSkills.map((categoryGroup, index) => (
            <div
              key={categoryGroup.category}
              className="glass-panel rounded-2xl p-6 sm:p-7 border border-white/10 hover:border-[#10f279]/40 transition-all duration-300 flex flex-col justify-between group hover:shadow-[0_10px_30px_rgba(0,0,0,0.5)] relative overflow-hidden"
            >
              {/* Subtle top accent bar */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#10f279]/30 to-transparent group-hover:via-[#10f279] transition-all" />

              <div>
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-base sm:text-lg font-bold text-white group-hover:text-[#10f279] transition-colors">
                    {categoryGroup.category}
                  </h3>
                  <span className="text-[11px] font-mono text-slate-400 px-2 py-0.5 rounded bg-white/5 border border-white/5">
                    {categoryGroup.skills.length} skills
                  </span>
                </div>
                <p className="text-xs text-slate-400 font-sans leading-relaxed mb-6">
                  {categoryGroup.description}
                </p>

                {/* Individual Skill Badges */}
                <div className="grid grid-cols-1 gap-2.5">
                  {categoryGroup.skills.map((skill) => {
                    const IconComponent = iconMap[skill.icon] || Code2;
                    return (
                      <div
                        key={skill.name}
                        className="flex items-center justify-between p-2.5 rounded-xl bg-[#0f121d] border border-white/5 hover:border-[#10f279]/40 hover:bg-[#151a2b] transition-all duration-200 group/skill"
                      >
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 rounded-lg bg-[#141827] border border-white/10 flex items-center justify-center text-slate-300 group-hover/skill:text-[#10f279] group-hover/skill:border-[#10f279]/40 transition-colors">
                            <IconComponent className="w-4 h-4" />
                          </div>
                          <span className="text-xs sm:text-sm font-semibold text-slate-200 group-hover/skill:text-white">
                            {skill.name}
                          </span>
                        </div>
                        <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-white/5 text-slate-400 group-hover/skill:text-[#10f279] group-hover/skill:bg-[#10f279]/10">
                          {skill.level}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Bottom tag indicator */}
              <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between text-[11px] font-mono text-slate-500">
                <span className="flex items-center gap-1.5 text-slate-400">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#10f279]" />
                  <span>Production Tested</span>
                </span>
                <span className="text-slate-500 group-hover:text-[#10f279] transition-colors">Verified</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
