import React from 'react';
import { Calendar, Building2, CheckCircle2, Briefcase, Sparkles, Terminal } from 'lucide-react';
import { experienceData } from '../data/portfolioData';

export default function Experience() {
  return (
    <section id="experience" className="py-24 relative overflow-hidden bg-[#0c0e17]/50">
      {/* Background radial glow */}
      <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-[#10f279]/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-widest text-[#10f279] mb-3">
              <span className="w-6 h-px bg-[#10f279]"></span>
              <span>04 / PROFESSIONAL JOURNEY</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
              Work Experience &amp; <br className="hidden sm:inline" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#10f279] via-emerald-400 to-[#38bdf8]">
                Industry Internships.
              </span>
            </h2>
          </div>
          <p className="text-slate-400 text-sm max-w-md font-mono">
            Practical development experience collaborating in real-world engineering teams, shipping client applications, and building AI tools.
          </p>
        </div>

        {/* Timeline Container */}
        <div className="relative border-l-2 border-white/10 ml-4 sm:ml-8 space-y-12">
          {experienceData.map((item, index) => (
            <div key={index} className="relative pl-6 sm:pl-10 group">
              
              {/* Timeline Node Dot */}
              <div className="absolute -left-[9px] top-4 w-4 h-4 rounded-full bg-[#090a0f] border-2 border-[#10f279] group-hover:scale-125 group-hover:shadow-[0_0_15px_rgba(16,242,121,0.8)] transition-all duration-300">
                <div className="w-1.5 h-1.5 rounded-full bg-[#10f279] mx-auto mt-[3px]" />
              </div>

              {/* Card Container */}
              <div className="glass-panel p-6 sm:p-8 rounded-3xl border border-white/10 group-hover:border-[#10f279]/40 transition-all duration-300 relative overflow-hidden group-hover:shadow-[0_15px_40px_rgba(0,0,0,0.5)]">
                {/* Header Row */}
                <div className="flex flex-wrap items-start justify-between gap-3 mb-4">
                  <div>
                    <h3 className="text-xl sm:text-2xl font-black text-white group-hover:text-[#10f279] transition-colors">
                      {item.role}
                    </h3>
                    <div className="flex items-center gap-2 text-sm font-semibold text-slate-300 mt-1">
                      <Building2 className="w-4 h-4 text-[#38bdf8]" />
                      <span>{item.company}</span>
                    </div>
                  </div>

                  <div className="flex flex-wrap items-center gap-2">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-bold bg-[#10f279]/10 text-[#10f279] border border-[#10f279]/30">
                      <Calendar className="w-3.5 h-3.5" />
                      <span>{item.period}</span>
                    </span>
                    <span className="px-3 py-1 rounded-full text-xs font-mono font-medium bg-white/5 text-slate-300 border border-white/10">
                      {item.badge}
                    </span>
                  </div>
                </div>

                {/* Bullet Points */}
                <ul className="space-y-3 mb-6">
                  {item.bullets.map((bullet, bIdx) => (
                    <li key={bIdx} className="flex items-start gap-3 text-sm text-slate-300 leading-relaxed font-sans">
                      <CheckCircle2 className="w-4 h-4 text-[#10f279] shrink-0 mt-0.5" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>

                {/* Tech Pills */}
                <div className="pt-4 border-t border-white/5 flex flex-wrap items-center gap-2">
                  <span className="text-[11px] font-mono text-slate-500 mr-1">Skills:</span>
                  {item.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-2.5 py-1 rounded-lg text-xs font-mono font-medium text-slate-300 bg-[#141726] border border-white/5"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
