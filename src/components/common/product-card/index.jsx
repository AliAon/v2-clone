import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import { GoHeart } from "react-icons/go";
import { IoCartOutline } from "react-icons/io5";

export default function ProdcutCard({ product }) {
  const router = useRouter();
  const handleClick = () => {
    router.push(`/product/${product._id}`);
  };

  return (
    <div className="z-10">
      <div
        onClick={handleClick}
        className="relative h-[280px] bg-gradient-to-b from-[#40CEEC] to-[#247586] rounded-[22px] shadow-[0px_0px_5px_rgba(0,0,0,0.25)] p-[3px] cursor-pointer"
      >
        <div className="absolute top-3 left-3 w-9 h-9 flex items-center justify-center bg-white rounded-full">
          <GoHeart size={19} className="cursor-pointer" />
        </div>
        <img
          src={product?.media[0]?.url || "/assets/png/card.png"}
          alt=""
          width={217}
          height={300}
          className="w-full  object-cover h-full rounded-[20px]"
        />
      </div>

      <div className="px-3 pt-4">
        <Link
          href={`/product/${product?._id}`}
          className="text-xs md:text-sm text-[#253D4E] font-semibold quick_sand line-clamp-1"
        >
          {product?.product_title ||
            "Lorem ipsum is a dummy or placeholder text commonly used."}
        </Link>

        <div className="flex items-center justify-between mt-1.5">
          <p className="text-base md:text-xl text-[#40CEEC] quick_sand font-bold">
            $ {product?.pricing[0]?.basePrice || "10.00"}
          </p>
          <IoCartOutline
            color="#253D4E"
            className="w-3.5 h-3.5 md:w-5 md:h-5 cursor-pointer"
          />
        </div>
      </div>
    </div>
  );
}
