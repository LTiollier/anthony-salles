'use client';

import { motion } from 'framer-motion';

/**
 * Example of a staggered entrance animation for a list of items.
 */
export default function StaggeredListExample({ items = [] }) {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.2
            }
        }
    };

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                type: 'spring',
                stiffness: 100,
                damping: 20
            }
        }
    };

    return (
        <motion.ul
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
            {items.map((item, index) => (
                <motion.li
                    key={index}
                    variants={itemVariants}
                    className="p-6 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl"
                >
                    {item.content}
                </motion.li>
            ))}
        </motion.ul>
    );
}
