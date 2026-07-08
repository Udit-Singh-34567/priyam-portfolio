/* "use client";

import Image from "next/image";

export default function DesignCard({ image }) {
  return (
    <div className="relative h-[270px] w-[170px] overflow-hidden border-[6px] border-white">
      <Image
        src={image}
        alt=""
        fill
        className="object-cover"
      />
    </div>
  );
} */

"use client";

import Image from "next/image";

export default function DesignCard({ image }) {
  return (
    <div
      className="
        relative
        overflow-hidden
        rounded-3xl

        w-[240px]
        h-[340px]

        sm:w-[280px]
        sm:h-[400px]

        md:w-[340px]
        md:h-[480px]

        lg:w-[380px]
        lg:h-[540px]

        shadow-2xl
      "
    >
      <Image
        src={image}
        alt="Design"
        fill
        priority
        className="
          object-cover
          transition-transform
          duration-700
          hover:scale-105
        "
      />

      <div className="absolute inset-0 bg-black/10" />
    </div>
  );
}