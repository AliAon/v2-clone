import { Button } from "@/components/ui/button";
import Image from "next/image";
import React from "react";

export default function OrderComplete({ handleClick }) {
  return (
    <div className="max-w-[740px] mx-auto flex flex-col items-center rounded-3xl shadow-[0px_1px_5px_1.75px_#40CEEC80] px-5 py-10 md:py-20">
      <p className="text-3xl text-[#40CEEC] font-medium quick_sand text-center">
        Thank you! 🎉
      </p>
      <p className="max-w-[492px] mx-auto text-3xl md:text-4xl text-[#23262F] font-medium quick_sand text-center mt-8">
        Your order has been received
      </p>

      <div className="relative w-[96px] h-[96px] flex items-center justify-center border border-[#40CEEC] rounded-xl mt-7">
        <div className="w-8 h-8 flex items-center justify-center absolute -top-3 -right-3 bg-[#40CEEC] rounded-full text-base text-[#FCFCFD] font-semibold quick_sand">
          1
        </div>
        <Image
          src={"/assets/png/product-1.png"}
          alt=""
          width={151}
          height={100}
          className="w-[50px] h-[70px]"
        />
      </div>

      <div className="w-[300px] mx-auto mt-10 space-y-7">
        <div className="w-full grid grid-cols-2">
          <p className="text-sm text-[#6C7275] font-semibold quick_sand">
            Order code:
          </p>
          <p className="text-sm text-[#141718] font-semibold quick_sand">
            #0123_45678
          </p>
        </div>

        <div className="w-full grid grid-cols-2">
          <p className="text-sm text-[#6C7275] font-semibold quick_sand">
            Date:
          </p>
          <p className="text-sm text-[#141718] font-semibold quick_sand">
            October 19, 2023
          </p>
        </div>

        <div className="w-full grid grid-cols-2">
          <p className="text-sm text-[#6C7275] font-semibold quick_sand">
            Total:
          </p>
          <p className="text-sm text-[#141718] font-semibold quick_sand">
            $1,345.00
          </p>
        </div>

        <div className="w-full grid grid-cols-2">
          <p className="text-sm text-[#6C7275] font-semibold quick_sand">
            Payment method:
          </p>
          <p className="text-sm text-[#141718] font-semibold quick_sand">
            Credit Card
          </p>
        </div>
      </div>

      <Button
        onClick={() => handleClick("shopping_cart")}
        className="w-[120px] h-13 rounded-full bg-gradient-to-r from-[#40CEEC] to-[#247586] text-lg font-medium text-white mt-7 quick_sand"
      >
        Done
      </Button>
    </div>
  );
}
