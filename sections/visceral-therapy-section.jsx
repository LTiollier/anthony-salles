import SectionTitle from "@/components/section-title";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStethoscope } from "@fortawesome/free-solid-svg-icons/faStethoscope";
import { faHandRock } from "@fortawesome/free-solid-svg-icons/faHandRock";
import { faHeart } from "@fortawesome/free-solid-svg-icons/faHeart";
import VisceralTriadAnimation from "@/components/visceral-triad-animation";
import Reveal from "@/components/reveal";

export default function VisceralTherapySection() {
  const objectives = [
    "Libérer les tensions abdominales et profondes.",
    "Favoriser une meilleure mobilité des tissus et améliorer le confort au quotidien.",
    "Réduire l'impact de ces tensions sur l'ensemble de la structure corporelle (dos, posture).",
  ];

  const benefits = [
    {
      icon: faStethoscope,
      title: "Tensions Abdominales",
      description:
        "Libération des tensions abdominales et profondes pour un meilleur confort.",
    },
    {
      icon: faHandRock,
      title: "Mobilité Tissulaire",
      description:
        "Amélioration de la mobilité des tissus et du confort au quotidien.",
    },
    {
      icon: faHeart,
      title: "Équilibre Postural",
      description:
        "Réduction de l'impact des tensions sur l'ensemble de la structure corporelle.",
    },
  ];

  return (
    <section className="py-24 md:py-32 max-w-6xl mx-auto px-6 overflow-hidden">
      <SectionTitle
        isH1={true}
        title="La Thérapie Viscérale"
        description="Une approche manuelle douce centrée sur la mobilité des organes internes et de leurs tissus de soutien."
      />

      <div className="flex flex-col lg:flex-row-reverse items-center gap-16 mt-16">
        <Reveal y={50} className="lg:w-1/2">
          <div className="space-y-6">
            <h3 className="text-3xl font-bold text-slate-900 leading-tight">
              L'harmonie intérieure par <br />
              <span className="text-blue-600">le mouvement viscéral</span>
            </h3>
            <p className="text-slate-600 text-lg leading-relaxed">
              La thérapie viscérale est une approche manuelle douce centrée sur
              la mobilité des organes internes (digestifs, thoraciques) et de
              leurs tissus de soutien. Des tensions à ce niveau peuvent parfois
              se répercuter sur la posture et entretenir des inconforts
              durables.
            </p>

            <div className="space-y-4 pt-2">
              <h4 className="font-semibold text-slate-900 text-lg">
                Mon objectif à travers cette approche :
              </h4>
              <ul className="space-y-3">
                {objectives.map((obj, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <span className="mt-2.5 flex-shrink-0 w-2 h-2 rounded-full bg-blue-600" />
                    <span className="text-slate-700 text-base leading-relaxed">
                      {obj}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="p-6 glass border-green-100 bg-green-50/40 rounded-2xl">
              <p className="text-slate-700 leading-relaxed">
                J'associe à cette pratique la lecture globale de la médecine
                traditionnelle chinoise. Cette grille de lecture complémentaire
                permet de mieux appréhender les liens complexes entre le
                fonctionnement des organes, la circulation de l'énergie et
                l'état général (fatigue, stress, douleurs récurrentes).
              </p>
            </div>
          </div>
        </Reveal>

        <Reveal
          y={50}
          delay={0.2}
          className="lg:w-1/2 flex justify-center relative"
        >
          <div className="relative group">
            <div className="absolute inset-0 bg-emerald-400 rounded-full blur-[100px] opacity-20 group-hover:opacity-30 transition-opacity" />
            <VisceralTriadAnimation />
          </div>
        </Reveal>
      </div>

      <div className="mt-24">
        <h3 className="text-2xl font-bold text-slate-900 mb-12 text-center">
          Les bienfaits de l'approche
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-4">
          {benefits.map((benefit, index) => (
            <Reveal key={index} y={0} delay={index * 0.1} className="h-full">
              <div className="p-8 rounded-3xl glass flex flex-col items-center text-center group hover:-translate-y-2 transition-all duration-300 h-full">
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
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
