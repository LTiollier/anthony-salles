import SectionTitle from "@/components/section-title";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faYinYang } from "@fortawesome/free-solid-svg-icons/faYinYang";
import { faDroplet } from "@fortawesome/free-solid-svg-icons/faDroplet";
import { faLeaf } from "@fortawesome/free-solid-svg-icons/faLeaf";
import EnergyFlow from "@/components/energy-flow";
import Reveal from "@/components/reveal";

export default function ChineseMedicineSection() {
  const principles = [
    {
      icon: faYinYang,
      title: "Équilibre du Yin et du Yang",
      description:
        "La recherche de l'harmonie entre les forces complémentaires pour maintenir une santé physique et psychique optimale.",
    },
    {
      icon: faDroplet,
      title: "Circulation du Qi",
      description:
        "L'énergie vitale qui parcourt les méridiens du corps, essentielle au bon fonctionnement des organes et des tissus.",
    },
    {
      icon: faLeaf,
      title: "Les Cinq Éléments",
      description:
        "Bois, Feu, Terre, Métal, Eau : un système d'interactions constantes influençant notre physiologie et nos émotions.",
    },
  ];

  return (
    <section className="py-24 md:py-32 max-w-6xl mx-auto px-6 overflow-hidden">
      <SectionTitle
        title="La Médecine Chinoise"
        description="Découvrez les fondements et les bienfaits de cette approche thérapeutique millénaire pour votre équilibre énergétique."
      />

      <div className="flex flex-col lg:flex-row items-center gap-16 mt-16">
        <Reveal y={50} className="lg:w-1/2">
          <div className="space-y-6">
            <h3 className="text-3xl font-bold text-slate-900 leading-tight">
              Une approche holistique pour <br />
              <span className="text-emerald-600">votre santé globale</span>
            </h3>
            <p className="text-slate-600 text-lg leading-relaxed">
              La Médecine Traditionnelle Chinoise (MTC) est un système médical
              complet, vieux de plusieurs millénaires, qui vise à rétablir
              l'équilibre énergétique du corps. Elle considère l'être humain
              dans sa globalité, en prenant en compte les aspects physiques,
              émotionnels et environnementaux.
            </p>
            <div className="p-6 glass border-emerald-100 bg-emerald-50/30">
              <p className="text-slate-700 leading-relaxed italic">
                Mes traitements s'appuient sur des techniques ciblées afin de
                stimuler les capacités naturelles d'auto-guérison et de
                régulation de votre organisme.
              </p>
            </div>
            <p className="text-slate-600 text-lg leading-relaxed">
              Que ce soit pour soulager des douleurs chroniques, gérer le
              stress, améliorer le sommeil ou renforcer votre vitalité, la MTC
              offre des réponses sur-mesure et respectueuses de votre rythme.
            </p>
          </div>
        </Reveal>

        <Reveal
          y={50}
          delay={0.2}
          className="lg:w-1/2 flex justify-center relative"
        >
          <div className="relative group">
            <div className="absolute inset-0 bg-emerald-400 rounded-full blur-[100px] opacity-20 group-hover:opacity-30 transition-opacity" />
            <EnergyFlow />
          </div>
        </Reveal>
      </div>

      <div className="mt-24">
        <h3 className="text-2xl font-bold text-slate-900 mb-12 text-center">
          Principes fondamentaux de la MTC
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-4">
          {principles.map((principle, index) => (
            <Reveal key={index} y={0} delay={index * 0.1} className="h-full">
              <div className="p-8 rounded-3xl glass flex flex-col items-center text-center group hover:-translate-y-2 transition-all duration-300 h-full">
                <div className="size-16 rounded-2xl bg-emerald-50 flex items-center justify-center text-emerald-600 mb-6 group-hover:bg-emerald-600 group-hover:text-white transition-colors duration-300">
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
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
