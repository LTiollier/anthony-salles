import CallToAction from "@/sections/call-to-action";
import Features from "@/sections/features";
import HeroSection from "@/sections/hero-section";

export const metadata = {
  title: "Kinésithérapeute Lyon 8 | Méthode GDS & Thérapie Viscérale",
  description:
    "Cabinet de kinésithérapie d'Anthony Salles à Lyon 8. Soins personnalisés en rééducation, chaînes musculaires GDS et thérapie viscérale. Prenez rendez-vous en ligne.",
  alternates: {
    canonical: "https://anthony-salles.vercel.app/",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Physician",
  name: "Anthony Salles - Kinésithérapeute",
  image: "https://anthony-salles.vercel.app/images/portrait.webp",
  "@id": "https://anthony-salles.vercel.app/#physician",
  url: "https://anthony-salles.vercel.app",
  telephone: "+33478724280",
  priceRange: "€€",
  address: {
    "@type": "PostalAddress",
    streetAddress: "1 Rue Transval",
    addressLocality: "Lyon",
    postalCode: "69008",
    addressCountry: "FR",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 45.7381121,
    longitude: 4.8756813,
  },
  medicalSpecialty: ["Physiotherapy", "Musculoskeletal"],
  sameAs: [
    "https://www.doctolib.fr/masseur-kinesitherapeute/lyon/anthony-salles-lyon",
  ],
};

export default function Page() {
  return (
    <main className="px-4">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <HeroSection />
      <Features />
      <CallToAction />
    </main>
  );
}
