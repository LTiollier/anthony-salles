'use client';
import { motion } from "framer-motion";
import SectionTitle from "@/components/section-title";
import Image from "next/image";

export default function AboutSection() {
    return (
        <section className="mt-32 max-w-5xl mx-auto px-4">
            <SectionTitle
                title="Qui suis-je ?"
                description="Découvrez mon parcours professionnel et ma philosophie de traitement."
            />
            <motion.div className="flex flex-col md:flex-row items-center gap-12 mt-10">
                <motion.div
                    className="md:w-1/2"
                    initial={{ x: -100, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ type: "spring", stiffness: 100, damping: 20 }}
                >
                    <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                        Mon parcours et ma passion
                    </h3>
                    <p className="text-gray-700 leading-relaxed mb-4">
                        Masseur-kinésithérapeute diplômé d'État, je suis passionné par la santé et le mouvement. J'exerce dans mon cabinet situé à Lyon 7e, où je propose une approche basée sur l'écoute active et des techniques éprouvées pour garantir des résultats durables.
                    </p>
                    <p className="text-gray-700 leading-relaxed mb-6">
                        J'adapte mes traitements sur-mesure pour chaque patient, qu'il s'agisse de rééducation post-opératoire, de kinésithérapie du sport ou de soins spécifiques.
                    </p>

                    <h4 className="text-lg font-medium text-gray-900 mb-3">Compétences clés</h4>
                    <ul className="list-disc list-outside ml-5 text-gray-700 space-y-1 mb-6">
                        <li><strong>Rééducation posturale</strong> : Correction et amélioration de la posture.</li>
                        <li><strong>Pathologies musculo-squelettiques</strong> : Prise en charge des troubles des muscles, os et articulations.</li>
                        <li><strong>Mobilisations articulaires</strong> : Techniques ciblées pour restaurer la fonction articulaire et réduire la douleur.</li>
                        <li><strong>Anatomie humaine</strong> : Expertise approfondie pour des traitements précis.</li>
                    </ul>

                    <h4 className="text-lg font-medium text-gray-900 mb-3">Formations</h4>
                    <ul className="space-y-2 text-gray-700">
                        <li><span className="font-semibold text-blue-600">2025</span> - Thérapie viscérale niveau 1 et 2 (Kiné Formation)</li>
                        <li><span className="font-semibold text-blue-600">2024</span> - Médecine traditionnelle chinoise (FLETC)</li>
                        <li><span className="font-semibold text-blue-600">2023</span> - Chaîne musculaire GDS (CFPC)</li>
                        <li><span className="font-semibold text-blue-600">2021</span> - Diplôme d'État de Masseur-Kinésithérapeute (IFMKDV)</li>
                    </ul>
                </motion.div>
                <motion.div
                    className="md:w-1/2 flex justify-center"
                    initial={{ x: 100, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ type: "spring", stiffness: 100, damping: 20 }}
                >
                    <motion.div
                        className="relative"
                        animate={{
                            y: [0, -15, 0],
                            rotate: [0, 2, 0]
                        }}
                        transition={{
                            duration: 6,
                            repeat: Infinity,
                            ease: "easeInOut"
                        }}
                        whileHover={{ scale: 1.05, rotate: -2 }}
                    >
                        <Image
                            src="/images/about.png"
                            alt="Mon cabinet"
                            width={400}
                            height={400}
                            className="size-80 object-cover"
                            style={{
                                clipPath: "path('M 150,20 C 220,20 300,80 300,150 C 300,220 220,300 150,300 C 80,300 20,220 20,150 C 20,80 80,20 150,20 Z')"
                            }}
                        />
                    </motion.div>
                </motion.div>
            </motion.div>
        </section>
    );
}
