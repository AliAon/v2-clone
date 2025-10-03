import React from "react";
import FeatureCard from "./feature-card";

const list = [
  {
    value: "01",
    color: "#40CEEC",
    bgColor: "#40CEEC4D",
    title: "Feature Name",
    des: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy`,
  },
  {
    value: "02",
    color: "#FF4E4E",
    bgColor: "#FFF2F2",
    title: "Feature Name",
    des: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy`,
  },
  {
    value: "03",
    color: "#008646",
    bgColor: "#E2FFF1",
    title: "Feature Name",
    des: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy`,
  },
  {
    value: "04",
    color: "#FAAF18",
    bgColor: "#FAAF1826",
    title: "Feature Name",
    des: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy`,
  },
  {
    value: "05",
    color: "#5B4E79",
    bgColor: "#5B4E7926",
    title: "Feature Name",
    des: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy`,
  },
  {
    value: "06",
    color: "#2548BE",
    bgColor: "#2548BE26",
    title: "Feature Name",
    des: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy`,
  },
];

export default function BestFeatures() {
  return (
    <div className="mt-10 md:mt-24 quick_sand">
      <div className="relative max-w-4xl mx-auto">
        <div className="absolute top-3 left-1/2 glow-blue"></div>
        <p className="text-sm font-semibold text-[#40CEEC] text-center">
          Best Features
        </p>
        <p className="text-2xl md:text-3xl font-semibold text-[#101828] pt-3 text-center">
          Best Feature of Privacy Policies
        </p>
      </div>

      <div className="relative grid grid-cols-2 lg:grid-cols-3 sm:gap-10 gap-4 xl:gap-16 mt-8 md:mt-20">
        <div className="absolute top-3 -left-16 glow-blue"></div>
        <div className="absolute bottom-10 -left-16 glow-blue"></div>
        <div className="absolute top-1/2 -translate-y-1/2 -right-16 glow-blue"></div>
        {list.map((item, index) => (
          <FeatureCard key={index} item={item} />
        ))}
      </div>
    </div>
  );
}
