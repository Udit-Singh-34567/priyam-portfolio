"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import DesignCard from "./DesignCard";

export default function Carousel({ items }) {
  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % items.length);
  };

  const prevSlide = () => {
    setCurrent((prev) =>
      prev === 0 ? items.length - 1 : prev - 1
    );
  };

  useEffect(() => {
    const timer = setInterval(nextSlide, 3000);
    return () => clearInterval(timer);
  }, [current]);

  return (
    <div className="mx-auto flex w-full max-w-xl flex-col items-center">

      {/* Card */}
      <div className="relative flex items-center justify-center">

        {/* Left Arrow */}

        <button
          onClick={prevSlide}
          className="
            absolute
            -left-14
            z-30
            flex
            h-10
            w-10
            items-center
            justify-center
            rounded-full
            border
            border-white/20
            bg-white/10
            backdrop-blur-md
            transition
            hover:bg-white/20
          "
        >
          <ChevronLeft size={18} color="white" />
        </button>

        <AnimatePresence mode="wait">

          <motion.div
            key={current}
            initial={{
              opacity: 0,
              x: 80,
            }}
            animate={{
              opacity: 1,
              x: 0,
            }}
            exit={{
              opacity: 0,
              x: -80,
            }}
            transition={{
              duration: .45,
            }}
          >
            <DesignCard image={items[current].image} />
          </motion.div>

        </AnimatePresence>

        {/* Right Arrow */}

        <button
          onClick={nextSlide}
          className="
            absolute
            -right-14
            z-30
            flex
            h-10
            w-10
            items-center
            justify-center
            rounded-full
            border
            border-white/20
            bg-white/10
            backdrop-blur-md
            transition
            hover:bg-white/20
          "
        >
          <ChevronRight size={18} color="white" />
        </button>

      </div>

      {/* Dots */}

      <div className="mt-8 flex gap-3">

        {items.map((_, index) => (

          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`
              h-2.5
              rounded-full
              transition-all
              duration-300
              ${
                current === index
                  ? "w-8 bg-white"
                  : "w-2.5 bg-white/30"
              }
            `}
          />

        ))}

      </div>

    </div>
  );
}