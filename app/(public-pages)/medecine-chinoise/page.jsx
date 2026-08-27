import ChineseMedicineSection from "@/sections/chinese-medicine-section";

export const metadata = {
  title: "Médecine Chinoise",
  description:
    "Découvrez l'approche de la médecine traditionnelle chinoise (MTC) pratiquée par Anthony Salles à Lyon 7. Équilibre énergétique et soins holistiques.",
  openGraph: {
    title: "Médecine Chinoise | Anthony Salles Kinésithérapeute Lyon 7",
    description:
      "Soins et équilibre énergétique par la médecine traditionnelle chinoise (MTC) à Lyon 7.",
  },
};

export default function ChineseMedicinePage() {
  return (
    <main className="px-4">
      <ChineseMedicineSection />
    </main>
  );
}
