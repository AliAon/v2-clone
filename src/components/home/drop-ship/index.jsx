import { Button } from "@/components/ui/button";
import Image from "next/image";
import React from "react";
import DropShipCard from "./drop-ship-card";

export default function DropShip() {
  return (
    <div className="hidden md:block max-w-7xl mx-auto pb-5 md:pb-18 px-3 md:px-5 xl:px-8">
      <div className="relative flex items-center justify-between">
        <div className="absolute -top-0 left-0 glow-blue"></div>
        <div>
          <div className="flex items-center gap-3">
            <div className="w-1.5 h-5 md:w-3 md:h-9 bg-[#40CEEC]"></div>
            <p className="text-xs md:text-xl font-bold quick_sand bg-gradient-to-r from-black to-[#40CEEC] text-transparent bg-clip-text">
              How to Dropship From Wonport
            </p>
          </div>
        </div>
        <Button
          variant="ghost"
          className="text-xs text-black font-medium quick_sand"
        >
          View All
        </Button>
      </div>

      <div className="max-w-[888px] mx-auto grid grid-cols-2 md:block items-center mt-16">
        <div className=" h-full place-content-center">
          <Image
            src={"/assets/png/dropship.png"}
            alt="dropship"
            width={888}
            height={500}
            className="w-full h-auto rotate-90 md:rotate-0"
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 md:mt-2 px-10 md:px-0">
          <DropShipCard
            shadow={true}
            value={"01"}
            des={"Find Winning Products and Connect Your Store"}
          />
          <DropShipCard
            value={"02"}
            des={"List Your Products with One Click and Wait For Your Order"}
          />
          <DropShipCard
            value={"03"}
            des={" Auto-sync Your Orders and Fulfilment will be automatically"}
          />
          <DropShipCard
            value={"04"}
            des={"List More Products and İncrease Your Won!"}
          />
        </div>
      </div>
    </div>
  );
}
