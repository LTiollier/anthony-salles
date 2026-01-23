"use client";
import SectionTitle from "@/components/section-title";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUniversalAccess,
  faYinYang,
  faHandshake,
} from "@fortawesome/free-solid-svg-icons";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useRef } from "react";

import Link from "next/link";

function FeatureCard({ feature, index }) {
  const cardRef = useRef(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["10deg", "-10deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-10deg", "10deg"]);

  const handleMouseMove = (e) => {
    const rect = cardRef.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;

    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      }}
      className="group relative p-6 rounded-2xl glass max-w-80 w-full transition-shadow duration-500 hover:shadow-2xl hover:shadow-blue-500/10"
      role="article"
      aria-labelledby={`feature-title-${index}`}
      initial={{ y: 50, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true }}
      transition={{
        delay: index * 0.1,
        type: "spring",
        stiffness: 200,
        damping: 20,
      }}
    >
      <Link href={feature.href} className="block cursor-pointer">
        <div style={{ transform: "translateZ(50px)" }} className="space-y-4">
          <div className="size-12 rounded-xl bg-blue-50 flex items-center justify-center text-blue-600 transition-colors group-hover:bg-blue-600 group-hover:text-white duration-300">
            <FontAwesomeIcon
              icon={feature.icon}
              className="size-6"
              aria-hidden="true"
            />
          </div>
          <h3
            id={`feature-title-${index}`}
            className="text-lg font-semibold text-gray-900"
          >
            {feature.title}
          </h3>
          <p className="text-gray-600 leading-relaxed">{feature.description}</p>
          <div className="pt-2">
            <div className="h-1 w-0 bg-blue-500 transition-all duration-300 group-hover:w-12 rounded-full" />
          </div>
        </div>
      </Link>

      {/* Subtle internal glow */}
      <motion.div
        className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
        style={{
          background: useTransform(
            [mouseXSpring, mouseYSpring],
            ([latestX, latestY]) => {
              const xPct = (latestX + 0.5) * 100;
              const yPct = (latestY + 0.5) * 100;
              return `radial-gradient(circle at ${xPct}% ${yPct}%, rgba(59, 130, 246, 0.15), transparent)`;
            },
          ),
        }}
      />
    </motion.div>
  );
}

export default function Features() {
  const featuresData = [
    {
      icon: faUniversalAccess,
      title: "Kinésithérapie",
      description:
        "Rééducation fonctionnelle, gestion de la douleur, et accompagnement post-opératoire pour retrouver votre mobilité.",
      href: "/contact",
    },
    {
      icon: faUniversalAccess,
      title: "Méthode GDS",
      description:
        "Approche globale basée sur les chaînes musculaires et articulaires pour rééquilibrer la posture et le mouvement.",
      href: "/musculaire-gds",
    },
    {
      icon: faHandshake,
      title: "Thérapie Viscérale",
      description:
        "Soulagement des tensions des organes internes pour améliorer la fonction et réduire les douleurs chroniques.",
      href: "/therapie-viscerale",
    },
  ];

  return (
    <section id="features" className="mt-32 pb-20">
      <SectionTitle
        title="Mes Services"
        description="Découvrez l'éventail de mes services dédiés à votre bien-être et à votre santé."
      />

      <div className="flex flex-wrap items-center justify-center gap-8 mt-16 px-6 perspective-1000">
        {featuresData.map((feature, index) => (
          <FeatureCard key={index} feature={feature} index={index} />
        ))}
      </div>
    </section>
  );
}
