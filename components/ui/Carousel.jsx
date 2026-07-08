"use client";

import { useEffect, useState, useCallback } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import DesignCard from "./DesignCard";

export default function Carousel({ items }) {
  const [current, setCurrent] = useState(0);

  const nextSlide = useCallback(() => {
    setCurrent((p) => (p + 1) % items.length);
  }, [items.length]);

  const prevSlide = () =>
    setCurrent((p) => (p === 0 ? items.length - 1 : p - 1));

  useEffect(() => {
    const timer = setInterval(nextSlide, 4000);
    return () => clearInterval(timer);
  }, [nextSlide]);

  return (
    <div className="mx-auto flex w-full max-w-[90vw] flex-col items-center text-center">
      <div className="relative flex w-full items-center justify-center">
        {/* Prev button */}
        <button
          onClick={prevSlide}
          aria-label="Previous"
          className="absolute left-2 sm:-left-6 lg:-left-14 z-20 flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-white/10 backdrop-blur-md transition duration-300 hover:bg-white/20 hover:scale-105"
        >
          <ChevronLeft size={18} className="text-white" />
        </button>

        {/* Slide */}
        <AnimatePresence mode="wait">
          <motion.div
            key={current}
            initial={{ opacity: 0, x: 70 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -70 }}
            transition={{ duration: 0.45, ease: "easeOut" }}
            className="w-full flex justify-center"
          >
            <DesignCard image={items[current].image} />
          </motion.div>
        </AnimatePresence>

        {/* Next button */}
        <button
          onClick={nextSlide}
          aria-label="Next"
          className="absolute right-2 sm:-right-6 lg:-right-14 z-20 flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-white/10 backdrop-blur-md transition duration-300 hover:bg-white/20 hover:scale-105"
        >
          <ChevronRight size={18} className="text-white" />
        </button>
      </div>

      {/* Dots */}
      <div className="mt-10 flex items-center justify-center gap-3">
        {items.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            aria-label={`Go to slide ${i + 1}`}
            className={`h-2.5 rounded-full transition-all duration-300 ${
              current === i
                ? "w-8 bg-white"
                : "w-2.5 bg-white/30 hover:bg-white/50"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
