"use client";
import { motion } from "framer-motion";
import SectionTitle from "@/components/section-title";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPersonWalking,
  faCompass,
  faDna,
} from "@fortawesome/free-solid-svg-icons";
import MuscularChainsAnimation from "@/components/muscular-chains-animation";

export default function MuscularGDSSection() {
  const principles = [
    {
      icon: faPersonWalking,
      title: "Posture et Mouvement",
      description: "Analyse de la posture globale pour libérer le mouvement et réduire les contraintes articulaires.",
    },
    {
      icon: faCompass,
      title: "Approche Typologique",
      description: "Compréhension de votre terrain par l'étude des 6 familles de chaînes musculaires et articulaires.",
    },
    {
      icon: faDna,
      title: "Globalité du Corps",
      description: "Un traitement qui relie le psychisme, le comportement et le geste moteur pour un équilibre durable.",
    },
  ];

  return (
    <section className="py-24 md:py-32 max-w-6xl mx-auto px-6 overflow-hidden">
      <SectionTitle
        title="La Méthode GDS"
        description="Une approche globale basée sur les chaînes musculaires et articulaires pour rééquilibrer votre corps."
      />

      <div className="flex flex-col lg:flex-row items-center gap-16 mt-16">
        <motion.div
          className="lg:w-1/2"
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ type: "spring", stiffness: 100, damping: 20 }}
        >
          <div className="space-y-6">
            <h3 className="text-3xl font-bold text-slate-900 leading-tight">
              Le corps comme un langage, <br /><span className="text-blue-600">la posture comme expression</span>
            </h3>
            <p className="text-slate-600 text-lg leading-relaxed">
              La méthode GDS (Godelieve Denys-Struyf) est une approche thérapeutique et préventive qui considère le corps comme un ensemble de chaînes musculaires et articulaires interdépendantes. Ces chaînes sont l'expression de notre mode de fonctionnement et de nos émotions.
            </p>
            <div className="p-6 glass border-blue-100 bg-blue-50/30">
              <p className="text-slate-700 leading-relaxed italic">
                Par des massages spécifiques, des étirements posturales et des prises de conscience corporelle, nous travaillons à libérer les tensions excessives qui emprisonnent le corps dans des schémas douloureux.
              </p>
            </div>
            <p className="text-slate-600 text-lg leading-relaxed">
              L'objectif est de retrouver une alternance naturelle entre les différentes chaînes, gage de souplesse, de force et d'adaptabilité face aux contraintes du quotidien.
            </p>
          </div>
        </motion.div>

        <motion.div
          className="lg:w-1/2 flex justify-center relative"
          initial={{ x: 100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ type: "spring", stiffness: 100, damping: 20 }}
        >
          <div className="relative group">
            <div className="absolute inset-0 bg-blue-400 rounded-full blur-[100px] opacity-20 group-hover:opacity-30 transition-opacity" />
            <MuscularChainsAnimation />
          </div>
        </motion.div>
      </div>

      <div className="mt-24">
        <h3 className="text-2xl font-bold text-slate-900 mb-12 text-center">
          Les trois piliers de l'équilibre
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-4">
          {principles.map((principle, index) => (
            <motion.div
              key={index}
              className="p-8 rounded-3xl glass flex flex-col items-center text-center group hover:-translate-y-2 transition-all duration-300"
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
            >
              <div className="size-16 rounded-2xl bg-blue-50 flex items-center justify-center text-blue-600 mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
                <FontAwesomeIcon
                  icon={principle.icon}
                  className="size-8"
                  aria-hidden="true"
                />
              </div>
              <h4 className="text-xl font-bold text-slate-900 mb-4">
                {principle.title}
              </h4>
              <p className="text-slate-500 leading-relaxed">
                {principle.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
