"use client";

import { motion } from "framer-motion";

export default function MicrophoneIcon() {
  return (
    <svg viewBox="0 0 24 24" className="w-full h-full">
      <path
        d="M12 14a3 3 0 0 0 3-3V6a3 3 0 0 0-6 0v5a3 3 0 0 0 3 3z"
        fill="white"
      />
      <path
        d="M19 11a1 1 0 1 0-2 0 5 5 0 0 1-10 0 1 1 0 1 0-2 0 7 7 0 0 0 6 6.92V21a1 1 0 1 0 2 0v-3.08A7 7 0 0 0 19 11z"
        fill="white"
        opacity="0.95"
      />
    </svg>
  );
}
