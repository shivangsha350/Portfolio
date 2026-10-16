import React, { useState } from 'react';
import { Terminal, FileCode, CheckCircle2, Copy, Check, Sparkles } from 'lucide-react';

export default function TerminalVisual() {
  const [activeTab, setActiveTab] = useState('profile');
  const [copied, setCopied] = useState(false);

  const copyCode = () => {
    let text = '';
    if (activeTab === 'profile') {
      text = `const developer = {
  name: "Shivang Sharma",
  role: "MERN Stack Developer",
  education: "MCA (Pursuing) | BCA (7.89 CGPA)",
  status: "Available for Software Roles",
  passion: "Full-Stack Web & AI-Powered Apps",
  skills: ["React.js", "Node.js", "Express.js", "MongoDB", "JavaScript"],
  isHireable: true
};`;
    } else if (activeTab === 'stack') {
      text = `{
  "frontend": ["React.js", "Tailwind CSS", "Bootstrap", "Next.js"],
  "backend": ["Node.js", "Express.js", "REST APIs", "JWT Auth"],
  "database": ["MongoDB", "Mongoose ODM"],
  "tools": ["Git", "GitHub", "VS Code", "Postman", "Vercel", "Render"]
}`;
    } else {
      text = `$ npm run deploy:production\n✓ Compiled 4 full-stack client modules\n✓ REST APIs healthy: [200 OK]\n✓ Ready to contribute to your engineering team!`;
    }

    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="relative w-full max-w-xl mx-auto lg:max-w-none">
      {/* Background neon ambient aura */}
      <div className="absolute -inset-1.5 bg-gradient-to-r from-[#10f279]/30 via-[#38bdf8]/20 to-[#10f279]/20 rounded-2xl blur-xl opacity-50 group-hover:opacity-75 transition-opacity" />

      {/* Main Terminal Window */}
      <div className="relative rounded-2xl bg-[#0d0f18]/95 border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.7)] backdrop-blur-xl overflow-hidden">
        {/* Terminal Header */}
        <div className="flex items-center justify-between px-4 py-3 bg-[#131622]/90 border-b border-white/10">
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-[#ff5f56] inline-block shadow-[0_0_8px_rgba(255,95,86,0.4)]" />
            <span className="w-3 h-3 rounded-full bg-[#ffbd2e] inline-block shadow-[0_0_8px_rgba(255,189,46,0.4)]" />
            <span className="w-3 h-3 rounded-full bg-[#27c93f] inline-block shadow-[0_0_8px_rgba(39,201,63,0.4)]" />
            <span className="ml-2 text-xs font-mono text-slate-400 hidden sm:inline">
              shivang@workstation:~
            </span>
          </div>

          {/* Window Tabs */}
          <div className="flex items-center gap-1">
            <button
              onClick={() => setActiveTab('profile')}
              className={`px-3 py-1 rounded-md text-xs font-mono transition-all ${
                activeTab === 'profile'
                  ? 'bg-[#1a1e30] text-[#10f279] border border-[#10f279]/30 shadow-sm'
                  : 'text-slate-400 hover:text-slate-200 hover:bg-white/5'
              }`}
            >
              Shivang.js
            </button>
            <button
              onClick={() => setActiveTab('stack')}
              className={`px-3 py-1 rounded-md text-xs font-mono transition-all ${
                activeTab === 'stack'
                  ? 'bg-[#1a1e30] text-[#38bdf8] border border-[#38bdf8]/30 shadow-sm'
                  : 'text-slate-400 hover:text-slate-200 hover:bg-white/5'
              }`}
            >
              Stack.json
            </button>
            <button
              onClick={() => setActiveTab('terminal')}
              className={`px-3 py-1 rounded-md text-xs font-mono transition-all ${
                activeTab === 'terminal'
                  ? 'bg-[#1a1e30] text-[#a855f7] border border-[#a855f7]/30 shadow-sm'
                  : 'text-slate-400 hover:text-slate-200 hover:bg-white/5'
              }`}
            >
              Terminal.sh
            </button>
          </div>

          {/* Copy Button */}
          <button
            onClick={copyCode}
            className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-white/10 transition-colors"
            title="Copy snippet"
            aria-label="Copy code"
          >
            {copied ? <Check className="w-3.5 h-3.5 text-[#10f279]" /> : <Copy className="w-3.5 h-3.5" />}
          </button>
        </div>

        {/* Tab Content Display */}
        <div className="p-5 font-mono text-xs sm:text-[13px] leading-relaxed overflow-x-auto min-h-[300px]">
          {activeTab === 'profile' && (
            <div className="space-y-1 text-slate-300">
              <div>
                <span className="text-[#a855f7]">const</span>{' '}
                <span className="text-[#38bdf8]">developer</span>{' '}
                <span className="text-white">=</span>{' '}
                <span className="text-white">{'{'}</span>
              </div>
              <div className="pl-4">
                <span className="text-[#94a3b8]">name:</span>{' '}
                <span className="text-[#10f279]">"Shivang Sharma"</span>,
              </div>
              <div className="pl-4">
                <span className="text-[#94a3b8]">title:</span>{' '}
                <span className="text-[#10f279]">"MERN Stack &amp; Software Developer"</span>,
              </div>
              <div className="pl-4">
                <span className="text-[#94a3b8]">education:</span>{' '}
                <span className="text-[#10f279]">"MCA (Pursuing) | BCA (7.89 CGPA)"</span>,
              </div>
              <div className="pl-4">
                <span className="text-[#94a3b8]">openForOpportunities:</span>{' '}
                <span className="text-[#f59e0b]">true</span>,
              </div>
              <div className="pl-4">
                <span className="text-[#94a3b8]">coreCompetencies:</span>{' '}
                <span className="text-white">[</span>
              </div>
              <div className="pl-8 text-[#38bdf8]">
                "Live Client Delivery", "MERN Architecture",
              </div>
              <div className="pl-8 text-[#38bdf8]">
                "RESTful APIs", "Responsive UI", "AI Chatbot"
              </div>
              <div className="pl-4 text-white">],</div>
              <div className="pl-4">
                <span className="text-[#94a3b8]">solveProblems:</span>{' '}
                <span className="text-[#a855f7]">function</span>() {'{'}
              </div>
              <div className="pl-8 text-slate-400">
                <span className="text-[#a855f7]">return</span>{' '}
                <span className="text-[#10f279]">"Practical, scalable digital products."</span>;
              </div>
              <div className="pl-4 text-white">{'}'}</div>
              <div className="text-white">{'};'}</div>
              <div className="pt-2 text-slate-500 flex items-center gap-1.5">
                <span className="text-[#10f279]">▶</span>
                <span>// Ready to engineer exceptional web applications</span>
              </div>
            </div>
          )}

          {activeTab === 'stack' && (
            <div className="space-y-1 text-slate-300">
              <div className="text-white">{'{'}</div>
              <div className="pl-4">
                <span className="text-[#38bdf8]">"frontend"</span>:{' '}
                <span className="text-white">[</span>
                <span className="text-[#10f279]">"React.js"</span>,{' '}
                <span className="text-[#10f279]">"Tailwind CSS"</span>,{' '}
                <span className="text-[#10f279]">"Bootstrap"</span>,{' '}
                <span className="text-[#10f279]">"HTML5/CSS3"</span>
                <span className="text-white">],</span>
              </div>
              <div className="pl-4">
                <span className="text-[#38bdf8]">"backend"</span>:{' '}
                <span className="text-white">[</span>
                <span className="text-[#10f279]">"Node.js"</span>,{' '}
                <span className="text-[#10f279]">"Express.js"</span>,{' '}
                <span className="text-[#10f279]">"RESTful APIs"</span>,{' '}
                <span className="text-[#10f279]">"JWT Auth"</span>
                <span className="text-white">],</span>
              </div>
              <div className="pl-4">
                <span className="text-[#38bdf8]">"database"</span>:{' '}
                <span className="text-white">[</span>
                <span className="text-[#10f279]">"MongoDB"</span>,{' '}
                <span className="text-[#10f279]">"Mongoose ODM"</span>
                <span className="text-white">],</span>
              </div>
              <div className="pl-4">
                <span className="text-[#38bdf8]">"toolsAndCloud"</span>:{' '}
                <span className="text-white">[</span>
                <span className="text-[#10f279]">"Git"</span>,{' '}
                <span className="text-[#10f279]">"GitHub"</span>,{' '}
                <span className="text-[#10f279]">"Postman"</span>,{' '}
                <span className="text-[#10f279]">"Vercel"</span>,{' '}
                <span className="text-[#10f279]">"Render"</span>
                <span className="text-white">]</span>
              </div>
              <div className="text-white">{'}'}</div>
            </div>
          )}

          {activeTab === 'terminal' && (
            <div className="space-y-2 text-slate-300">
              <div className="text-slate-400">
                <span className="text-[#10f279]">guest@portfolio</span>:
                <span className="text-[#38bdf8]">~/projects</span>$ shivang-cli status
              </div>
              <div className="text-emerald-400 flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#10f279]" />
                <span>MERN Full-Stack Engine: Online</span>
              </div>
              <div className="text-slate-400 pl-6">
                • Client Projects: Nielacare (E-Commerce), Poiya Health
              </div>
              <div className="text-slate-400 pl-6">
                • Internships: Simtrak Solutions &amp; BR Softech
              </div>
              <div className="text-slate-400 pl-6">
                • AI Integration: Node.js Conversational Assistant
              </div>
              <div className="pt-2 text-slate-400">
                <span className="text-[#10f279]">guest@portfolio</span>:
                <span className="text-[#38bdf8]">~/projects</span>${' '}
                <span className="text-white">npm test --verbose</span>
              </div>
              <div className="text-[#10f279]">
                ✓ PASS: Component Responsiveness (100%)
                <br />✓ PASS: REST API Endpoints &amp; JWT Security
                <br />✓ PASS: Production Bundle Ready
              </div>
              <div className="flex items-center gap-1 text-slate-400 pt-1">
                <span className="text-[#10f279]">guest@portfolio</span>:
                <span className="text-[#38bdf8]">~</span>${' '}
                <span className="w-2 h-4 bg-[#10f279] inline-block animate-blink"></span>
              </div>
            </div>
          )}
        </div>

        {/* Status Bar */}
        <div className="px-4 py-2 bg-[#0b0d14] border-t border-white/5 flex items-center justify-between text-[11px] font-mono text-slate-500">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#10f279]"></span>
            <span className="text-slate-400">LF / UTF-8</span>
            <span className="hidden sm:inline">• MERN Architecture</span>
          </div>
          <div className="text-slate-400 flex items-center gap-1.5">
            <Sparkles className="w-3 h-3 text-[#10f279]" />
            <span className="text-[#10f279]">Production Ready</span>
          </div>
        </div>
      </div>

      {/* Floating Badges */}
      <div className="hidden sm:flex absolute -top-4 -right-4 px-3.5 py-1.5 rounded-xl bg-[#11131c]/90 border border-[#10f279]/30 text-xs font-mono font-semibold text-white shadow-[0_10px_25px_rgba(0,0,0,0.5)] backdrop-blur-md items-center gap-2 animate-bounce duration-1000">
        <span className="text-[#10f279]">⚡</span>
        <span>React 19 &amp; Vite</span>
      </div>

      <div className="hidden sm:flex absolute -bottom-4 -left-4 px-3.5 py-1.5 rounded-xl bg-[#11131c]/90 border border-[#38bdf8]/30 text-xs font-mono font-semibold text-white shadow-[0_10px_25px_rgba(0,0,0,0.5)] backdrop-blur-md items-center gap-2">
        <span className="w-2 h-2 rounded-full bg-[#38bdf8]"></span>
        <span>Node.js &amp; MongoDB</span>
      </div>
    </div>
  );
}
