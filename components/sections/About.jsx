"use client";

import { motion } from "framer-motion";
// import Image from "next/image";

export default function About() {
  return (
    <section
      id="about"
      className="bg-[#050b2f] pt-36 pb-24"
    >
      <div className="mx-auto max-w-7xl px-6">

        {/* Heading */}

        <div className="mb-16 flex items-center gap-6">

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
            ABOUT
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
          className="flex flex-col items-center"
        >

          {/* Paragraph */}

          <p
            className="
              max-w-[280px]
              sm:max-w-[320px]
              md:max-w-[420px]

              text-center

              text-[15px]
              md:text-[19px]

              leading-[2]
              md:leading-[2.1]

              font-normal
              text-white/55
            "
          >
            I am <span className="font-bold text-white">Priyam Kumar</span>, a
            passionate <span className="font-bold text-white">Video Editor</span>,
            <span className="font-bold text-white"> Cinematographer</span>, and
            <span className="font-bold text-white"> Content Creator</span>
            dedicated to transforming ideas into cinematic stories.

            <br />
            <br />

            I love capturing emotions, crafting immersive visuals,
            and producing content that connects with people through
            creativity and storytelling.

            <br />
            <br />

            From filming and editing to color grading and motion
            graphics, I focus on every detail to create high-quality
            content for brands, creators, and social media.

            <br />
            <br />

            Every project is an opportunity to experiment,
            refine my craft, and deliver visuals that leave
            a lasting impression.

            <br />
            <br />

            Beyond the camera and editing timeline,
            I am constantly exploring new filmmaking
            techniques, documenting everyday moments,
            traveling, and finding inspiration that
            helps me tell better stories with every frame.
          </p>

          {/* Image + Button + Text */}

          <div
            className="
              mt-20
              md:mt-24
              flex
              flex-col
              items-center
              gap-8
              md:gap-10
            "
          >

            {/*
            =========================================
            Uncomment after adding /public/images/profile.jpg
            =========================================

            <Image
              src="/images/profile.jpg"
              alt="Priyam Kumar"
              width={250}
              height={320}
              priority
              className="
                w-[180px]
                sm:w-[210px]
                md:w-[250px]
                rounded-2xl
                object-cover
                shadow-2xl
              "
            />
            */}

            {/* Temporary Placeholder */}

            <div
              className="
                flex
                h-[260px]
                w-[180px]
                sm:h-[300px]
                sm:w-[210px]
                md:h-[340px]
                md:w-[250px]
                items-center
                justify-center
                rounded-2xl
                border-2
                border-dashed
                border-white/20
                bg-white/5
                shadow-2xl
              "
            >
              <span
                className="
                  text-sm
                  uppercase
                  tracking-[0.25em]
                  text-white/40
                "
              >
                PROFILE IMAGE
              </span>
            </div>

            {/* Instagram Button */}

            <a
              href="https://instagram.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="
                flex
                h-14
                w-[200px]
                items-center
                justify-center
                rounded-full
                bg-white
                text-[#050b2f]
                font-semibold
                tracking-wide
                transition-all
                duration-300
                hover:scale-105
                hover:bg-gray-100
              "
            >
              DM on Insta
            </a>

            {/* Professional Software Text */}

            <p
              className="
                text-center
                text-[10px]
                md:text-[11px]
                uppercase
                tracking-[0.28em]
                text-white/45
              "
            >
              BEING PROFESSIONAL, WE USE PROFESSIONAL SOFTWARES
            </p>

          </div>

        </motion.div>

      </div>
    </section>
  );
}