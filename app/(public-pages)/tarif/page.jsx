import PricingSection from "@/sections/pricing-section";

export const metadata = {
  title: "Tarifs & Remboursements Kinésithérapie Lyon 8 | Anthony Salles",
  description:
    "Consultez les tarifs des soins de kinésithérapie, thérapie viscérale et bilans à Lyon 8. Prise en charge Sécurité Sociale et Mutuelle transparente.",
  alternates: {
    canonical: "https://anthony-salles.vercel.app/tarif",
  },
};

export default function PricingPage() {
  return (
    <main className="px-4">
      <PricingSection />
    </main>
  );
}
