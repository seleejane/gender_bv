"use client";

import { motion } from "framer-motion";

export default function PulseRing() {
  return (
    <motion.div
      initial={{ opacity: 0.6, scale: 0.9 }}
      animate={{ opacity: [0.6, 0.2, 0.6], scale: [0.9, 1.05, 0.9] }}
      transition={{ duration: 1.8, repeat: Infinity }}
      className="absolute inset-0 m-1 rounded-3xl pointer-events-none"
      style={{ boxShadow: "0 10px 30px rgba(0,0,0,0.08)" }}
    />
  );
}
