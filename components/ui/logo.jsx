"use client";

import { motion } from "framer-motion";

export default function Logo() {
  const d =
    "M20.093 21.148C20.093 21.148 10.173 26.524 23.727 32.542C37.282 38.56 60.832 31.281 65.886 28.269C70.941 25.258 74.829 19.81 61.525 19.012C48.221 18.214 43.457 29.489 41.899 45.36C41.121 53.296 40.379 62.344 39.862 68.208C39.345 74.072 38.823 78.972 38.823 78.972";

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 87 106"
      className="h-10 w-auto md:h-12"
      fill="none"
    >
      {/* Ghost / Trace Path */}
      <path
        d={d}
        stroke="rgba(255,255,255,0.12)"
        strokeWidth="3"
        strokeLinecap="round"
      />

      {/* Animated Writing */}
      <motion.path
        d={d}
        stroke="white"
        strokeWidth="3"
        strokeLinecap="round"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: [0, 1, 0] }}
        transition={{
            duration: 7,
            ease: "linear",
            repeat: Infinity,
            repeatDelay: 0.3,
            times: [0, 0.45, 1], // 45% drawing, 55% erasing (slower return)
        }}
        />
    </svg>
  );
}