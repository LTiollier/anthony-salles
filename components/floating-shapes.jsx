"use client";

import { motion } from "framer-motion";

const Shape = ({ delay, color, size, top, left, duration = 20 }) => (
    <motion.div
        className={`absolute rounded-full blur-3xl opacity-20 pointer-events-none ${color}`}
        style={{
            width: size,
            height: size,
            top,
            left,
        }}
        animate={{
            x: [0, 50, -30, 0],
            y: [0, -40, 60, 0],
            scale: [1, 1.1, 0.9, 1],
        }}
        transition={{
            duration,
            repeat: Infinity,
            delay,
            ease: "easeInOut",
        }}
    />
);

export default function FloatingShapes() {
    return (
        <div className="fixed inset-0 overflow-hidden pointer-events-none -z-10">
            <Shape
                color="bg-blue-200"
                size="40vw"
                top="-10%"
                left="-10%"
                delay={0}
                duration={25}
            />
            <Shape
                color="bg-green-100"
                size="35vw"
                top="40%"
                left="60%"
                delay={2}
                duration={22}
            />
            <Shape
                color="bg-stone-200"
                size="30vw"
                top="70%"
                left="10%"
                delay={4}
                duration={28}
            />
            <Shape
                color="bg-blue-100"
                size="25vw"
                top="10%"
                left="70%"
                delay={1}
                duration={30}
            />
        </div>
    );
}
