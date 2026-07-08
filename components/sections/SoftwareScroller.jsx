"use client";

import { motion } from "framer-motion";

const top=["AFTER EFFECTS","DAVINCI","PREMIERE PRO","PHOTOSHOP","ILLUSTRATOR","BLENDER"];
const bottom=["FIGMA","CAPCUT","LIGHTROOM","AUDITION","CANVA","CINEMA 4D"];

function Row({items,reverse=false}){

const repeated=[...items,...items];

return(

<div className="relative overflow-hidden py-5">

<div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-20 bg-gradient-to-r from-[#050b2f] to-transparent"/>
<div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-20 bg-gradient-to-l from-[#050b2f] to-transparent"/>

<motion.div

className="flex w-max items-center gap-16 whitespace-nowrap"

animate={{x:reverse?["-50%","0%"]:["0%","-50%"]}}

transition={{duration:55,repeat:Infinity,ease:"linear"}}

>

{repeated.map((item,index)=>(

<div key={index} className="flex items-center gap-16">

<h2 className="text-[clamp(3rem,8vw,7rem)] font-black uppercase tracking-[-.05em] text-white">
{item}
</h2>

<span className="text-3xl text-white/15">✦</span>

</div>

))}

</motion.div>

</div>

);

}

export default function SoftwareScroller(){

return(

<section className="overflow-hidden bg-[#050b2f] py-10 md:py-14">

<Row items={top}/>
<Row items={bottom} reverse/>

</section>

);

}