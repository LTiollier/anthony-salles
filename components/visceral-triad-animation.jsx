"use client";

import { useState } from "react";
import { m, useReducedMotion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStethoscope } from "@fortawesome/free-solid-svg-icons/faStethoscope";
import { faHandRock } from "@fortawesome/free-solid-svg-icons/faHandRock";
import { faHeart } from "@fortawesome/free-solid-svg-icons/faHeart";

/**
 * VisceralTriadAnimation Component
 * Minimalist, elegant & high-performance visualization.
 * Uses floating circular pearls, sleek text pill badges, and fluid energy paths.
 */
export default function VisceralTriadAnimation() {
  const shouldReduceMotion = useReducedMotion();
  const [activeNode, setActiveNode] = useState(null);

  const nodes = [
    {
      id: "organic",
      label: "Fonction Organique",
      icon: faStethoscope,
      cx: 300,
      cy: 110,
      color: "#10b981", // Emerald
      iconColorClass: "text-emerald-500",
      pillBorderClass: "group-hover:border-emerald-300",
      glowColor: "rgba(16, 185, 129, 0.4)",
    },
    {
      id: "structure",
      label: "Douleurs Chroniques",
      icon: faHandRock,
      cx: 200,
      cy: 310,
      color: "#f59e0b", // Amber
      iconColorClass: "text-amber-500",
      pillBorderClass: "group-hover:border-amber-300",
      glowColor: "rgba(245, 158, 11, 0.4)",
    },
    {
      id: "nervous",
      label: "Équilibre Nerveux",
      icon: faHeart,
      cx: 100,
      cy: 110,
      color: "#f43f5e", // Rose
      iconColorClass: "text-rose-500",
      pillBorderClass: "group-hover:border-rose-300",
      glowColor: "rgba(244, 63, 94, 0.4)",
    },
  ];

  // SVG Paths linking Center (200,200) to Nodes and Node-to-Node perimeters
  const connections = [
    {
      id: "c-organic",
      from: "center",
      to: "organic",
      d: "M 200,200 Q 250,155 300,110",
      color: "#10b981",
      duration: 3.5,
      delay: 0,
    },
    {
      id: "c-structure",
      from: "center",
      to: "structure",
      d: "M 200,200 Q 205,255 200,310",
      color: "#f59e0b",
      duration: 4,
      delay: 0.5,
    },
    {
      id: "c-nervous",
      from: "center",
      to: "nervous",
      d: "M 200,200 Q 150,155 100,110",
      color: "#f43f5e",
      duration: 3.8,
      delay: 0.2,
    },
    {
      id: "p-org-str",
      from: "organic",
      to: "structure",
      d: "M 300,110 Q 305,220 200,310",
      color: "#10b981",
      duration: 5,
      delay: 1,
    },
    {
      id: "p-str-ner",
      from: "structure",
      to: "nervous",
      d: "M 200,310 Q 95,220 100,110",
      color: "#f59e0b",
      duration: 5,
      delay: 1.5,
    },
    {
      id: "p-ner-org",
      from: "nervous",
      to: "organic",
      d: "M 100,110 Q 200,75 300,110",
      color: "#f43f5e",
      duration: 4.5,
      delay: 0.8,
    },
  ];

  const getPathOpacity = (conn) => {
    if (!activeNode) return 0.35;
    if (conn.from === activeNode || conn.to === activeNode) return 0.85;
    return 0.1;
  };

  const getPathWidth = (conn) => {
    if (!activeNode) return 1.2;
    if (conn.from === activeNode || conn.to === activeNode) return 2.2;
    return 1;
  };

  return (
    <div className="relative size-80 md:size-[380px] flex items-center justify-center select-none">
      {/* Soft Background Glow Layer */}
      <div
        className="absolute inset-6 rounded-full blur-[80px] opacity-20 transition-all duration-700 pointer-events-none"
        style={{
          background:
            activeNode === "organic"
              ? "radial-gradient(circle, rgba(16,185,129,0.6) 0%, transparent 70%)"
              : activeNode === "structure"
                ? "radial-gradient(circle, rgba(245,158,11,0.6) 0%, transparent 70%)"
                : activeNode === "nervous"
                  ? "radial-gradient(circle, rgba(244,63,94,0.6) 0%, transparent 70%)"
                  : "radial-gradient(circle, rgba(16,185,129,0.3) 0%, rgba(245,158,11,0.2) 50%, rgba(244,63,94,0.2) 100%)",
        }}
      />

      {/* SVG Network Canvas */}
      <svg
        viewBox="0 0 400 400"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full drop-shadow-sm z-0 overflow-visible"
      >
        {connections.map((conn) => (
          <g key={conn.id}>
            {/* Soft Outer Glow Path */}
            <m.path
              d={conn.d}
              stroke={conn.color}
              strokeWidth={getPathWidth(conn) + 2}
              strokeLinecap="round"
              initial={{ opacity: 0 }}
              animate={{ opacity: getPathOpacity(conn) * 0.3 }}
              transition={{ duration: 0.3 }}
              style={{ filter: "blur(3px)" }}
            />

            {/* Main Fascial Path */}
            <m.path
              d={conn.d}
              stroke={conn.color}
              strokeWidth={getPathWidth(conn)}
              strokeLinecap="round"
              strokeDasharray="4 4"
              initial={{ pathLength: 0, opacity: 0 }}
              whileInView={{ pathLength: 1, opacity: getPathOpacity(conn) }}
              viewport={{ once: true }}
              animate={{ opacity: getPathOpacity(conn) }}
              transition={{
                pathLength: { duration: 1.5, ease: "easeOut" },
                opacity: { duration: 0.3 },
              }}
            />

            {/* Energy Flow Particles */}
            {!shouldReduceMotion && (
              <m.circle
                r={
                  activeNode &&
                  (conn.from === activeNode || conn.to === activeNode)
                    ? "3"
                    : "2"
                }
                fill={conn.color}
                initial={{ opacity: 0, "--offset-dist": "0%" }}
                animate={{
                  "--offset-dist": "100%",
                  opacity: [0, 0.9, 0.9, 0],
                }}
                transition={{
                  duration: conn.duration,
                  repeat: Infinity,
                  ease: "linear",
                  delay: conn.delay,
                }}
                style={{
                  offsetPath: `path("${conn.d}")`,
                  offsetDistance: "var(--offset-dist)",
                  filter: `drop-shadow(0 0 4px ${conn.color})`,
                }}
              />
            )}
          </g>
        ))}

        {/* Delicate Outer Ring */}
        <circle
          cx="200"
          cy="200"
          r="160"
          stroke="rgba(255, 255, 255, 0.3)"
          strokeWidth="1"
          strokeDasharray="2 6"
          className="opacity-50"
        />
      </svg>

      {/* Central Glass Orb */}
      <m.div
        className="absolute z-10 size-24 md:size-28 rounded-full glass border border-white/40 shadow-lg flex flex-col items-center justify-center p-2 text-center cursor-pointer group"
        initial={{ scale: 0.8, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ type: "spring", stiffness: 120, damping: 18 }}
        whileHover={{ scale: 1.08 }}
        onMouseEnter={() => setActiveNode("center")}
        onMouseLeave={() => setActiveNode(null)}
      >
        {/* Concentric Breathing Pulse */}
        <m.div
          className="absolute inset-0 rounded-full border border-emerald-400/30 pointer-events-none"
          animate={
            shouldReduceMotion
              ? undefined
              : { scale: [1, 1.15, 1], opacity: [0.2, 0.6, 0.2] }
          }
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        />

        <div className="size-2 rounded-full bg-emerald-500 mb-1 animate-pulse shadow-[0_0_8px_#10b981]" />
        <span className="text-[11px] font-semibold text-slate-800 tracking-tight">
          Harmonie
        </span>
      </m.div>

      {/* 3 Circular Floating Nodes with Clean Pill Text Badges */}
      {nodes.map((node) => {
        const isHovered = activeNode === node.id;
        const leftPct = (node.cx / 400) * 100;
        const topPct = (node.cy / 400) * 100;

        return (
          <div
            key={node.id}
            className="absolute z-20 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center group"
            style={{ left: `${leftPct}%`, top: `${topPct}%` }}
          >
            <m.button
              type="button"
              aria-label={node.label}
              className={`relative size-12 md:size-14 rounded-full glass border flex items-center justify-center shadow-md transition-all duration-300 ${
                isHovered
                  ? "bg-white border-white scale-115 shadow-xl ring-4 ring-emerald-100/50"
                  : "border-white/60 hover:border-white"
              }`}
              initial={{ scale: 0, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{
                type: "spring",
                stiffness: 180,
                damping: 16,
                delay: 0.2,
              }}
              onMouseEnter={() => setActiveNode(node.id)}
              onMouseLeave={() => setActiveNode(null)}
              onClick={() =>
                setActiveNode(activeNode === node.id ? null : node.id)
              }
            >
              {/* Soft Pulse Halo on Hover */}
              {isHovered && (
                <m.span
                  className="absolute inset-0 rounded-full bg-emerald-400/20"
                  initial={{ scale: 1, opacity: 0.5 }}
                  animate={{ scale: 1.4, opacity: 0 }}
                  transition={{ duration: 1, repeat: Infinity }}
                />
              )}

              <FontAwesomeIcon
                icon={node.icon}
                className={`size-5 transition-colors duration-300 ${
                  isHovered ? node.iconColorClass : "text-slate-700"
                }`}
              />
            </m.button>

            {/* Clean Inline Label Pill */}
            <m.span
              className={`mt-2 whitespace-nowrap text-[10px] md:text-[11px] font-semibold tracking-tight px-2.5 py-0.5 rounded-full backdrop-blur-md border shadow-xs pointer-events-none transition-all duration-300 ${
                isHovered
                  ? "bg-slate-900/90 text-white border-slate-700 scale-105"
                  : "bg-white/80 text-slate-700 border-white/70"
              }`}
              initial={{ opacity: 0, y: 4 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              {node.label}
            </m.span>
          </div>
        );
      })}
    </div>
  );
}
