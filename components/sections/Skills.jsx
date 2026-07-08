"use client";

import { motion } from "framer-motion";

const skills = [
  {
    title: "Motion Designer",
    description:
      "Motion graphics make complex ideas easy to understand through visually appealing animations. For brands, they create a lasting impact by boosting engagement, professionalism, and memorability.",
  },
  {
    title: "Cinematographer",
    description:
      "As a cinematographer, I transform raw and ordinary moments into visually striking cinematic frames. I bring life, depth, and style to every shot, making even the simplest scenes look powerful and engaging.",
  },
  {
    title: "Sound Designer",
    description:
      "Sound design adds depth and realism, transforming visuals into an immersive experience. For brands, it builds emotional connection and enhances the overall storytelling impact.",
  },
  {
    title: "Video Editor",
    description:
      "As a video editor, I weave stories by shaping raw footage into smooth, impactful narratives. I turn simple clips into engaging visuals that connect with audiences and leave a lasting impression.",
  },
];

export default function Skills() {
  return (
    <section className="bg-[#050b2f] py-28">
      <div className="mx-auto max-w-7xl px-6">

        {/* Heading */}

        <div className="mb-20 flex items-center gap-6">

          <h2
            className="
              whitespace-nowrap
              text-4xl
              md:text-5xl
              font-black
              text-white
            "
          >
            Skills
          </h2>

          <div className="h-[2px] flex-1 bg-white/20">
            <div className="h-full w-24 rounded-full bg-white"></div>
          </div>

        </div>

        {/* Skills */}

        <div className="flex flex-col gap-20 md:gap-24">

  {skills.map((skill, index) => (
    <motion.div
      key={skill.title}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{
        duration: 0.6,
        delay: index * 0.1,
      }}
      className="flex flex-col gap-8 md:gap-10"
    >

      <h3
        className="
          text-2xl
          md:text-3xl
          font-bold
          text-white
        "
      >
        {skill.title}
      </h3>

      <p
        className="
          max-w-5xl
          text-[15px]
          md:text-[17px]
          leading-[2]
          text-white/60
        "
      >
        {skill.description}
      </p>

    </motion.div>
  ))}

</div>

        {/* Bottom Counter */}

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-24"
        >
          <h2
            className="
              text-6xl
              md:text-7xl
              font-black
              text-white
            "
          >
            100+
          </h2>

          <p
            className="
              mt-2
              text-lg
              leading-6
              text-white/60
            "
          >
            Projects
            <br />
            Completed
          </p>
        </motion.div>

      </div>
    </section>
  );
}