import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons/faEnvelope";
import { faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons/faMapMarkerAlt";
import { faClock } from "@fortawesome/free-solid-svg-icons/faClock";
import Image from "next/image";
import Link from "next/link";
import Reveal from "@/components/reveal";

export default function Footer() {
  const services = [
    { name: "Méthode GDS", href: "/musculaire-gds" },
    { name: "Thérapie Viscérale", href: "/therapie-viscerale" },
    { name: "Kinésithérapie", href: "/#features" },
    { name: "Tarifs", href: "/tarif" },
  ];

  return (
    <footer
      className="relative w-full pt-24 pb-12 px-6 lg:px-12 mt-32 border-t border-slate-200/50 bg-white/40 backdrop-blur-xl overflow-hidden"
      aria-label="Pied de page"
    >
      <Reveal y={0} className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-20">
          {/* Brand & Info */}
          <div className="flex flex-col gap-6">
            <Link
              href="/"
              className="flex items-center gap-3 active:scale-95 transition-transform w-fit"
            >
              <Image
                src="/logo.webp"
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
                  href="https://www.google.com/maps/place/1+Rue+Transval,+69008+Lyon/@45.7381121,4.8756813,16z"
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
                    1 Rue Transval
                    <br />
                    69008 Lyon
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
      </Reveal>
    </footer>
  );
}
