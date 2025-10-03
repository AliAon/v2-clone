import React from "react";
import DreamCard from "./dream-card";

export default function OurDreams() {
  return (
    <div className="relative grid sm:grid-cols-2 grid-cols-1 gap-10 mt-10 sm:mt-28">
      <div className="absolute top-0 -translate-x-1/2 left-1/2 glow-blue"></div>
      <div className="relative max-w-[550px]">
        <div className="absolute top-1/2 -translate-y-1/2 -left-10 glow-blue"></div>

        <p className="text-sm font-semibold text-[#40CEEC] quick_sand">
          Explore Programs
        </p>

        <p className="sm:text-3xl text-2xl font-semibold text-[#101828] quick_sand pt-3">
          Our Dream is Global Learning Transformation
        </p>

        <p className="text-sm sm:text-base text-[#667085] quick_sand pt-3 sm:pt-5">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </p>
      </div>

      <div className="relative grid grid-cols-2 gap-y-8">
        <div className="absolute -bottom-30 xl:-right-10 right-0 glow-blue"></div>
        <DreamCard
          icon={"/assets/svg/dream-startup.svg"}
          bgColor={"#E2F3FF"}
          value={"3.5"}
          lable={"Years Experience"}
        />
        <DreamCard
          icon={"/assets/svg/dream-link.svg"}
          bgColor={"#F6EEE7"}
          value={"23"}
          lable={"Project Challenge"}
        />
        <DreamCard
          icon={"/assets/svg/dream-reviews.svg"}
          bgColor={"#FFF2F2"}
          value={"830+"}
          lable={"Positive Reviews"}
        />
        <DreamCard
          icon={"/assets/svg/dream-trust.svg"}
          bgColor={"#E2FFF1"}
          value={"100k"}
          lable={"Truested Students"}
        />
      </div>
    </div>
  );
}
