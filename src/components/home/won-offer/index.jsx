import { Button } from "@/components/ui/button";
import React from "react";
import OfferCard from "./offer-card";
import OfferCard2 from "./offer-card-2";

export default function WonOffer() {
  return (
    <div className="hidden lg:block pb-28">
      <div className="max-w-7xl mx-auto pl-5 xl:pl-8">
        <div className="relative flex items-center justify-between">
          <div className="absolute top-10 right-0 lg:-right-10 glow-blue"></div>
          <div>
            <div className="flex items-center gap-3">
              <div className="w-3 h-9 bg-[#40CEEC]"></div>
              <p className="text-xl font-bold quick_sand bg-gradient-to-r from-black to-[#40CEEC] text-transparent bg-clip-text">
                What WON Offer?
              </p>
            </div>
          </div>
          <Button
            variant="ghost"
            className="text-xs text-black font-medium inter"
          >
            View All
          </Button>
        </div>
      </div>

      <div className="relative max-w-[1390px] ml-auto 2xl:max-w-7xl 2xl:mx-auto pl-5 xl:pl-8">
        <div className="absolute -top-20 left-1/2 -translate-x-1/2 glow-blue"></div>
        <div className="mt-18 gap-y-4">
          <div className="grid grid-cols-3 border-b-[2.25px] border-[#40CEEC] rounded-bl-2xl">
            <OfferCard
              value={1}
              title={"Automated Sourcing"}
              description={
                "Simplify product sourcing, allowing you to easily find and connect with reliable suppliers, all in one place."
              }
            />
            <OfferCard
              value={2}
              title={"Wonfast Fulfilment"}
              description={
                "Enjoy hassle-free order processing and lightning-fast global shipping for your own products stocked in wonport warehouse."
              }
            />
            <OfferCard
              value={3}
              title={"Private Label Products"}
              description={
                "Elevate your brand with custom packaging that reflects your unique style."
              }
            />
          </div>

          <div className="relative max-w-7xl ml-auto grid grid-cols-3">
            <div className="absolute top-10 -left-30 glow-blue"></div>
            <OfferCard2
              value={4}
              title={"AI Automation"}
              description={
                "Collaborate with wonport top manufacturers to develop your exclusive, high-quality products."
              }
            />
            <OfferCard2
              value={5}
              title={"Print On Demand"}
              description={
                "Bring your creative visions to life with custom-printed merchandise."
              }
            />
            <OfferCard2
              value={6}
              title={"Wona Ai and Won Academy"}
              description={
                "Captivate your audience with professional product photos and engaging videos provided by wonport."
              }
            />
          </div>
        </div>
      </div>
    </div>
  );
}
