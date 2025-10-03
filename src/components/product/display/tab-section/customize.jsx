import React, { useState } from "react";

export default function Customize({ variant }) {
  return (
    <div>
      <div className="h-12 flex items-center gap-3 mt-3 md:mt-7">
        <div className="flex gap-1.5">
          <p className="text-xl font-semibold text-[#40CEEC] quick_sand">
            ${variant?.customize?.price}
          </p>
          <p className="text-sm text-gray-500 line-through quick_sand">
            $199.00
          </p>
        </div>

        <div className="w-fit bg-[#EFD33D] text-sm font-semibold quick_sand text-gray-900 text-center rounded md:rounded-sm px-3 py-2 md:px-4 md:py-2.5">
          21% OFF
        </div>
      </div>
    </div>
  );
}
