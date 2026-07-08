"use client";

export default function VideoCard({ src }) {
  return (
    <div
      className="
        w-full
        max-w-5xl
        overflow-hidden
        rounded-[28px]
        border
        border-white/10
        bg-[#111]
        shadow-2xl
      "
    >
      <video
        className="
          w-full
          aspect-video
          object-cover
        "
        autoPlay
        muted
        loop
        playsInline
        controls
      >
        <source src={src} type="video/mp4" />
      </video>
    </div>
  );
}