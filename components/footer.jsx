'use client';
import { DribbbleIcon, GithubIcon, LinkedinIcon, TwitterIcon } from "lucide-react";
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
            <a href="/">
                <Image src='/assets/logo.svg' alt='logo' className='h-8.5 w-auto' width={205} height={48} />
            </a>

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