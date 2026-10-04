# Reference Study 03: Silvia Malavasi (https://www.silviamalavasi.com/)

## 1. Overview & Positioning
- **Author:** Silvia Malavasi (Creative Developer).
- **Tone:** Avant-garde editorial, dark sensual minimalism, hypnotic motion, haute-couture digital art.
- **Tech Stack:** React, Vite, Rolldown runtime, GSAP (ScrollTrigger + Flip), Inter 24pt Black, WebGL 3D canvas shaders.

---

## 2. Visual Style & Aesthetic System
- **Color Palette:**
  - **Atmospheric Background:** Warm dark chocolate-tinted obsidian (`#0a0907`).
  - **Text:** Stark contrast high-fashion cream / white (`#FBFBFB`).
  - **Subtle Accents:** Warm amber / sepia tone overlays that blend seamlessly with 3D renders.
- **Typography:**
  - Ultra-heavy display weights: `Inter 24pt-Black` used at massive scale (10vw to 18vw).
  - High contrast between gigantic expressive headings and tiny, whisper-quiet technical captions (`9px - 11px`).
- **Layout Philosophy:**
  - Deconstructed editorial layout. Elements are pinned, scaled, and layered to produce deep atmospheric depth rather than standard boxy cards.

---

## 3. Signature Animations & Micro-Interactions
1. **Pinned Kinetic Typography Scrubbing:**
   - Giant hero typography pins on the viewport and stretches, scales down, or tracks horizontally across the screen in direct sync with scroll scrub.
   - Text overlaps 3D canvas elements with blend modes (`mix-blend-mode: difference` or layered z-indices).
2. **WebGL Interactive Sculpture / 3D Canvas:**
   - Hero features an interactive, lighting-reactive 3D sculpture/model (`teschio.webp` / WebGL mesh) that rotates smoothly in response to mouse movement and scroll acceleration.
3. **Inertia / Smooth Scroll Velocity:**
   - Fluid scroll dampening where speed of scrolling influences rotation and skew of typographic headlines.
4. **Staggered Opacity & Depth Dissolves:**
   - As new sections arrive, previous text elements don't just scroll away—they dissolve into deep fog or blur outwards (`filter: blur(12px)` + `scale(1.1)`), creating a dream-like transition.

---

## 4. Integration Blueprint for Our Portfolio
- **Scale-Down Scroll Transitions:** As the user scrolls through the 30fps frames, scale down huge headline text from 120% to 80% while fading it out into the background video.
- **Backdrop Blur & Blend Modes:** Combine our canvas video background with `mix-blend-mode` typography or subtle backdrop-blur glass panels for an artistic, high-fashion presentation.
- **Parallax Floating Headings:** Place headline words on separate parallax layers so foreground words move slightly faster than background words as the video scrubs behind them.
- **Velocity-Sensitive Text Skew:** Slightly skew or stretch text headlines based on scroll speed to give the scrubbing experience high tactile elasticity.
