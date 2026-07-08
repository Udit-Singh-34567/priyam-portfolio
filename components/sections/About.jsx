"use client";

import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="bg-[#050b2f] py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-10">

        <div className="mb-16 flex flex-col items-center">
          <h2 className="whitespace-nowrap text-[clamp(2rem,4vw,3rem)] font-black uppercase text-white">
            ABOUT
          </h2>

          <div className="mt-6 h-[2px] w-32 bg-white/20">
            <div className="h-full w-24 rounded-full bg-white"></div>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: .7 }}
          className="flex flex-col items-center"
        >

          <p className="max-w-3xl text-center text-[clamp(1rem,1.3vw,1.2rem)] leading-8 text-white/60">

            I am <span className="font-bold text-white">Priyam Kumar</span>, a passionate <span className="font-bold text-white">Video Editor</span>, <span className="font-bold text-white">Cinematographer</span>, and <span className="font-bold text-white">Content Creator</span> dedicated to transforming ideas into cinematic stories.

            <br /><br />

            I love capturing emotions, crafting immersive visuals and producing content that connects with people through creativity and storytelling.

            <br /><br />

            From filming and editing to color grading and motion graphics, I focus on every detail to create high-quality content for brands, creators and social media.

            <br /><br />

            Every project is an opportunity to experiment, refine my craft and deliver visuals that leave a lasting impression.

            <br /><br />

            Beyond the camera and editing timeline, I am constantly exploring new filmmaking techniques, documenting everyday moments, traveling and finding inspiration that helps me tell better stories.

          </p>

          <div className="mt-16 flex flex-col items-center gap-8">

            <div className="flex h-[300px] w-[220px] items-center justify-center rounded-2xl border-2 border-dashed border-white/20 bg-white/5">
              <span className="text-xs uppercase tracking-[.3em] text-white/40">
                PROFILE IMAGE
              </span>
            </div>

            <a
              href="https://instagram.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-14 w-52 items-center justify-center rounded-full bg-white font-semibold text-[#050b2f] transition hover:scale-105 hover:bg-neutral-100"
            >
              DM on Insta
            </a>

            <p className="text-center text-[10px] uppercase tracking-[.3em] text-white/45">
              BEING PROFESSIONAL, WE USE PROFESSIONAL SOFTWARES
            </p>

          </div>

        </motion.div>

      </div>
    </section>
  );
}