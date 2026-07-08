"use client";

import { motion } from "framer-motion";

export default function Contact(){

return(

<section id="contact" className="bg-[#050b2f] pb-24 md:pb-32">

<div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-10">

<div className="mb-20 flex flex-col items-center">

<h2 className="whitespace-nowrap text-[clamp(2rem,4vw,3rem)] font-black uppercase">
CONTACT
</h2>

<div className="h-[2px] w-32 bg-white/20">
<div className="h-full w-24 rounded-full bg-white"></div>
</div>

</div>

<motion.div

initial={{opacity:0,y:40}}

whileInView={{opacity:1,y:0}}

viewport={{once:true}}

transition={{duration:.65}}

className="flex flex-col items-center text-center"

>

<p className="max-w-xl text-[16px] md:text-[18px] leading-8">

Client smile, I feel Happy.

</p>

<div className="mt-14 flex w-full flex-col items-center justify-center gap-4 sm:flex-row">

<a
href="mailto:your@email.com"
className="flex h-14 w-full max-w-[220px] items-center justify-center rounded-full bg-white font-semibold !text-[#050b2f] transition duration-300 hover:scale-105"
>

Email Me

</a>

<a
href="https://instagram.com/yourusername"
target="_blank"
rel="noopener noreferrer"
className="flex h-14 w-full max-w-[220px] items-center justify-center rounded-full border border-white/20 font-semibold text-white transition duration-300 hover:bg-white hover:text-[#050b2f]"
>

Instagram

</a>

</div>

</motion.div>

</div>

</section>

);

}