'use client';

import { motion } from "framer-motion";

export default function BackgroundGradient() {
    return (
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
    );
}
