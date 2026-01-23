import ContactSection from "@/sections/contact-section";

export const metadata = {
  title: "Contact",
  description:
    "Contactez Anthony Salles pour une consultation à Lyon 7. Informations de contact, plan d'accès et prise de rendez-vous.",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "MedicalBusiness",
  name: "Anthony Salles - Kinésithérapeute",
  image: "https://anthonysalles.com/logo.png",
  "@id": "https://anthonysalles.com",
  url: "https://anthonysalles.com",
  telephone: "0478724280",
  address: {
    "@type": "PostalAddress",
    streetAddress: "46 Rue de la Madeleine",
    addressLocality: "Lyon",
    postalCode: "69007",
    addressCountry: "FR",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 45.7477646,
    longitude: 4.8474168,
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "08:30",
      closes: "19:30",
    },
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
