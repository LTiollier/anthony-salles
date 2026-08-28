import ContactSection from "@/sections/contact-section";

export const metadata = {
  title: "Contact & Prise de Rendez-vous Kiné Lyon 8 | Anthony Salles",
  description:
    "Prenez rendez-vous avec Anthony Salles, kinésithérapeute à Lyon 8 (1 rue Transval). Accès Métro D Grange Blanche & Tram T2. Prise de RDV sur Doctolib.",
  alternates: {
    canonical: "https://anthony-salles.vercel.app/contact",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "MedicalBusiness",
  name: "Anthony Salles - Kinésithérapeute Lyon 8",
  image: "https://anthony-salles.vercel.app/logo.webp",
  "@id": "https://anthony-salles.vercel.app/#cabinet",
  url: "https://anthony-salles.vercel.app/contact",
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
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "09:00",
      closes: "18:00",
    },
  ],
  sameAs: [
    "https://www.doctolib.fr/masseur-kinesitherapeute/lyon/anthony-salles-lyon",
  ],
};

export default function ContactPage() {
  return (
    <main className="px-4">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <ContactSection />
    </main>
  );
}
