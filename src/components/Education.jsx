import React from 'react';
import { GraduationCap, Award, BookOpen, Calendar, CheckCircle2 } from 'lucide-react';
import { educationData } from '../data/portfolioData';

export default function Education() {
  return (
    <section id="education" className="py-24 relative overflow-hidden bg-[#090a0f]">
      {/* Background radial glow */}
      <div className="absolute bottom-10 right-10 w-[450px] h-[450px] bg-[#38bdf8]/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-widest text-[#10f279] mb-3">
              <span className="w-6 h-px bg-[#10f279]"></span>
              <span>05 / ACADEMIC BACKGROUND</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
              Education &amp; <br className="hidden sm:inline" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#10f279] to-[#38bdf8]">
                Computer Science Foundation.
              </span>
            </h2>
          </div>
          <p className="text-slate-400 text-sm max-w-md font-mono">
            Academic credentials in computer applications and software engineering principles.
          </p>
        </div>

        {/* Education Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {educationData.map((edu, index) => (
            <div
              key={index}
              className={`glass-panel rounded-3xl p-7 sm:p-8 border transition-all duration-300 relative overflow-hidden flex flex-col justify-between group ${
                edu.isCurrent
                  ? 'border-[#10f279]/40 shadow-[0_10px_35px_rgba(16,242,121,0.08)]'
                  : 'border-white/10 hover:border-white/20'
              }`}
            >
              {/* Subtle accent corner */}
              <div
                className={`absolute top-0 right-0 w-32 h-32 rounded-bl-full pointer-events-none transition-all ${
                  edu.isCurrent ? 'bg-[#10f279]/10' : 'bg-white/0 group-hover:bg-white/5'
                }`}
              />

              <div>
                <div className="flex items-center justify-between gap-3 mb-4">
                  <div className="flex items-center gap-3">
                    <div
                      className={`w-12 h-12 rounded-2xl flex items-center justify-center border transition-colors ${
                        edu.isCurrent
                          ? 'bg-[#10f279]/15 border-[#10f279]/30 text-[#10f279]'
                          : 'bg-[#141726] border-white/10 text-slate-300 group-hover:text-white'
                      }`}
                    >
                      <GraduationCap className="w-6 h-6" />
                    </div>
                    <div>
                      <span className="text-xs font-mono font-semibold text-slate-400">
                        {edu.institution}
                      </span>
                      <div className="flex items-center gap-1.5 text-xs font-mono text-[#10f279] mt-0.5">
                        <Calendar className="w-3 h-3" />
                        <span>{edu.period}</span>
                      </div>
                    </div>
                  </div>

                  <span
                    className={`px-3 py-1 rounded-full text-xs font-mono font-bold border ${
                      edu.isCurrent
                        ? 'bg-[#10f279]/15 text-[#10f279] border-[#10f279]/30 animate-pulse'
                        : 'bg-white/5 text-slate-300 border-white/10'
                    }`}
                  >
                    {edu.status}
                  </span>
                </div>

                <h3 className="text-lg sm:text-xl font-bold text-white mb-3 group-hover:text-[#10f279] transition-colors">
                  {edu.degree}
                </h3>

                <p className="text-xs sm:text-sm text-slate-400 font-sans leading-relaxed">
                  {edu.details}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between text-xs font-mono text-slate-500">
                <span className="flex items-center gap-1.5 text-slate-400">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#10f279]" />
                  <span>Verified Credential</span>
                </span>
                <span className="text-slate-400 font-semibold">{edu.period}</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
