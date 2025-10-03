import React from "react";
import ShippingMethod from "./shipping-method";
import LeftSide from "./left-side";
import HeroSlider from "./hero-slider";
import Brands from "./brands";

export default function HeroSection() {
  return (
    <div className="max-w-7xl mx-auto pt-5 md:pt-18 pb-7 md:pb-28 px-3 md:px-5 xl:px-8">
      <div className="relative lg:h-[390px] flex flex-col lg:flex-row gap-3">
        <div className="absolute -top-6 right-0 lg:-right-5 glow-blue"></div>
        <div className="absolute -bottom-6 -left-10  glow-blue"></div>
        <div className="hidden lg:block">
          <LeftSide />
        </div>
        <div className="flex-1 rounded-2xl">
          <HeroSlider />
        </div>
        <div className="block lg:hidden">
          <LeftSide />
        </div>
        <div className="z-10 w-full lg:!w-[280px] h-full rounded-3xl bg-white py-5 shadow-[2px_2px_8px_0px_rgba(40,206,236,0.4)]">
          <ShippingMethod />
        </div>
      </div>

      <Brands />
    </div>
  );
}
