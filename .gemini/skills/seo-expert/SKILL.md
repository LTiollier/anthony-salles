---
name: seo-expert
description: Expert specialized in Search Engine Optimization (SEO) for Next.js applications. Focuses on technical SEO, semantic HTML, and metadata best practices.
---

# SEO Expert Skill

This skill provides comprehensive guidelines for optimizing Next.js applications for search engines, ensuring high visibility and performance.

## 🚀 Core Principles

1.  **Next.js Metadata API**: Always use the built-in Metadata API in `layout.js` or `page.js` instead of manually adding tags to `<head>`.
2.  **Semantic HTML**: Prioritize semantic tags (`<header>`, `<main>`, `<footer`, `<section>`, `<article>`, `<nav>`) to help crawlers understand page structure.
3.  **Heading Hierarchy**: Maintain a logical `<h1>`-`<h6>` structure. Each page MUST have exactly one `<h1>`.
4.  **Image Optimization**: Always use the Next.js `Image` component with appropriate `alt` text, `width`, and `height`.
5.  **Structured Data**: Use JSON-LD to provide explicit clues about the meaning of a page (e.g., LocalBusiness, Service, FAQ).

## 🛠️ Implementation Patterns

### 1. Static Metadata
Defining core SEO tags in a layout or page.
```javascript
export const metadata = {
  title: 'Anthony Salles | Kinésithérapeute à Lyon 7',
  description: 'Expertise en kinésithérapie, médecine chinoise et thérapie viscérale. Prenez rendez-vous en ligne.',
  openGraph: {
    title: 'Anthony Salles - Kinésithérapeute',
    description: 'Accompagnement holistique et personnalisé à Lyon.',
    url: 'https://anthonysalles.com',
    siteName: 'Anthony Salles',
    locale: 'fr_FR',
    type: 'website',
  },
};
```

### 2. JSON-LD Structured Data
Adding a schema to a page.
```javascript
const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Physician',
  'name': 'Anthony Salles',
  'address': {
    '@type': 'PostalAddress',
    'streetAddress': '46 Rue de la Madeleine',
    'addressLocality': 'Lyon',
    'postalCode': '69007',
    'addressCountry': 'FR'
  },
  'telephone': '0478724280'
};

<script
  type="application/ld+json"
  dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
/>
```

## 📋 SEO Checklist
- [ ] Unique title tags for every page.
- [ ] Descriptive meta descriptions (150-160 characters).
- [ ] Proper `alt` text for all informative images.
- [ ] Sitemap and `robots.txt` configured.
- [ ] Mobile-responsive design verified.
- [ ] Fast Core Web Vitals (LCP, FID, CLS).
