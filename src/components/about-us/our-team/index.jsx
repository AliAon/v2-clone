import React from "react";
import TeamCard from "./team-card";

export default function OurTeam() {
  return (
    <div className="mt-10 sm:mt-20">
      <div className="relative max-w-xl mx-auto">
        <div className="absolute -top-10 -translate-x-1/2 left-1/2 glow-blue"></div>
        <p className="text-sm font-semibold text-[#40CEEC] quick_sand text-center">
          Meet the Team
        </p>

        <p className="text-2xl sm:text-3xl font-semibold text-[#101828] quick_sand pt-3 text-center">
          Meet Our Dedicated Team of Educators and innovators.
        </p>
      </div>

      <div className="relative grid sm:grid-cols-3 grid-cols-1 lg:gap-10 gap-5 mt-10">
        <div className="absolute top-0 -right-10 glow-blue"></div>
        <div className="absolute bottom-0 -left-10 glow-blue"></div>
        <TeamCard
          icon={"/assets/svg/team-online.svg"}
          bgColor={"#40CEEC4D"}
          lable={"Online Support"}
          dec={
            "Get the help with 24/7 support. Find the answers of your doubts."
          }
          btnColor={"#40CEEC"}
          btnText={"Contact Support"}
        />
        <TeamCard
          icon={"/assets/svg/team-work.svg"}
          bgColor={"#FFF2F2"}
          lable={"Work with Wonport Dropshipping"}
          dec={"Learn how WON works by going through the overview about WON."}
          btnColor={"#FF4E4E"}
          btnText={"Explore"}
        />
        <TeamCard
          icon={"/assets/svg/team-product.svg"}
          bgColor={"#E2FFF1"}
          lable={"Product Reports"}
          dec={
            "Check product reports and explore trending products of huge potential to get sales!"
          }
          btnColor={"#008646"}
          btnText={"Find Winning Product"}
        />
      </div>
    </div>
  );
}
