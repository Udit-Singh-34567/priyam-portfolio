"use client";

import { motion } from "framer-motion";
import VideoCard from "@/components/ui/VideoCard";

export default function VideoSection({ title, categories }) {
  return (
    <section className="bg-[#050b2f] py-20 md:py-28 lg:py-32">
      <div className="mx-auto max-w-[95vw] px-5 sm:px-6 lg:px-10">

        {/* Heading */}
        <div className="mb-28 flex flex-col items-center">
          <h2 className="whitespace-nowrap text-[clamp(2rem,4vw,3.5rem)] font-black uppercase text-white">
            {title}
          </h2>

          <div className="mt-6 h-[3px] w-32 bg-white/20">
            <div className="h-full w-20 rounded-full bg-white"></div>
          </div>
        </div>

        {categories.map((category, index) => (
          <motion.div
            key={category.title}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65, delay: index * 0.08 }}
            className="pb-32 md:pb-40 last:pb-0"
          >
            {index !== 0 && <div className="h-16 md:h-24" />}

            {/* Videos */}
            <div className="mx-auto flex w-full max-w-[90vw] flex-col items-center text-center gap-10 sm:gap-12 md:gap-14 lg:gap-20 px-4 sm:px-6 md:px-8">
              {category.videos.map((video, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 35 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45, delay: i * 0.08 }}
                  className="w-full max-w-2xl mx-auto"
                >
                  <VideoCard src={video} />
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
