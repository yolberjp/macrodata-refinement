import { motion } from "motion/react";
import { useMemo, useState } from "react";

const generateRandomSequence = (length: number, factor: number) => {
    return Array.from({ length }, () => Math.floor(Math.random() * 11 * factor) - 5 * factor);
  };

const generateRandomScaleSequence = (length: number) => {
    return Array.from({ length }, () => Math.random() * 0.5 + 1);
  };

export default function Number() {
    const [animate, _setAnimate] = useState(Math.random() > 0.8);
    const number = useMemo(() => Math.floor(Math.random() * 10), []);

    const randomDuration = Math.random() * 2 + 2;
    const randomXValues = generateRandomSequence(2, randomDuration);
    const randomAxis = Math.random() > 0.5 ? "x" : "y";
    const randomScaleValues = generateRandomScaleSequence(5);

    const animationToApply = Math.random() > 0.5 ? randomAxis : "scale";

    const animation = {
        x: [...randomXValues, randomXValues[0]],
        y: [...randomXValues, randomXValues[0]],
        scale: randomScaleValues,
    }

    return <div className="w-[50px] h-[50px] flex items-center justify-center text-xl text-white relative">
    <motion.span
      className="absolute"
      animate={animate ? {[animationToApply]: animation[animationToApply]} : {}}
      transition={{ repeat: Infinity, duration: randomDuration, ease: "linear" }}
    >
      {number}
    </motion.span>
  </div>
}