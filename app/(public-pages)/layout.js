import Footer from '@/components/footer';
import Navbar from '@/components/navbar';

export const metadata = {
    title: {
        default: 'Anthony Salles - Kinésithérapeute | Médecine Chinoise & Thérapie Viscérale',
        template: '%s | Anthony Salles',
    },
    description: 'Cabinet de kinésithérapie d\'Anthony Salles à Lyon 7. Spécialisé en médecine chinoise, thérapie viscérale et soins holistiques pour un bien-être durable.',
    openGraph: {
        title: 'Anthony Salles - Kinésithérapeute à Lyon 7',
        description: 'Expertise en kinésithérapie, médecine chinoise et thérapie viscérale. Accompagnement holistique et personnalisé.',
        url: 'https://anthonysalles.com',
        siteName: 'Anthony Salles',
        locale: 'fr_FR',
        type: 'website',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Anthony Salles - Kinésithérapeute',
        description: 'Kinésithérapie, Médecine Chinoise & Thérapie Viscérale à Lyon 7.',
    },
    appleWebApp: {
        title: 'Anthony Salles',
    },
};

export default function Layout({ children }) {
    return (
        <>
            <a href="#main-content" className="skip-link">
                Passer au contenu principal
            </a>
            <Navbar />
            <main id="main-content">
                {children}
            </main>
            <Footer />
        </>
    );
}
