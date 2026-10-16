import React, { useEffect } from 'react';
import { X, ExternalLink, CheckCircle, ShieldAlert, Server, Layers, Cpu } from 'lucide-react';
import { GithubIcon } from './Icons';

export default function ProjectModal({ project, onClose }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [onClose]);

  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-black/80 backdrop-blur-md animate-fadeIn">
      {/* Backdrop click */}
      <div className="fixed inset-0" onClick={onClose} />

      {/* Modal Dialog */}
      <div className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-3xl bg-[#0f121d] border border-white/15 shadow-[0_25px_60px_rgba(0,0,0,0.9)] z-10 text-left">
        
        {/* Modal Window Header */}
        <div className="sticky top-0 z-20 flex items-center justify-between px-6 py-4 bg-[#141827]/95 border-b border-white/10 backdrop-blur-md">
          <div className="flex items-center gap-3">
            <span className="w-3 h-3 rounded-full bg-[#ff5f56]" />
            <span className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
            <span className="w-3 h-3 rounded-full bg-[#27c93f]" />
            <span className="ml-2 text-xs font-mono text-slate-300 font-semibold truncate max-w-xs sm:max-w-md">
              {project.title}
            </span>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-xl bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Content */}
        <div className="p-6 sm:p-8 space-y-8">
          
          {/* Project Banner / Preview Image */}
          <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl bg-black">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-auto object-cover max-h-[420px]"
            />
            <div className="absolute top-4 left-4">
              <span className="px-3 py-1 rounded-full text-xs font-mono font-bold bg-[#090a0f]/80 text-[#10f279] border border-[#10f279]/30 backdrop-blur-md">
                {project.type}
              </span>
            </div>
          </div>

          {/* Title & Tagline */}
          <div className="space-y-2">
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
              {project.title}
            </h3>
            <p className="text-base font-mono text-[#10f279]">
              {project.tagline}
            </p>
          </div>

          {/* Description */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400">Project Overview</h4>
            <p className="text-slate-200 text-sm sm:text-base leading-relaxed">
              {project.description}
            </p>
          </div>

          {/* Key Deliverables & Features */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400">Core Engineering Features</h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {project.highlights.map((item, idx) => (
                <div key={idx} className="flex items-start gap-2.5 p-3 rounded-xl bg-[#141827] border border-white/5 text-xs text-slate-300">
                  <CheckCircle className="w-4 h-4 text-[#10f279] shrink-0 mt-0.5" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Architecture & Deployment */}
          <div className="p-4 rounded-xl bg-[#131625] border border-white/10 space-y-2">
            <div className="flex items-center gap-2 text-xs font-mono text-[#38bdf8]">
              <Server className="w-4 h-4" />
              <span className="font-bold">Deployment &amp; Infrastructure</span>
            </div>
            <p className="text-xs text-slate-300 leading-relaxed font-sans">
              {project.deployment}
            </p>
          </div>

          {/* Technologies Used */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400">Tech Stack</h4>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1.5 rounded-lg text-xs font-mono font-medium bg-[#171b2d] text-slate-200 border border-white/10"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Action Links & Disclosure */}
          <div className="pt-4 border-t border-white/10 flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              {project.liveUrl ? (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full text-xs font-bold text-[#090a0f] bg-[#10f279] hover:bg-[#0ee06e] transition-all shadow-[0_0_20px_rgba(16,242,121,0.3)]"
                >
                  <span>Open Live Website</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              ) : (
                <span
                  className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-full text-xs font-mono bg-white/5 text-slate-400 border border-white/10 cursor-not-allowed"
                  title={project.liveUrlNote || 'Demo configured upon client request'}
                >
                  <ExternalLink className="w-3.5 h-3.5" />
                  <span>Live Demo (Client Demo Available on Request)</span>
                </span>
              )}

              {project.githubUrl ? (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-semibold text-white bg-[#1a1f33] hover:bg-[#252c48] border border-white/10 transition-colors"
                >
                  <GithubIcon className="w-3.5 h-3.5" />
                  <span>Source Code</span>
                </a>
              ) : (
                <span
                  className="inline-flex items-center gap-1.5 px-3.5 py-2.5 rounded-full text-xs font-mono text-slate-400 bg-white/5 border border-white/5 cursor-not-allowed"
                  title={project.githubNote}
                >
                  <ShieldAlert className="w-3.5 h-3.5 text-amber-400" />
                  <span className="hidden sm:inline">Code Protected (Client NDA)</span>
                  <span className="sm:hidden">Protected NDA</span>
                </span>
              )}
            </div>

            <button
              onClick={onClose}
              className="px-5 py-2 rounded-full text-xs font-mono font-medium text-slate-400 hover:text-white hover:bg-white/5 transition-colors"
            >
              Close Window
            </button>
          </div>

        </div>

      </div>
    </div>
  );
}
