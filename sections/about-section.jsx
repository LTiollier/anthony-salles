"use client";
import { motion } from "framer-motion";
import SectionTitle from "@/components/section-title";
import Image from "next/image";

export default function AboutSection() {
  const skills = [
    {
      title: "Rééducation posturale",
      description: "Correction et amélioration de la posture globale.",
    },
    {
      title: "Pathologies musculo-squelettiques",
      description: "Prise en charge des troubles des muscles et articulations.",
    },
    {
      title: "Mobilisations articulaires",
      description:
        "Techniques ciblées pour restaurer la fonction et réduire la douleur.",
    },
    {
      title: "Approche Holistique",
      description:
        "Considération globale du patient pour un bien-être durable.",
    },
  ];

  return (
    <section className="py-24 md:py-32 max-w-6xl mx-auto px-6 overflow-hidden">
      <SectionTitle
        title="Qui suis-je ?"
        description="Découvrez mon parcours professionnel et ma philosophie de traitement centrée sur l'humain."
      />

      <div className="flex flex-col lg:flex-row items-center gap-16 mt-16">
        <motion.div
          className="lg:w-1/2 space-y-8"
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ type: "spring", stiffness: 100, damping: 20 }}
        >
          <div className="space-y-4">
            <h3 className="text-3xl font-bold text-slate-900 leading-tight">
              Mon parcours et ma passion pour le mouvement
            </h3>
            <p className="text-slate-600 text-lg leading-relaxed">
              Masseur-kinésithérapeute diplômé d'État, je suis passionné par la
              complexité du corps humain et sa capacité de résilience. J'exerce
              à Lyon 7e, où je propose une approche basée sur l'écoute active et
              des techniques précises.
            </p>
            <p className="text-slate-600 text-lg leading-relaxed">
              Mon objectif est de vous aider à retrouver votre mobilité et votre
              vitalité grâce à une prise en charge personnalisée qui va au-delà
              du symptôme.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-8">
            {skills.map((skill, index) => (
              <motion.div
                key={index}
                className="p-5 glass border-white/40 group hover:border-blue-200 transition-colors"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <h4 className="font-bold text-slate-900 mb-2 group-hover:text-blue-600 transition-colors">
                  {skill.title}
                </h4>
                <p className="text-slate-500 text-sm leading-relaxed">
                  {skill.description}
                </p>
              </motion.div>
            ))}
          </div>

          <div className="space-y-6 pt-4">
            <h4 className="text-xl font-bold text-slate-900 border-l-4 border-blue-500 pl-4">
              Formations & Expertises
            </h4>
            <div className="space-y-4">
              {[
                {
                  year: "2025",
                  title: "Thérapie viscérale niveau 1 et 2",
                  org: "Kiné Formation",
                },
                {
                  year: "2024",
                  title: "Médecine traditionnelle chinoise",
                  org: "FLETC",
                },
                { year: "2023", title: "Chaînes Musculaires GDS", org: "CFPC" },
                {
                  year: "2021",
                  title: "Diplôme d'État de Kinésithérapeute",
                  org: "IFMKDV",
                },
              ].map((edu, i) => (
                <div key={i} className="flex items-start gap-4">
                  <span className="shrink-0 w-16 text-blue-600 font-bold">
                    {edu.year}
                  </span>
                  <div>
                    <p className="font-semibold text-slate-900">{edu.title}</p>
                    <p className="text-slate-500 text-sm">{edu.org}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        <motion.div
          className="lg:w-1/2 relative"
          initial={{ x: 100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ type: "spring", stiffness: 100, damping: 20 }}
        >
          <div className="relative z-10">
            <motion.div
              animate={{
                y: [0, -20, 0],
                rotate: [0, 1, 0],
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="relative rounded-[2rem] overflow-hidden shadow-2xl"
            >
              <Image
                src="/images/about.png"
                alt="Anthony Salles dans son cabinet à Lyon 7"
                width={600}
                height={700}
                className="w-full h-auto object-cover grayscale-[0.2] hover:grayscale-0 transition-all duration-700"
              />
            </motion.div>

            {/* Decorative elements */}
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-blue-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse" />
            <div className="absolute -top-6 -right-6 w-32 h-32 bg-green-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse delay-700" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
