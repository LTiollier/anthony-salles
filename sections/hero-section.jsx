import { motion } from "framer-motion";
import Link from "next/link";

export default function HeroSection() {

    return (
        <>

            <motion.section className="flex flex-col items-center">
                <motion.h1 className="text-center text-4xl/13 md:text-6xl/19 mt-4 font-semibold tracking-tight max-w-3xl text-gray-900"
                    initial={{ y: 50, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ type: "spring", stiffness: 240, damping: 70, mass: 1 }}
                >
                    Votre expert en kinésithérapie, médecine chinoise et thérapie viscérale.
                </motion.h1>
                <motion.p className="text-center text-gray-700 text-base/7 max-w-md mt-6"
                    initial={{ y: 50, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2, type: "spring", stiffness: 320, damping: 70, mass: 1 }}
                >
                    Je vous accompagne via une approche holistique pour votre bien-être, combinant des techniques modernes et ancestrales pour une prise en charge personnalisée.
                </motion.p>

                <motion.div className="flex flex-col md:flex-row max-md:w-full items-center gap-4 md:gap-3 mt-6"
                    initial={{ y: 50, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ type: "spring", stiffness: 320, damping: 70, mass: 1 }}
                >
                    <a href='https://www.doctolib.fr/masseur-kinesitherapeute/lyon/anthony-salles-lyon' target='_blank' rel='noopener noreferrer' className="btn max-md:w-full bg-blue-500">
                        Prendre rendez-vous
                    </a>
                    <Link href='/a-propos' className="btn max-md:w-full glass flex items-center justify-center gap-2 py-3 text-gray-900">
                        Découvrir mes services
                    </Link>
                </motion.div>
            </motion.section>
        </>
    );
}