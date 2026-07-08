"use client";

{/*============================================================
    Developed with care.
    Maintenance / improvements:
    Udit Singh
    Email: udit.singh.34567@gmail.com
    ============================================================ */}

import { motion } from "framer-motion";
import Image from "next/image";
import Container from "@/components/ui/Container";

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen overflow-hidden bg-[#050b2f]">
      <Container>
        <div className="flex min-h-screen flex-col items-center justify-center pt-28 md:pt-32 pb-16">

          {/* Tagline */}
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="mb-10 text-center text-[clamp(.68rem,1vw,.82rem)] font-medium uppercase tracking-[.35em] text-white/55"
          >
            TRANSFORMING IDEAS INTO CINEMATIC EXPERIENCES
          </motion.p>

          {/* Name */}
          <div className="relative mb-12 md:mb-20 flex items-center justify-center">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.7 }}
              className="select-none text-center font-black uppercase leading-[.82] tracking-[-.06em] text-white text-[clamp(4.2rem,15vw,8rem)]"
            >
              PRIYAM
              <br />
              KUMAR
            </motion.h1>

            {/* Avatar */}
            <motion.div
              animate={{ y: [0, -100, 0], rotate: [0, 2, -2, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="absolute left-1/2 top-[37%] z-20 -translate-x-1/2 -translate-y-1/2"
            >
              <Image
                src="/images/avatar.png"
                alt="Priyam Avatar"
                width={420}
                height={420}
                priority
                className="h-auto w-[clamp(1rem,16vw,5rem)] select-none"
              />
            </motion.div>
          </div>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.65, duration: 0.7 }}
            className="mb-16 max-w-xs px-2 text-center text-[clamp(.95rem,1.4vw,1.2rem)] leading-8 text-white/90 sm:max-w-xl lg:max-w-3xl"
          >
            I'm Priyam — a creative developer passionately crafting cinematic
            websites, interactive experiences and motion graphics.
          </motion.p>

          {/* Scroll */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="flex flex-col items-center gap-3"
          >
            <div className="relative h-12 w-[2px] overflow-hidden bg-white/20">
              <motion.div
                animate={{ y: [-20, 48] }}
                transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
                className="absolute h-6 w-[2px] bg-white"
              />
            </div>
            <p className="text-[10px] tracking-[.4em] text-white/45">SCROLL</p>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
