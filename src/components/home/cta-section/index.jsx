import { Button } from "@/components/ui/button";
import React from "react";
import CTACard from "./cta-card";

export default function CTASection() {
  return (
    <div className="relative max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-3 lg:gap-0 pb-12 md:pb-20 px-3 md:px-5 xl:px-8">
      <div className="absolute top-10 left-0 lg:-left-10 glow-blue"></div>
      <div className="md:hidden flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-1.5 h-5 md:w-3 md:h-9 bg-[#40CEEC]"></div>
          <p className="text-xs md:text-xl font-bold quick_sand bg-gradient-to-r from-black to-[#40CEEC] text-transparent bg-clip-text">
            Whats our customer are saying about us
          </p>
        </div>
        <Button
          variant="ghost"
          className="text-xs text-black font-medium quick_sand"
        >
          View All
        </Button>
      </div>

      <div className="hidden md:block w-[375px] place-content-center">
        <p className="text-3xl/tight font-bold text-black quick_sand">
          Whats our customer are saying{" "}
          <span className="text-[#40CEEC] font-normal">About Us</span>
        </p>

        <p className="text-base font-medium text-[#7D7B7D] pt-4 quick_sand">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry.
        </p>

        <Button className="w-[187px] h-[60px] rounded-full bg-gradient-to-r from-[#40CEEC] to-[#247586] text-xl font-bold text-white mt-7 inter">
          View More
        </Button>
      </div>

      <div className="relative flex flex-col gap-5 md:gap-8">
        <div className="absolute bottom-14 right-0 lg:-right-10 glow-blue"></div>
        <div className="absolute bottom-10 left-0 lg:-left-20 glow-blue"></div>
        <div className="flex flex-col items-end">
          <CTACard
            border={1}
            borderColor={"#DEDEDE"}
            shadowColor={"#00000025"}
            titleColor={"#000000"}
            descriptionColor={"#7D7B7D"}
            comma={"/assets/png/cta-comma.png"}
          />
        </div>
        <div className="flex flex-col items-start">
          <CTACard
            border={3}
            borderColor={"#40CEEC"}
            shadowColor={"#40CEEC"}
            titleColor={"#40CEEC"}
            descriptionColor={"#000000"}
            comma={"/assets/png/color-comma.png"}
          />
        </div>

        <div className="flex flex-col items-end">
          <CTACard
            border={1}
            borderColor={"#DEDEDE"}
            shadowColor={"#00000025"}
            titleColor={"#000000"}
            descriptionColor={"#7D7B7D"}
            comma={"/assets/png/cta-comma.png"}
          />
        </div>
      </div>
    </div>
  );
}
