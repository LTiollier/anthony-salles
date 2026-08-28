import BackgroundGradient from "@/components/background-gradient";
import { Poppins } from "next/font/google";
import "./globals.css";
import LenisScroll from "@/components/lenis-scroll";

export const metadata = {
  metadataBase: new URL("https://anthony-salles.vercel.app"),
  alternates: {
    canonical: "./",
  },
  title: {
    default: "Anthony Salles - Kinésithérapeute | Lyon 8",
    template: "%s | Anthony Salles - Kinésithérapeute Lyon 8",
  },
  description:
    "Expertise en kinésithérapie, chaînes musculaires GDS et thérapie viscérale à Lyon 8. Accompagnement holistique et personnalisé.",
  keywords: [
    "Kinésithérapeute",
    "Lyon",
    "Lyon 8",
    "Chaînes musculaires GDS",
    "Thérapie Viscérale",
    "Santé",
    "Bien-être",
    "Anthony Salles",
  ],
  authors: [{ name: "Anthony Salles" }],
  creator: "Anthony Salles",
  publisher: "Anthony Salles",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  icons: {
    icon: "/logo.webp",
    shortcut: "/logo.webp",
    apple: "/logo.webp",
  },
  openGraph: {
    title: "Anthony Salles - Kinésithérapeute à Lyon 8",
    description:
      "Cabinet de kinésithérapie spécialisé en chaînes musculaires GDS et thérapie viscérale à Lyon 8. Prise en charge globale et personnalisée.",
    url: "https://anthony-salles.vercel.app",
    siteName: "Anthony Salles Kinésithérapeute",
    images: [
      {
        url: "/logo.webp",
        width: 1200,
        height: 630,
        alt: "Anthony Salles - Kinésithérapeute Lyon 8",
      },
    ],
    locale: "fr_FR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Anthony Salles - Kinésithérapeute Lyon 8",
    description:
      "Spécialiste en kinésithérapie, chaînes musculaires GDS & thérapie viscérale à Lyon 8.",
    images: ["/logo.webp"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

const poppins = Poppins({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: ["400", "500", "600", "700"],
});

import FloatingShapes from "@/components/floating-shapes";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
config.autoAddCss = false;

import { LazyMotion, domAnimation } from "framer-motion";

export default function RootLayout({ children }) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <body className={poppins.variable}>
        <LazyMotion features={domAnimation}>
          <a
            href="#main-content"
            className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:px-6 focus:py-3 focus:bg-blue-600 focus:text-white focus:rounded-full focus:shadow-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          >
            Aller au contenu principal
          </a>
          <LenisScroll />
          <FloatingShapes />
          <BackgroundGradient />
          <Navbar />
          <main id="main-content">{children}</main>
          <Footer />
        </LazyMotion>
      </body>
    </html>
  );
}
