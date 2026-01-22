---
name: motion-animations
description: Expert specialized in high-end web animations using Framer Motion (motion.dev). Provides premium, fluid, and performance-optimized motion design.
---

# Framer Motion Expert Skill

This skill provides deep expertise in creating modern, premium animations using Framer Motion. It focuses on orchestration, performance, and aesthetic excellence.

## 🚀 Core Principles

1.  **Use Variants for Orchestration**: Always prefer named variants over inline props for complex orchestrations (staggering, propagation).
2.  **Spring Over Durations**: Use physics-based animations (`type: "spring"`) for a more natural, premium feel.
3.  **Layout Transitions**: Leverage `layoutId` for seamless shared element transitions.
4.  **Scroll Animations**: Use `whileInView` for simple reveals and `useScroll` for complex scroll-linked effects.
5.  **Performance**: Use `AnimatePresence` for exit animations and avoid animating properties that trigger layout thrashing (like `width`, `height`, `top`, `left`). Prefer `transform` and `opacity`.

## 🛠️ Implementation Patterns

### 1. The "Premium Reveal"
Default entrance for sections or cards.
```jsx
const revealVariants = {
    hidden: { y: 40, opacity: 0 },
    visible: { 
        y: 0, 
        opacity: 1,
        transition: {
            type: "spring",
            stiffness: 100,
            damping: 20,
            mass: 1
        }
    }
};
```

### 2. Staggered Lists
```jsx
const container = {
    visible: {
        transition: {
            staggerChildren: 0.1,
            delayChildren: 0.3
        }
    }
};

const item = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
};
```

### 3. Shared Element Transitions (layoutId)
Ensures a smooth transition when moving items between different UI states.
```jsx
<motion.div layoutId={`item-${id}`} />
```

## 🎨 Recommended Spring Configs

- **Gentle Reveal**: `stiffness: 100, damping: 20`
- **Bouncy Button**: `stiffness: 400, damping: 10`
- **Crisp UI Switch**: `stiffness: 300, damping: 30`
- **Natural Fluid**: `stiffness: 120, damping: 14`

## ⚠️ Important Considerations
- **'use client'**: Always ensure components using motion are marked as client components in Next.js.
- **Accessibility**: Use `useReducedMotion` hook to respect user preferences.
- **Execution Cost**: Use `whileInView={{ once: true }}` for entrance animations to avoid overworking the main thread.
