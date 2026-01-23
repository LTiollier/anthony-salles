import ChineseMedicineSection from "@/sections/chinese-medicine-section";

export const metadata = {
  title: "Médecine Chinoise",
  description:
    "Découvrez l'approche de la médecine traditionnelle chinoise (MTC) pratiquée par Anthony Salles. Équilibre énergétique et soins holistiques.",
};

export default function ChineseMedicinePage() {
  return (
    <main className="px-4">
      <ChineseMedicineSection />
    </main>
  );
}
