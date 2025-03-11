import { motion } from "motion/react";
import { useEffect, useState } from "react";

const generateShakeSequence = (steps = 50, maxRange = 3, factor = 1) => {
    return Array.from({ length: steps }, (_, i) => {
      const progress = i / steps;
      const intensity = Math.sin(progress * Math.PI);
      return {
        x: (Math.random() * 2 - 1) * maxRange * intensity,
        y: (Math.random() * 2 - 1) * maxRange * intensity,
        scale: 1 + 0.4 * factor * intensity
      };
    });
  };

export default function Animated({children, center}: {children: React.ReactNode, center?: boolean}) {

    const [shakeKeyframes, setShakeKeyframes] = useState<{x: number, y: number, scale: number}[]>([]);

    useEffect(() => {
        setShakeKeyframes(generateShakeSequence(100, 3, center ? 2 : 1));
    }, []);


    return <motion.span 
        className="absolute" 
        animate={{ 
            x: shakeKeyframes.map((s) => s.x), 
            y: shakeKeyframes.map((s) => s.y), 
            scale: shakeKeyframes.map((s) => s.scale)}} 
        transition={{ duration: 10, ease: "easeInOut" }}
        >
            {children}
        </motion.span>
}