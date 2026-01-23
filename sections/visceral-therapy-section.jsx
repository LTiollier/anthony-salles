"use client";

import { motion } from "framer-motion";
import SectionTitle from "@/components/section-title";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faStethoscope,
  faHandRock,
  faHeart,
} from "@fortawesome/free-solid-svg-icons";
import OrganicPulse from "@/components/organic-pulse";

export default function VisceralTherapySection() {
  const benefits = [
    {
      icon: faStethoscope,
      title: "Amélioration de la fonction organique",
      description:
        "Aide à restaurer la mobilité naturelle et le fonctionnement optimal des organes internes.",
    },
    {
      icon: faHandRock,
      title: "Soulagement des douleurs chroniques",
      description:
        "Réduit les tensions et les adhérences pouvant causer des douleurs au dos, au cou ou à la tête.",
    },
    {
      icon: faHeart,
      title: "Réduction du stress et de l'anxiété",
      description:
        "Contribue à une meilleure relaxation et à un équilibre émotionnel en agissant sur le système nerveux autonome.",
    },
  ];

  return (
    <section className="mt-32 max-w-5xl mx-auto px-4">
      <SectionTitle
        title="La Thérapie Viscérale"
        description="Découvrez comment cette approche manuelle peut améliorer la santé de vos organes et votre bien-être général."
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
            Une approche douce pour un corps en harmonie
          </h3>
          <p className="text-gray-700 leading-relaxed mb-4">
            La thérapie viscérale est une méthode manuelle douce qui évalue et
            traite les restrictions de mouvement des organes internes (viscères)
            et de leurs tissus conjonctifs. Ces restrictions peuvent être à
            l'origine de divers troubles fonctionnels et douleurs.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            Mon objectif est de restaurer la mobilité naturelle des viscères,
            d'améliorer leur vascularisation et innervation, et de libérer les
            tensions qui peuvent impacter d'autres parties du corps, comme la
            colonne vertébrale.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Cette thérapie est indiquée pour une large gamme de déséquilibres,
            allant des problèmes digestifs et gynécologiques aux douleurs
            musculo-squelettiques chroniques.
          </p>
        </motion.div>
        <motion.div
          className="md:w-1/2 flex justify-center"
          initial={{ x: 100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ type: "spring", stiffness: 100, damping: 20 }}
        >
          <OrganicPulse />
        </motion.div>
      </motion.div>

      <h3 className="text-2xl font-semibold text-gray-900 mb-8 mt-16 text-center">
        Bienfaits de la Thérapie Viscérale
      </h3>
      <div className="flex flex-wrap items-stretch justify-center gap-6 mt-10 px-6">
        {benefits.map((benefit, index) => (
          <motion.div
            key={index}
            className="p-6 rounded-xl space-y-4 glass max-w-80 w-full flex flex-col items-center text-center"
            role="article"
            aria-labelledby={`benefit-title-${index}`}
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
              icon={benefit.icon}
              className="size-8.5 text-blue-500"
              aria-hidden="true"
            />
            <h4
              id={`benefit-title-${index}`}
              className="text-lg font-medium text-gray-900"
            >
              {benefit.title}
            </h4>
            <p className="text-gray-700 pb-2">{benefit.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
