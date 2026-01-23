/**
 * Premium Spring Configurations for Framer Motion
 * Usage: transition={{ ...springConfigs.gentle }}
 */

export const springConfigs = {
  // Smooth and professional, perfect for section entries
  gentle: {
    type: "spring",
    stiffness: 100,
    damping: 20,
    mass: 1,
  },
  // More energy, good for hover effects or small UI elements
  energetic: {
    type: "spring",
    stiffness: 260,
    damping: 20,
    mass: 1,
  },
  // Distinct bounce, use for playful CTAs or confirmations
  bouncy: {
    type: "spring",
    stiffness: 400,
    damping: 10,
    mass: 1,
  },
  // Fast and precise, for navigational elements or dropdowns
  crisp: {
    type: "spring",
    stiffness: 300,
    damping: 30,
    mass: 0.8,
  },
  // Heavy and slow, good for large background elements or slow reveals
  heavy: {
    type: "spring",
    stiffness: 50,
    damping: 25,
    mass: 2,
  },
};
