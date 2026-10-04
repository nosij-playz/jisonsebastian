/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ['Syne', 'sans-serif'],
        sans: ['Inter', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      colors: {
        obsidian: {
          base: '#050507',
          deep: '#0A0A0E',
          card: '#0E0F14',
          border: 'rgba(255, 255, 255, 0.08)',
        },
        gold: {
          primary: '#D4AF37',
          light: '#F3E5AB',
          dark: '#9A7D24',
          glow: 'rgba(212, 175, 55, 0.35)',
        },
        cyber: {
          emerald: '#10B981',
          neon: '#39FF14',
          cyan: '#06B6D4',
          rose: '#FF3D81',
        }
      },
      backgroundImage: {
        'gold-gradient': 'linear-gradient(135deg, #F3E5AB 0%, #D4AF37 50%, #9A7D24 100%)',
        'radial-spotlight': 'radial-gradient(circle at var(--mouse-x, 50%) var(--mouse-y, 50%), rgba(212, 175, 55, 0.15) 0%, transparent 60%)',
      }
    },
  },
  plugins: [],
}
