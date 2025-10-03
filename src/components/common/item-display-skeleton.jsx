import Image from "next/image";
import React, { useRef, useState } from "react";
import { GoArrowUp } from "react-icons/go";
import { Skeleton } from "../ui/skeleton";

export default function ItemDisplaySkeleton({ product, isLoading }) {
  return (
    <div className="relative flex gap-5">
      <div className="absolute top-1/2 -left-10 -translate-y-1/2 glow-blue"></div>
      <div className="absolute -top-0 left-1 w-4 h-5 md:w-9 md:h-9 flex items-center justify-center rounded-full z-50 cursor-pointer">
        <Skeleton className="h-12 w-12 rounded-full" />
      </div>
      <div className="w-10 md:w-[72px] overflow-y-auto flex flex-col gap-3 md:gap-5 no-scrollbar h-[361px] md:h-[660px] self-center">
        {Array.from({ length: 10 }).map((item, index) => (
          <Skeleton className="h-12 w-12 rounded-full" />
        ))}
      </div>
      <div className="absolute bottom-0 left-1 w-5 h-5  md:w-9 md:h-9 flex items-center justify-center rounded-full z-50 cursor-pointer">
        <Skeleton className="h-12 w-12 rounded-full" />
      </div>
      <div className="flex-1 flex items-center justify-center  rounded-2xl">
        <Skeleton className="h-full w-full rounded-xl" />
      </div>
    </div>
  );
}
