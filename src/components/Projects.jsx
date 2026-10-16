import React, { useState } from 'react';
import { ExternalLink, ArrowUpRight, ShieldAlert, Sparkles, Layers, Info } from 'lucide-react';
import { GithubIcon } from './Icons';
import { projectsData } from '../data/portfolioData';
import ProjectModal from './ProjectModal';

export default function Projects() {
  const [filter, setFilter] = useState('All');
  const [activeModalProject, setActiveModalProject] = useState(null);

  const filters = ['All', 'Freelance Projects', 'Internship Projects'];

  const filteredProjects = projectsData.filter((project) => {
    if (filter === 'Freelance Projects') return project.type.includes('Freelance');
    if (filter === 'Internship Projects') return project.type.includes('Internship');
    return true;
  });

  return (
    <section id="projects" className="py-24 relative overflow-hidden bg-[#090a0f]">
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 right-1/4 w-[600px] h-[600px] bg-[#10f279]/5 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-[500px] h-[500px] bg-[#38bdf8]/5 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-widest text-[#10f279] mb-3">
              <span className="w-6 h-px bg-[#10f279]"></span>
              <span>03 / FEATURED WORK</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
              Selected Client &amp; <br className="hidden sm:inline" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#10f279] via-emerald-300 to-[#38bdf8]">
                Production Applications.
              </span>
            </h2>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap items-center gap-2 bg-[#10121c] p-1.5 rounded-2xl border border-white/10">
            {filters.map((f) => (
              <button
                key={f}
                onClick={() => setFilter(f)}
                className={`px-4 py-2 rounded-xl text-xs font-mono font-semibold transition-all duration-200 cursor-pointer ${
                  filter === f
                    ? 'bg-[#10f279] text-[#090a0f] shadow-[0_0_15px_rgba(16,242,121,0.35)]'
                    : 'text-slate-400 hover:text-white hover:bg-white/5'
                }`}
              >
                {f}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10">
          {filteredProjects.map((project, index) => {
            const isNiela = project.id === 'nielacare';
            return (
              <div
                key={project.id}
                className="group glass-panel rounded-3xl border border-white/10 hover:border-[#10f279]/50 transition-all duration-300 flex flex-col justify-between overflow-hidden hover:shadow-[0_20px_50px_rgba(0,0,0,0.7)]"
              >
                <div>
                  {/* Browser Mockup Window Frame */}
                  <div className="bg-[#121522] border-b border-white/10 p-3 sm:px-4 sm:py-3 flex items-center justify-between gap-3">
                    <div className="flex items-center gap-2 shrink-0">
                      <span className="w-2.5 h-2.5 rounded-full bg-[#ff5f56]" />
                      <span className="w-2.5 h-2.5 rounded-full bg-[#ffbd2e]" />
                      <span className="w-2.5 h-2.5 rounded-full bg-[#27c93f]" />
                    </div>

                    {/* Fake URL Bar */}
                    <div className="w-full max-w-xs sm:max-w-sm px-3 py-1 rounded-lg bg-[#0a0c13] border border-white/5 text-[11px] font-mono text-slate-400 truncate text-center">
                      <span className="text-[#10f279]/70">https://</span>
                      <span>
                        {project.id === 'nielacare' && 'nielacare.com'}
                        {project.id === 'poiya-health' && 'poiyahealth.com/admin'}
                        {project.id === 'jit-polytechnic' && 'jitpolytechnic.ac.in'}
                        {project.id === 'tici-naturelab' && 'ticinaturelab.com'}
                      </span>
                    </div>

                    <div className="shrink-0">
                      <span
                        className={`text-[10px] font-mono font-bold px-2.5 py-0.5 rounded-full uppercase tracking-wider border ${
                          project.type.includes('Freelance')
                            ? 'bg-[#10f279]/10 text-[#10f279] border-[#10f279]/30'
                            : 'bg-[#38bdf8]/10 text-[#38bdf8] border-[#38bdf8]/30'
                        }`}
                      >
                        {project.type}
                      </span>
                    </div>
                  </div>

                  {/* Mockup Image Preview (Clickable to open modal) */}
                  <div
                    onClick={() => setActiveModalProject(project)}
                    className="relative overflow-hidden cursor-pointer aspect-video bg-[#0d0f18] group/img"
                  >
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover object-top transition-transform duration-500 group-hover/img:scale-105"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0d0f18] via-transparent to-transparent opacity-60 group-hover/img:opacity-40 transition-opacity" />

                    {/* Quick view hover badge */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover/img:opacity-100 transition-opacity bg-black/40 backdrop-blur-xs">
                      <span className="px-4 py-2 rounded-full text-xs font-mono font-bold text-[#090a0f] bg-[#10f279] shadow-[0_0_20px_rgba(16,242,121,0.5)] flex items-center gap-1.5">
                        <Info className="w-3.5 h-3.5" />
                        <span>View Project Details</span>
                      </span>
                    </div>
                  </div>

                  {/* Project Details Content */}
                  <div className="p-6 sm:p-8 space-y-4">
                    <div>
                      <h3 className="text-xl sm:text-2xl font-black text-white group-hover:text-[#10f279] transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-xs font-mono text-slate-400 mt-1">
                        {project.tagline}
                      </p>
                    </div>

                    <p className="text-sm text-slate-300 leading-relaxed font-sans">
                      {project.description}
                    </p>

                    {/* Deployment note */}
                    <div className="p-3 rounded-xl bg-[#0f121e] border border-white/5 text-xs font-mono text-slate-400 flex items-start gap-2">
                      <span className="text-[#10f279] font-bold">Deploy:</span>
                      <span className="text-slate-300">{project.deployment}</span>
                    </div>

                    {/* Tech Badges */}
                    <div className="flex flex-wrap gap-1.5 pt-1">
                      {project.technologies.map((t) => (
                        <span
                          key={t}
                          className="px-2.5 py-1 rounded-md text-[11px] font-mono text-slate-300 bg-[#141726] border border-white/5"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Card Action Footer */}
                <div className="px-6 py-4 sm:px-8 sm:py-5 bg-[#0f121d]/90 border-t border-white/10 flex flex-wrap items-center justify-between gap-3">
                  <div className="flex items-center gap-2">
                    {/* Live Demo Button */}
                    {project.liveUrl ? (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-bold text-[#090a0f] bg-[#10f279] hover:bg-[#0ee06e] transition-all shadow-[0_0_15px_rgba(16,242,121,0.25)] hover:shadow-[0_0_20px_rgba(16,242,121,0.45)]"
                      >
                        <span>Live Demo</span>
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </a>
                    ) : (
                      <span
                        className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-mono text-slate-400 bg-white/5 border border-white/5 cursor-not-allowed"
                        title={project.liveUrlNote || 'Client project demo available upon request'}
                      >
                        <ExternalLink className="w-3.5 h-3.5 opacity-50" />
                        <span>Live Demo (On Request)</span>
                      </span>
                    )}

                    {/* Source Code or NDA indicator */}
                    {project.githubUrl ? (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-semibold text-white bg-[#181c2e] hover:bg-[#20263f] border border-white/10 transition-colors"
                      >
                        <GithubIcon className="w-3.5 h-3.5" />
                        <span>Code</span>
                      </a>
                    ) : (
                      <span
                        className="inline-flex items-center gap-1 px-3 py-2 rounded-xl text-[11px] font-mono text-slate-400 bg-white/5 border border-white/5 cursor-not-allowed"
                        title={project.githubNote}
                      >
                        <ShieldAlert className="w-3 h-3 text-amber-400/80" />
                        <span>Private NDA</span>
                      </span>
                    )}
                  </div>

                  {/* In-depth details modal trigger */}
                  <button
                    onClick={() => setActiveModalProject(project)}
                    className="inline-flex items-center gap-1 text-xs font-mono text-slate-400 hover:text-[#10f279] transition-colors py-1 cursor-pointer"
                  >
                    <span>Overview &amp; Features</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </button>
                </div>

              </div>
            );
          })}
        </div>

      </div>

      {/* Project Details Modal */}
      {activeModalProject && (
        <ProjectModal
          project={activeModalProject}
          onClose={() => setActiveModalProject(null)}
        />
      )}
    </section>
  );
}
