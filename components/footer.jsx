'use client';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDribbble, faGithub, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Footer() {
    const links = [
        { name: 'Mentions Légales', href: '#' },
        { name: 'Politique de Confidentialité', href: '#' },
    ];
    return (
        <motion.footer className="flex flex-col items-center px-4 md:px-16 lg:px-24 justify-center w-full pt-16 mt-40 glass border-0"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
        >
            <Link href="/" className="flex items-center gap-3">
                <Image src='/logo.png' alt='Anthony Salles Logo' className='size-10 object-contain rounded-full' width={40} height={40} />
                <span className="text-lg font-semibold text-gray-900 tracking-tight">Anthony Salles</span>
            </Link>

            <div className="flex flex-col items-center gap-2 mt-6 text-gray-600">
                <a href="tel:0478724280" className="hover:text-blue-600 transition">04 78 72 42 80</a>
                <a href="mailto:contact@anthonysalles.com" className="hover:text-blue-600 transition">contact@anthonysalles.com</a>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-8 py-8">
                {links.map((link, index) => (
                    <Link key={index} href={link.href} className='transition hover:text-blue-500'>
                        {link.name}
                    </Link>
                ))}
            </div>
            <hr className="w-full border-gray-200 mt-6" />
            <div className="flex flex-col md:flex-row items-center w-full justify-between gap-4 py-4">
                <p>Copyright © 2026 Anthony Salles. Tous droits réservés.</p>
            </div>
        </motion.footer>
    );
};