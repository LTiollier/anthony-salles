"use client";
import { m } from "framer-motion";

export default function Reveal({ children, className, y = 24, delay = 0 }) {
  return (
    <m.div
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.5, delay }}
    >
      {children}
    </m.div>
  );
}
