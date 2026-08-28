"use client";

import { useState } from "react";
import { m, useReducedMotion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStethoscope } from "@fortawesome/free-solid-svg-icons/faStethoscope";
import { faHandRock } from "@fortawesome/free-solid-svg-icons/faHandRock";
import { faHeart } from "@fortawesome/free-solid-svg-icons/faHeart";

/**
 * VisceralTriadAnimation Component (Option 2)
 * High-performance interactive SVG & Framer Motion visualization representing the
 * 3 pillars of Visceral Therapy connected via fascial energy network.
 */
export default function VisceralTriadAnimation() {
  const shouldReduceMotion = useReducedMotion();
  const [activeNode, setActiveNode] = useState(null);

  const nodes = [
    {
      id: "organic",
      title: "Fonction Organique",
      subtitle: "Mobilité & Tissus",
      icon: faStethoscope,
      cx: 300,
      cy: 110,
      color: "emerald",
      bgClass: "bg-emerald-500",
      textClass: "text-emerald-600",
      borderClass: "border-emerald-300",
      glowColor: "rgba(16, 185, 129, 0.4)",
    },
    {
      id: "structure",
      title: "Douleurs Chroniques",
      subtitle: "Libération Dos & Cou",
      icon: faHandRock,
      cx: 200,
      cy: 310,
      color: "amber",
      bgClass: "bg-amber-500",
      textClass: "text-amber-600",
      borderClass: "border-amber-300",
      glowColor: "rgba(245, 158, 11, 0.4)",
    },
    {
      id: "nervous",
      title: "Équilibre Nerveux",
      subtitle: "Système Vagal",
      icon: faHeart,
      cx: 100,
      cy: 110,
      color: "rose",
      bgClass: "bg-rose-500",
      textClass: "text-rose-600",
      borderClass: "border-rose-300",
      glowColor: "rgba(244, 63, 94, 0.4)",
    },
  ];

  // SVG Paths linking Center (200,200) to Nodes and Node-to-Node perimeters
  const connections = [
    // Center to Nodes
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
    // Perimeter links
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
    if (!activeNode) return 0.4;
    if (conn.from === activeNode || conn.to === activeNode) return 0.9;
    return 0.15;
  };

  const getPathWidth = (conn) => {
    if (!activeNode) return 1.5;
    if (conn.from === activeNode || conn.to === activeNode) return 2.5;
    return 1;
  };

  return (
    <div className="relative size-80 md:size-[420px] flex items-center justify-center select-none">
      {/* Dynamic Background Glow Layer (GPU accelerated, fixed position blur) */}
      <div
        className="absolute inset-4 rounded-full blur-[90px] opacity-25 transition-all duration-700 pointer-events-none"
        style={{
          background:
            activeNode === "organic"
              ? "radial-gradient(circle, rgba(16,185,129,0.5) 0%, rgba(255,255,255,0) 70%)"
              : activeNode === "structure"
                ? "radial-gradient(circle, rgba(245,158,11,0.5) 0%, rgba(255,255,255,0) 70%)"
                : activeNode === "nervous"
                  ? "radial-gradient(circle, rgba(244,63,94,0.5) 0%, rgba(255,255,255,0) 70%)"
                  : "radial-gradient(circle, rgba(16,185,129,0.3) 0%, rgba(245,158,11,0.2) 40%, rgba(244,63,94,0.2) 80%)",
        }}
      />

      {/* SVG Network Canvas */}
      <svg
        viewBox="0 0 400 400"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full drop-shadow-md z-0 overflow-visible"
      >
        {/* Render Fascial Connections */}
        {connections.map((conn) => (
          <g key={conn.id}>
            {/* Background Glow Path */}
            <m.path
              d={conn.d}
              stroke={conn.color}
              strokeWidth={getPathWidth(conn) + 3}
              strokeLinecap="round"
              initial={{ opacity: 0 }}
              animate={{ opacity: getPathOpacity(conn) * 0.4 }}
              transition={{ duration: 0.3 }}
              style={{ filter: "blur(3px)" }}
            />

            {/* Main Interactive Path */}
            <m.path
              d={conn.d}
              stroke={conn.color}
              strokeWidth={getPathWidth(conn)}
              strokeLinecap="round"
              strokeDasharray="6 4"
              initial={{ pathLength: 0, opacity: 0 }}
              whileInView={{ pathLength: 1, opacity: getPathOpacity(conn) }}
              viewport={{ once: true }}
              animate={{ opacity: getPathOpacity(conn) }}
              transition={{
                pathLength: { duration: 1.5, ease: "easeOut" },
                opacity: { duration: 0.3 },
              }}
            />

            {/* Light Pulse Energy Particles */}
            {!shouldReduceMotion && (
              <m.circle
                r={
                  activeNode &&
                  (conn.from === activeNode || conn.to === activeNode)
                    ? "3.5"
                    : "2.5"
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
                  filter: `drop-shadow(0 0 6px ${conn.color})`,
                }}
              />
            )}
          </g>
        ))}

        {/* Outer Glass Ring Frame */}
        <circle
          cx="200"
          cy="200"
          r="165"
          stroke="rgba(255, 255, 255, 0.4)"
          strokeWidth="1"
          strokeDasharray="2 6"
          className="opacity-60"
        />
      </svg>

      {/* Central Equilibrium Node (Glassmorphism Core) */}
      <m.div
        className="absolute z-10 size-28 md:size-36 rounded-full glass border border-white/40 shadow-xl flex flex-col items-center justify-center p-3 text-center cursor-pointer group"
        initial={{ scale: 0.8, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ type: "spring", stiffness: 120, damping: 18 }}
        whileHover={{ scale: 1.06 }}
        onMouseEnter={() => setActiveNode("center")}
        onMouseLeave={() => setActiveNode(null)}
      >
        {/* Soft Inner Pulsing Ring */}
        <m.div
          className="absolute inset-1 rounded-full border border-emerald-400/30"
          animate={
            shouldReduceMotion
              ? undefined
              : { scale: [1, 1.08, 1], opacity: [0.3, 0.7, 0.3] }
          }
          transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
        />

        <div className="size-2.5 rounded-full bg-emerald-500 mb-1.5 animate-pulse shadow-[0_0_8px_#10b981]" />
        <span className="text-xs font-bold text-slate-800 tracking-tight leading-tight">
          Harmonie
        </span>
        <span className="text-[10px] text-slate-500 font-medium leading-tight">
          Viscérale
        </span>
      </m.div>

      {/* 3 Interactive Peripheral Nodes */}
      {nodes.map((node) => {
        const isHovered = activeNode === node.id;
        const leftPct = (node.cx / 400) * 100;
        const topPct = (node.cy / 400) * 100;

        return (
          <div
            key={node.id}
            className="absolute z-20 -translate-x-1/2 -translate-y-1/2"
            style={{ left: `${leftPct}%`, top: `${topPct}%` }}
          >
            <m.button
              type="button"
              aria-label={node.title}
              className={`relative size-14 md:size-16 rounded-2xl glass border flex items-center justify-center shadow-lg transition-all duration-300 ${
                isHovered
                  ? `${node.borderClass} bg-white scale-110 shadow-2xl ring-4 ring-offset-2 ring-emerald-100`
                  : "border-white/50 hover:border-slate-300"
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
              {/* Outer Pulse effect on hover */}
              {isHovered && (
                <m.span
                  className={`absolute inset-0 rounded-2xl ${node.bgClass} opacity-20`}
                  initial={{ scale: 1, opacity: 0.4 }}
                  animate={{ scale: 1.3, opacity: 0 }}
                  transition={{ duration: 1, repeat: Infinity }}
                />
              )}

              <FontAwesomeIcon
                icon={node.icon}
                className={`size-6 transition-colors duration-300 ${
                  isHovered ? node.textClass : "text-slate-700"
                }`}
              />
            </m.button>

            {/* Label Tooltip */}
            <m.div
              className={`absolute left-1/2 -translate-x-1/2 mt-2 w-32 px-2 py-1 rounded-lg text-center backdrop-blur-md border shadow-sm pointer-events-none transition-all duration-300 ${
                isHovered
                  ? "bg-slate-900/90 text-white border-slate-700 opacity-100 translate-y-0"
                  : "bg-white/80 text-slate-700 border-white/60 opacity-80 translate-y-0.5"
              }`}
              initial={false}
              animate={{ scale: isHovered ? 1.05 : 1 }}
            >
              <p className="text-[11px] font-bold leading-tight">
                {node.title}
              </p>
              <p className="text-[9px] opacity-75 font-normal leading-tight mt-0.5">
                {node.subtitle}
              </p>
            </m.div>
          </div>
        );
      })}
    </div>
  );
}
