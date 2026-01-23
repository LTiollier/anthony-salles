"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import SectionTitle from "@/components/section-title";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPhone,
  faEnvelope,
  faMapMarkerAlt,
  faCheckCircle,
  faExclamationCircle,
} from "@fortawesome/free-solid-svg-icons";
import dynamic from "next/dynamic";
import emailjs from "@emailjs/browser";

// Leaflet needs to be dynamically imported with ssr: false
const LeafletMap = dynamic(() => import("@/components/leaflet-map"), {
  ssr: false,
});

export default function ContactSection() {
  const [formState, setFormState] = useState({
    loading: false,
    success: false,
    error: false,
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormState({ loading: true, success: false, error: false });

    // Honeypot check: if the hidden fax_number field is filled, it's a bot
    const formData = new FormData(e.target);
    const honeypot = formData.get("fax_number");

    if (honeypot) {
      // It's a bot! Pretend success to fool them but don't send anything
      // console.log("Spam bot detected and blocked 🐝");
      setTimeout(() => {
        setFormState({ loading: false, success: true, error: false });
        e.target.reset();
        setTimeout(() => {
          setFormState({ loading: false, success: false, error: false });
        }, 5000);
      }, 1000);
      return;
    }

    try {
      const result = await emailjs.sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
        e.target,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY,
      );

      if (result.text === "OK") {
        setFormState({ loading: false, success: true, error: false });
        e.target.reset();
        // Reset success message after 5 seconds
        setTimeout(() => {
          setFormState({ loading: false, success: false, error: false });
        }, 5000);
      }
    } catch (error) {
      console.error("EmailJS Error:", error);
      setFormState({ loading: false, success: false, error: true });
      // Reset error message after 5 seconds
      setTimeout(() => {
        setFormState({ loading: false, success: false, error: false });
      }, 5000);
    }
  };
  const contactInfo = [
    {
      icon: faPhone,
      label: "Téléphone",
      value: "04 78 72 42 80",
      href: "tel:0478724280",
    },
    {
      icon: faEnvelope,
      label: "Email",
      value: "anthony.salles@protonmail.com",
      href: "mailto:anthony.salles@protonmail.com",
    },
    {
      icon: faMapMarkerAlt,
      label: "Cabinet",
      value: "46 Rue de la Madeleine, 69007 Lyon",
      href: "https://www.google.com/maps/place/Anthony+SALLES/@45.7477683,4.8448419,17z/data=!3m1!5s0x47f4ea41dd2764ff:0x4218a02dbae9f3ee!4m6!3m5!1s0x47f4eb1834469583:0xbfdb9316deb2b1be!8m2!3d45.7477646!4d4.8474168!16s%2Fg%2F11s974tf19?entry=ttu&g_ep=EgoyMDI2MDEyMC4wIKXMDSoKLDEwMDc5MjA2OUgBUAM%3D",
    },
  ];

  return (
    <section className="py-24 md:py-32 max-w-6xl mx-auto px-6">
      <SectionTitle
        title="Contact & Rendez-vous"
        description="Une question ou une demande spécifique ? N'hésitez pas à me contacter directement."
      />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mt-16">
        <motion.div
          className="space-y-10"
          initial={{ x: -50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-slate-900 border-l-4 border-blue-500 pl-4">
              Informations Pratiques
            </h3>
            <div className="grid gap-6">
              {contactInfo.map((info, idx) => (
                <motion.a
                  key={idx}
                  href={info.href}
                  target={info.icon === faMapMarkerAlt ? "_blank" : undefined}
                  rel={
                    info.icon === faMapMarkerAlt
                      ? "noopener noreferrer"
                      : undefined
                  }
                  className="flex items-center gap-4 p-5 glass border-white/50 hover:bg-white/60 transition-all group"
                  initial={{ opacity: 0, y: 0 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                >
                  <div className="size-12 rounded-2xl bg-blue-50 flex items-center justify-center text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors shrink-0">
                    <FontAwesomeIcon icon={info.icon} className="size-5" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
                      {info.label}
                    </p>
                    <p className="text-slate-900 font-medium">{info.value}</p>
                  </div>
                </motion.a>
              ))}
            </div>
          </div>

          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-slate-900 border-l-4 border-blue-500 pl-4">
              Plan d'Accès
            </h3>
            <motion.div
              className="w-full h-80 rounded-3xl overflow-hidden shadow-xl border border-white/40 ring-1 ring-slate-200/50"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
            >
              <LeafletMap />
            </motion.div>
          </div>
        </motion.div>

        <motion.div
          className="glass p-8 md:p-10 border-white/60 shadow-2xl relative"
          initial={{ x: 50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="absolute -top-10 -right-10 w-40 h-40 bg-blue-100 rounded-full blur-3xl opacity-50 -z-10" />

          <h3 className="text-2xl font-bold text-slate-900 mb-8">
            Envoyez un message
          </h3>

          <form className="space-y-6" onSubmit={handleSubmit}>
            {/* Honeypot field - invisible to users but visible to bots */}
            <div className="hidden" style={{ display: "none" }}>
              <label htmlFor="fax_number">Fax Number</label>
              <input
                type="text"
                id="fax_number"
                name="fax_number"
                tabIndex="-1"
                autoComplete="off"
              />
            </div>

            <div className="space-y-2">
              <label
                htmlFor="name"
                className="text-sm font-semibold text-slate-700 ml-1"
              >
                Nom <span className="text-blue-500">*</span>
              </label>
              <input
                type="text"
                id="name"
                name="from_name"
                required
                disabled={formState.loading}
                className="w-full px-5 py-4 rounded-2xl bg-white/50 border border-slate-200 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 transition-all outline-none placeholder:text-slate-400 disabled:opacity-50 disabled:cursor-not-allowed"
                placeholder="Votre nom complet"
              />
            </div>

            <div className="space-y-2">
              <label
                htmlFor="email"
                className="text-sm font-semibold text-slate-700 ml-1"
              >
                Email <span className="text-blue-500">*</span>
              </label>
              <input
                type="email"
                id="email"
                name="from_email"
                required
                disabled={formState.loading}
                className="w-full px-5 py-4 rounded-2xl bg-white/50 border border-slate-200 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 transition-all outline-none placeholder:text-slate-400 disabled:opacity-50 disabled:cursor-not-allowed"
                placeholder="votre-email@exemple.com"
              />
            </div>

            <div className="space-y-2">
              <label
                htmlFor="message"
                className="text-sm font-semibold text-slate-700 ml-1"
              >
                Message <span className="text-blue-500">*</span>
              </label>
              <textarea
                id="message"
                name="message"
                rows="5"
                required
                disabled={formState.loading}
                className="w-full px-5 py-4 rounded-2xl bg-white/50 border border-slate-200 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 transition-all outline-none placeholder:text-slate-400 resize-none disabled:opacity-50 disabled:cursor-not-allowed"
                placeholder="Comment puis-je vous aider ?"
              ></textarea>
            </div>

            {/* Success Message */}
            {formState.success && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex items-center gap-3 p-4 bg-green-50 border border-green-200 rounded-2xl text-green-700"
              >
                <FontAwesomeIcon
                  icon={faCheckCircle}
                  className="size-5 shrink-0"
                />
                <p className="text-sm font-medium">
                  Message envoyé avec succès ! Je vous répondrai dans les plus
                  brefs délais.
                </p>
              </motion.div>
            )}

            {/* Error Message */}
            {formState.error && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex items-center gap-3 p-4 bg-red-50 border border-red-200 rounded-2xl text-red-700"
              >
                <FontAwesomeIcon
                  icon={faExclamationCircle}
                  className="size-5 shrink-0"
                />
                <p className="text-sm font-medium">
                  Une erreur est survenue. Veuillez réessayer ou me contacter
                  directement par téléphone ou email.
                </p>
              </motion.div>
            )}

            <button
              type="submit"
              disabled={formState.loading}
              className="btn w-full bg-blue-600 hover:bg-blue-700 shadow-blue-200 text-lg py-4 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-blue-600"
            >
              {formState.loading ? "Envoi en cours..." : "Envoyer le message"}
            </button>
            <p className="text-center text-xs text-slate-400 font-medium">
              Nous traitons vos données avec le plus grand soin.
            </p>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
