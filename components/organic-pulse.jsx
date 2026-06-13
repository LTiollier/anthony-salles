"use client";
import { m, useReducedMotion } from "framer-motion";

/**
 * OrganicPulse Component
 * Features breathing "blobs" with soft gradients to represent organic harmony.
 */
export default function OrganicPulse() {
  const reduce = useReducedMotion();

  return (
    <div className="relative size-80 md:size-96 flex items-center justify-center">
      {/* Background Soft Glow */}
      <div className="absolute inset-0 bg-orange-100/20 blur-[100px] rounded-full" />

      <m.div
        className="absolute size-48 md:size-64 bg-gradient-to-br from-coral-400/40 to-orange-300/40 rounded-full mix-blend-multiply filter blur-3xl"
        animate={reduce ? undefined : {
          scale: [1, 1.2, 1],
          x: [0, 20, 0],
          y: [0, -20, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        style={{ backgroundColor: "#F87171" }} // Coral-like
      />

      <m.div
        className="absolute size-48 md:size-64 bg-gradient-to-tr from-amber-200/40 to-yellow-400/40 rounded-full mix-blend-multiply filter blur-3xl"
        animate={reduce ? undefined : {
          scale: [1.2, 1, 1.2],
          x: [0, -30, 0],
          y: [0, 20, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        style={{ backgroundColor: "#FCD34D" }} // Ochre-like
      />

      {/* Main Content Area (Glassy Circle) */}
      <m.div
        className="relative z-10 size-64 md:size-80 rounded-full border border-white/30 glass flex items-center justify-center p-8 text-center shadow-2xl"
        initial={{ scale: 0.8, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ type: "spring", stiffness: 100, damping: 20 }}
      >
        <div className="space-y-2">
          <div className={`size-2 bg-orange-400 rounded-full mx-auto ${reduce ? "" : "animate-pulse"}`} />
          <p className="text-gray-800 font-medium italic">Harmonie viscérale</p>
          <p className="text-xs text-gray-500 max-w-[150px] mx-auto">
            Mouvement capturé des tissus profonds
          </p>
        </div>
      </m.div>

      {/* Concentric rings for "Pulse" effect */}
      {[1, 2, 3].map((i) => (
        <m.div
          key={i}
          className="absolute w-full h-full border border-orange-200/30 rounded-full"
          initial={{ scale: 0, opacity: 0.5 }}
          animate={reduce ? undefined : {
            scale: 1.5,
            opacity: 0,
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            delay: i * 1.3,
            ease: "easeOut",
          }}
        />
      ))}
    </div>
  );
}
