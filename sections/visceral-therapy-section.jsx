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
      title: "Fonction Organique",
      description:
        "Aide à restaurer la mobilité naturelle et le fonctionnement optimal des organes internes.",
    },
    {
      icon: faHandRock,
      title: "Douleurs Chroniques",
      description:
        "Réduit les tensions et les adhérences pouvant causer des douleurs au dos, au cou ou à la tête.",
    },
    {
      icon: faHeart,
      title: "Équilibre Nerveux",
      description:
        "Contribue à une meilleure relaxation en agissant sur le système nerveux autonome (SNA).",
    },
  ];

  return (
    <section className="py-24 md:py-32 max-w-6xl mx-auto px-6 overflow-hidden">
      <SectionTitle
        title="La Thérapie Viscérale"
        description="Une approche manuelle douce pour améliorer la santé de vos organes et votre équilibre global."
      />

      <div className="flex flex-col lg:flex-row-reverse items-center gap-16 mt-16">
        <motion.div
          className="lg:w-1/2"
          initial={{ x: 100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ type: "spring", stiffness: 100, damping: 20 }}
        >
          <div className="space-y-6">
            <h3 className="text-3xl font-bold text-slate-900 leading-tight">
              L'harmonie intérieure par <br />
              <span className="text-blue-600">le mouvement viscéral</span>
            </h3>
            <p className="text-slate-600 text-lg leading-relaxed">
              La thérapie viscérale est une méthode manuelle douce qui évalue et
              traite les restrictions de mouvement des organes internes
              (viscères) et de leurs tissus conjonctifs. Ces restrictions
              peuvent être à l'origine de divers troubles fonctionnels et
              douleurs.
            </p>
            <p className="text-slate-600 text-lg leading-relaxed">
              Mon objectif est de restaurer la mobilité naturelle des viscères,
              d'améliorer leur vascularisation et innervation, et de libérer les
              tensions qui peuvent impacter l'ensemble de votre structure.
            </p>
            <div className="p-6 glass border-green-100 bg-green-50/30">
              <p className="text-slate-700 leading-relaxed italic">
                Cette thérapie est indiquée pour une large gamme de
                déséquilibres, allant des problèmes digestifs et gynécologiques
                aux douleurs musculo-squelettiques chroniques.
              </p>
            </div>
          </div>
        </motion.div>

        <motion.div
          className="lg:w-1/2 flex justify-center relative"
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ type: "spring", stiffness: 100, damping: 20 }}
        >
          <div className="relative group">
            <div className="absolute inset-0 bg-green-400 rounded-full blur-[100px] opacity-20 group-hover:opacity-30 transition-opacity" />
            <OrganicPulse />
          </div>
        </motion.div>
      </div>

      <div className="mt-24">
        <h3 className="text-2xl font-bold text-slate-900 mb-12 text-center">
          Les bienfaits de l'approche
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-4">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              className="p-8 rounded-3xl glass flex flex-col items-center text-center group hover:-translate-y-2 transition-all duration-300"
              initial={{ y: 0, opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
            >
              <div className="size-16 rounded-2xl bg-green-50 flex items-center justify-center text-green-600 mb-6 group-hover:bg-green-600 group-hover:text-white transition-colors duration-300">
                <FontAwesomeIcon
                  icon={benefit.icon}
                  className="size-8"
                  aria-hidden="true"
                />
              </div>
              <h4 className="text-xl font-bold text-slate-900 mb-4">
                {benefit.title}
              </h4>
              <p className="text-slate-500 leading-relaxed">
                {benefit.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
