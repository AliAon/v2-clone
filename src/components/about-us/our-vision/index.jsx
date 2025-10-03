import Image from "next/image";
import React from "react";

export default function OurVision() {
  return (
    <div className="mt-10 sm:mt-28">
      <div className="max-w-4xl mx-auto">
        <p className="text-sm font-semibold text-[#40CEEC] quick_sand text-center">
          Our Vision
        </p>

        <p className="text-2xl sm:text-3xl font-semibold text-[#101828] quick_sand pt-3 text-center">
          Empowering Lives Through Education
        </p>

        <p className="text-sm sm:text-base text-[#667085] quick_sand pt-3 sm:pt-5 text-center">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book.
        </p>
      </div>
      <div className="relative mt-5">
        <div className="absolute bottom-0 -left-10 glow-blue"></div>
        <div className="absolute top-0 -translate-x-1/2 left-1/2 glow-blue"></div>
        <div className="absolute bottom-0 -right-10 glow-blue"></div>
        <Image
          src={"/assets/png/our-vision.png"}
          alt=""
          width={1179}
          height={375}
          className="w-full"
        />
      </div>
    </div>
  );
}
