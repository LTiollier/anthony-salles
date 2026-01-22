import Footer from '@/components/footer';
import Navbar from '@/components/navbar';

export const metadata = {
    title: 'Anthony Salles - Kinésithérapeute | Médecine Chinoise & Thérapie Viscérale',
    description: 'Cabinet de kinésithérapie d\'Anthony Salles. Spécialisé en médecine chinoise, thérapie viscérale et soin holistique.',
    appleWebApp: {
        title: 'Anthony Salles',
    },
};

export default function Layout({ children }) {
    return (
        <>
            <Navbar />
            {children}
            <Footer />
        </>
    );
}
