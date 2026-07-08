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
    <div className="relative overflow-hidden py-3">
      <motion.div
        className="flex w-max gap-10 whitespace-nowrap"
        animate={{
          x: reverse ? ["-50%", "0%"] : ["0%", "-50%"],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "linear",
        }}
      >
        {repeated.map((item, index) => (
          <div
            key={index}
            className="flex items-center gap-10"
          >
            <h2
              className="
                text-[40px]
                sm:text-[60px]
                md:text-[90px]
                lg:text-[110px]
                font-black
                uppercase
                leading-none
                tracking-[-0.05em]
                text-white
              "
            >
              {item}
            </h2>

            <span
              className="
                text-white/15
                text-[28px]
                md:text-[40px]
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