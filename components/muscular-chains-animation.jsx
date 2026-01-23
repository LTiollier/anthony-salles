"use client";

import { motion } from "framer-motion";
import { useReducedMotion } from "framer-motion";

/**
 * MuscularChainsAnimation Component
 * Represents the flow of energy through muscular chains using SVG and Framer Motion.
 */
export default function MuscularChainsAnimation() {
  const shouldReduceMotion = useReducedMotion();

  // Simplified Human Silhouette Path data
  const silhouettePaths = [
    {
      d: "M 50,15 C 45,15 42,18 42,23 C 42,28 45,31 50,31 C 55,31 58,28 58,23 C 58,18 55,15 50,15 Z",
      opacity: 0.15,
    }, // Head
    {
      d: "M 35,35 C 40,32 60,32 65,35 C 70,38 75,55 75,75 L 70,80 L 30,80 L 25,75 C 25,55 30,38 35,35 Z",
      opacity: 0.1,
    }, // Torso
    { d: "M 35,35 Q 30,35 25,45 Q 20,55 15,65", opacity: 0.05 }, // Left Arm
    { d: "M 65,35 Q 70,35 75,45 Q 80,55 85,65", opacity: 0.05 }, // Right Arm
  ];

  // GDS Meridian paths (SVG coordinates 0-100)
  const meridians = [
    {
      d: "M 50,25 C 50,25 50,55 50,85",
      duration: 3,
      delay: 0,
      color: "text-blue-400",
    }, // Central (PM / AM)
    {
      d: "M 25,45 C 40,40 60,40 75,45",
      duration: 4,
      delay: 0.5,
      color: "text-blue-300",
    }, // Horizontal 1 (PA)
    {
      d: "M 75,55 C 60,60 40,60 25,55",
      duration: 4,
      delay: 1,
      color: "text-blue-300",
    }, // Horizontal 2 (AP)
    {
      d: "M 35,32 C 45,45 45,65 35,78",
      duration: 5,
      delay: 1.5,
      color: "text-blue-400",
    }, // Lateral Left
    {
      d: "M 65,32 C 55,45 55,65 65,78",
      duration: 5,
      delay: 2,
      color: "text-blue-400",
    }, // Lateral Right
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
    <div className="relative size-80 md:size-96 flex items-center justify-center">
      {/* Background Glow */}
      <div className="absolute inset-0 bg-blue-500/10 blur-[100px] rounded-full" />

      <svg
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full drop-shadow-[0_0_15px_rgba(59,130,246,0.5)]"
      >
        {/* Human Silhouette Background */}
        {silhouettePaths.map((path, i) => (
          <motion.path
            key={`silhouette-${i}`}
            d={path.d}
            stroke="currentColor"
            strokeWidth="0.5"
            fill="none"
            className="text-blue-900/40"
            initial={{ opacity: 0 }}
            animate={{ opacity: path.opacity }}
            transition={{ duration: 2, delay: 0.5 }}
          />
        ))}

        {meridians.map((meridian, i) => (
          <g key={i}>
            {/* Outer Glow Path */}
            <motion.path
              d={meridian.d}
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              className={`${meridian.color} opacity-10`}
              filter="blur(4px)"
              custom={i}
              variants={pathVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            />

            {/* Static Meridian Path */}
            <motion.path
              d={meridian.d}
              stroke="currentColor"
              strokeWidth="0.8"
              strokeLinecap="round"
              className={meridian.color}
              custom={i}
              variants={pathVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            />

            {/* Animated Energy Particle (Qi) */}
            {!shouldReduceMotion && (
              <motion.circle
                r="1.8"
                fill="#60a5fa"
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
                  filter: "drop-shadow(0 0 5px #3b82f6)",
                }}
              />
            )}

            {/* Second trailing particle for depth */}
            {!shouldReduceMotion && (
              <motion.circle
                r="1"
                fill="#60a5fa"
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

        {/* Central Focus Point */}
        <motion.circle
          cx="50"
          cy="50"
          r="4"
          fill="url(#centerGradient)"
          initial={{ scale: 0, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 1, type: "spring", stiffness: 200, damping: 20 }}
        />

        <defs>
          <radialGradient id="centerGradient" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#3b82f6" />
            <stop offset="100%" stopColor="#1d4ed8" stopOpacity="0.5" />
          </radialGradient>
        </defs>
      </svg>

      {/* Decorative Glass Ring */}
      <div className="absolute inset-4 rounded-full border border-white/20 pointer-events-none" />
      <div className="absolute inset-12 rounded-full border border-white/10 pointer-events-none" />
    </div>
  );
}
