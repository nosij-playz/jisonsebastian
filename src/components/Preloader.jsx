import React from 'react';

/**
 * Preloader inspired by Turismo STP & DAQ Consulting.
 * Fills up a geometric monogram from bottom to top as 30fps frames buffer.
 */
export default function Preloader({ progress, isReady }) {
  if (isReady) return null;

  return (
    <div className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#050507] transition-opacity duration-700">
      {/* Brand Luxury Favicon Emblem with Animated Loading Progress */}
      <div className="relative w-24 h-24 sm:w-28 sm:h-28 flex items-center justify-center mb-8">
        {/* Ambient Glow Aura that intensifies as loading progresses */}
        <div 
          className="absolute inset-0 rounded-2xl bg-gold-primary/25 blur-xl transition-all duration-300 pointer-events-none"
          style={{ opacity: 0.2 + (progress / 100) * 0.8 }}
        />

        {/* Outer Gold Border Halo */}
        <div className="absolute -inset-1.5 rounded-[22px] border border-gold-primary/30 pointer-events-none" />

        {/* Base Unloaded Favicon (Muted Silhouette) */}
        <img
          src="/apple-touch-icon.png"
          alt="JS Favicon"
          className="absolute inset-0 w-full h-full object-contain rounded-2xl opacity-20 filter grayscale contrast-125 select-none pointer-events-none"
        />

        {/* Foreground Loaded Fill Favicon (Reveals smoothly bottom-to-top with clip-path) */}
        <img
          src="/apple-touch-icon.png"
          alt="JS Favicon Loaded"
          className="absolute inset-0 w-full h-full object-contain rounded-2xl select-none pointer-events-none transition-all duration-200 drop-shadow-[0_0_20px_rgba(212,175,55,0.6)]"
          style={{
            clipPath: `inset(${100 - progress}% 0 0 0)`
          }}
        />

        {/* Sleek Sweep Laser Line at the current fill level */}
        {progress > 0 && progress < 100 && (
          <div 
            className="absolute left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-gold-light to-transparent shadow-[0_0_10px_#F3E5AB] pointer-events-none transition-all duration-200"
            style={{ top: `${100 - progress}%` }}
          />
        )}
      </div>

      {/* Telemetry Status Line */}
      <div className="flex flex-col items-center gap-2 font-mono text-xs">
        <div className="flex items-center gap-3 text-gold-light tracking-wider">
          <span className="w-2 h-2 rounded-full bg-cyber-emerald animate-pulse"></span>
          <span>INITIALIZING NEURAL CANVAS</span>
          <span className="text-white/40">//</span>
          <span className="text-gold-primary font-semibold">{Math.round(progress)}%</span>
        </div>

        <p className="text-white/40 text-[11px] tracking-widest uppercase">
          INITIALIZING HIGH PRECISION WORKSPACE · JISON JOSEPH SEBASTIAN
        </p>

        {/* Precision Progress Bar */}
        <div className="w-64 h-[2px] bg-white/10 rounded-full mt-4 overflow-hidden">
          <div 
            className="h-full bg-gradient-to-r from-gold-primary via-gold-light to-cyber-emerald transition-all duration-300 ease-out"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>
    </div>
  );
}
