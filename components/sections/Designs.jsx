"use client";

import Carousel from "@/components/ui/Carousel";
import designs from "@/data/designs";

export default function Designs() {
  return (
    <section
      id="projects"
      className="scroll-mt-28 bg-[#050b2f] py-24"
    >
      <div className="mx-auto max-w-7xl px-6">

        {/* Heading */}

        <div className="mb-14 flex items-center gap-6">

          <h2
            className="
              whitespace-nowrap
              text-4xl
              md:text-5xl
              font-black
              uppercase
              text-white
            "
          >
            DESIGNS
          </h2>

          <div className="h-[2px] flex-1 bg-white/20">
            <div className="h-full w-24 rounded-full bg-white"></div>
          </div>

        </div>

        <Carousel items={designs} />

      </div>
    </section>
  );
}