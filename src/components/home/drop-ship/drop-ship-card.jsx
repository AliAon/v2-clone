import React from "react";

export default function DropShipCard({ shadow, value, des }) {
  return (
    <div
      className={`quick_sand rounded-2xl px-3 py-3 md:px-7 lg:px-12 md:py-5 ${
        shadow ? "shadow-[0px_3px_10.51px_0px_#40CEEC80]" : ""
      }`}
    >
      <p
        className={`text-xl md:text-4xl font-bold text-center ${
          shadow ? "text-[#40CEEC]" : "text-[#7D7B7D]"
        }`}
        style={{ textShadow: "0px 3px 4.5px #00000026" }}
      >
        {value}
      </p>
      <p className="text-[8px] md:text-sm font-semibold text-black text-center pt-2">
        {des}
      </p>
    </div>
  );
}
