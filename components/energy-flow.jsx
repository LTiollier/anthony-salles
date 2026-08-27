"use client";

import { m, useReducedMotion } from "framer-motion";

/**
 * EnergyFlow Component
 * Represents the flow of Qi through meridians using SVG and Framer Motion.
 */
export default function EnergyFlow() {
  const shouldReduceMotion = useReducedMotion();

  // Meridian paths (SVG coordinates 0-100)
  const meridians = [
    { d: "M 50,10 C 50,10 50,50 50,90", duration: 3, delay: 0 }, // Central vertical
    { d: "M 20,40 C 40,40 60,60 80,60", duration: 4, delay: 0.5 }, // Curved horizontal 1
    { d: "M 80,40 C 60,40 40,60 20,60", duration: 4, delay: 1 }, // Curved horizontal 2
    { d: "M 30,20 C 40,30 40,70 30,80", duration: 5, delay: 1.5 }, // Left curve
    { d: "M 70,20 C 60,30 60,70 70,80", duration: 5, delay: 2 }, // Right curve
  ];

  const pathVariants = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: (i) => ({
      pathLength: 1,
      opacity: 0.4,
      transition: {
        pathLength: { delay: i * 0.2, duration: 2, ease: "easeInOut" },
        opacity: { delay: i * 0.2, duration: 1 },
      },
    }),
  };

  return (
    <div className="relative size-80 md:size-96 flex items-center justify-center">
      {/* Background Glow */}
      <div className="absolute inset-0 bg-emerald-500/10 blur-[100px] rounded-full" />

      <svg
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full drop-shadow-[0_0_15px_rgba(16,185,129,0.4)]"
      >
        {meridians.map((meridian, i) => (
          <g key={i}>
            {/* Outer Glow Path */}
            <m.path
              d={meridian.d}
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              className="text-emerald-400 opacity-15"
              filter="blur(4px)"
              custom={i}
              variants={pathVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            />

            {/* Static Meridian Path (Faint) */}
            <m.path
              d={meridian.d}
              stroke="currentColor"
              strokeWidth="0.8"
              strokeLinecap="round"
              className="text-emerald-500/60"
              custom={i}
              variants={pathVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            />

            {/* Animated Energy Particle (Qi) */}
            {!shouldReduceMotion && (
              <m.circle
                r="1.8"
                fill="#10b981"
                initial={{ opacity: 0, "--offset-distance": "0%" }}
                animate={{
                  "--offset-distance": "100%",
                  opacity: [0, 1, 1, 0],
                  scale: [1, 1.2, 1],
                }}
                transition={{
                  duration: meridian.duration,
                  repeat: Infinity,
                  ease: "linear",
                  delay: meridian.delay,
                }}
                style={{
                  offsetPath: `path("${meridian.d}")`,
                  offsetDistance: "var(--offset-distance)",
                  filter: "drop-shadow(0 0 5px #10b981)",
                }}
              />
            )}

            {/* Second trailing particle for depth */}
            {!shouldReduceMotion && (
              <m.circle
                r="1"
                fill="#34d399"
                initial={{ opacity: 0, "--offset-distance": "0%" }}
                animate={{
                  "--offset-distance": "100%",
                  opacity: [0, 0.5, 0.5, 0],
                }}
                transition={{
                  duration: meridian.duration,
                  repeat: Infinity,
                  ease: "linear",
                  delay: meridian.delay + meridian.duration * 0.1,
                }}
                style={{
                  offsetPath: `path("${meridian.d}")`,
                  offsetDistance: "var(--offset-distance)",
                }}
              />
            )}
          </g>
        ))}

        {/* Central Focus Point (Yin-Yang Center Glow) */}
        <m.circle
          cx="50"
          cy="50"
          r="4"
          fill="url(#qiCenterGradient)"
          initial={{ scale: 0, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 1, type: "spring", stiffness: 200, damping: 20 }}
        />

        <defs>
          <radialGradient id="qiCenterGradient" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#10b981" />
            <stop offset="100%" stopColor="#047857" stopOpacity="0.5" />
          </radialGradient>
        </defs>
      </svg>

      {/* Decorative Glass Ring */}
      <div className="absolute inset-4 rounded-full border border-white/20 pointer-events-none" />
      <div className="absolute inset-12 rounded-full border border-white/10 pointer-events-none" />
    </div>
  );
}
