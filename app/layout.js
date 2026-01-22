import BackgroundGradient from '@/components/background-gradient';
import { Poppins } from 'next/font/google';
import './globals.css';
import LenisScroll from '@/components/lenis-scroll';

export const metadata = {
    metadataBase: new URL('https://anthonysalles.com'),
    title: {
        default: 'Anthony Salles - Kinésithérapeute | Lyon 7',
        template: '%s | Anthony Salles',
    },
    description: 'Expertise en kinésithérapie, médecine chinoise et thérapie viscérale à Lyon 7. Accompagnement holistique et personnalisé.',
    keywords: ['Kinésithérapeute', 'Lyon', 'Lyon 7', 'Médecine Chinoise', 'Thérapie Viscérale', 'Santé', 'Bien-être', 'Anthony Salles'],
    authors: [{ name: 'Anthony Salles' }],
    creator: 'Anthony Salles',
    publisher: 'Anthony Salles',
    formatDetection: {
        email: false,
        address: false,
        telephone: false,
    },
    icons: {
        icon: '/logo.png',
        shortcut: '/logo.png',
        apple: '/logo.png',
    },
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            'max-video-preview': -1,
            'max-image-preview': 'large',
            'max-snippet': -1,
        },
    },
};

const poppins = Poppins({
    subsets: ['latin'],
    variable: '--font-sans',
    weight: ['400', '500', '600', '700'],
});

export default function RootLayout({ children }) {
    return (
        <html lang='fr' suppressHydrationWarning>
            <body>
                <LenisScroll />
                <BackgroundGradient />
                {children}
            </body>
        </html>
    );
}
