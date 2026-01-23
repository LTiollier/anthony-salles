"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

/**
 * Example of a complex scroll reveal with parallax-like scaling and opacity.
 */
export default function ScrollRevealExample({ children }) {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.2], [0.8, 1]);
  const y = useTransform(scrollYProgress, [0, 0.2], [100, 0]);

  return (
    <motion.div
      ref={targetRef}
      style={{
        opacity,
        scale,
        y,
      }}
      className="w-full"
    >
      {children}
    </motion.div>
  );
}
