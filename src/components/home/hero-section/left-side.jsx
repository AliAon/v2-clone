import Image from "next/image";
import Link from "next/link";
import React from "react";
import { HiMiniArrowDownLeft } from "react-icons/hi2";

export default function LeftSide() {
  return (
    <div className="overflow-x-auto lg:overflow-x-hidden">
      <div className="min-w-[670px] md:min-w-full h-full flex flex-row lg:flex-col justify-between gap-2">
        <div className="relative w-[250px]">
          <div className="absolute top-4 left-4 border-2 border-[#253D4E] rounded-full px-2 py-0.5 text-[10px] text-[#253D4E] font-bold">
            Droppshipping
          </div>
          <Image
            src={"/assets/png/intersect-2.png"}
            alt=""
            width={262}
            height={112}
            className="w-full h-[120px]"
          />
          <Image
            src={"/assets/png/inter-1.png"}
            alt=""
            width={128}
            height={81}
            className="w-[110px] xl:w-[128px] absolute top-6 xl:top-4 right-2"
          />
          <Link
            href={"/categories"}
            className="absolute bottom-2 right-0 xl:right-2 w-8.5 h-8.5 rounded-full bg-[#253D4E] shadow-md shadow-[#40CEEC4D] flex items-center justify-center cursor-pointer"
          >
            <HiMiniArrowDownLeft
              size={18}
              color="#fff"
              className="-rotate-180"
            />
          </Link>
        </div>
        <div className="relative w-[250px]">
          <div className="absolute top-3.5 left-4 border-2 border-[#253D4E] rounded-full px-2 py-0.5 text-[10px] text-[#253D4E] font-bold">
            Whole Sale
          </div>
          <Image
            src={"/assets/png/intersect-1.png"}
            alt=""
            width={262}
            height={112}
            className="w-full h-[120px]"
          />
          <Image
            src={"/assets/png/inter-2.png"}
            alt=""
            width={128}
            height={81}
            className="w-[110px] xl:w-[128px] absolute bottom-3 right-8 xl:right-12"
          />
          <Link
            href={"/categories"}
            className="absolute bottom-2 right-0 xl:right-1.5 w-8.5 h-8.5 rounded-full bg-[#253D4E] shadow-md shadow-[#40CEEC4D] flex items-center justify-center cursor-pointer"
          >
            <HiMiniArrowDownLeft
              size={18}
              color="#fff"
              className="-rotate-180"
            />
          </Link>
        </div>
        <div className="relative w-[250px]">
          <div className="absolute top-4 left-4 border-2 border-[#253D4E] rounded-full px-2 py-0.5 text-[10px] text-[#253D4E] font-bold">
            Print On Demend
          </div>
          <Image
            src={"/assets/png/intersect-2.png"}
            alt=""
            width={262}
            height={112}
            className="w-full h-[120px]"
          />
          <Image
            src={"/assets/png/inter-3.png"}
            alt=""
            width={120}
            height={87}
            className="w-[100px] xl:w-[120px] absolute bottom-3 right-12"
          />
          <Link
            href={"/categories"}
            className="absolute bottom-2 right-0 xl:right-2 w-8.5 h-8.5 rounded-full bg-[#253D4E] shadow-md shadow-[#40CEEC4D] flex items-center justify-center cursor-pointer"
          >
            <HiMiniArrowDownLeft
              size={18}
              color="#fff"
              className="-rotate-180"
            />
          </Link>
        </div>
      </div>
    </div>
  );
}
