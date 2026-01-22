import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { motion } from "framer-motion";
import Link from "next/link"; // Import Link component

export default function CallToAction() {
    return (
        <motion.div className="flex flex-col max-w-5xl mt-40 px-4 mx-auto items-center justify-center text-center py-16 rounded-xl glass"
            initial={{ y: 150, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 320, damping: 70, mass: 1 }}
        >
            <motion.h2 className="text-2xl md:text-4xl font-medium mt-2 text-gray-900"
                initial={{ y: 80, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ type: "spring", stiffness: 280, damping: 70, mass: 1 }}
            >
                Prêt à prendre soin de votre santé ?
            </motion.h2>
            <motion.p className="mt-4 text-sm/7 max-w-md text-gray-700"
                initial={{ y: 80, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ type: "spring", stiffness: 200, damping: 70, mass: 1 }}
            >
                Contactez Anthony Salles pour une consultation personnalisée et commencez votre chemin vers un mieux-être durable.
            </motion.p>
            <motion.div
                initial={{ y: 80, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ type: "spring", stiffness: 280, damping: 70, mass: 1 }}
            >
                <Link href="/contact" className="btn bg-blue-500 transition-none flex items-center gap-2 mt-8">
                    Prendre rendez-vous
                    <FontAwesomeIcon icon={faArrowRight} className="size-4" />
                </Link>
            </motion.div>
        </motion.div>
    );
};