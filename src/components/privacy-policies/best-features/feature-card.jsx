import React from "react";

export default function FeatureCard({ item }) {
  return (
    <div className="quick_sand rounded-2xl md:rounded-[30px] bg-white sm:px-7 px-3 sm:py-10 py-5 shadow-[0px_1.37px_6.85px_1.71px_#40CEEC80] md:shadow-[0px_3px_15px_3.75px_#40CEEC80] z-10">
      <div
        className="sm:w-[67px] w-8 sm:h-[67px] h-8 flex items-center justify-center rounded-md md:rounded-xl sm:text-3xl text-sm font-medium"
        style={{
          background: `${item.bgColor}`,
          color: `${item.color}`,
        }}
      >
        {item.value}
      </div>

      <p className="sm:text-lg text-sm font-bold text-black sm:mt-6 mt-4">{item.title}</p>
      <p className="sm:text-sm text-xs font-semibold text-black sm:mt-7 mt-3">{item.des}</p>
    </div>
  );
}
