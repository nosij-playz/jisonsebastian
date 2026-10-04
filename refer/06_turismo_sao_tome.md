# Reference Study 06: São Tomé E Príncipe Tourism (https://turismo.gov.st/fr)

## 1. Overview & Positioning
- **Subject:** Official National Tourism Platform of São Tomé and Príncipe.
- **Tone:** Lush, organic, prestige travel editorial, deeply immersive storytelling, slow luxury, cultural reverence.
- **Tech Stack:** Barba.js smooth page transitions, custom CSS mask-image vector fill preloaders, rich media streaming, responsive responsive typography.

---

## 2. Visual Style & Aesthetic System
- **Color Palette:**
  - **Earth Green Base:** Deep jungle green (`#38492A`).
  - **Accents:** Warm tropical sun gold, warm sand beige, deep rainforest teal.
  - **Contrast:** Pure white typography over rich organic photographic backgrounds.
- **Typography & Layout:**
  - Elegant modern serif headers mixed with pristine Swiss sans body text.
  - Organic flowing card borders with subtle rounded radii and deep atmospheric shadows.
  - Asymmetric editorial magazine photo spreads.

---

## 3. Signature Animations & Micro-Interactions
1. **Vertical Logo-Mask Preloader (`AppLoader`):**
   - High-end loading screen (`#AppLoader`) using CSS `mask-image` with an SVG brand silhouette.
   - The logo fills up from bottom to top with pure white as page assets load:
     `clip-path: inset(calc(100% - var(--app-loader-progress, 0) * 100%) 0 0 0);`
   - Smoothly fades out with `transition: opacity .5s ease-out` once resources are ready.
2. **Barba.js Seamless Page Transitions:**
   - No hard page reloads when navigating between sections. Content morphs smoothly via cross-fade and slide transforms.
3. **Parallax Image Masks:**
   - Images scale subtly inside expanding clipping masks as they enter the viewport.
4. **Floating Ambient Controls:**
   - Soundscapes / video controls pinned tastefully in peripheral corners with low visual friction.

---

## 4. Integration Blueprint for Our Portfolio
- **The Vertical Fill Preloader:**
  - Because our portfolio has 452 frames to load/preload, we can adapt this exact technique!
  - Create a sleek monogram or logo preloader in the center of the screen that fills up from 0% to 100% as the initial critical frames load into memory.
  - Guarantees the user never sees a lagging or blank video canvas on first visit.
- **Lush Color Gradients Over Black Background:**
  - Introduce subtle emerald, gold, or twilight gradient washes over dark sections of our canvas background to add organic warmth to the tech video.
- **Curved Section Dividers & Organic Masking:**
  - Float organic glass cards with rounded corners over the canvas video scrub to house project case studies and testimonials.
