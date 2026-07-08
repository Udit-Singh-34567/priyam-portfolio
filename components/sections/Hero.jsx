"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Container from "@/components/ui/Container";

export default function Hero() {
  return (
    <section
      className="
        relative
        min-h-screen
        overflow-hidden
        bg-[#050b2f]
      "
    >

      <Container>

        <div
          className="
            flex
            min-h-screen
            flex-col
            items-center
            justify-center

            pt-32
            md:pt-36
            pb-16
          "
        >

          {/* Tagline */}

          <motion.p
            initial={{
              opacity: 0,
              y: 15,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              delay: 0.5,
              duration: 0.6,
            }}
            className="
              mb-16
              whitespace-nowrap

              text-[11px]
              md:text-[13px]

              font-medium
              tracking-wide

              text-white/55
            "
          >
            Transforming Ideas into Cinematic
          </motion.p>



          {/* NAME + AVATAR */}

          <div
            className="
              relative
              flex
              items-center
              justify-center

              mb-16
              md:mb-24
            "
          >

            <h1
              className="
                select-none
                text-center

                font-black
                uppercase

                leading-[0.82]
                tracking-[-0.06em]

                text-white

                text-[68px]
                sm:text-[95px]
                md:text-[160px]
                lg:text-[220px]
                xl:text-[250px]
              "
            >
              PRIYAM
              <br />
              KUMAR
            </h1>



            {/* Floating Avatar */}

            <motion.div
              animate={{
                y: [0, -12, 0],
                rotate: [0, 2, -2, 0],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="
                absolute
                z-20

                left-1/2
                top-[35%]

                -translate-x-1/2
                -translate-y-1/2
              "
            >

              <Image
                src="/images/avatar.png"
                alt="Priyam Avatar"

                width={400}
                height={400}

                priority

                className="
                  h-auto
                  select-none

                  w-[110px]
                  sm:w-[140px]
                  md:w-[180px]
                  lg:w-[220px]
                  xl:w-[250px]
                "
              />

            </motion.div>

          </div>




          {/* DESCRIPTION */}

          <motion.p
            initial={{
              opacity: 0,
              y: 20,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              delay: 0.8,
              duration: 0.7,
            }}

            className="
              mb-20

              max-w-[330px]
              sm:max-w-[520px]
              lg:max-w-[700px]

              text-center

              text-[15px]
              sm:text-[17px]
              md:text-[18px]
              lg:text-[20px]

              leading-[1.55]

              font-medium

              text-white/90
            "
          >
            I’m Priyam — a creative developer passionately crafting
            cinematic websites, interactive experiences and motion
            graphics.
          </motion.p>




          {/* SCROLL INDICATOR */}

          <motion.div
            initial={{
              opacity: 0,
            }}

            animate={{
              opacity: 1,
            }}

            transition={{
              delay: 1.2,
            }}

            className="
              flex
              flex-col
              items-center
              gap-3
            "
          >

            {/* Line */}

            <div
              className="
                relative
                h-10
                w-[2px]

                overflow-hidden

                bg-white/20
              "
            >

              <motion.div
                animate={{
                  y: [-20, 45],
                }}

                transition={{
                  repeat: Infinity,
                  duration: 2,
                  ease: "linear",
                }}

                className="
                  absolute
                  left-0
                  top-0

                  h-5
                  w-[2px]

                  bg-white
                "
              />

            </div>


            {/* Text */}

            <p
              className="
                text-[11px]
                tracking-[0.3em]
                text-white/50
              "
            >
              SCROLL
            </p>


          </motion.div>


        </div>


      </Container>


    </section>
  );
}