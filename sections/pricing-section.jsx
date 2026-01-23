"use client";
import { motion } from "framer-motion";
import SectionTitle from "@/components/section-title";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHandSparkles,
  faHandHoldingMedical,
  faEuroSign,
  faClock,
  faShieldHeart,
} from "@fortawesome/free-solid-svg-icons";

export default function PricingSection() {
  const pricingData = [
    {
      title: "Thérapie Viscérale",
      icon: faHandSparkles,
      price: "45€",
      duration: "45 minutes",
      description:
        "Séance spécifique de thérapie viscérale pour le soulagement des tensions internes.",
      details: [
        "Approche manuelle douce",
        "Rééquilibrage des organes",
        "Amélioration de la fonction digestive",
        "Réduction des tensions chroniques",
      ],
      highlight: true,
    },
    {
      title: "Kinésithérapie & Autres",
      icon: faHandHoldingMedical,
      price: "18€ - 25€",
      extra: "+3€ de dépassement",
      duration: "30 minutes (en moyenne)",
      description:
        "Soins conventionnés de masso-kinésithérapie et méthodes de chaînes musculaires GDS.",
      details: [
        "Rééducation fonctionnelle",
        "Chaînes musculaires GDS",
        "Prise en charge personnalisée",
        "Remboursé Sécurité Sociale & Mutuelle",
      ],
      highlight: false,
    },
  ];

  return (
    <section className="py-24 md:py-32 max-w-6xl mx-auto px-6 overflow-hidden">
      <SectionTitle
        title="Tarifs des consultations"
        description="Transparence et engagement pour des soins de qualité adaptés à vos besoins."
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-16 max-w-4xl mx-auto">
        {pricingData.map((item, index) => (
          <motion.div
            key={index}
            className={`relative p-8 rounded-3xl border transition-all duration-500 overflow-hidden ${
              item.highlight
                ? "bg-white shadow-2xl shadow-blue-500/10 border-blue-200"
                : "bg-white/40 backdrop-blur-sm border-slate-200 hover:border-blue-200"
            }`}
            initial={{ opacity: 0, y: 0 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.2, type: "spring", stiffness: 100 }}
          >
            {item.highlight && (
              <div className="absolute top-0 right-0 bg-blue-600 text-white text-[10px] font-bold uppercase tracking-widest px-4 py-1 rounded-bl-xl">
                Spécificité
              </div>
            )}

            <div className="space-y-6">
              <div
                className={`size-14 rounded-2xl flex items-center justify-center text-2xl ${
                  item.highlight
                    ? "bg-blue-600 text-white"
                    : "bg-blue-50 text-blue-600"
                }`}
              >
                <FontAwesomeIcon icon={item.icon} />
              </div>

              <div>
                <h3 className="text-2xl font-bold text-slate-900 mb-2">
                  {item.title}
                </h3>
                <p className="text-slate-500 text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div className="flex items-baseline gap-2">
                <span className="text-4xl font-extrabold text-slate-900">
                  {item.price}
                </span>
                {item.extra && (
                  <span className="text-blue-600 font-semibold text-sm">
                    {item.extra}
                  </span>
                )}
              </div>

              <div className="flex items-center gap-3 text-slate-600 font-medium text-sm">
                <FontAwesomeIcon icon={faClock} className="text-blue-500" />
                <span>{item.duration}</span>
              </div>

              <ul className="space-y-3 pt-4 border-t border-slate-100">
                {item.details.map((detail, idx) => (
                  <li
                    key={idx}
                    className="flex items-center gap-3 text-slate-600 text-sm"
                  >
                    <div className="size-1.5 rounded-full bg-blue-400" />
                    {detail}
                  </li>
                ))}
              </ul>

              <div className="pt-6">
                <a
                  href="https://www.doctolib.fr/masseur-kinesitherapeute/lyon/anthony-salles-lyon"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`btn w-full py-4 text-center justify-center ${
                    item.highlight ? "bg-blue-600" : "bg-slate-900"
                  }`}
                >
                  Prendre rendez-vous
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <motion.div
        className="mt-16 p-8 rounded-3xl bg-blue-50/50 border border-blue-100 max-w-3xl mx-auto flex flex-col md:flex-row items-center gap-8"
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
      >
        <div className="size-16 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 text-2xl shrink-0">
          <FontAwesomeIcon icon={faShieldHeart} />
        </div>
        <div className="space-y-2 text-center md:text-left">
          <h4 className="font-bold text-slate-900">
            Remboursements & Sécurité Sociale
          </h4>
          <p className="text-slate-600 text-sm leading-relaxed">
            Les séances de kinésithérapie sont conventionnées. Le remboursement
            s'effectue sur la base des tarifs de la Sécurité Sociale (60%) et de
            votre Mutuelle (40%).
            <br />
            Le dépassement d'honoraires de 3€ peut être pris en charge par
            certaines mutuelles (hors CMU/AME).
          </p>
        </div>
      </motion.div>
    </section>
  );
}
