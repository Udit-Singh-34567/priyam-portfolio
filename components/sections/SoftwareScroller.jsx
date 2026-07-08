"use client";

import { motion } from "framer-motion";

const topRow = [
  "AFTER EFFECTS",
  "DAVINCI",
  "PREMIERE PRO",
  "PHOTOSHOP",
  "ILLUSTRATOR",
  "BLENDER",
];

const bottomRow = [
  "FIGMA",
  "CAPCUT",
  "LIGHTROOM",
  "AUDITION",
  "CANVA",
  "CINEMA 4D",
];

function InfiniteRow({ items, reverse = false }) {
  const repeated = [...items, ...items];

  return (
    <div className="relative overflow-hidden py-5">
      {/* Edge Fade */}
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-28 bg-gradient-to-r from-[#050b2f] to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-28 bg-gradient-to-l from-[#050b2f] to-transparent" />

      <motion.div
        className="flex w-max items-center gap-20 whitespace-nowrap"
        animate={{
          x: reverse ? ["-50%", "0%"] : ["0%", "-50%"],
        }}
        transition={{
          duration: 60, // slower = more cinematic
          repeat: Infinity,
          ease: "linear",
        }}
      >
        {repeated.map((item, index) => (
          <div
            key={index}
            className="flex items-center gap-20"
          >
            <h2
              className="
                text-[42px]
                sm:text-[62px]
                md:text-[90px]
                lg:text-[110px]
                font-black
                uppercase
                tracking-[-0.05em]
                leading-none
                text-white
              "
            >
              {item}
            </h2>

            <span
              className="
                text-[28px]
                md:text-[36px]
                text-white/15
              "
            >
              ✦
            </span>
          </div>
        ))}
      </motion.div>
    </div>
  );
}

export default function SoftwareScroller() {
  return (
    <section className="overflow-hidden bg-[#050b2f] py-10">

      <InfiniteRow items={topRow} />

      <InfiniteRow
        items={bottomRow}
        reverse
      />

    </section>
  );
}