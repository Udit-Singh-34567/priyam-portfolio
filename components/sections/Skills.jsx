"use client";

import { motion } from "framer-motion";

const skills=[
{
title:"Motion Designer",
description:"Motion graphics make complex ideas easy to understand through visually appealing animations. For brands, they create a lasting impact by boosting engagement, professionalism and memorability."
},
{
title:"Cinematographer",
description:"As a cinematographer, I transform raw and ordinary moments into visually striking cinematic frames. I bring life, depth and style to every shot, making even the simplest scenes look powerful and engaging."
},
{
title:"Sound Designer",
description:"Sound design adds depth and realism, transforming visuals into an immersive experience. For brands, it builds emotional connection and enhances the overall storytelling impact."
},
{
title:"Video Editor",
description:"As a video editor, I weave stories by shaping raw footage into smooth, impactful narratives. I turn simple clips into engaging visuals that connect with audiences and leave a lasting impression."
}
];

export default function Skills(){

return(

<section className="bg-[#050b2f] py-24 md:py-32">

<div className="mb-20 flex flex-col items-center">

<div className="mb-16 md:mb-20 flex items-center gap-5">

<h2 className="whitespace-nowrap text-[clamp(2rem,4vw,3rem)] font-black uppercase text-white">
Skills
</h2>

<div className="mt-6 h-[2px] w-32 bg-white/20">
<div className="h-full w-24 rounded-full bg-white"></div>
</div>

</div>

<div className="space-y-16 md:space-y-20">

{skills.map((skill,index)=>(

<motion.div
key={skill.title}
initial={{opacity:0,y:40}}
whileInView={{opacity:1,y:0}}
viewport={{once:true}}
transition={{duration:.55,delay:index*.08}}
>

<h3 className="mb-5 text-2xl font-bold md:text-3xl">
{skill.title}
</h3>

<p className="max-w-5xl text-[15px] md:text-[17px] leading-8 text-white/60">
{skill.description}
</p>

</motion.div>

))}

</div>

<motion.div

initial={{opacity:0}}

whileInView={{opacity:1}}

viewport={{once:true}}

transition={{delay:.2}}

className="mt-24 grid grid-cols-1 gap-6 sm:grid-cols-3"

>

{[
["20+","Projects Completed"],
["10+","Satisfied Clients"],
["1K+","Positive Reviews"]
].map(([num,text])=>(

<div
key={num}
className="rounded-2xl border border-white/10 py-10 text-center"
>

<h2 className="text-[clamp(3rem,6vw,5rem)] font-black text-white">
{num}
</h2>

<p className="mt-3 text-white/60">
{text}
</p>

</div>

))}

</motion.div>

</div>

</section>

);

}