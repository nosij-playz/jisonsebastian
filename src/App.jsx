import React, { useState, useEffect, useRef } from 'react';
import Preloader from './components/Preloader';
import TacticalHUD from './components/TacticalHUD';
import HeroSection from './components/HeroSection';
import BentoGridSection from './components/BentoGridSection';
import CardFolderProjects from './components/CardFolderProjects';
import DnaSkillsCarousel from './components/DnaSkillsCarousel';
import ExperienceTimeline from './components/ExperienceTimeline';
import ContactFinale from './components/ContactFinale';

export default function App() {
  const canvasRef = useRef(null);
  const [currentFrameIndex, setCurrentFrameIndex] = useState(1);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [loadProgress, setLoadProgress] = useState(0);
  const [isPreloaderDone, setIsPreloaderDone] = useState(false);

  const TOTAL_FRAMES = 452;
  const imageCacheRef = useRef([]);

  // Frame URL constructor (1080p high-performance WebP)
  const getFrameUrl = (idx) => `/frames/frame_${idx.toString().padStart(4, '0')}.webp`;

  // Preload initial frames buffer for stutter-free video scrub
  useEffect(() => {
    let loadedCount = 0;
    const INITIAL_BUFFER = Math.min(60, TOTAL_FRAMES);

    const onImageLoaded = () => {
      loadedCount++;
      const pct = Math.min(100, (loadedCount / INITIAL_BUFFER) * 100);
      setLoadProgress(pct);

      if (loadedCount >= INITIAL_BUFFER) {
        setTimeout(() => setIsPreloaderDone(true), 350);
      }
    };

    // Buffer initial batch of frames
    for (let i = 1; i <= INITIAL_BUFFER; i++) {
      const img = new Image();
      img.src = getFrameUrl(i);
      img.onload = onImageLoaded;
      img.onerror = onImageLoaded;
      imageCacheRef.current[i] = img;
    }

    // Lazy buffer remaining frames in background
    setTimeout(() => {
      for (let i = INITIAL_BUFFER + 1; i <= TOTAL_FRAMES; i++) {
        const img = new Image();
        img.src = getFrameUrl(i);
        imageCacheRef.current[i] = img;
      }
    }, 1200);
  }, []);

  // Initialize and handle canvas drawing
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');

    // Draw first frame once available
    const initialImg = new Image();
    initialImg.src = getFrameUrl(1);
    initialImg.onload = () => {
      canvas.width = initialImg.width || 1920;
      canvas.height = initialImg.height || 1080;
      ctx.drawImage(initialImg, 0, 0);
    };

    // Render frame to canvas
    const drawFrame = (frameNum) => {
      let img = imageCacheRef.current[frameNum];
      if (!img || !img.complete) {
        img = new Image();
        img.src = getFrameUrl(frameNum);
        imageCacheRef.current[frameNum] = img;
      }

      if (img.complete && img.naturalWidth !== 0) {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
      }
    };

    // Fluid continuous linear scroll scrub (Uninterrupted and buttery smooth)
    const handleScroll = () => {
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (scrollHeight <= 0) return;

      const progress = Math.min(1, Math.max(0, scrollTop / scrollHeight));
      const targetFrame = Math.min(
        TOTAL_FRAMES, 
        Math.max(1, Math.ceil(progress * TOTAL_FRAMES))
      );

      setScrollProgress(progress);
      setCurrentFrameIndex(targetFrame);
      requestAnimationFrame(() => drawFrame(targetFrame));
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="relative min-h-screen bg-[#050507] text-[#F5F0EB] overflow-x-hidden selection:bg-gold-primary/30 selection:text-gold-light">
      {/* Turismo STP Inspired Mask Preloader */}
      <Preloader progress={loadProgress} isReady={isPreloaderDone} />

      {/* =========================================================
          FIXED FULLSCREEN 30FPS VIDEO CANVAS BACKDROP
          (Continuous, smooth uninterrupted 30fps scrub)
      ========================================================= */}
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
        <canvas
          ref={canvasRef}
          className="w-full h-full object-cover filter brightness-[0.58] contrast-[1.08] saturate-[1.12] transition-[filter] duration-700"
        />
        {/* Balanced Cinematic Film Vignette */}
        <div 
          className="absolute inset-0 pointer-events-none"
          style={{
            background: 'radial-gradient(circle at center, transparent 35%, rgba(5,5,7,0.5) 85%), linear-gradient(to bottom, rgba(5,5,7,0.45) 0%, transparent 15%, transparent 85%, rgba(5,5,7,0.7) 100%)'
          }}
        />
      </div>

      {/* =========================================================
          TACTICAL HUD & FLOATING GLASS NAVBAR
      ========================================================= */}
      <TacticalHUD
        currentFrame={currentFrameIndex}
        totalFrames={TOTAL_FRAMES}
        scrollProgress={scrollProgress}
      />

      {/* =========================================================
          SCROLLABLE PORTFOLIO CONTENT LAYERS (Z-INDEX 10)
      ========================================================= */}
      <main className="relative z-10 w-full flex flex-col">
        {/* 1. Hero & Verified Accolades */}
        <HeroSection />

        {/* 2. Mission, Stats & Shadcn Spotlight Bento Grid */}
        <BentoGridSection />

        {/* 3. Smooth Interactive Project Deck & Complete 15-Project Catalog */}
        <CardFolderProjects />

        {/* 4. Scrolltide 3D DNA Skills Carousel */}
        <DnaSkillsCarousel />

        {/* 5. Professional Experience & Leadership Timeline */}
        <ExperienceTimeline />

        {/* 6. Cinematic Contact Finale & Dispatcher */}
        <ContactFinale />
      </main>
    </div>
  );
}
