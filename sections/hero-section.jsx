import { motion } from "framer-motion";
import Link from "next/link";

export default function HeroSection() {

    return (
        <>
            <motion.div className="fixed inset-0 overflow-hidden -z-20 pointer-events-none"
                initial={{ opacity: 0.4 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
            >
                <div className="absolute rounded-full top-80 left-2/5 -translate-x-1/2 size-130 bg-blue-100 blur-[100px]" />
                <div className="absolute rounded-full top-80 right-0 -translate-x-1/2 size-130 bg-emerald-100 blur-[100px]" />
                <div className="absolute rounded-full top-0 left-1/2 -translate-x-1/2 size-130 bg-purple-100 blur-[100px]" />
            </motion.div>
            <motion.section className="flex flex-col items-center">
                <motion.h1 className="text-center text-4xl/13 md:text-6xl/19 mt-4 font-semibold tracking-tight max-w-3xl text-gray-900"
                    initial={{ y: 50, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ type: "spring", stiffness: 240, damping: 70, mass: 1 }}
                >
                    Anthony Salles : Votre expert en kinésithérapie, médecine chinoise et thérapie viscérale.
                </motion.h1>
                <motion.p className="text-center text-gray-700 text-base/7 max-w-md mt-6"
                    initial={{ y: 50, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2, type: "spring", stiffness: 320, damping: 70, mass: 1 }}
                >
                    Découvrez une approche holistique pour votre bien-être, combinant des techniques modernes et ancestrales pour une prise en charge personnalisée de votre santé.
                </motion.p>

                <motion.div className="flex flex-col md:flex-row max-md:w-full items-center gap-4 md:gap-3 mt-6"
                    initial={{ y: 50, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ type: "spring", stiffness: 320, damping: 70, mass: 1 }}
                >
                    <Link href='/contact' className="btn max-md:w-full bg-blue-500">
                        Prendre rendez-vous
                    </Link>
                    <Link href='/a-propos' className="btn max-md:w-full glass flex items-center justify-center gap-2 py-3">
                        Découvrir mes services
                    </Link>
                </motion.div>
            </motion.section>
        </>
    );
}