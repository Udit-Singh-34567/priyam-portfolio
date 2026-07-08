"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Container from "@/components/ui/Container";
import Logo from "@/components/ui/logo";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const links=[
    {title:"HOME",href:"#home"},
    {title:"ABOUT",href:"#about"},
    {title:"PROJECTS",href:"#projects"},
    {title:"CONTACT",href:"#contact"},
  ];

  return (
    <motion.header
      initial={{y:-20,opacity:0}}
      animate={{y:0,opacity:1}}
      transition={{duration:.45}}
      className="fixed inset-x-0 top-0 z-50 bg-[#050b2f]/95 backdrop-blur-md"
    >
      <Container>

        <div className="relative flex h-20 md:h-24 items-center justify-between">

          {/* LEFT */}

          <div className="relative z-20">

            <button
              onClick={()=>setOpen(!open)}
              aria-label="Toggle Menu"
              className="relative flex h-10 w-10 flex-col justify-center"
            >

              <span className={`absolute top-3 h-[2px] w-7 bg-white transition-all duration-300 ${open?"translate-y-[8px] rotate-45":""}`} />

              <span className={`absolute top-5 h-[2px] w-5 bg-white transition-all duration-300 ${open?"opacity-0":""}`} />

              <span className={`absolute top-7 h-[2px] w-7 bg-white transition-all duration-300 ${open?"-translate-y-[8px] -rotate-45":""}`} />

            </button>

            <AnimatePresence>

              {open && (

                <motion.nav
                  initial={{opacity:0,y:-10}}
                  animate={{opacity:1,y:0}}
                  exit={{opacity:0,y:-10}}
                  transition={{duration:.25}}
                  className="absolute left-0 top-16"
                >

                  <ul className="space-y-2">

                    {links.map((link,index)=>(

                      <motion.li
                        key={link.title}
                        initial={{opacity:0,x:-15}}
                        animate={{opacity:1,x:0}}
                        transition={{delay:index*.05}}
                      >

                        <a
                          href={link.href}
                          onClick={()=>setOpen(false)}
                          className="block text-[clamp(2rem,5vw,2.8rem)] font-black uppercase leading-none text-white transition-all duration-300 hover:translate-x-2 hover:opacity-70"
                        >
                          {link.title}
                        </a>

                      </motion.li>

                    ))}

                  </ul>

                </motion.nav>

              )}

            </AnimatePresence>

          </div>

          {/* CENTER */}

          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
            <Logo />
          </div>

          {/* RIGHT */}

          <motion.button
            whileHover={{scale:1.04,y:-1}}
            whileTap={{scale:.97}}
            transition={{duration:.2}}
            className="z-20 flex h-10 min-w-[90px] items-center justify-center rounded-full bg-white px-6 text-sm font-semibold text-[#050b2f] transition hover:bg-neutral-100"
            style={{fontFamily:"var(--font-button)"}}
          >
            Meet
          </motion.button>

        </div>

      </Container>
    </motion.header>
  );
}