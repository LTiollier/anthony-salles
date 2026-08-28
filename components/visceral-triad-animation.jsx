"use client";

import { m, useReducedMotion } from "framer-motion";

/**
 * VisceralTriadAnimation Component (GDS Twin Style)
 * Represents the flow of visceral energy, diaphragmatic breathing, and fascial mobility
 * using a sleek anatomical SVG blueprint identical in visual style to the GDS animation.
 */
export default function VisceralTriadAnimation() {
  const shouldReduceMotion = useReducedMotion();

  // Simplified Human Silhouette & Visceral Structure Path data
  const silhouettePaths = [
    {
      // Head
      d: "M 50,14 C 45,14 42,17 42,22 C 42,27 45,30 50,30 C 55,30 58,27 58,22 C 58,17 55,14 50,14 Z",
      opacity: 0.15,
    },
    {
      // Torso & Abdominal Cavity
      d: "M 32,34 C 38,31 62,31 68,34 C 74,37 78,55 78,78 L 72,84 L 28,84 L 22,78 C 22,55 26,37 32,34 Z",
      opacity: 0.1,
    },
    {
      // Left Arm Outline
      d: "M 32,34 Q 26,35 20,48",
      opacity: 0.05,
    },
    {
      // Right Arm Outline
      d: "M 68,34 Q 74,35 80,48",
      opacity: 0.05,
    },
    {
      // Ribcage / Diaphragm Outline
      d: "M 32,45 C 42,40 58,40 68,45 C 62,56 38,56 32,45 Z",
      opacity: 0.08,
    },
    {
      // Spinal Axis
      d: "M 50,22 L 50,82",
      opacity: 0.12,
    },
  ];

  // Visceral & Diaphragmatic Channels (SVG 0-100 coordinate space)
  const channels = [
    {
      // Diaphragmatic Respiratory Arch
      d: "M 28,44 Q 50,38 72,44",
      duration: 3.5,
      delay: 0,
      color: "text-emerald-400",
      particleColor: "#34d399",
      glowColor: "#10b981",
    },
    {
      // Vagus Nerve (Autonomic Nervous System Axis)
      d: "M 50,22 L 50,60",
      duration: 3,
      delay: 0.3,
      color: "text-emerald-300",
      particleColor: "#6ee7b7",
      glowColor: "#10b981",
    },
    {
      // Visceral Organ Mobility Loop
      d: "M 50,48 C 64,48 66,66 50,68 C 34,66 36,48 50,48",
      duration: 4.5,
      delay: 0.8,
      color: "text-emerald-400",
      particleColor: "#34d399",
      glowColor: "#10b981",
    },
    {
      // Fascial Balance Left
      d: "M 32,44 C 42,52 42,66 32,74",
      duration: 5,
      delay: 1.2,
      color: "text-amber-300",
      particleColor: "#fbbf24",
      glowColor: "#f59e0b",
    },
    {
      // Fascial Balance Right
      d: "M 68,44 C 58,52 58,66 68,74",
      duration: 5,
      delay: 1.6,
      color: "text-amber-300",
      particleColor: "#fbbf24",
      glowColor: "#f59e0b",
    },
  ];

  const pathVariants = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: (i) => ({
      pathLength: 1,
      opacity: 0.6,
      transition: {
        pathLength: { delay: i * 0.2, duration: 2, ease: "easeInOut" },
        opacity: { delay: i * 0.2, duration: 1 },
      },
    }),
  };

  return (
    <div className="relative size-80 md:size-96 flex items-center justify-center select-none">
      {/* Background Emerald Glow */}
      <div className="absolute inset-0 bg-emerald-500/10 blur-[100px] rounded-full" />

      <svg
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full drop-shadow-[0_0_15px_rgba(16,185,129,0.4)]"
      >
        {/* Human Silhouette & Visceral Cavity Background */}
        {silhouettePaths.map((path, i) => (
          <m.path
            key={`silhouette-${i}`}
            d={path.d}
            stroke="currentColor"
            strokeWidth="0.5"
            fill="none"
            className="text-emerald-900/40"
            initial={{ opacity: 0 }}
            animate={{ opacity: path.opacity }}
            transition={{ duration: 2, delay: 0.5 }}
          />
        ))}

        {/* Render Visceral Channels & Particles */}
        {channels.map((channel, i) => (
          <g key={i}>
            {/* Outer Glow Path */}
            <m.path
              d={channel.d}
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              className={`${channel.color} opacity-10`}
              filter="blur(4px)"
              custom={i}
              variants={pathVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            />

            {/* Static Vector Path */}
            <m.path
              d={channel.d}
              stroke="currentColor"
              strokeWidth="0.8"
              strokeLinecap="round"
              className={channel.color}
              custom={i}
              variants={pathVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            />

            {/* Primary Energy Flow Particle */}
            {!shouldReduceMotion && (
              <m.circle
                r="1.8"
                fill={channel.particleColor}
                initial={{ opacity: 0, "--offset-distance": "0%" }}
                animate={{
                  "--offset-distance": "100%",
                  opacity: [0, 1, 1, 0],
                  scale: [1, 1.2, 1],
                }}
                transition={{
                  duration: channel.duration,
                  repeat: Infinity,
                  ease: "linear",
                  delay: channel.delay,
                }}
                style={{
                  offsetPath: `path("${channel.d}")`,
                  offsetDistance: "var(--offset-distance)",
                  filter: `drop-shadow(0 0 5px ${channel.glowColor})`,
                }}
              />
            )}

            {/* Secondary Trailing Energy Particle */}
            {!shouldReduceMotion && (
              <m.circle
                r="1"
                fill={channel.particleColor}
                initial={{ opacity: 0, "--offset-distance": "0%" }}
                animate={{
                  "--offset-distance": "100%",
                  opacity: [0, 0.5, 0.5, 0],
                }}
                transition={{
                  duration: channel.duration,
                  repeat: Infinity,
                  ease: "linear",
                  delay: channel.delay + channel.duration * 0.12,
                }}
                style={{
                  offsetPath: `path("${channel.d}")`,
                  offsetDistance: "var(--offset-distance)",
                }}
              />
            )}
          </g>
        ))}

        {/* Central Solar Plexus Focus Point */}
        <m.circle
          cx="50"
          cy="50"
          r="4"
          fill="url(#visceralCenterGradient)"
          initial={{ scale: 0, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 1, type: "spring", stiffness: 200, damping: 20 }}
        />

        {/* Solar Plexus Radiant Ring */}
        <m.circle
          cx="50"
          cy="50"
          r="7"
          stroke="#34d399"
          strokeWidth="0.5"
          fill="none"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={
            shouldReduceMotion
              ? undefined
              : { scale: [0.9, 1.3, 0.9], opacity: [0.2, 0.7, 0.2] }
          }
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        />

        <defs>
          <radialGradient id="visceralCenterGradient" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#10b981" />
            <stop offset="100%" stopColor="#047857" stopOpacity="0.6" />
          </radialGradient>
        </defs>
      </svg>

      {/* Decorative Glass Outer Rings (Matches GDS Twin aesthetic) */}
      <div className="absolute inset-4 rounded-full border border-white/20 pointer-events-none" />
      <div className="absolute inset-12 rounded-full border border-white/10 pointer-events-none" />
    </div>
  );
}
