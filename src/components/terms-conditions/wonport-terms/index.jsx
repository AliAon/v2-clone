import Image from "next/image";
import React from "react";

export default function WonportTerms() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-13 md:gap-0  mt-10 md:mt-24 quick_sand">
      <div className="relative">
        <div className="absolute bottom-0 -left-10 glow-blue"></div>
        <div className="absolute top-0 -right-10 glow-blue"></div>
        <p className="text-sm font-semibold text-[#40CEEC]">Wonport Terms</p>
        <p className="text-xl md:text-3xl font-semibold text-[#101828] pt-1 md:pt-3">
          Terms & Conditions
        </p>

        <p className="text-sm md:text-base text-[#667085] pt-3 md:pt-6">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged.
        </p>

        <div className="flex items-start gap-2 mt-5">
          <Image
            src={"/assets/svg/terms-arrow.svg"}
            alt=""
            width={23}
            height={15}
             className="w-3 md:w-6"
          />
          <p className="text-sm md:text-base text-[#667085]">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy
          </p>
        </div>

        <div className="flex items-start gap-2 mt-5">
          <Image
            src={"/assets/svg/terms-arrow.svg"}
            alt=""
            width={23}
            height={15}
            className="w-3 md:w-6"
          />
          <p className="text-sm md:text-base text-[#667085]">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy
          </p>
        </div>
      </div>

      <div className="flex justify-center">
        <Image
          src={"/assets/png/won-terms.png"}
          alt=""
          width={280}
          height={352}
          className="object-contain"
        />
      </div>
    </div>
  );
}
