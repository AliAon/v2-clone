import React from "react";

export default function OfferCard({ value, title, description }) {
  return (
    <div className="relative border-l-[2.25px] rounded-bl-2xl border-[#40CEEC] px-2 pt-4 pb-2">
      <div className="absolute w-6.5 h-6.5 -top-6.5 -left-3.5 flex items-center justify-center border border-[#40CEEC] rounded-full bg-[#40CEEC33] z-10 text-xs font-medium text-[#40CEEC]">
        {value}
      </div>
      <div className="w-[240px] rounded-xl px-3 py-4 shadow-sm shadow-[#40CEEC80] z-10 bg-white">
        <p className="text-lg font-medium text-black quick_sand">{title}</p>
        <p className="text-[10px] text-[#737271] font-medium quick_sand">
          {description}
        </p>
      </div>
    </div>
  );
}
