import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, Copy, Check, Sparkles, ExternalLink, MessageSquare } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';
import confetti from 'canvas-confetti';
import { personalInfo } from '../data/portfolioData';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);
  const [status, setStatus] = useState({ type: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleCopy = (text, type) => {
    navigator.clipboard.writeText(text);
    if (type === 'email') {
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2200);
    } else {
      setCopiedPhone(true);
      setTimeout(() => setCopiedPhone(false), 2200);
    }
  };

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus({ type: '', message: '' });

    // Client-side validation
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setStatus({
        type: 'error',
        message: 'Please fill in all required fields (Name, Email, Message).',
      });
      setIsSubmitting(false);
      return;
    }

    // Trigger celebratory confetti
    try {
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#10f279', '#38bdf8', '#ffffff'],
      });
    } catch {
      // Confetti fallback
    }

    // Prepare mailto fallback
    const subjectEncoded = encodeURIComponent(formData.subject || `Inquiry from ${formData.name}`);
    const bodyEncoded = encodeURIComponent(
      `Hi Shivang,\n\nName: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}\n\nSent via Portfolio Contact Form`
    );
    const mailtoUrl = `mailto:${personalInfo.contact.email}?subject=${subjectEncoded}&body=${bodyEncoded}`;

    setTimeout(() => {
      setIsSubmitting(false);
      setStatus({
        type: 'success',
        message: 'Thank you! Your message draft is ready. Opening your email client to send to Shivangsh350@gmail.com...',
      });
      // Trigger client mailto
      window.location.href = mailtoUrl;
    }, 600);
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden bg-[#090a0f]">
      {/* Background radial glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[700px] h-[500px] bg-[#10f279]/10 rounded-full blur-[180px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-widest text-[#10f279] mb-3">
            <span className="w-6 h-px bg-[#10f279]"></span>
            <span>06 / GET IN TOUCH</span>
            <span className="w-6 h-px bg-[#10f279]"></span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
            Have a project in mind? <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#10f279] via-emerald-300 to-[#38bdf8]">
              Let's build something great.
            </span>
          </h2>
          <p className="mt-4 text-slate-300 text-sm sm:text-base font-sans">
            Whether you have an open software developer role, a freelance full-stack project, or just want to connect, feel free to reach out directly.
          </p>
        </div>

        {/* Contact Info & Form Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Direct Contact Details & Socials */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Contact Information Card */}
            <div className="glass-panel p-6 sm:p-8 rounded-3xl border border-white/10 space-y-6">
              <h3 className="text-lg font-bold text-white flex items-center gap-2">
                <MessageSquare className="w-5 h-5 text-[#10f279]" />
                <span>Contact Channels</span>
              </h3>

              {/* Email Item */}
              <div className="p-4 rounded-2xl bg-[#121522] border border-white/5 space-y-2">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2.5 text-xs font-mono text-slate-400">
                    <Mail className="w-4 h-4 text-[#10f279]" />
                    <span>Email Address</span>
                  </div>
                  <button
                    onClick={() => handleCopy(personalInfo.contact.email, 'email')}
                    className="inline-flex items-center gap-1 text-[11px] font-mono text-[#10f279] hover:underline"
                    title="Copy email to clipboard"
                  >
                    {copiedEmail ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
                    <span>{copiedEmail ? 'Copied!' : 'Copy'}</span>
                  </button>
                </div>
                <a
                  href={`mailto:${personalInfo.contact.email}`}
                  className="block text-sm sm:text-base font-bold text-white hover:text-[#10f279] transition-colors"
                >
                  {personalInfo.contact.email}
                </a>
              </div>

              {/* Phone Item */}
              <div className="p-4 rounded-2xl bg-[#121522] border border-white/5 space-y-2">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2.5 text-xs font-mono text-slate-400">
                    <Phone className="w-4 h-4 text-[#38bdf8]" />
                    <span>Phone / WhatsApp</span>
                  </div>
                  <button
                    onClick={() => handleCopy(personalInfo.contact.phone, 'phone')}
                    className="inline-flex items-center gap-1 text-[11px] font-mono text-[#38bdf8] hover:underline"
                    title="Copy phone number"
                  >
                    {copiedPhone ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
                    <span>{copiedPhone ? 'Copied!' : 'Copy'}</span>
                  </button>
                </div>
                <a
                  href={`tel:${personalInfo.contact.phone.replace(/\s+/g, '')}`}
                  className="block text-sm sm:text-base font-bold text-white hover:text-[#38bdf8] transition-colors"
                >
                  {personalInfo.contact.phone}
                </a>
              </div>

              {/* Location Item */}
              <div className="p-4 rounded-2xl bg-[#121522] border border-white/5 space-y-1">
                <div className="flex items-center gap-2.5 text-xs font-mono text-slate-400">
                  <MapPin className="w-4 h-4 text-[#f59e0b]" />
                  <span>Location</span>
                </div>
                <p className="text-sm font-semibold text-white">
                  {personalInfo.contact.location}
                </p>
                <p className="text-xs text-slate-400 font-mono">Open to Remote &amp; Relocation</p>
              </div>

              {/* Social Channels */}
              <div className="pt-2">
                <span className="text-xs font-mono text-slate-400 block mb-3">Professional Profiles</span>
                <div className="flex items-center gap-3">
                  <a
                    href={personalInfo.contact.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 py-3 rounded-xl bg-[#141827] border border-white/10 hover:border-[#10f279]/50 hover:text-[#10f279] transition-all text-xs font-mono font-semibold"
                  >
                    <GithubIcon className="w-4 h-4" />
                    <span>GitHub</span>
                    <ExternalLink className="w-3 h-3 opacity-60" />
                  </a>

                  <a
                    href={personalInfo.contact.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 py-3 rounded-xl bg-[#141827] border border-white/10 hover:border-[#38bdf8]/50 hover:text-[#38bdf8] transition-all text-xs font-mono font-semibold"
                  >
                    <LinkedinIcon className="w-4 h-4" />
                    <span>LinkedIn</span>
                    <ExternalLink className="w-3 h-3 opacity-60" />
                  </a>
                </div>
              </div>
            </div>

            {/* Availability Box */}
            <div className="p-5 rounded-2xl bg-gradient-to-br from-[#101320] to-[#161a29] border border-[#10f279]/20 flex items-center gap-4">
              <div className="w-10 h-10 rounded-full bg-[#10f279]/15 border border-[#10f279]/30 flex items-center justify-center shrink-0">
                <Sparkles className="w-5 h-5 text-[#10f279]" />
              </div>
              <div className="text-xs">
                <p className="font-bold text-white">Available For Immediate Joining</p>
                <p className="text-slate-400 font-mono mt-0.5">Software Developer &amp; MERN Stack Roles</p>
              </div>
            </div>

          </div>

          {/* Right Column: Interactive Contact Form */}
          <div className="lg:col-span-7">
            <div className="glass-panel p-6 sm:p-10 rounded-3xl border border-white/10 relative shadow-2xl">
              
              <div className="mb-6">
                <h3 className="text-xl font-black text-white">Send a Direct Message</h3>
                <p className="text-xs text-slate-400 font-mono mt-1">
                  Drafts an authenticated message directly to Shivang Sharma.
                </p>
              </div>

              {status.message && (
                <div
                  className={`p-4 rounded-2xl mb-6 text-xs sm:text-sm font-mono border ${
                    status.type === 'error'
                      ? 'bg-red-500/10 border-red-500/30 text-red-300'
                      : 'bg-[#10f279]/10 border-[#10f279]/30 text-[#10f279]'
                  }`}
                >
                  {status.message}
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  {/* Name field */}
                  <div className="space-y-1.5 text-left">
                    <label htmlFor="name" className="text-xs font-mono text-slate-300">
                      Your Name <span className="text-[#10f279]">*</span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="e.g. Alex Johnson"
                      required
                      className="w-full px-4 py-3 rounded-xl bg-[#0f121e] border border-white/10 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-[#10f279] focus:ring-1 focus:ring-[#10f279] transition-colors"
                    />
                  </div>

                  {/* Email field */}
                  <div className="space-y-1.5 text-left">
                    <label htmlFor="email" className="text-xs font-mono text-slate-300">
                      Your Email <span className="text-[#10f279]">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="e.g. alex@company.com"
                      required
                      className="w-full px-4 py-3 rounded-xl bg-[#0f121e] border border-white/10 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-[#10f279] focus:ring-1 focus:ring-[#10f279] transition-colors"
                    />
                  </div>
                </div>

                {/* Subject field */}
                <div className="space-y-1.5 text-left">
                  <label htmlFor="subject" className="text-xs font-mono text-slate-300">
                    Subject / Topic
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="e.g. Software Developer Opportunity / Web Project"
                    className="w-full px-4 py-3 rounded-xl bg-[#0f121e] border border-white/10 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-[#10f279] focus:ring-1 focus:ring-[#10f279] transition-colors"
                  />
                </div>

                {/* Message field */}
                <div className="space-y-1.5 text-left">
                  <label htmlFor="message" className="text-xs font-mono text-slate-300">
                    Message <span className="text-[#10f279]">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows="5"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Describe your requirements, timeline, or position details..."
                    required
                    className="w-full px-4 py-3 rounded-xl bg-[#0f121e] border border-white/10 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-[#10f279] focus:ring-1 focus:ring-[#10f279] transition-colors resize-none"
                  ></textarea>
                </div>

                {/* Transparency footnote */}
                <p className="text-[11px] font-mono text-slate-500 text-left">
                  Note: Dispatches directly to Shivangsh350@gmail.com via your system email client without third-party data tracking.
                </p>

                {/* Submit button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3.5 px-6 rounded-2xl font-bold text-sm text-[#090a0f] bg-[#10f279] hover:bg-[#0ee06e] transition-all duration-300 shadow-[0_0_25px_rgba(16,242,121,0.3)] hover:shadow-[0_0_35px_rgba(16,242,121,0.5)] flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
                >
                  <Send className="w-4 h-4" />
                  <span>{isSubmitting ? 'Preparing Email Draft...' : 'Send Message Now'}</span>
                </button>
              </form>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
