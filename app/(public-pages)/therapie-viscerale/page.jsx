import VisceralTherapySection from "@/sections/visceral-therapy-section";

export const metadata = {
    title: 'Thérapie Viscérale',
    description: 'La thérapie viscérale pour soulager les tensions internes et améliorer la fonction des organes. Une spécialité d\'Anthony Salles à Lyon 7.',
};

export default function VisceralTherapyPage() {
    return (
        <main className="px-4">
            <VisceralTherapySection />
        </main>
    );
}
