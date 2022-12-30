"use client";
import { ReactNode } from "react";
import { motion } from "framer-motion";

type AnimatedMountProps = {
  delay?: number;
  duration?: number;
  enabled?: boolean;
  children: ReactNode | ReactNode[];
};

export default function AnimatedMount({
  delay = 0,
  duration = 0.4,
  enabled = true,
  children,
}: AnimatedMountProps) {
  return (
    <motion.div
      animate={enabled ? { opacity: 1, translateY: 0 } : undefined}
      initial={enabled ? { opacity: 0.5, translateY: 30 } : undefined}
      transition={{
        delay,
        duration,
      }}
    >
      {children}
    </motion.div>
  );
}
