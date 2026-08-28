import ContactSection from "@/sections/contact-section";

export const metadata = {
  title: "Contact",
  description:
    "Contactez Anthony Salles pour une consultation à Lyon 8. Informations de contact, plan d'accès et moyens de transport.",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "MedicalBusiness",
  name: "Anthony Salles - Kinésithérapeute",
  image: "https://anthony-salles.vercel.app/logo.webp",
  "@id": "https://anthony-salles.vercel.app",
  url: "https://anthony-salles.vercel.app",
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
