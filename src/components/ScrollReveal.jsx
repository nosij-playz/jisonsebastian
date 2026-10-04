import React, { useEffect, useRef, useState } from 'react';

/**
 * ScrollReveal:
 * Applies high-performance, GPU-accelerated entrance and scroll animations
 * (fade, scale, blur, and directional lift) to cards and containers.
 */
export default function ScrollReveal({ 
  children, 
  className = '', 
  delay = 0, 
  direction = 'up', 
  distance = 32
}) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // Continuous bidirectional triggers: fires on scroll down, scroll up, and repeat visits
        setIsVisible(entry.isIntersecting);
      },
      { 
        threshold: 0.06, 
        rootMargin: '20px 0px -20px 0px' 
      }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const getTransform = () => {
    if (isVisible) return 'translate3d(0, 0, 0) scale(1)';
    switch (direction) {
      case 'up': return `translate3d(0, ${distance}px, 0) scale(0.96)`;
      case 'down': return `translate3d(0, -${distance}px, 0) scale(0.96)`;
      case 'left': return `translate3d(${distance}px, 0, 0) scale(0.96)`;
      case 'right': return `translate3d(-${distance}px, 0, 0) scale(0.96)`;
      case 'scale': return 'scale(0.90)';
      default: return `translate3d(0, ${distance}px, 0)`;
    }
  };

  return (
    <div
      ref={ref}
      className={`transition-all ease-[cubic-bezier(0.16,1,0.3,1)] will-change-[transform,opacity,filter] ${className}`}
      style={{
        transform: getTransform(),
        opacity: isVisible ? 1 : 0,
        filter: isVisible ? 'blur(0px)' : 'blur(6px)',
        transitionDuration: isVisible ? '700ms' : '300ms',
        transitionDelay: isVisible ? `${delay}ms` : '0ms'
      }}
    >
      {children}
    </div>
  );
}
