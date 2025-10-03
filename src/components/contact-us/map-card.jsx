import Image from "next/image";
import React from "react";

export default function MapCard({ icon, bgColor, lable, address }) {
  return (
    <div className="flex items-center gap-3 quick_sand">
      <div
        className="w-11 h-11 sm:w-14 sm:h-14 flex items-center justify-center rounded-sm sm:rounded-xl bg-[#E2F3FF]"
        style={{
          background: `${bgColor}`,
        }}
      >
        <Image src={icon} alt="" width={24} height={24} className="w-5 sm:w-6"/>
      </div>

      <div className="flex-1">
        <p className="text-sm sm:text-lg font-bold text-black">{lable}</p>
        <p className="text-[10px] sm:text-sm text-[#797979] pt-1">{address}</p>
      </div>
    </div>
  );
}
