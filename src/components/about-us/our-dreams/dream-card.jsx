import Image from "next/image";
import React from "react";

export default function DreamCard({ icon, bgColor, value, lable }) {
  return (
    <div className="flex flex-col items-center">
      <div
        className="w-[68px] h-[68px] flex items-center justify-center rounded-xl"
        style={{
          backgroundColor: `${bgColor}`,
        }}
      >
        <Image src={icon} alt="" width={30} height={30} />
      </div>

      <p className="text-2xl font-bold text-black quick_sand mt-8 text-center">
        {value}
      </p>
      <p className="text-base text-[#797979] quick_sand mt-2 text-center">
        {lable}
      </p>
    </div>
  );
}
