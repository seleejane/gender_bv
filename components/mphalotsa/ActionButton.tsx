"use client";

import React from "react";
import { motion } from "framer-motion";
import PulseRing from "./PulseRing";

interface ActionButtonProps {
  color?: string;
  label: string;
  icon: React.ReactNode;
  ariaLabel: string;
  pulse?: boolean;
}

export default function ActionButton({
  color = "bg-blue-500",
  label,
  icon,
  ariaLabel,
  pulse,
}: ActionButtonProps) {
  return (
    <motion.button
      initial={{ scale: 1 }}
      whileTap={{ scale: 0.96 }}
      whileHover={{ scale: 1.02 }}
      transition={{ type: "spring", stiffness: 300, damping: 18 }}
      className={`rounded-3xl shadow-xl w-full p-4 h-36 flex flex-col items-center justify-center text-white ${color} relative overflow-visible`}
      aria-label={ariaLabel}
    >
      {pulse && <PulseRing />}
      <div className="w-14 h-14 mb-2">{icon}</div>
      <span className="text-lg font-bold whitespace-pre-line leading-tight drop-shadow">
        {label}
      </span>
    </motion.button>
  );
}
