"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function HeroSection() {
  const title = "Votre expert en kinésithérapie, méthode GDS et thérapie viscérale.";
  const words = title.split(" ");

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.3,
      },
    },
  };

  const wordVariants = {
    hidden: { y: 20, opacity: 0, filter: "blur(10px)" },
    visible: {
      y: 0,
      opacity: 1,
      filter: "blur(0px)",
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12,
      },
    },
  };

  return (
    <section
      id="main-content"
      className="relative flex flex-col items-center py-24 md:py-32 overflow-visible"
    >
      <motion.div
        className="flex flex-col items-center max-w-5xl"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.h1
          className="text-center text-5xl/14 md:text-7xl/20 font-bold tracking-tight text-gray-900 flex flex-wrap justify-center gap-x-[0.25em]"
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
          className="text-center text-gray-600 text-lg/8 max-w-2xl mt-8 px-4"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.8 }}
        >
          Je vous accompagne via une approche holistique pour votre bien-être,
          combinant des techniques modernes et ancestrales pour une prise en
          charge personnalisée au cœur de Lyon 7.
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row items-center gap-4 mt-12"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.5 }}
        >
          <a
            href="https://www.doctolib.fr/masseur-kinesitherapeute/lyon/anthony-salles-lyon"
            target="_blank"
            rel="noopener noreferrer"
            className="btn bg-blue-600 text-white shadow-xl shadow-blue-200 hover:shadow-blue-300 transform hover:-translate-y-0.5 transition-all duration-300"
            aria-label="Prendre rendez-vous sur Doctolib (ouvre un nouvel onglet)"
          >
            Prendre rendez-vous
          </a>
          <Link
            href="/a-propos"
            className="btn-secondary glass backdrop-blur-md border-white/50 text-gray-800 hover:bg-white/50 transform hover:-translate-y-0.5 transition-all duration-300"
          >
            Découvrir mon approche
          </Link>
        </motion.div>
      </motion.div>
    </section>
  );
}
