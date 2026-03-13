"use client";

import { motion } from "framer-motion";
import { ANIMATION } from "@/lib/constants";

interface FadeInProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  direction?: "up" | "down" | "left" | "right" | "none";
}

const directionMap = {
  up: { y: 30 },
  down: { y: -30 },
  left: { x: 30 },
  right: { x: -30 },
  none: {},
};

export function FadeIn({ children, className, delay = 0, direction = "up" }: FadeInProps) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, ...directionMap[direction] }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: ANIMATION.duration, delay, ease: ANIMATION.ease }}
    >
      {children}
    </motion.div>
  );
}
