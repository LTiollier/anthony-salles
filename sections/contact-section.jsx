import { motion } from "framer-motion";
import SectionTitle from "@/components/section-title";
import { PhoneIcon, MailIcon, MapPinIcon } from "lucide-react"; // Example icons for Contact

export default function ContactSection() {
    return (
        <section className="mt-32 max-w-5xl mx-auto px-4">
            <SectionTitle
                title="Contactez Anthony Salles"
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
                        <PhoneIcon className="size-6 text-blue-500" />
                        <p className="text-gray-700">+33 6 12 34 56 78</p>
                    </div>
                    <div className="flex items-center space-x-4">
                        <MailIcon className="size-6 text-blue-500" />
                        <p className="text-gray-700">contact@anthonysalles.com</p>
                    </div>
                    <div className="flex items-center space-x-4">
                        <MapPinIcon className="size-6 text-blue-500" />
                        <p className="text-gray-700">123 Rue de la Santé, 75001 Paris, France</p>
                    </div>
                    {/* Placeholder for a map */}
                    <div className="w-full h-64 bg-gray-200 rounded-lg flex items-center justify-center text-gray-500 mt-8">
                        Carte
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
