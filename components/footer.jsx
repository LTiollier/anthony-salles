"use client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPhone,
  faEnvelope,
  faMapMarkerAlt,
  faClock,
} from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Footer() {
  const services = [
    { name: "Méthode GDS", href: "/musculaire-gds" },
    { name: "Thérapie Viscérale", href: "/therapie-viscerale" },
    { name: "Kinésithérapie", href: "/#features" },
    { name: "Tarifs", href: "/tarif" },
  ];

  return (
    <motion.footer
      className="relative w-full pt-24 pb-12 px-6 lg:px-12 mt-32 border-t border-slate-200/50 bg-white/40 backdrop-blur-xl overflow-hidden"
      aria-label="Pied de page"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 1 }}
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-20">
          {/* Brand & Info */}
          <div className="flex flex-col gap-6">
            <Link
              href="/"
              className="flex items-center gap-3 active:scale-95 transition-transform w-fit"
            >
              <Image
                src="/logo.png"
                alt=""
                className="size-10 object-contain rounded-full bg-white shadow-sm"
                width={40}
                height={40}
              />
              <span className="text-xl font-bold text-slate-900 tracking-tight">
                Anthony Salles
              </span>
            </Link>
            <p className="text-slate-500 leading-relaxed text-sm max-w-xs">
              Masseur-kinésithérapeute spécialisé dans l'approche holistique du
              mouvement et la santé viscérale à Lyon.
            </p>
          </div>

          {/* Services */}
          <nav aria-label="Services secondaires">
            <h4 className="text-slate-900 font-bold mb-6 text-sm uppercase tracking-wider">
              Services
            </h4>
            <ul className="flex flex-col gap-4">
              {services.map((service, index) => (
                <li key={index}>
                  <Link
                    href={service.href}
                    className="text-slate-500 hover:text-blue-600 transition-colors text-sm font-medium"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Direct Contact */}
          <nav aria-label="Contact rapide">
            <h4 className="text-slate-900 font-bold mb-6 text-sm uppercase tracking-wider">
              Contact
            </h4>
            <ul className="flex flex-col gap-5 text-sm">
              <li>
                <a
                  href="tel:0478724280"
                  className="flex items-center gap-3 text-slate-500 hover:text-blue-600 transition-colors font-medium group"
                >
                  <div className="size-8 rounded-lg bg-blue-50 flex items-center justify-center text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors shrink-0">
                    <FontAwesomeIcon icon={faPhone} className="size-3.5" />
                  </div>
                  04 78 72 42 80
                </a>
              </li>
              <li>
                <a
                  href="mailto:anthony.salles@protonmail.com"
                  className="flex items-center gap-3 text-slate-500 hover:text-blue-600 transition-colors font-medium group"
                >
                  <div className="size-8 rounded-lg bg-blue-50 flex items-center justify-center text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors shrink-0">
                    <FontAwesomeIcon icon={faEnvelope} className="size-3.5" />
                  </div>
                  anthony.salles@protonmail.com
                </a>
              </li>
              <li>
                <a
                  href="https://www.google.com/maps/place/Anthony+SALLES/@45.7477683,4.8448419,17z/data=!3m1!5s0x47f4ea41dd2764ff:0x4218a02dbae9f3ee!4m6!3m5!1s0x47f4eb1834469583:0xbfdb9316deb2b1be!8m2!3d45.7477646!4d4.8474168!16s%2Fg%2F11s974tf19?entry=ttu&g_ep=EgoyMDI2MDEyMC4wIKXMDSoKLDEwMDc5MjA2OUgBUAM%3D"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-3 text-slate-500 hover:text-blue-600 transition-colors font-medium group"
                >
                  <div className="size-8 rounded-lg bg-blue-50 flex items-center justify-center text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors shrink-0">
                    <FontAwesomeIcon
                      icon={faMapMarkerAlt}
                      className="size-3.5"
                    />
                  </div>
                  <span>
                    46 Rue de la Madeleine
                    <br />
                    69007 Lyon
                  </span>
                </a>
              </li>
            </ul>
          </nav>

          {/* Opening Hours */}
          <div aria-label="Horaires d'ouverture">
            <h4 className="text-slate-900 font-bold mb-6 text-sm uppercase tracking-wider">
              Horaires
            </h4>
            <div className="p-5 glass border-white/60 bg-white/40 space-y-4">
              <div className="flex items-center gap-3 text-sm font-medium text-slate-600">
                <FontAwesomeIcon
                  icon={faClock}
                  className="text-blue-500 size-4"
                />
                <span>Lun - Ven: 08:30 - 19:30</span>
              </div>
              <a
                href="https://www.doctolib.fr/masseur-kinesitherapeute/lyon/anthony-salles-lyon"
                target="_blank"
                rel="noopener noreferrer"
                className="btn w-full bg-blue-600 text-xs tracking-wider"
              >
                Prendre RDV
              </a>
            </div>
          </div>
        </div>

        <div className="pt-10 border-t border-slate-200/50 flex flex-col md:flex-row items-center justify-between gap-6 text-xs font-semibold text-slate-400 uppercase tracking-widest">
          <p>© {new Date().getFullYear()} Anthony Salles</p>
          <nav className="flex gap-10">
            <Link
              href="/mentions-legales"
              className="hover:text-blue-600 transition-colors"
            >
              Mentions Légales
            </Link>
            <Link
              href="/confidentialite"
              className="hover:text-blue-600 transition-colors"
            >
              Confidentialité
            </Link>
          </nav>
        </div>
      </div>
    </motion.footer>
  );
}
