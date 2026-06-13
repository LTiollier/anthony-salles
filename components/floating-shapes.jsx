"use client";

import { m, useReducedMotion } from "framer-motion";

const Shape = ({ color, size, top, left, duration, delay, reduce }) => (
  <m.div
    className={`absolute rounded-full blur-3xl opacity-20 pointer-events-none ${color}`}
    style={{
      width: size,
      height: size,
      top,
      left,
    }}
    // Plus de `scale` (re-rasterisation du flou). Translate seul = composé sur GPU.
    animate={reduce ? undefined : { x: [0, 40, 0], y: [0, -30, 0] }}
    transition={{
      duration,
      repeat: Infinity,
      delay,
      ease: "easeInOut",
    }}
  />
);

export default function FloatingShapes() {
  const reduce = useReducedMotion();
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none -z-10">
      {/* 2 formes au lieu de 4, plus lentes */}
      <Shape
        color="bg-blue-200"
        size="35vw"
        top="-10%"
        left="-10%"
        duration={40}
        delay={0}
        reduce={reduce}
      />
      <Shape
        color="bg-green-100"
        size="30vw"
        top="50%"
        left="60%"
        duration={45}
        delay={3}
        reduce={reduce}
      />
    </div>
  );
}
