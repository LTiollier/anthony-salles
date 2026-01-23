import PricingSection from "@/sections/pricing-section";

export const metadata = {
    title: "Tarifs",
    description:
        "Découvrez les tarifs des consultations d'Anthony Salles, kinésithérapeute à Lyon 7. Thérapie viscérale et séances conventionnées.",
};

export default function PricingPage() {
    return (
        <main className="px-4">
            <PricingSection />
        </main>
    );
}
