import AboutSection from "@/sections/about-section";

export const metadata = {
  title: "À Propos & Parcours | Anthony Salles Kinésithérapeute",
  description:
    "Découvrez le parcours et la philosophie de soin d'Anthony Salles, kinésithérapeute diplômé à Lyon 8. Formé aux chaînes musculaires GDS et à la thérapie viscérale.",
  alternates: {
    canonical: "https://anthony-salles.vercel.app/a-propos",
  },
};

export default function AboutPage() {
  return (
    <main className="px-4">
      <AboutSection />
    </main>
  );
}
