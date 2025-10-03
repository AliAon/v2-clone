import { Button } from "@/components/ui/button";
import Image from "next/image";
import React, { useState } from "react";
import { AiFillStar } from "react-icons/ai";

const list = [
  {
    key: "description",
    name: "Description",
    count: null,
  },
  {
    key: "buyer_review",
    name: "Buyer Review",
    count: 1,
  },
  {
    key: "merchant_comment",
    name: "Merchant Comment",
    count: 6,
  },
];

export default function Discription({ product }) {
  const [active, setActive] = useState("description");

  const handleActive = (value) => {
    setActive(value);
  };

  return (
    <div>
      <div className="flex items-center justify-between border-2 border-[#40CEEC] shadow-md shadow-[#40CEEC66] rounded-2xl p-5 z-10 bg-white">
        <div className="flex items-center gap-2">
          <Image src={"/assets/png/avatar.png"} alt="" width={60} height={60} />
          <div>
            <p className="text-xs font-medium text-black quick_sand">
              Offer by Supplier:{" "}
              <span className="text-[#40CEEC] font-bold">Jingqian</span>
            </p>
            <div className="flex items-center gap-1 mt-1.5">
              <AiFillStar size={18} color="#EFD33D" />
              <AiFillStar size={18} color="#EFD33D" />
              <AiFillStar size={18} color="#EFD33D" />
              <AiFillStar size={18} color="#EFD33D" />
              <AiFillStar size={18} color="#EFD33D" />
            </div>
          </div>
        </div>
        <Button
          variant={"outline"}
          className="h-8 border-[#40CEEC] text-xs text-[#40CEEC] font-medium quick_sand rounded-full px-6"
        >
          Contact
        </Button>
      </div>

      <div className="relative mt-12">
        <div className="absolute top-5 -left-10 glow-blue"></div>
        <div className="absolute top-1/2 translate-y-1/2 -left-16 glow-blue"></div>
        <div className="absolute bottom-0 -left-16 glow-blue"></div>
        <div className="h-14 flex items-center justify-between border-t border-b border-[#ECECEC]">
          {list.map((item, index) => (
            <button
              key={index}
              onClick={() => handleActive(item.key)}
              className={`text-[9px] md:text-sm quick_sand border rounded-full px-3 md:px-5 py-2 cursor-pointer z-10 bg-white ${
                active === item.key
                  ? "border-[#40CEEC] text-[#40CEEC] font-bold shadow-md shadow-[#40CEEC4D]"
                  : "border-transparent text-[#7D7B7D] font-medium"
              }`}
            >
              {item.name} {item.count && `(${item.count})`}
            </button>
          ))}
        </div>

        <div className="mt-5 md:mt-10">
          {active === "description" && (
            <div className="quick_sand">
              <p
                className="text-sm quick_sand text-[#7E7E7E]"
                dangerouslySetInnerHTML={{ __html: product?.description }}
              ></p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
