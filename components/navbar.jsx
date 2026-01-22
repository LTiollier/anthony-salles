'use client';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { motion } from "framer-motion";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const pathname = usePathname();

    const links = [
        { name: 'Accueil', href: '/' },
        { name: 'À propos', href: '/a-propos' },
        { name: 'Médecine chinoise', href: '/medecine-chinoise' },
        { name: 'Thérapie viscérale', href: '/therapie-viscerale' },
        { name: 'Contact', href: '/contact' }
    ];

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [pathname]);

    return (
        <>
            <motion.nav className={`sticky top-0 z-50 flex w-full items-center justify-between px-4 py-3.5 md:px-16 lg:px-24 transition-colors ${isScrolled ? 'bg-white shadow-md' : ''}`}
                initial={{ y: -100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ type: "spring", stiffness: 250, damping: 70, mass: 1 }}
            >
                <Link href='/' className="flex items-center gap-3">
                    <Image src='/logo.png' alt='Anthony Salles Logo' className='size-10 object-contain rounded-full' width={40} height={40} />
                    <span className="text-lg font-semibold text-gray-900 tracking-tight">Anthony Salles</span>
                </Link>

                <div className='hidden items-center space-x-10 md:flex'>
                    {links.map((link) => (
                        <Link key={link.name} href={link.href} className='transition hover:text-gray-500'>
                            {link.name}
                        </Link>
                    ))}
                    <a href='https://www.doctolib.fr/masseur-kinesitherapeute/lyon/anthony-salles-lyon' target='_blank' rel='noopener noreferrer' className='btn bg-blue-500'>
                        Prendre rendez-vous
                    </a>
                </div>

                <button onClick={() => setIsOpen(true)} className='transition active:scale-90 md:hidden'>
                    <FontAwesomeIcon icon={faBars} className='size-6.5' />
                </button>
            </motion.nav>

            <div className={`fixed inset-0 z-50 flex flex-col items-center justify-center gap-6 bg-white/80 text-lg font-medium backdrop-blur-2xl transition duration-300 md:hidden ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
                {links.map((link) => (
                    <Link key={link.name} href={link.href} onClick={() => setIsOpen(false)}>
                        {link.name}
                    </Link>
                ))}


                <a href='https://www.doctolib.fr/masseur-kinesitherapeute/lyon/anthony-salles-lyon' target='_blank' rel='noopener noreferrer' className='btn bg-blue-500' onClick={() => setIsOpen(false)}>
                    Prendre rendez-vous
                </a>

                <button onClick={() => setIsOpen(false)} className='rounded-md p-2 glass'>
                    <FontAwesomeIcon icon={faXmark} />
                </button>
            </div >
        </>
    );
}
