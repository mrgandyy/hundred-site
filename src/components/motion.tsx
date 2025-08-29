"use client";
import { motion, Variants } from "framer-motion";

export { motion };

export const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
};

export const stagger: Variants = {
  show: { transition: { staggerChildren: 0.08, delayChildren: 0.05 } },
};

export const pop: Variants = {
  hidden: { opacity: 0, scale: 0.96 },
  show:   { opacity: 1, scale: 1, transition: { duration: 0.4 } },
};
