"use client";

export default function VideoCard({src}){

return(

<div className="w-full overflow-hidden rounded-[24px] border border-white/10 bg-[#111] shadow-2xl transition duration-300 hover:border-white/20">

<video
className="aspect-video w-full object-cover"
autoPlay
muted
loop
playsInline
controls
preload="metadata"
>

<source src={src} type="video/mp4"/>

</video>

</div>

);

}