# Reference Study 04: Pamidor Design (https://pamidordesign.co/)

## 1. Overview & Positioning
- **Author:** Dor Sharaby (Product Designer & Art Director, Pamidor Studio).
- **Tone:** Confident, playful editorial, highly crafted product design, rebellious creative flair ("I take the fun seriously").
- **Core Message:** Brands, products, 3D, and the rebellious art in between.

---

## 2. Visual Style & Aesthetic System
- **Color & Contrast:**
  - Crisp monochromatic base with high-contrast stark black and white, complemented by bursts of vibrant saturated color in case study artwork.
- **Typography:**
  - Modern sans-serif display headings paired with clean Swiss grotesque body copy.
  - Bracketed monospaced metadata labels: `(CLIENTS & COLLABORATIONS)`, `(01 PRODUCT DESIGN)`, `(02 BRAND IDENTITY)`.
- **Structure & Layout:**
  - **The Dual-Persona Structure:**
    1. Highly structured, professional case study list (Timeline, Role, Year, Team, Client metrics).
    2. "The Art Lab" — an unconstrained, grid-breaking playground section with bold typography and expressive, wild creative experimentation.
  - Asymmetrical grid with generous margins and tight project summary modules.

---

## 3. Signature Animations & Micro-Interactions
1. **Interactive Magnetic Hover Rows:**
   - Case study rows feature dynamic hover states where hovering over a project row triggers a floating cursor-following image/video preview of the work.
   - Text doubles and slides on hover (`HomeHome`, `WorkWork`, `Jump To ProjectJump To Project` staggered text marquee shift).
2. **Text Reveal / Staggered Ticker:**
   - Headings split into individual words or characters that reveal in sequence with snappy ease-out curves.
3. **Floating Floating Action Badges & Contact Pill:**
   - Permanent floating email/contact trigger (`PAMIDORDESIGN@GMAIL.COM`) that magnetically attracts toward the user cursor when hovering nearby.
4. **Interactive Art Lab Grid Break:**
   - Sudden transition from orderly tabular alignment to tilted, scattered sticker-style portfolio cards that react to drag or hover velocity.

---

## 4. Integration Blueprint for Our Portfolio
- **Dual Mode Sectioning (Structured vs. Creative Playground):**
  - Use the initial 150 frames for a clean, sleek, tech-focused intro.
  - Transition the middle 150 frames into an expressive showcase of our best projects.
  - Use the final frames for an explosive contact / call-to-action scene.
- **Floating Hover Thumbnail Cards:** When hovering over project names in our portfolio section, have a floating preview card track the cursor with smooth spring physics.
- **Magnetic Staggered Text Links:** Apply the double-text slide hover effect (`overflow-hidden` with two stacked spans moving up on hover) to all portfolio navigation and social links.
- **Numbered Modular Service / Skill Cards:** Lay out skills and offerings with clean numeric badges (`01 / UI ENGINEERING`, `02 / MOTION DESIGN`, `03 / 3D & SHADERS`).
