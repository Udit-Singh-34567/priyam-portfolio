"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Container from "@/components/ui/Container";
import Logo from "@/components/ui/logo";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const links = [
    { title: "HOME", href: "#home" },
    { title: "ABOUT", href: "#about" },
    { title: "PROJECTS", href: "#projects" },
  ];

  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="fixed inset-x-0 top-0 z-50 bg-[#050b2f]"
    >
      <Container>
        <div className="relative flex h-24 items-center justify-between">

          {/* ---------------- LEFT ---------------- */}

          <div className="relative z-20">

            <button
              onClick={() => setOpen(!open)}
              className="relative h-10 w-10"
            >
              <span
                className={`absolute left-0 top-3 h-[2px] w-7 bg-white transition-all duration-300 ${
                  open ? "translate-y-[8px] rotate-45" : ""
                }`}
              />

              <span
                className={`absolute left-0 top-5 h-[2px] w-5 bg-white transition-all duration-300 ${
                  open ? "opacity-0" : ""
                }`}
              />

              <span
                className={`absolute left-0 top-7 h-[2px] w-7 bg-white transition-all duration-300 ${
                  open ? "-translate-y-[8px] -rotate-45" : ""
                }`}
              />
            </button>

            <AnimatePresence>
              {open && (
                <motion.nav
                  initial={{ opacity: 0, y: -15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.25 }}
                  className="absolute left-0 top-16"
                >
                  <ul className="space-y-4">

                    {links.map((link) => (
                      <li key={link.title}>
                        <a
                          href={link.href}
                          onClick={() => setOpen(false)}
                          className="
                            text-[42px]
                            font-black
                            uppercase
                            leading-none
                            text-white
                            transition-all
                            duration-300
                            hover:opacity-70
                            hover:translate-x-2
                          "
                        >
                          {link.title}
                        </a>
                      </li>
                    ))}

                  </ul>
                </motion.nav>
              )}
            </AnimatePresence>

          </div>

          {/* ---------------- CENTER LOGO ---------------- */}

          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
            <Logo />
          </div>

          {/* ---------------- RIGHT ---------------- */}

          <motion.button
          whileHover={{
            scale: 1.03,
            y: -1,
          }}
          whileTap={{
            scale: 0.97,
          }}
          transition={{ duration: 0.2 }}
          className="
            z-20
            flex
            items-center
            justify-center

            rounded-full
            bg-white

            px-7
            h-10
            min-w-[92px]

            text-[15px]
            font-semibold
            tracking-wide
            text-[#050b2f]

            transition-all
            duration-300
            hover:bg-neutral-100
          "
          style={{
            fontFamily: "var(--font-button)",
          }}
        >
          meet
        </motion.button>
        </div>
      </Container>
    </motion.header>
  );
}