import CallToAction from "@/sections/call-to-action";
import Features from "@/sections/features";
import HeroSection from "@/sections/hero-section";

export const metadata = {
  title: "Accueil | Kinésithérapeute Lyon 7",
  description:
    "Bienvenue au cabinet d'Anthony Salles. Kinésithérapie, médecine chinoise et thérapie viscérale à Lyon 7. Prenez rendez-vous en ligne.",
};

export default function Page() {
  return (
    <main className="px-4">
      <HeroSection />
      <Features />
      <CallToAction />
    </main>
  );
}
