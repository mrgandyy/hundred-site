"use client";
import { useScroll, motion } from "framer-motion";

export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  return (
    <motion.div
      style={{ scaleX: scrollYProgress, transformOrigin: "0% 50%" }}
      className="fixed left-0 top-0 h-1 w-full bg-accent-500/80 z-[999]"
    />
  );
}
