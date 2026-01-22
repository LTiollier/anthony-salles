'use client';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope, faMapMarkerAlt, faClock } from '@fortawesome/free-solid-svg-icons';
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Footer() {
    const services = [
        { name: 'Médecine Chinoise', href: '/medecine-chinoise' },
        { name: 'Thérapie Viscérale', href: '/therapie-viscerale' },
        { name: 'Kinésithérapie', href: '/#features' },
    ];


    return (
        <motion.footer
            className="relative w-full pt-20 pb-10 px-4 md:px-16 lg:px-24 mt-20 border-t border-white/20 bg-white/5 backdrop-blur-md overflow-hidden"
            aria-label="Pied de page"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
        >
            {/* Background Decorative Element */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-blue-400/50 to-transparent" />

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
                {/* Brand & Info */}
                <div className="flex flex-col gap-6">
                    <Link href="/" className="flex items-center gap-3 group" aria-label="Anthony Salles - Retour à l'accueil">
                        <div className="overflow-hidden rounded-full border-2 border-white/50 shadow-md group-hover:scale-105 transition-transform duration-300">
                            <Image src='/logo.png' alt="" className='size-12 object-contain' width={48} height={48} />
                        </div>
                        <span className="text-xl font-bold text-gray-900 tracking-tight">Anthony Salles</span>
                    </Link>
                    <p className="text-gray-600 leading-relaxed text-sm">
                        Expertise en kinésithérapie, médecine chinoise et thérapie viscérale pour un accompagnement holistique et personnalisé.
                    </p>
                </div>

                {/* Services */}
                <nav aria-label="Services secondaires">
                    <h4 className="text-gray-900 font-bold mb-6">Services</h4>
                    <ul className="flex flex-col gap-4">
                        {services.map((service, index) => (
                            <li key={index}>
                                <Link
                                    href={service.href}
                                    className="text-gray-600 hover:text-blue-600 transition-colors text-sm flex items-center gap-2"
                                >
                                    <span className="size-1 bg-blue-400 rounded-full" />
                                    {service.name}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </nav>

                {/* Direct Contact */}
                <nav aria-label="Contact rapide">
                    <h4 className="text-gray-900 font-bold mb-6">Contact Direct</h4>
                    <ul className="flex flex-col gap-4 text-sm">
                        <li>
                            <a href="tel:0478724280" className="flex items-center gap-3 text-gray-600 hover:text-blue-600 transition-colors">
                                <FontAwesomeIcon icon={faPhone} className="size-4 text-blue-500" />
                                04 78 72 42 80
                            </a>
                        </li>
                        <li>
                            <a href="mailto:contact@anthonysalles.com" className="flex items-center gap-3 text-gray-600 hover:text-blue-600 transition-colors">
                                <FontAwesomeIcon icon={faEnvelope} className="size-4 text-blue-500" />
                                contact@anthonysalles.com
                            </a>
                        </li>
                        <li>
                            <a
                                href="https://www.google.com/maps/place/Anthony+SALLES/@45.7477683,4.8448419,17z/data=!3m1!5s0x47f4ea41dd2764ff:0x4218a02dbae9f3ee!4m6!3m5!1s0x47f4eb1834469583:0xbfdb9316deb2b1be!8m2!3d45.7477646!4d4.8474168!16s%2Fg%2F11s974tf19?entry=ttu&g_ep=EgoyMDI2MDEyMC4wIKXMDSoKLDEwMDc5MjA2OUgBUAM%3D"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-start gap-3 text-gray-600 hover:text-blue-600 transition-colors"
                            >
                                <FontAwesomeIcon icon={faMapMarkerAlt} className="size-4 text-blue-500 mt-1" />
                                <span>46 Rue de la Madeleine, 69007 Lyon</span>
                            </a>
                        </li>
                    </ul>
                </nav>

                {/* Opening Hours */}
                <div aria-label="Horaires d'ouverture">
                    <h4 className="text-gray-900 font-bold mb-6">Horaires</h4>
                    <ul className="flex flex-col gap-3 text-sm text-gray-600">
                        <li className="flex items-center gap-2">
                            <FontAwesomeIcon icon={faClock} className="size-4 text-blue-500" aria-hidden="true" />
                            <span>Lun - Ven: 08:30 - 19:30</span>
                        </li>
                        <li className="flex items-center gap-2 opacity-50">
                            <FontAwesomeIcon icon={faClock} className="size-4" aria-hidden="true" />
                            <span>Sam - Dim: Fermé</span>
                        </li>
                    </ul>
                    <a
                        href="https://www.doctolib.fr/masseur-kinesitherapeute/lyon/anthony-salles-lyon"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-6 inline-flex items-center justify-center px-6 py-2.5 rounded-full bg-blue-600 text-white font-medium hover:bg-blue-700 transition-all shadow-lg shadow-blue-500/20 active:scale-95 text-xs uppercase tracking-wider"
                        aria-label="Prendre rendez-vous sur Doctolib (s'ouvre dans un nouvel onglet)"
                    >
                        Prendre RDV
                    </a>
                </div>
            </div>

            <div className="pt-8 border-t border-gray-200/50 flex flex-col md:flex-row items-center justify-between gap-6 text-sm text-gray-500">
                <p>Copyright © {new Date().getFullYear()} Anthony Salles. Tous droits réservés.</p>
                <nav className="flex gap-8" aria-label="Informations légales">
                    <Link href="#" className="hover:text-gray-900 transition-colors">Mentions Légales</Link>
                    <Link href="#" className="hover:text-gray-900 transition-colors">Confidentialité</Link>
                </nav>
            </div>
        </motion.footer>
    );
};