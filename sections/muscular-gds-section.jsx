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
      description:
        "Analyse de la posture globale pour libérer le mouvement et réduire les contraintes articulaires.",
    },
    {
      icon: faCompass,
      title: "Approche Typologique",
      description:
        "Compréhension de votre terrain par l'étude des 6 familles de chaînes musculaires et articulaires.",
    },
    {
      icon: faDna,
      title: "Globalité du Corps",
      description:
        "Un traitement qui relie le psychisme, le comportement et le geste moteur pour un équilibre durable.",
    },
  ];

  return (
    <section className="mt-32 max-w-5xl mx-auto px-4">
      <SectionTitle
        title="La Méthode GDS"
        description="Une approche globale basée sur les chaînes musculaires et articulaires pour rééquilibrer votre corps."
      />
      <motion.div className="flex flex-col md:flex-row items-center gap-12 mt-10">
        <motion.div
          className="md:w-1/2"
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ type: "spring", stiffness: 100, damping: 20 }}
        >
          <h3 className="text-2xl font-semibold text-gray-900 mb-4">
            Le corps comme un langage
          </h3>
          <p className="text-gray-700 leading-relaxed mb-4">
            La méthode GDS (Godelieve Denys-Struyf) est une approche
            thérapeutique et préventive qui considère le corps comme un ensemble
            de chaînes musculaires et articulaires interdépendantes. Ces chaînes
            sont l'expression de notre mode de fonctionnement et de nos émotions.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            Par des massages spécifiques, des étirements posturales et des
            prises de conscience corporelle, nous travaillons à libérer les
            tensions excessives qui emprisonnent le corps dans des schémas
            douloureux.
          </p>
          <p className="text-gray-700 leading-relaxed">
            L'objectif est de retrouver une alternance naturelle entre les
            différentes chaînes, gage de souplesse, de force et d'adaptabilité
            face aux contraintes du quotidien.
          </p>
        </motion.div>
        <motion.div
          className="md:w-1/2 flex justify-center"
          initial={{ x: 100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ type: "spring", stiffness: 100, damping: 20 }}
        >
          <MuscularChainsAnimation />
        </motion.div>
      </motion.div>

      <h3 className="text-2xl font-semibold text-gray-900 mb-8 mt-16 text-center">
        Les piliers du traitement
      </h3>
      <div className="flex flex-wrap items-stretch justify-center gap-6 mt-10 px-6">
        {principles.map((principle, index) => (
          <motion.div
            key={index}
            className="p-6 rounded-xl space-y-4 glass max-w-80 w-full flex flex-col items-center text-center"
            role="article"
            aria-labelledby={`principle-title-${index}`}
            initial={{ y: 150, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{
              delay: index * 0.15,
              type: "spring",
              stiffness: 320,
              damping: 70,
              mass: 1,
            }}
          >
            <FontAwesomeIcon
              icon={principle.icon}
              className="size-8.5 text-blue-500"
              aria-hidden="true"
            />
            <h4
              id={`principle-title-${index}`}
              className="text-lg font-medium text-gray-900"
            >
              {principle.title}
            </h4>
            <p className="text-gray-700 pb-2">{principle.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
