import { motion } from "motion/react";

export default function Item({children}: {children: React.ReactNode}) {

    const delay = Math.random() * 2;

    return <motion.span 
        className="absolute" 
        animate={Math.random() > 0.9 ? { 
                x: [0, -4, 0, 4, 0], 
            }: Math.random() > 0.8 ? {
                y: [0, 4, 0, -4, 0], 
            }: {}} 
        transition={{ delay: delay, repeat: Infinity, duration: 2, ease: "linear" }}
        >
            {children}
        </motion.span>
}