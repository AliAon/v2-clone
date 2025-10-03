import Image from "next/image";
import React from "react";

export default function CTACard({
  border,
  borderColor,
  shadowColor,
  titleColor,
  descriptionColor,
  comma,
}) {
  return (
    <div
      className="w-[282px] md:w-[465px] h-full flex items-start justify-between gap-5 rounded-2xl p-4 md:p-5 bg-white z-10"
      style={{
        border: `${border}px solid ${borderColor}`,
        boxShadow: `-6px 3px 10px 0.5px ${shadowColor}`,
      }}
    >
      <div className="flex items-center gap-5">
        <Image
          src={"/assets/png/cta.png"}
          alt=""
          width={105}
          height={105}
          className="w-[62px] h-[62px] md:w-[105px] md:h-[105px]"
        />
        <div>
          <p
            className="text-xs md:text-lg font-semibold quick_sand"
            style={{
              color: `${titleColor}`,
            }}
          >
            Mehwish
          </p>
          <p
            className="text-[9px] md:text-sm font-medium pt-1.5 quick_sand line-clamp-3"
            style={{
              color: `${descriptionColor}`,
            }}
          >
            Compliment interested discretion estimating on stimulated apartments
            oh Compliment interested discretion estimating on stimulated
            apartments oh...
          </p>
        </div>
      </div>

      <Image
        src={comma}
        alt=""
        width={35}
        height={35}
        className="w-[25px] h-[14px] md:w-[35px] md:h-[35px]"
      />
    </div>
  );
}
