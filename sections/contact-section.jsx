"use client";

import { m } from "framer-motion";
import SectionTitle from "@/components/section-title";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons/faEnvelope";
import { faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons/faMapMarkerAlt";
import { faCalendarCheck } from "@fortawesome/free-solid-svg-icons/faCalendarCheck";
import dynamic from "next/dynamic";
import DefaultMapLink from "@/components/default-map-link";

const MotionDefaultMapLink = m.create(DefaultMapLink);

// Leaflet needs to be dynamically imported with ssr: false
const LeafletMap = dynamic(() => import("@/components/leaflet-map"), {
  ssr: false,
});

const CONTACT_INFO = [
  {
    icon: faEnvelope,
    label: "Email",
    value: "anthony.salles@protonmail.com",
    href: "mailto:anthony.salles@protonmail.com",
    isMap: false,
  },
  {
    icon: faMapMarkerAlt,
    label: "Cabinet",
    value: "1 rue Transval, 69008 Lyon",
    isMap: true,
  },
];

const TRANSPORTS = [
  {
    type: "metro",
    line: "D",
    lineBg: "bg-[#009a44]",
    station: "Grange Blanche",
    details: "à 9min à pied",
  },
  {
    type: "tram",
    line: "T2",
    lineBg: "bg-[#702c8e]",
    station: "Jean XXIII - M. Bastié",
    details: "à 8min à pied",
  },
];

export default function ContactSection() {
  return (
    <section className="py-24 md:py-32 max-w-6xl mx-auto px-6">
      <SectionTitle
        isH1={true}
        title="Contact & Accès"
        description="Retrouvez toutes les informations pratiques et les moyens d'accès pour vous rendre au cabinet."
      />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-16">
        {/* Left Column: Practical Info & Transport */}
        <m.div
          className="space-y-10"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          {/* Informations Pratiques */}
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-slate-900 border-l-4 border-blue-500 pl-4">
              Informations Pratiques
            </h2>
            <div className="grid gap-4">
              {CONTACT_INFO.map((info, idx) => {
                const innerContent = (
                  <>
                    <div className="size-12 rounded-2xl bg-blue-50 flex items-center justify-center text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors shrink-0">
                      <FontAwesomeIcon icon={info.icon} className="size-5" />
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
                        {info.label}
                      </p>
                      <p className="text-slate-900 font-medium">{info.value}</p>
                    </div>
                  </>
                );

                if (info.isMap) {
                  return (
                    <MotionDefaultMapLink
                      key={idx}
                      className="flex items-center gap-4 p-5 glass border-white/50 hover:bg-white/60 transition-all group rounded-2xl cursor-pointer"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: idx * 0.1 }}
                    >
                      {innerContent}
                    </MotionDefaultMapLink>
                  );
                }

                return (
                  <m.a
                    key={idx}
                    href={info.href}
                    className="flex items-center gap-4 p-5 glass border-white/50 hover:bg-white/60 transition-all group rounded-2xl"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                  >
                    {innerContent}
                  </m.a>
                );
              })}

              {/* Doctolib RDV Card */}
              <m.a
                href="https://www.doctolib.fr/masseur-kinesitherapeute/lyon/anthony-salles-lyon"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-5 glass border-blue-200/60 bg-blue-50/40 hover:bg-blue-600 group transition-all rounded-2xl"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
              >
                <div className="size-12 rounded-2xl bg-blue-600 text-white flex items-center justify-center group-hover:bg-white group-hover:text-blue-600 transition-colors shrink-0">
                  <FontAwesomeIcon icon={faCalendarCheck} className="size-5" />
                </div>
                <div>
                  <p className="text-xs font-semibold text-blue-600 group-hover:text-blue-100 uppercase tracking-wider">
                    Rendez-vous
                  </p>
                  <p className="text-slate-900 group-hover:text-white font-semibold">
                    Prendre rendez-vous sur Doctolib
                  </p>
                </div>
              </m.a>
            </div>
          </div>

          {/* Moyens d'Accès */}
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-slate-900 border-l-4 border-blue-500 pl-4">
              Moyens d'Accès
            </h2>

            <div className="grid gap-4">
              {TRANSPORTS.map((item, idx) => (
                <m.div
                  key={idx}
                  className="flex items-center gap-4 p-5 glass border-white/50 rounded-2xl"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                >
                  {/* Transport Sigle (CSS badge matching TCL style) */}
                  <div className="inline-flex items-center gap-1.5 shrink-0 select-none">
                    <span className="w-7 h-7 bg-[#e30613] text-white font-extrabold text-xs rounded-lg flex items-center justify-center shadow-xs">
                      {item.type === "metro" ? "M" : "T"}
                    </span>
                    <span
                      className={`h-7 px-2.5 ${item.lineBg} text-white font-extrabold text-xs rounded-lg flex items-center justify-center shadow-xs`}
                    >
                      {item.line}
                    </span>
                  </div>

                  <div>
                    <p className="text-slate-900 font-semibold">
                      {item.type === "metro" ? "Métro" : "Tram"} {item.line} —
                      arrêt {item.station}
                    </p>
                    <p className="text-slate-500 text-sm">{item.details}</p>
                  </div>
                </m.div>
              ))}
            </div>
          </div>
        </m.div>

        {/* Right Column: Interactive Map */}
        <m.div
          className="space-y-6 flex flex-col justify-between"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="space-y-6 flex-1 flex flex-col">
            <h2 className="text-2xl font-bold text-slate-900 border-l-4 border-blue-500 pl-4">
              Plan d'Accès
            </h2>
            <div className="w-full h-80 lg:h-full min-h-[320px] rounded-3xl overflow-hidden shadow-xl border border-white/40 ring-1 ring-slate-200/50">
              <LeafletMap />
            </div>
          </div>
          <DefaultMapLink className="btn w-full bg-slate-900 hover:bg-slate-800 text-white text-center py-3.5 rounded-2xl shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer">
            <FontAwesomeIcon
              icon={faMapMarkerAlt}
              className="size-4 text-blue-400"
            />
            Ouvrir l'itinéraire
          </DefaultMapLink>
        </m.div>
      </div>
    </section>
  );
}
