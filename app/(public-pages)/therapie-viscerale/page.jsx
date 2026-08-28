import VisceralTherapySection from "@/sections/visceral-therapy-section";

export const metadata = {
  title: "Thérapie Viscérale & Médecine Chinoise Lyon 8 | Anthony Salles",
  description:
    "Séances de thérapie viscérale et approche globale intégrée à Lyon 8. Libération des tensions abdominales, amélioration de la mobilité des tissus et confort intestinal.",
  alternates: {
    canonical: "https://anthony-salles.vercel.app/therapie-viscerale",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Thérapie Viscérale & Médecine Traditionnelle Chinoise",
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
    "Thérapie manuelle douce axée sur la mobilité des organes internes et la libération des tensions profondes.",
};

export default function VisceralTherapyPage() {
  return (
    <main className="px-4">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <VisceralTherapySection />
    </main>
  );
}
