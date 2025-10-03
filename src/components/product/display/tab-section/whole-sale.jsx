import React, { useState } from "react";

export default function WholeSale({ variant }) {
  return (
    <div>
      <div className="h-12 flex items-center gap-3 mt-3 md:mt-7">
        <div className="flex gap-1.5">
          {variant?.pricing_overrides?.wholesale?.tiers?.map((item, index) => (
            <>
              <div key={index} className="quick_sand">
                <p className="text-xl font-semibold text-[#40CEEC] quick_sand text-center">
                  ${item?.value}
                </p>
                <p className="text-sm text-center">MOQ≥{item?.min_quantity}</p>
              </div>
              <p className="text-sm text-gray-500 line-through quick_sand">
                ${variant?.pricing_overrides?.basePrice}
              </p>
              <div className="w-fit bg-[#EFD33D] text-sm font-semibold quick_sand text-gray-900 text-center rounded md:rounded-sm px-3 py-2 md:px-4 md:py-2.5">
                {item?.discounted_price}% OFF
              </div>
            </>
          ))}
        </div>
      </div>
    </div>
  );
}
