"use client";

import Carousel from "@/components/ui/Carousel";
import designs from "@/data/designs";

export default function Designs() {
  return (
    <section
      id="projects"
      className="scroll-mt-28 bg-[#050b2f] py-20 md:py-24 lg:py-28"
    >
      <div className="mx-auto max-w-[95vw] px-4 sm:px-6 lg:px-10 flex flex-col items-center text-center">

        {/* Heading */}
        <div className="flex flex-col items-center">
          <h2 className="whitespace-nowrap text-[clamp(2rem,4vw,3rem)] font-black uppercase text-white">
            DESIGNS
          </h2>

          <div className="mt-6 h-[2px] w-32 bg-white/20">
            <div className="h-full w-24 rounded-full bg-white"></div>
          </div>
        </div>

        {/* Explicit gap between heading and carousel */}
        <div className="mt-12 w-full flex justify-center">
          <Carousel items={designs} />
        </div>

      </div>
    </section>
  );
}
