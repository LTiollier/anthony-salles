import SectionTitle from "@/components/section-title";
import { faUniversalAccess } from "@fortawesome/free-solid-svg-icons/faUniversalAccess";
import { faHandshake } from "@fortawesome/free-solid-svg-icons/faHandshake";
import FeatureCard from "@/components/feature-card";

export default function Features() {
  const featuresData = [
    {
      icon: faUniversalAccess,
      title: "Kinésithérapie",
      description:
        "Rééducation fonctionnelle, gestion de la douleur, et accompagnement post-opératoire pour retrouver votre mobilité.",
      href: "/contact",
    },
    {
      icon: faUniversalAccess,
      title: "Méthode GDS",
      description:
        "Approche globale basée sur les chaînes musculaires et articulaires pour rééquilibrer la posture et le mouvement.",
      href: "/musculaire-gds",
    },
    {
      icon: faHandshake,
      title: "Thérapie Viscérale",
      description:
        "Soulagement des tensions des organes internes pour améliorer la fonction et réduire les douleurs chroniques.",
      href: "/therapie-viscerale",
    },
  ];

  return (
    <section id="features" className="mt-32 pb-20">
      <SectionTitle
        title="Mes Services"
        description="Découvrez l'éventail de mes services dédiés à votre bien-être et à votre santé."
      />

      <div className="flex flex-wrap items-center justify-center gap-8 mt-16 px-6 perspective-1000">
        {featuresData.map((feature, index) => (
          <FeatureCard key={index} feature={feature} index={index} />
        ))}
      </div>
    </section>
  );
}
