'use client';
import { motion } from "framer-motion";
import SectionTitle from "@/components/section-title";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faYinYang, faDroplet, faLeaf } from '@fortawesome/free-solid-svg-icons';
import EnergyFlow from "@/components/energy-flow";

export default function ChineseMedicineSection() {
    const principles = [
        {
            icon: faYinYang,
            title: "Équilibre du Yin et du Yang",
            description: "La recherche de l'harmonie entre les forces opposées pour une santé optimale.",
        },
        {
            icon: faDroplet,
            title: "Circulation du Qi",
            description: "L'énergie vitale qui parcourt le corps, essentielle à son bon fonctionnement.",
        },
        {
            icon: faLeaf,
            title: "Les Cinq Éléments",
            description: "Bois, Feu, Terre, Métal, Eau : une interaction constante influençant notre physiologie.",
        },
    ];

    return (
        <section className="mt-32 max-w-5xl mx-auto px-4">
            <SectionTitle
                title="La Médecine Chinoise"
                description="Découvrez les fondements et les bienfaits de cette approche thérapeutique millénaire."
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
                        Une approche holistique pour votre santé
                    </h3>
                    <p className="text-gray-700 leading-relaxed mb-4">
                        La Médecine Traditionnelle Chinoise (MTC) est un système médical complet, vieux de plusieurs millénaires, qui vise à rétablir l'équilibre énergétique du corps. Elle considère l'être humain dans sa globalité, en prenant en compte les aspects physiques, émotionnels et environnementaux.
                    </p>
                    <p className="text-gray-700 leading-relaxed mb-4">
                        Mes traitements s'appuient sur des techniques telles que l'acupuncture, la moxibustion, la diététique chinoise et la pharmacopée, afin de stimuler les capacités d'auto-guérison de votre organisme.
                    </p>
                    <p className="text-gray-700 leading-relaxed">
                        Que ce soit pour soulager des douleurs chroniques, gérer le stress, améliorer votre digestion ou renforcer votre immunité, la MTC offre des solutions personnalisées.
                    </p>
                </motion.div>
                <motion.div
                    className="md:w-1/2 flex justify-center"
                    initial={{ x: 100, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ type: "spring", stiffness: 100, damping: 20 }}
                >
                    <EnergyFlow />
                </motion.div>
            </motion.div>

            <h3 className="text-2xl font-semibold text-gray-900 mb-8 mt-16 text-center">
                Principes fondamentaux
            </h3>
            <div className="flex flex-wrap items-stretch justify-center gap-6 mt-10 px-6">
                {principles.map((principle, index) => (
                    <motion.div
                        key={index}
                        className="p-6 rounded-xl space-y-4 glass max-w-80 w-full flex flex-col items-center text-center"
                        initial={{ y: 150, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{
                            delay: index * 0.15,
                            type: "spring",
                            stiffness: 320,
                            damping: 70,
                            mass: 1
                        }}
                    >
                        <FontAwesomeIcon icon={principle.icon} className="size-8.5 text-blue-500" />
                        <h4 className="text-lg font-medium text-gray-900">
                            {principle.title}
                        </h4>
                        <p className="text-gray-700 pb-2">
                            {principle.description}
                        </p>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
