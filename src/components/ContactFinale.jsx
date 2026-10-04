import React, { useState } from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import ScrollReveal from './ScrollReveal';

/**
 * Cinematic Contact Finale with Cyber-Obsidian Gold Theme:
 * Directly delivers messages to Jison's inbox with real-time feedback.
 */
export default function ContactFinale() {
  const [copied, setCopied] = useState(false);
  const [status, setStatus] = useState('idle'); // 'idle' | 'loading' | 'success' | 'error'
  const [errorMessage, setErrorMessage] = useState('');
  const [dispatchId, setDispatchId] = useState('');
  const [formData, setFormData] = useState({ 
    name: '', 
    email: '', 
    subject: '', 
    message: '' 
  });

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleSubmit = async (e) => {
    if (e && e.preventDefault) e.preventDefault();
    
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setStatus('error');
      setErrorMessage('Please fill in all required fields.');
      return;
    }

    if (formData.message.trim().length < 10) {
      setStatus('error');
      setErrorMessage('Message must be at least 10 characters long.');
      return;
    }

    if (!formData.email.includes('@') || !formData.email.includes('.')) {
      setStatus('error');
      setErrorMessage('Please enter a valid email address.');
      return;
    }

    setStatus('loading');
    setErrorMessage('');

    try {
      const formPayload = new FormData();
      formPayload.append('access_key', '4fd90bd1-6255-4115-84a7-95ec85a91054');
      formPayload.append('name', formData.name);
      formPayload.append('email', formData.email);
      formPayload.append('subject', formData.subject || `Portfolio Inquiry from ${formData.name}`);
      formPayload.append('message', formData.message);

      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formPayload
      });

      const data = await response.json();

      if (response.ok && data.success) {
        setDispatchId(`DISP-${new Date().getFullYear()}-${Math.random().toString(36).substring(2, 7).toUpperCase()}`);
        setStatus('success');
      } else {
        setStatus('error');
        setErrorMessage(data.message || 'Failed to dispatch message. Please try again or reach out directly.');
      }
    } catch (err) {
      console.error('Contact Form Dispatch Error:', err);
      setStatus('error');
      setErrorMessage('Unable to reach dispatch server. Please try again or reach out directly.');
    }
  };

  return (
    <section id="contact" className="relative min-h-screen py-24 sm:py-32 px-4 sm:px-8 max-w-6xl mx-auto flex flex-col justify-center">
      {/* Climax Typographic Headline */}
      <ScrollReveal direction="down" className="text-center mb-14 sm:mb-20">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-gold-primary/10 border border-gold-primary/30 text-xs font-mono text-gold-light mb-5 shadow-sm">
          <span className="w-1.5 h-1.5 rounded-full bg-gold-primary animate-pulse" />
          <span>06 // DIRECT DISPATCH</span>
        </div>
        
        <h2 className="font-display text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white tracking-tight leading-[1.08] mb-5 sm:mb-6">
          Let’s Build Something <br />
          <span className="gold-gradient-text">Extraordinary.</span>
        </h2>

        <p className="text-white/70 max-w-xl mx-auto text-sm sm:text-base md:text-lg leading-relaxed font-sans">
          Whether you're looking for an AI/ML Engineer, Full Stack Architect, or eager to collaborate on production-grade systems—my inbox is open.
        </p>
      </ScrollReveal>

      <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 sm:gap-8">
        
        {/* Left Column: Direct Contact & Resume Pills */}
        <ScrollReveal direction="left" delay={100} className="lg:col-span-2">
          <div className="glass-card p-6 sm:p-8 rounded-2xl flex flex-col justify-between h-full border border-gold-primary/20 hover:border-gold-primary/40 transition-colors shadow-2xl">
            <div>
              <h3 className="font-display text-xl sm:text-2xl font-bold text-white mb-1.5">
                Get in Touch
              </h3>
              <p className="text-gold-light/60 text-xs font-mono mb-6 sm:mb-8 tracking-wider">
                DIRECT REACH · USUALLY REPLIES WITHIN 24 HOURS
              </p>

              <div className="space-y-3.5">
                {/* Email with 1-Click Copy */}
                <button
                  type="button"
                  onClick={handleCopyEmail}
                  className="w-full p-3.5 sm:p-4 rounded-xl bg-white/[0.03] hover:bg-gold-primary/10 border border-white/10 hover:border-gold-primary/40 text-left transition-all group flex items-center justify-between cursor-pointer"
                >
                  <div className="min-w-0 pr-2">
                    <span className="font-mono text-[9px] sm:text-[10px] text-white/50 uppercase tracking-widest block">
                      Email Address
                    </span>
                    <span className="font-mono text-xs sm:text-sm text-gold-light font-medium truncate block">
                      {PERSONAL_INFO.email}
                    </span>
                  </div>
                  <span className="px-2.5 py-1 rounded-md bg-white/[0.05] border border-white/10 font-mono text-[10px] text-gold-light group-hover:border-gold-primary/40 flex-shrink-0 transition-colors">
                    {copied ? '✓ COPIED' : 'COPY'}
                  </span>
                </button>

                {/* Phone / WhatsApp */}
                <a
                  href={`tel:${PERSONAL_INFO.phone.replace(/\s+/g, '')}`}
                  className="p-3.5 sm:p-4 rounded-xl bg-white/[0.03] hover:bg-white/[0.06] border border-white/10 hover:border-gold-primary/30 text-left transition-all block group"
                >
                  <span className="font-mono text-[9px] sm:text-[10px] text-white/50 uppercase tracking-widest block">
                    Phone &amp; WhatsApp
                  </span>
                  <span className="font-mono text-xs sm:text-sm text-white font-medium block group-hover:text-gold-light transition-colors">
                    {PERSONAL_INFO.phone}
                  </span>
                </a>

                {/* Location */}
                <div className="p-3.5 sm:p-4 rounded-xl bg-white/[0.03] border border-white/10">
                  <span className="font-mono text-[9px] sm:text-[10px] text-white/50 uppercase tracking-widest block">
                    Based In
                  </span>
                  <span className="font-mono text-xs sm:text-sm text-white font-medium block">
                    {PERSONAL_INFO.location}
                  </span>
                </div>
              </div>
            </div>

            {/* Resume Downloads */}
            <div className="mt-8 pt-6 border-t border-white/10">
              <span className="font-mono text-[10px] text-white/50 uppercase tracking-widest block mb-3">
                Official Documents
              </span>
              <div className="flex flex-col sm:flex-row gap-2">
                <a
                  href={PERSONAL_INFO.resumePdf}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 py-2.5 px-3 rounded-xl bg-gold-primary/10 hover:bg-gold-primary/20 border border-gold-primary/30 hover:border-gold-primary/60 text-gold-light text-xs font-mono text-center transition-all shadow-sm"
                >
                  Download Resume PDF
                </a>
                <a
                  href={PERSONAL_INFO.resumeAtsPdf}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 py-2.5 px-3 rounded-xl bg-white/[0.03] hover:bg-white/[0.08] border border-white/10 hover:border-white/20 text-white/70 hover:text-white text-xs font-mono text-center transition-all"
                >
                  ATS Compliant Format
                </a>
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* Right Column: Interactive Dispatch Form */}
        <ScrollReveal direction="right" delay={150} className="lg:col-span-3">
          <div className="glass-card p-6 sm:p-8 rounded-2xl h-full flex flex-col justify-between border border-gold-primary/25 hover:border-gold-primary/45 transition-colors shadow-2xl relative overflow-hidden">
            
            {/* Ambient Gold Header Sheen */}
            <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-gold-primary/60 to-transparent pointer-events-none" />

            {status === 'success' ? (
              /* =========================================================
                 MINIMAL & CLEAN CONFIRMATION CARD
                 ========================================================= */
              <div className="py-8 sm:py-12 text-center flex flex-col items-center justify-center animate-fadeIn my-auto">
                <div className="w-16 h-16 rounded-full bg-gold-primary/10 border border-gold-primary/30 flex items-center justify-center mb-5 shadow-[0_0_25px_rgba(212,175,55,0.15)]">
                  <svg className="w-8 h-8 text-gold-light" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>

                <h3 className="font-display text-2xl sm:text-3xl font-bold text-white mb-3">
                  Message Sent
                </h3>
                
                <p className="text-white/70 text-sm sm:text-base max-w-sm mx-auto leading-relaxed mb-8">
                  Thank you for reaching out! I'll get back to you shortly at <span className="text-white font-medium">{formData.email}</span>.
                </p>

                <button
                  type="button"
                  onClick={() => {
                    setStatus('idle');
                    setFormData({ name: '', email: '', subject: '', message: '' });
                  }}
                  className="px-6 py-2.5 rounded-xl border border-white/15 hover:border-gold-primary/50 text-xs font-mono text-white/75 hover:text-white hover:bg-gold-primary/5 transition-all duration-200 cursor-pointer flex items-center gap-2"
                >
                  <span>← Send another message</span>
                </button>
              </div>
            ) : (
              <div>
                <div className="flex items-center justify-between mb-1">
                  <h3 className="font-display text-xl sm:text-2xl font-bold text-white">
                    Send Message
                  </h3>
                  <span className="px-3 py-1 rounded-full bg-gold-primary/10 border border-gold-primary/30 font-mono text-[10px] text-gold-light flex items-center gap-1.5 shadow-sm">
                    <span className="w-1.5 h-1.5 rounded-full bg-gold-primary animate-pulse" />
                    DIRECT INBOX DISPATCH
                  </span>
                </div>
                <p className="text-white/50 text-xs font-mono mb-6 sm:mb-8">
                  DISPATCH INQUIRY DIRECTLY TO JISON'S INBOX
                </p>

                {/* ORIGINAL CLEAN DISPATCH FORM */}
                <form onSubmit={handleSubmit} className="space-y-4">
                  {/* Error Notification Banner with Fallback */}
                  {status === 'error' && (
                    <div className="p-4 rounded-xl bg-red-500/10 border border-red-500/30 text-left mb-2 animate-shake">
                      <div className="flex items-center gap-2 text-red-400 font-mono text-xs font-bold mb-1">
                        <span>⚠️ Transmission Alert</span>
                      </div>
                      <p className="text-white/80 text-xs mb-3 leading-relaxed">
                        {errorMessage}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        <button
                          type="button"
                          onClick={handleSubmit}
                          className="px-3 py-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-white text-xs font-mono transition-all cursor-pointer"
                        >
                          ↻ Retry Transmission
                        </button>
                        <a
                          href={`mailto:${PERSONAL_INFO.email}?subject=${encodeURIComponent(formData.subject || `Portfolio Inquiry from ${formData.name}`)}&body=${encodeURIComponent(formData.message)}`}
                          className="px-3 py-1.5 rounded-lg bg-gold-primary/20 hover:bg-gold-primary/30 border border-gold-primary/40 text-gold-light text-xs font-mono transition-all flex items-center gap-1.5"
                        >
                          <span>✉ Open in Email Client</span>
                          <span>→</span>
                        </a>
                      </div>
                    </div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="font-mono text-[10px] sm:text-[11px] text-white/70 uppercase tracking-wider block mb-1.5">
                        <span className="text-gold-primary mr-1">✦</span> Your Name
                      </label>
                      <input
                        type="text"
                        required
                        disabled={status === 'loading'}
                        placeholder="e.g. Alex Vance"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/10 focus:border-gold-primary focus:bg-white/[0.05] focus:ring-1 focus:ring-gold-primary/30 text-white text-sm outline-none transition-all disabled:opacity-50"
                      />
                    </div>

                    <div>
                      <label className="font-mono text-[10px] sm:text-[11px] text-white/70 uppercase tracking-wider block mb-1.5">
                        <span className="text-gold-primary mr-1">✦</span> Your Email
                      </label>
                      <input
                        type="email"
                        required
                        disabled={status === 'loading'}
                        placeholder="e.g. alex@company.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/10 focus:border-gold-primary focus:bg-white/[0.05] focus:ring-1 focus:ring-gold-primary/30 text-white text-sm outline-none transition-all disabled:opacity-50"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="font-mono text-[10px] sm:text-[11px] text-white/70 uppercase tracking-wider block mb-1.5">
                      Subject <span className="text-white/40 text-[9px]">(Optional)</span>
                    </label>
                    <input
                      type="text"
                      disabled={status === 'loading'}
                      placeholder="e.g. Project Collaboration / AI System / Full Stack Role"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/10 focus:border-gold-primary focus:bg-white/[0.05] focus:ring-1 focus:ring-gold-primary/30 text-white text-sm outline-none transition-all disabled:opacity-50"
                    />
                  </div>

                  <div>
                    <label className="font-mono text-[10px] sm:text-[11px] text-white/70 uppercase tracking-wider block mb-1.5">
                      <span className="text-gold-primary mr-1">✦</span> Message
                    </label>
                    <textarea
                      rows="4"
                      required
                      disabled={status === 'loading'}
                      placeholder="Tell me about your project, team opportunity, or inquiry..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/10 focus:border-gold-primary focus:bg-white/[0.05] focus:ring-1 focus:ring-gold-primary/30 text-white text-sm outline-none transition-all resize-none disabled:opacity-50"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={status === 'loading'}
                    className="w-full py-3.5 sm:py-4 rounded-xl bg-gold-gradient text-obsidian-base font-display text-sm font-bold tracking-wide shadow-xl hover:shadow-gold-primary/30 hover:scale-[1.01] active:scale-[0.99] disabled:opacity-70 disabled:pointer-events-none transition-all flex items-center justify-center gap-2 cursor-pointer"
                  >
                    {status === 'loading' ? (
                      <>
                        <span className="w-4 h-4 border-2 border-obsidian-base border-t-transparent rounded-full animate-spin" />
                        <span>TRANSMITTING MESSAGE DIRECTLY TO INBOX...</span>
                      </>
                    ) : (
                      <>
                        <span>Dispatch Message</span>
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                      </>
                    )}
                  </button>
                </form>
              </div>
            )}
          </div>
        </ScrollReveal>

      </div>

      {/* Footer Meta */}
      <ScrollReveal direction="up" delay={200} className="mt-20 sm:mt-24 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-xs text-white/50">
        <p>© 2026 Jison Joseph Sebastian · All Rights Reserved.</p>
        <div className="flex items-center gap-6">
          <a href={PERSONAL_INFO.links.github} target="_blank" rel="noopener noreferrer" className="hover:text-gold-light transition-colors">
            GitHub
          </a>
          <a href={PERSONAL_INFO.links.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-gold-light transition-colors">
            LinkedIn
          </a>
          <a href={PERSONAL_INFO.links.domain} target="_blank" rel="noopener noreferrer" className="hover:text-gold-light transition-colors">
            work.gd
          </a>
        </div>
      </ScrollReveal>
    </section>
  );
}
