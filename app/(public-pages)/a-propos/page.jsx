import AboutSection from "@/sections/about-section";

export const metadata = {
  title: "À propos",
  description:
    "Découvrez le parcours d'Anthony Salles, masseur-kinésithérapeute à Lyon 8. Son approche, sa passion et sa philosophie de soin holistique.",
};

export default function AboutPage() {
  return (
    <main className="px-4">
      <AboutSection />
    </main>
  );
}
