'use client';
import { motion } from "framer-motion";
import SectionTitle from "@/components/section-title";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import dynamic from 'next/dynamic';

// Leaflet needs to be dynamically imported with ssr: false
const LeafletMap = dynamic(() => import('@/components/leaflet-map'), { ssr: false });

export default function ContactSection() {
    return (
        <section className="mt-32 max-w-5xl mx-auto px-4">
            <SectionTitle
                title="Contactez-moi"
                description="N'hésitez pas à me contacter pour toute question ou pour prendre rendez-vous."
            />
            <motion.div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-10">
                <motion.div
                    className="space-y-8"
                    initial={{ x: -100, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ type: "spring", stiffness: 100, damping: 20 }}
                >
                    <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                        Informations de contact
                    </h3>
                    <div className="flex items-center space-x-4">
                        <FontAwesomeIcon icon={faPhone} className="size-6 text-blue-500" />
                        <p className="text-gray-700">04 78 72 42 80</p>
                    </div>
                    <div className="flex items-center space-x-4">
                        <FontAwesomeIcon icon={faEnvelope} className="size-6 text-blue-500" />
                        <p className="text-gray-700">contact@anthonysalles.com</p>
                    </div>
                    <div className="flex items-center space-x-4">
                        <FontAwesomeIcon icon={faMapMarkerAlt} className="size-6 text-blue-500" />
                        <p className="text-gray-700">46 Rue de la Madeleine, 69007 Lyon</p>
                    </div>

                    <div className="w-full h-80 mt-8 shadow-lg rounded-lg overflow-hidden relative z-0">
                        <LeafletMap />
                    </div>
                </motion.div>
                <motion.div
                    className="space-y-6"
                    initial={{ x: 100, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ type: "spring", stiffness: 100, damping: 20 }}
                >
                    <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                        Envoyez-moi un message
                    </h3>
                    <form className="space-y-4">
                        <div>
                            <label htmlFor="name" className="block text-sm font-medium text-gray-700">Nom</label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm p-2"
                                placeholder="Votre nom"
                            />
                        </div>
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm p-2"
                                placeholder="Votre adresse email"
                            />
                        </div>
                        <div>
                            <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
                            <textarea
                                id="message"
                                name="message"
                                rows="4"
                                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm p-2"
                                placeholder="Votre message"
                            ></textarea>
                        </div>
                        <button
                            type="submit"
                            className="btn bg-blue-500 max-md:w-full"
                        >
                            Envoyer le message
                        </button>
                    </form>
                </motion.div>
            </motion.div>
        </section>
    );
}
