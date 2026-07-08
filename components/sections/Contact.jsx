"use client";

import { motion } from "framer-motion";

export default function Contact() {
  return (
    <section
    id="contact"
    className="bg-[#050b2f] pt-0 pb-48"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-10">

        {/* Heading */}

        <div className="mb-32 flex items-center gap-6">

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
            CONTACT
          </h2>

          <div className="h-[2px] flex-1 bg-white/20">
            <div className="h-full w-24 rounded-full bg-white"></div>
          </div>

        </div>

        {/* Content */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="flex flex-col items-center text-center"
        >

          {/* Tagline */}

         

          <p
            className="
              mt-8
              max-w-xl
              text-[16px]
              md:text-[18px]
              leading-8
              text-white/55
            "
          >
            Client smile, I feel Happy.
          </p>

          {/* Buttons */}
            <div
            className="
                mt-16
                flex
                flex-row
                justify-center
                items-center
                gap-3
                w-full
            "
            >
            <a
                href="mailto:your@email.com"
                className="
                w-[150px]
                sm:w-[200px]
                h-12
                sm:h-14
                flex
                items-center
                justify-center
                rounded-full
                bg-white
                text-[#050b2f]
                text-sm
                sm:text-base
                font-semibold
                transition-all
                duration-300
                hover:scale-105
                "
            >
                Email Me
            </a>

            <a
                href="https://instagram.com/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                className="
                w-[150px]
                sm:w-[200px]
                h-12
                sm:h-14
                flex
                items-center
                justify-center
                rounded-full
                border
                border-white/20
                text-white
                text-sm
                sm:text-base
                font-semibold
                transition-all
                duration-300
                hover:bg-white
                hover:text-[#050b2f]
                "
            >
                Instagram
            </a>
            </div>
        </motion.div>

      </div>
    </section>
  );
}