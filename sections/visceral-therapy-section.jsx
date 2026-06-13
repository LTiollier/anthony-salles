import SectionTitle from "@/components/section-title";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStethoscope } from "@fortawesome/free-solid-svg-icons/faStethoscope";
import { faHandRock } from "@fortawesome/free-solid-svg-icons/faHandRock";
import { faHeart } from "@fortawesome/free-solid-svg-icons/faHeart";
import OrganicPulse from "@/components/organic-pulse";
import Reveal from "@/components/reveal";

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
        <Reveal y={50} className="lg:w-1/2">
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
        </Reveal>

        <Reveal
          y={50}
          delay={0.2}
          className="lg:w-1/2 flex justify-center relative"
        >
          <div className="relative group">
            <div className="absolute inset-0 bg-green-400 rounded-full blur-[100px] opacity-20 group-hover:opacity-30 transition-opacity" />
            <OrganicPulse />
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
