import React, { useState } from 'react';
import { PERSONAL_INFO, AWARDS_AND_EDUCATION } from '../data/portfolioData';
import ScrollReveal from './ScrollReveal';

/**
 * Shadcn Spotlight Bento Grid:
 * Interactive cards featuring cursor-tracking gradient illumination
 * and scroll-triggered entrance motion.
 */
export default function BentoGridSection() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <section id="bento" className="relative w-full py-24 sm:py-32 px-4 sm:px-8 max-w-6xl mx-auto">
      {/* Section Header */}
      <ScrollReveal direction="down" className="text-center mb-14 sm:mb-20">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gold-primary/10 border border-gold-primary/20 text-xs font-mono text-gold-light mb-4">
          <span>02 // PHILOSOPHY &amp; CREDENTIALS</span>
        </div>
        <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight mb-4">
          Architecting Intelligence with <span className="gold-gradient-text">Purpose</span>
        </h2>
        <p className="text-white/70 max-w-2xl mx-auto font-sans text-sm sm:text-base leading-relaxed">
          {PERSONAL_INFO.mission}
        </p>
      </ScrollReveal>

      {/* 4-Card Bento Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6">
        
        {/* Card 1: Large Span (Agentic AI & Computer Vision) */}
        <ScrollReveal direction="up" delay={100} className="md:col-span-2">
          <div 
            onMouseMove={handleMouseMove}
            className="relative w-full glass-card p-6 sm:p-8 rounded-2xl overflow-hidden group h-full flex flex-col justify-between"
          >
            {/* Spotlight gradient */}
            <div 
              className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              style={{
                background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(212, 175, 55, 0.12), transparent 45%)`
              }}
            />

            <div className="relative w-full z-10">
              <div className="flex items-center justify-between mb-4">
                <span className="font-mono text-xs uppercase tracking-wider text-gold-primary">
                  01 // AGENTIC AI &amp; VISION
                </span>
                <span className="w-2 h-2 rounded-full bg-cyber-emerald animate-pulse"></span>
              </div>

              <h3 className="font-display text-xl sm:text-2xl font-bold text-white mb-3">
                Autonomous AI Systems &amp; Deep Learning
              </h3>
              <p className="text-white/75 text-xs sm:text-sm leading-relaxed mb-6">
                Specialized in architecting multi-agent collaborative workflows using LLMs, Retrieval-Augmented Generation (RAG), and custom convolutional neural networks (CNNs). Proven experience reducing waste classification error by 30% and deploying low-latency model inference pipelines.
              </p>
            </div>

            {/* Core Competencies Badges */}
            <div className="relative w-full z-10 flex flex-wrap gap-1.5 sm:gap-2 pt-4 border-t border-white/10">
              {['PyTorch', 'TensorFlow', 'LLMs', 'Agentic AI', 'OpenCV', 'RAG', 'CNNs', 'GANs'].map((tag) => (
                <span 
                  key={tag}
                  className="px-2.5 py-1 rounded-md bg-white/[0.05] border border-white/10 text-[11px] font-mono text-white/90"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </ScrollReveal>

        {/* Card 2: Award Accolade (SRISHTI 2026 Winner) */}
        <ScrollReveal direction="up" delay={200} className="md:col-span-1">
          <div 
            className="relative w-full glass-card p-6 sm:p-8 rounded-2xl overflow-hidden group h-full flex flex-col justify-between border-gold-primary/30 bg-gradient-to-br from-gold-primary/[0.08] to-transparent"
          >
            <div className="relative w-full z-10">
              <div className="w-11 h-11 rounded-xl bg-gold-primary/20 border border-gold-primary/40 flex items-center justify-center text-xl mb-4 group-hover:scale-110 transition-transform">
                🏆
              </div>

              <span className="font-mono text-[10px] uppercase tracking-wider text-gold-light bg-gold-primary/20 px-2.5 py-1 rounded-full border border-gold-primary/40 inline-block mb-3">
                SRISHTI 2026 AWARD
              </span>

              <h3 className="font-display text-lg sm:text-xl font-bold text-white mb-2">
                Best Project Award
              </h3>
              <p className="text-white/75 text-xs leading-relaxed">
                Awarded 1st place in Computer Science for <strong className="text-gold-light">NeuroWave (CAIRS)</strong>, combining real-time weather telemetries with ensemble deep learning on multi-modal sensor inputs.
              </p>
            </div>

            <div className="relative w-full z-10 mt-6 pt-4 border-t border-gold-primary/20 flex items-center justify-between text-[11px] font-mono text-gold-light">
              <span>ACCURACY: 92%</span>
              <span>ENSEMBLE AI</span>
            </div>
          </div>
        </ScrollReveal>

        {/* Card 3: Academic Foundations & GATE 2026 */}
        <ScrollReveal direction="up" delay={250} className="md:col-span-1">
          <div className="relative w-full glass-card p-6 sm:p-8 rounded-2xl overflow-hidden group h-full flex flex-col justify-between">
            <div className="relative w-full z-10">
              <div className="w-11 h-11 rounded-xl bg-cyber-emerald/15 border border-cyber-emerald/30 flex items-center justify-center text-lg mb-4 group-hover:scale-110 transition-transform">
                🎓
              </div>

              <span className="font-mono text-[10px] uppercase tracking-wider text-cyber-emerald bg-cyber-emerald/10 px-2 py-0.5 rounded-full border border-cyber-emerald/20 inline-block mb-3">
                ACADEMIC RIGOR
              </span>

              <h3 className="font-display text-lg sm:text-xl font-bold text-white mb-2">
                GATE 2026 Qualified
              </h3>
              <p className="text-white/75 text-xs leading-relaxed mb-4">
                Qualified Graduate Aptitude Test in Engineering in Computer Science &amp; IT. Strong algorithmic foundations:
              </p>
              
              <div className="text-[11px] font-mono text-white/60 space-y-1">
                <p>• Data Structures &amp; Algorithms</p>
                <p>• Operating Systems &amp; DBMS</p>
                <p>• Object-Oriented System Design</p>
              </div>
            </div>

            <div className="relative w-full z-10 mt-6 pt-4 border-t border-white/10 text-[11px] font-mono text-white/60">
              CGPA: 8.25 / 10.0 · Vimal Jyothi College
            </div>
          </div>
        </ScrollReveal>

        {/* Card 4: Double Span (Enterprise Systems & Certifications) */}
        <ScrollReveal direction="up" delay={350} className="md:col-span-2">
          <div className="relative w-full glass-card p-6 sm:p-8 rounded-2xl overflow-hidden group h-full flex flex-col justify-between">
            <div className="relative w-full z-10">
              <div className="flex items-center justify-between mb-4">
                <span className="font-mono text-xs uppercase tracking-wider text-gold-primary">
                  03 // ENTERPRISE &amp; CERTIFICATIONS
                </span>
                <span className="font-mono text-xs text-white/40">5 VERIFIED CREDENTIALS</span>
              </div>

              <h3 className="font-display text-xl sm:text-2xl font-bold text-white mb-2">
                SAP Technology Consultant &amp; Cloud Architecture
              </h3>
              <p className="text-white/75 text-xs sm:text-sm leading-relaxed mb-6">
                Equipped with enterprise software integration skills including SAP ABAP workflow automation, Google Cloud AI/ML transformation, and advanced deep learning certifications from IIT Ropar.
              </p>
            </div>

            {/* Grid of Verified Certifications */}
            <div className="relative w-full z-10 grid grid-cols-1 sm:grid-cols-2 gap-2.5 sm:gap-3 pt-4 border-t border-white/10">
              {AWARDS_AND_EDUCATION.certifications.map((cert) => (
                <div 
                  key={cert.name}
                  className="flex items-center gap-2.5 p-2.5 rounded-lg bg-white/[0.03] border border-white/10 hover:border-gold-primary/30 transition-colors"
                >
                  <span className="text-gold-primary text-xs font-bold">✓</span>
                  <div className="min-w-0">
                    <p className="text-xs font-medium text-white truncate">{cert.name}</p>
                    <p className="text-[10px] font-mono text-white/50">{cert.issuer}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </ScrollReveal>

      </div>
    </section>
  );
}
