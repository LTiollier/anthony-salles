# Template Components Inventory

This document lists all available components and sections from the current template to help plan the migration to the Anthony Salles physiotherapist website.

## 🎨 Global Styles
**File:** `app/globals.css`
- **Glass effect:** `.glass` - White/10 background with white/20 border for glassmorphism
- **Button style:** `.btn` - Rounded full buttons with hover/active states
- **Theme:** Dark background (#000) with white text, Poppins font
- **Framer Motion:** Animations throughout with spring transitions

---

## 🧩 Reusable Components

### 1. **Navbar** (`components/navbar.jsx`)
- Sticky top navigation with scroll-based backdrop blur
- Mobile hamburger menu with full-screen overlay
- Logo display
- Navigation links array (easily customizable)
- CTA button ("Sign Up")
- Framer Motion animations (slide down on load)
- **Status:** Can be adapted - needs French text and new navigation structure

### 2. **Footer** (`components/footer.jsx`)
- Logo display
- Footer links (Terms, Privacy, Security, Sitemap)
- Social media icons (Dribbble, LinkedIn, Twitter, GitHub)
- Copyright text
- Glassmorphism styling
- **Status:** Can be adapted - needs French text and appropriate links

### 3. **Section Title** (`components/section-title.jsx`)
- Reusable title + description component
- Centered layout with animation
- Max width constraints for readability
- **Status:** Highly reusable - just needs French content

### 4. **Lenis Scroll** (`components/lenis-scroll.jsx`)
- Smooth scrolling functionality
- **Status:** Can be kept as-is

---

## 📦 Section Components

### 1. **Hero Section** (`sections/hero-section.jsx`)
- Large title with subtitle
- Two CTA buttons
- Colorful gradient blur effects in background (pink, purple, orange)
- Framer Motion animations (staggered entrance)
- **Adaptation needed:** New hero for physiotherapist (professional, calming)

### 2. **Trusted Companies** (`sections/trusted-companies.jsx`)
- Logo carousel/grid
- Simple text intro
- **Potential use:** Could display certifications, professional affiliations, or partner clinics

### 3. **Features** (`sections/features.jsx`)
- 3-column grid of feature cards
- Icon + title + description per card
- Glass effect cards with hover lift
- Uses Lucide icons (BotIcon, BrainIcon, ZapIcon)
- **Adaptation needed:** Perfect for highlighting treatment specialties or services

### 4. **Workflow Steps** (`sections/workflow-steps.jsx`)
- 3-step visual process with images
- Alternating left-right layout
- Numbered indicators with connecting lines
- Image + title + description + "Learn More" link
- **Adaptation needed:** Could show patient journey or treatment process

### 5. **Testimonials** (`sections/testimonials.jsx`)
- 3-column responsive grid
- Cards with quote + name + role + image
- 6 testimonials included
- **Adaptation needed:** Perfect for patient testimonials (with privacy considerations)

### 6. **Pricing Plans** (`sections/pricing-plans.jsx`)
- 3-tier pricing cards
- Features list with checkmarks
- Icon badges (RocketIcon, ZapIcon, CrownIcon)
- "Most Popular" badge option
- **Potential use:** Could be adapted for service packages or consultation types

### 7. **FAQ Section** (`sections/faq-section.jsx`)
- Accordion-style questions
- Smooth expand/collapse animations
- Glass effect styling
- **Status:** Highly reusable - needs relevant healthcare/treatment FAQs

### 8. **Call to Action** (`sections/call-to-action.jsx`)
- Centered CTA block
- Title + description + button
- Glass effect container
- **Status:** Highly reusable - can be adapted for appointment booking

---

## 🔧 Technical Features

### Animation Library
- **Framer Motion** used throughout
- Common patterns:
  - `initial={{ y: 150, opacity: 0 }}`
  - `whileInView={{ y: 0, opacity: 1 }}`
  - Spring transitions with stiffness/damping
  - Staggered delays for list items

### Icons
- **Lucide React** icons throughout
- Easy to swap for healthcare-related icons

### Responsive Design
- Mobile-first approach
- Breakpoints: `md:` and `lg:`
- Flexible grids and flex layouts

---

## ✅ Recommendation for Adaptation

### Can Be Reused With Minor Changes:
- ✅ Navbar (update links, text)
- ✅ Footer (update links, text, social media)
- ✅ Section Title component
- ✅ FAQ Section
- ✅ Call to Action

### Needs Significant Adaptation:
- 🔄 Hero Section (new design for professional physiotherapist)
- 🔄 Features (adapt for treatment types)
- 🔄 Testimonials (patient reviews with privacy)
- 🔄 Workflow Steps (patient journey)

### May Not Be Needed:
- ❌ Pricing Plans (unless offering service packages)
- ❌ Trusted Companies (unless showing certifications/affiliations)

---

## 🎯 Next Steps

1. Determine which sections are needed for each page:
   - **Accueil:** Hero + Features (services preview) + CTA
   - **À propos:** Custom about section + Timeline/Journey
   - **Médecine chinoise:** Custom explanation section
   - **Thérapie viscérale:** Custom explanation section
   - **Contact:** Contact form + Info

2. Adapt existing components to match physiotherapist branding
3. Update color scheme (from vibrant tech to calming healthcare)
4. Replace all text with French content
5. Add healthcare-specific imagery
