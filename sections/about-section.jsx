import { motion } from "framer-motion";
import SectionTitle from "@/components/section-title";

export default function AboutSection() {
    return (
        <section className="mt-32 max-w-5xl mx-auto px-4">
            <SectionTitle
                title="À propos d'Anthony Salles"
                description="Découvrez le parcours professionnel et la philosophie de traitement d'Anthony Salles, kinésithérapeute passionné."
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
                        Kinésithérapeute diplômé, j'ai toujours été fasciné par la complexité du corps humain et sa capacité à se régénérer. Mon approche combine les techniques de kinésithérapie traditionnelles avec des méthodes complémentaires pour une prise en charge globale.
                    </p>
                    <p className="text-gray-700 leading-relaxed">
                        Fort de plusieurs années d'expérience, je me suis spécialisé en médecine chinoise et en thérapie viscérale, des domaines qui m'ont permis d'élargir ma compréhension des liens entre le corps et l'esprit.
                    </p>
                </motion.div>
                <motion.div
                    className="md:w-1/2 flex justify-center"
                    initial={{ x: 100, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ type: "spring", stiffness: 100, damping: 20 }}
                >
                    {/* Placeholder for an image of Anthony Salles */}
                    <div className="size-80 bg-gray-200 rounded-full flex items-center justify-center text-gray-500">
                        Image d'Anthony Salles
                    </div>
                </motion.div>
            </motion.div>
        </section>
    );
}
