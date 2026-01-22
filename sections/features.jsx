import SectionTitle from "@/components/section-title";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUniversalAccess, faYinYang, faHandshake } from '@fortawesome/free-solid-svg-icons';
import { motion } from "framer-motion";
import { useRef } from "react";

export default function Features() {

    const refs = useRef([]);

    const featuresData = [
        {
            icon: faUniversalAccess, // Changed icon
            title: "Kinésithérapie", // Changed title
            description: "Rééducation fonctionnelle, gestion de la douleur, et accompagnement post-opératoire pour retrouver votre mobilité.", // Changed description
        },
        {
            icon: faYinYang, // Changed icon
            title: "Médecine Chinoise", // Changed title
            description: "Approche ancestrale pour l'équilibre du corps et de l'esprit, incluant acupuncture et phytothérapie.", // Changed description
        },
        {
            icon: faHandshake, // Changed icon
            title: "Thérapie Viscérale", // Changed title
            description: "Soulagement des tensions des organes internes pour améliorer la fonction et réduire les douleurs chroniques.", // Changed description
        }
    ];

    return (
        <section className="mt-32">
            <SectionTitle
                title="Mes Services" // Changed title
                description="Découvrez l'éventail de mes services dédiés à votre bien-être et à votre santé." // Changed description
            />

            <div className="flex flex-wrap items-center justify-center gap-6 mt-10 px-6">
                {featuresData.map((feature, index) => (
                    <motion.div
                        key={index}
                        ref={(el) => (refs.current[index] = el)}
                        className="hover:-translate-y-0.5 p-6 rounded-xl space-y-4 glass max-w-80 w-full"
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
                        onAnimationComplete={() => {
                            const card = refs.current[index];
                            if (card) {
                                card.classList.add("transition", "duration-300");
                            }
                        }}
                    >
                        <FontAwesomeIcon icon={feature.icon} className="size-8.5" />
                        <h3 className="text-base font-medium text-gray-900">
                            {feature.title}
                        </h3>
                        <p className="text-gray-700 line-clamp-2 pb-2">
                            {feature.description}
                        </p>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
