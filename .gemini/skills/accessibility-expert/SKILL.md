---
name: accessibility-expert
description: Expert specialized in Web Accessibility (a11y). Ensures compliance with WCAG 2.1 standards, ARIA usage, and inclusive user experiences.
---

# Accessibility Expert Skill

This skill provides essential guidelines for building inclusive web applications that are usable by everyone, including people with disabilities.

## 🚀 Core Principles

1.  **WCAG 2.1 Compliance**: Target Level AA as the minimum standard for contrast, navigation, and readability.
2.  **Keyboard Navigation**: Ensure all interactive elements are reachable and usable via keyboard (`tab`, `enter`, `space`).
3.  **Semantic Landmarks**: Use HTML5 landmarks (`<nav>`, `<main>`, `<footer>`) to allow screen reader users to jump to specific sections.
4.  **ARIA when necessary**: Use ARIA attributes (`aria-label`, `aria-expanded`, `aria-hidden`) only when native HTML elements aren't sufficient. "No ARIA is better than bad ARIA."
5.  **Focus Management**: Provide clear visual focus indicators (outlines) and manage focus transitions during modal openings or page navigation.

## 🛠️ Implementation Patterns

### 1. Accessible Buttons & Links

Ensuring screen readers have enough context.

```jsx
// Use aria-label if the text content alone isn't descriptive enough
<button
  aria-label="Prendre rendez-vous sur Doctolib"
  onClick={...}
>
  Prendre RDV
</button>

// Ensure links have descriptive text
<Link href="/contact">Contactez Anthony Salles</Link>
```

### 2. High Contrast & Readable Type

Guidelines for styling.

```css
/* Ensure minimum contrast ratio of 4.5:1 for normal text */
.text-body {
  color: #374151; /* gray-700 */
  background-color: #ffffff;
}

/* Clear focus styles */
button:focus-visible {
  outline: 2px solid #2563eb;
  outline-offset: 2px;
}
```

### 3. Image Alt Text Rules

- **Informative images**: Describe the content accurately.
- **Decorative images**: Use `alt=""` or `role="presentation"`.

## 📋 Accessibility Checklist

- [ ] Skip to Content link for keyboard users.
- [ ] Logical tab order.
- [ ] Sufficient color contrast (WCAG AA).
- [ ] Forms have associated `<label>` tags.
- [ ] Error messages are clearly identified and announced.
- [ ] No auto-playing media without controls.
