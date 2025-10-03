import React from "react";
import PricingCard from "../pricing-methods/pricing-card";

const list = [
  {
    value: "01",
    color: "#40CEEC",
    bgColor: "#40CEEC4D",
    title: "Lorem Ipsum is simply dummy",
    des: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,`,
  },
  {
    value: "02",
    color: "#FF4E4E",
    bgColor: "#FFF2F2",
    title: "Lorem Ipsum is simply dummy",
    des: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,`,
  },
];

export default function LicenseAccess() {
  return (
    <div className="mt-10 md:mt-24 quick_sand">
      <div className="relative max-w-4xl mx-auto">
        <div className="absolute top-0 -translate-x-1/2 left-1/2 glow-blue"></div>
        <p className="text-sm font-semibold text-[#40CEEC] text-center">
          Lorem Ipsum
        </p>
        <p className="text-2xl md:text-3xl font-semibold text-[#101828] pt-3 text-center">
          License to Access and Use Our Service and Content
        </p>
        <p className="text-sm md:text-base text-[#667085] pt-3 md:pt-6 text-center">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged.
        </p>
      </div>

      <div className="relative grid sm:grid-cols-2 gap-10 mt-10 md:mt-14">
        <div className="absolute top-0 -left-10 glow-blue"></div>
        {list.map((item, index) => (
          <PricingCard key={index} item={item} />
        ))}
      </div>
    </div>
  );
}
