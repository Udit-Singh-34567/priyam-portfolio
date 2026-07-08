"use client";

import { motion } from "framer-motion";
import VideoCard from "@/components/ui/VideoCard";

export default function VideoSection({ title, categories }) {
  return (
    <section className="bg-[#050b2f] py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">

        {/* Section Heading */}

        <div className="mb-28 flex items-center gap-6">

          <h2
            className="
              whitespace-nowrap
              text-3xl
              md:text-5xl
              font-black
              uppercase
              text-white
            "
          >
            {title}
          </h2>

          <div className="h-[3px] flex-1 bg-white/20">
            <div className="h-full w-20 rounded-full bg-white"></div>
          </div>

        </div>

        {categories.map((category, index) => (
          <motion.div
            key={category.title}
            initial={{ opacity: 0, y: 70 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.7,
              delay: index * 0.08,
            }}
            className="pb-48 last:pb-0"
          >

            {/* Space before every category except first */}
            {index !== 0 && (
              <div className="h-24 md:h-32" />
            )}

            {/* Category Heading */}

            <div className="mb-24 md:mb-28">

              <h3
                className="
                  text-center
                  font-black
                  uppercase
                  leading-[0.9]
                  tracking-[-0.06em]
                  text-white

                  text-[58px]
                  sm:text-[76px]
                  md:text-[110px]
                  lg:text-[140px]
                  xl:text-[160px]
                "
              >
                {category.title}
              </h3>

              <div className="mx-auto mt-10 h-px w-full bg-white/10"></div>

            </div>

            {/* Videos */}

            <div
              className="
                mx-auto
                w-full
                max-w-5xl
                flex
                flex-col
                gap-16
              "
            >

              {category.videos.map((video, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 35 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.5,
                    delay: i * 0.12,
                  }}
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