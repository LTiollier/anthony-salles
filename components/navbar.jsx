"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  const links = [
    { name: "Accueil", href: "/" },
    { name: "À propos", href: "/a-propos" },
    { name: "Méthode GDS", href: "/musculaire-gds" },
    { name: "Thérapie viscérale", href: "/therapie-viscerale" },
    { name: "Tarifs", href: "/tarif" },
    { name: "Contact", href: "/contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-4 md:px-8 py-4 pointer-events-none">
      <motion.nav
        className={`mx-auto max-w-7xl pointer-events-auto flex items-center justify-between px-6 py-3 rounded-full transition-all duration-500 ${
          isScrolled
            ? "bg-white/70 backdrop-blur-xl shadow-lg border border-white/50"
            : "bg-transparent"
        }`}
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: "spring", stiffness: 200, damping: 25 }}
      >
        <Link
          href="/"
          className="flex items-center gap-3 active:scale-95 transition-transform"
        >
          <Image
            src="/logo.png"
            alt=""
            className="size-8 object-contain rounded-full shadow-sm"
            width={32}
            height={32}
          />
          <span className="text-lg font-bold text-slate-900 tracking-tight">
            Anthony Salles
          </span>
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={`text-sm font-semibold transition-colors hover:text-blue-600 ${
                pathname === link.href ? "text-blue-600" : "text-slate-600"
              }`}
            >
              {link.name}
            </Link>
          ))}
          <a
            href="https://www.doctolib.fr/masseur-kinesitherapeute/lyon/anthony-salles-lyon"
            target="_blank"
            rel="noopener noreferrer"
            className="btn py-2.5 px-6 bg-blue-600 text-xs shadow-blue-100"
          >
            Prendre RDV
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setIsOpen(true)}
          className="p-2 md:hidden text-slate-900 active:scale-90 transition-transform"
          aria-label="Menu"
        >
          <FontAwesomeIcon icon={faBars} className="size-5" />
        </button>
      </motion.nav>

      {/* Mobile Menu Backdrop */}
      <div
        className={`fixed inset-0 bg-slate-900/10 backdrop-blur-md z-[60] transition-opacity duration-300 md:hidden ${
          isOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setIsOpen(false)}
      />

      {/* Mobile Menu Panel */}
      <div
        className={`fixed inset-y-0 right-0 w-[280px] bg-white shadow-2xl z-[70] p-8 flex flex-col gap-8 transition-transform duration-500 ease-out md:hidden pointer-events-auto ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between">
          <span className="font-bold text-slate-900">Menu</span>
          <button
            onClick={() => setIsOpen(false)}
            className="p-2 text-slate-400 hover:text-slate-900"
          >
            <FontAwesomeIcon icon={faXmark} className="size-5" />
          </button>
        </div>

        <nav className="flex flex-col gap-6">
          {links.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className={`text-lg font-bold transition-colors ${
                pathname === link.href ? "text-blue-600" : "text-slate-600"
              }`}
            >
              {link.name}
            </Link>
          ))}
          <a
            href="https://www.doctolib.fr/masseur-kinesitherapeute/lyon/anthony-salles-lyon"
            target="_blank"
            rel="noopener noreferrer"
            className="btn w-full bg-blue-600 shadow-blue-100"
            onClick={() => setIsOpen(false)}
          >
            Prendre rendez-vous
          </a>
        </nav>
      </div>
    </header>
  );
}
