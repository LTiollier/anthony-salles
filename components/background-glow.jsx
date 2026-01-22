'use client';

import { motion, useMotionValue, useSpring } from 'framer-motion';
import { useEffect } from 'react';

/**
 * BackgroundGlow Component
 * Features subtle, interactive blurred blobs that follow the mouse or float gently.
 */
export default function BackgroundGlow() {
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    // Smooth transition for mouse movement
    const springX = useSpring(mouseX, { stiffness: 50, damping: 20 });
    const springY = useSpring(mouseY, { stiffness: 50, damping: 20 });

    useEffect(() => {
        const handleMouseMove = (e) => {
            mouseX.set(e.clientX);
            mouseY.set(e.clientY);
        };
        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, [mouseX, mouseY]);

    return (
        <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
            {/* Main Interactive Glow */}
            <motion.div
                className="absolute size-[500px] rounded-full bg-blue-400/10 blur-[120px]"
                style={{
                    x: springX,
                    y: springY,
                    left: '-250px',
                    top: '-250px',
                }}
            />

            {/* Floating Blob 1 - Warm */}
            <motion.div
                className="absolute top-1/4 -left-20 size-96 rounded-full bg-orange-200/20 blur-[100px]"
                animate={{
                    x: [0, 100, 0],
                    y: [0, 50, 0],
                }}
                transition={{
                    duration: 20,
                    repeat: Infinity,
                    ease: "easeInOut"
                }}
            />

            {/* Floating Blob 2 - Soft Blue */}
            <motion.div
                className="absolute bottom-1/4 -right-20 size-[500px] rounded-full bg-blue-100/30 blur-[120px]"
                animate={{
                    x: [0, -150, 0],
                    y: [0, -100, 0],
                }}
                transition={{
                    duration: 25,
                    repeat: Infinity,
                    ease: "easeInOut"
                }}
            />
        </div>
    );
}
