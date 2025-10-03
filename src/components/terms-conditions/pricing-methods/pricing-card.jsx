import React from "react";

export default function PricingCard({ item }) {
  return (
    <div className="flex items-center gap-3 quick_sand">
      <div
        className="w-15 h-15 md:w-[67px] md:h-[67px] flex items-center justify-center rounded-xl text-2xl md:text-3xl font-medium"
        style={{
          background: `${item.bgColor}`,
          color: `${item.color}`,
        }}
      >
        {item.value}
      </div>

      <div className="flex-1">
        <p className="text-base md:text-lg text-[#101828] font-semibold">{item.title}</p>
        <p className="max-w-[436px] text-sm text-[#667085] pt-2">{item.des}</p>
      </div>
    </div>
  );
}
