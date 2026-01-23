"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function HeroSection() {
  const title =
    "Votre expert en kinésithérapie, méthode GDS et thérapie viscérale.";
  const words = title.split(" ");

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const wordVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 200,
        damping: 20,
      },
    },
  };

  return (
    <section
      id="main-content"
      className="relative flex flex-col items-center py-20 overflow-visible"
    >
      <motion.div
        className="flex flex-col items-center max-w-4xl"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.h1
          className="text-center text-4xl/13 md:text-6xl/19 mt-4 font-semibold tracking-tight text-gray-900 flex flex-wrap justify-center gap-x-[0.3em]"
          aria-label={title}
        >
          {words.map((word, i) => (
            <motion.span
              key={i}
              variants={wordVariants}
              className="inline-block"
              aria-hidden="true"
            >
              {word}
            </motion.span>
          ))}
        </motion.h1>

        <motion.p
          className="text-center text-gray-700 text-base/7 max-w-md mt-6"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.8, duration: 1 }}
        >
          Je vous accompagne via une approche holistique pour votre bien-être,
          combinant des techniques modernes et ancestrales pour une prise en
          charge personnalisée.
        </motion.p>

        <motion.div
          className="flex flex-col md:flex-row max-md:w-full items-center gap-4 md:gap-3 mt-8"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 1, duration: 0.5 }}
        >
          <a
            href="https://www.doctolib.fr/masseur-kinesitherapeute/lyon/anthony-salles-lyon"
            target="_blank"
            rel="noopener noreferrer"
            className="btn max-md:w-full bg-blue-500 shadow-lg shadow-blue-500/20"
            aria-label="Prendre rendez-vous sur Doctolib (ouvre un nouvel onglet)"
          >
            Prendre rendez-vous
          </a>
          <Link
            href="/a-propos"
            className="btn max-md:w-full glass flex items-center justify-center gap-2 py-3 text-gray-900 border border-white/40"
          >
            Découvrir mes services
          </Link>
        </motion.div>
      </motion.div>
    </section>
  );
}
