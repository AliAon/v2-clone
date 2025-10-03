import { Button } from "@/components/ui/button";
import Image from "next/image";
import React from "react";

export default function TeamCard({
  icon,
  bgColor,
  lable,
  dec,
  btnText,
  btnColor,
}) {
  return (
    <div
      className="border rounded-[37px] px-7 py-8 bg-white z-10"
      style={{
        boxShadow: "0px 3px 15px 3.75px #40CEEC80",
      }}
    >
      <div
        className="w-[68px] h-[68px] flex items-center justify-center bg-[#40CEEC4D] rounded-xl"
        style={{ backgroundColor: `${bgColor}` }}
      >
        <Image src={icon} alt="" width={45} height={45} />
      </div>

      <p className="text-lg font-bold text-black quick_sand pt-4">{lable}</p>

      <p className="text-sm font-semibold text-black quick_sand pt-6">{dec}</p>

      <Button
        variant={"outline"}
        className="rounded-full text-xs font-bold inter mt-5 px-4 py-2"
        style={{
          border: `1.5px solid ${btnColor}`,
          color: `${btnColor}`,
        }}
      >
        {btnText}
      </Button>
    </div>
  );
}
