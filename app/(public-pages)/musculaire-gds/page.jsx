import MuscularGDSSection from "@/sections/muscular-gds-section";

export const metadata = {
  title: "Méthode GDS & Chaînes Musculaires Lyon 8 | Anthony Salles",
  description:
    "Traitement par la méthode des chaînes musculaires et articulaires GDS à Lyon 8 par Anthony Salles. Rééquilibrage postural, prévention et libération du mouvement.",
  alternates: {
    canonical: "https://anthony-salles.vercel.app/musculaire-gds",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Méthode GDS - Chaînes Musculaires et Articulaires",
  provider: {
    "@type": "Physician",
    name: "Anthony Salles - Kinésithérapeute Lyon 8",
    url: "https://anthony-salles.vercel.app",
  },
  areaServed: {
    "@type": "AdministrativeArea",
    name: "Lyon 8",
  },
  description:
    "Approche globale basée sur l'étude et le traitement des 6 familles de chaînes musculaires et articulaires GDS pour restaurer la posture et le mouvement.",
};

export default function MuscularGDSPage() {
  return (
    <main className="px-4">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <MuscularGDSSection />
    </main>
  );
}
