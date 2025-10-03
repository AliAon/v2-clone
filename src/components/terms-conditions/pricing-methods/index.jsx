import React from "react";
import PricingCard from "./pricing-card";

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
  {
    value: "03",
    color: "#008646",
    bgColor: "#E2FFF1",
    title: "Lorem Ipsum is simply dummy",
    des: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,`,
  },
  {
    value: "04",
    color: "#FAAF18",
    bgColor: "#FAAF1826",
    title: "Lorem Ipsum is simply dummy",
    des: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,`,
  },
  {
    value: "05",
    color: "#5B4E79",
    bgColor: "#5B4E7926",
    title: "Lorem Ipsum is simply dummy",
    des: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,`,
  },
  {
    value: "06",
    color: "#2548BE",
    bgColor: "#2548BE26",
    title: "Lorem Ipsum is simply dummy",
    des: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,`,
  },
];

export default function PricingMethods() {
  return (
    <div className="mt-13 md:mt-24 quick_sand">
      <div className="relative max-w-4xl mx-auto">
        <div className="absolute top-0 -right-10 glow-blue"></div>
        <p className="text-sm font-semibold text-[#40CEEC] text-center">
          Pricing Methods
        </p>
        <p className="text-2xl md:text-3xl font-semibold text-[#101828] pt-3 text-center">
          Fees and Payment
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

      <div className="relative grid sm:grid-cols-2 gap-10 mt-14">
        <div className="absolute top-20 -left-10 glow-blue"></div>
        <div className="absolute top-0 -translate-x-1/2 left-1/2 glow-blue"></div>
        <div className="absolute bottom-0 -right-10 glow-blue"></div>
        {list.map((item, index) => (
          <PricingCard key={index} item={item} />
        ))}
      </div>
    </div>
  );
}
