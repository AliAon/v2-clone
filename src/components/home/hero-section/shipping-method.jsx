import React, { useState } from "react";
import { BsArrowUpRight } from "react-icons/bs";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
} from "@/components/ui/select";
import Image from "next/image";

const list = [
  {
    name: "DHL Official",
    days: "3 - 7 Days",
  },
  {
    name: "FEDEX",
    days: "4 - 9 Days",
  },
  {
    name: "PARCEL FORCE",
    days: "6 - 10 Days",
  },
  {
    name: "MNG CARGO",
    days: "6 - 10 Days",
  },
  {
    name: "TRANS GLOBAL",
    days: "8 - 12 Days",
  },
  {
    name: "BRUNEL",
    days: "7 - 15 Days",
  },
];

const countries = [
  { label: "USA", value: "usa", flag: "/assets/png/usa.png" },
  { label: "Truky", value: "trukey", flag: "/assets/png/truky.png" },
  { label: "France", value: "fr", flag: "/assets/png/usa.png" },
];

export default function ShippingMethod() {
  const [selectedCountry, setSelectedCountry] = useState("usa");

  const selectedFlag = countries.find((c) => c.value === selectedCountry)?.flag;
  return (
    <>
      <div className="flex items-center justify-between quick_sand px-3 xl:px-5">
        <div className="border-[1.5px] border-[#E3E3E3] rounded-full text-[10px] font-bold px-3 py-2">
          Shipping Method
        </div>
        <p className="text-[10px] font-medium">Delivery Time</p>
      </div>

      <ul className="mt-5 pl-5 xl:pl-8 px-5 quick_sand">
        {list.map((item, index) => (
          <li key={index} className="flex items-center justify-between mb-3">
            <p className="text-[10px] font-semibold text-black">{item.name}</p>
            <p className="text-[10px] text-black">{item.days}</p>
          </li>
        ))}
      </ul>

      <hr className="border-t-2 border-black mt-5 mb-2 md:mb-0" />

      <div className="p-3 md:p-5">
        <div className="flex items-center justify-between">
          <div className="text-[10px] font-bold text-black shadow-sm shadow-[#00000025] rounded-full quick_sand px-3 py-2">
            Estimated Delivery Time
          </div>
          <div className="w-9 h-9 flex items-center justify-center rounded-full border-1 border-[#F6F6F6] shadow-sm shadow-[#00000025] cursor-pointer">
            <BsArrowUpRight size={15} color="#000" />
          </div>
        </div>
      </div>

      <div className="w-full flex justify-between lg:justify-start items-center gap-3 px-3 xl:px-5">
        <Select value={selectedCountry} onValueChange={setSelectedCountry}>
          <SelectTrigger
            icon={false}
            className="w-24 !h-12 border-none bg-transparent focus:ring-0 focus:ring-offset-0 shadow-md shadow-[#00000025] rounded-full cursor-pointer"
          >
            {selectedFlag && (
              <Image
                src={selectedFlag}
                alt="flag"
                width={30}
                height={30}
                className="object-contain"
              />
            )}
          </SelectTrigger>

          <SelectContent className="mt-2 w-auto">
            {countries.map((country) => (
              <SelectItem key={country.value} value={country.value}>
                <div className="flex items-center gap-3 w-auto h-auto">
                  <Image
                    src={country.flag}
                    alt={country.label}
                    width={24}
                    height={24}
                  />
                  {country.label}
                </div>
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
        <Image
          src={"/assets/svg/double-right.svg"}
          alt=""
          width={22}
          height={22}
        />

        <Select value={selectedCountry} onValueChange={setSelectedCountry}>
          <SelectTrigger
            icon={false}
            className="w-24 !h-13 border-none bg-transparent focus:ring-0 focus:ring-offset-0 shadow-md shadow-[#00000025] rounded-full cursor-pointer"
          >
            {selectedFlag && (
              <Image
                src={selectedFlag}
                alt="flag"
                width={30}
                height={30}
                className="object-contain"
              />
            )}
          </SelectTrigger>

          <SelectContent className="mt-2 w-auto">
            {countries.map((country) => (
              <SelectItem key={country.value} value={country.value}>
                <div className="flex items-center gap-3 w-auto h-auto">
                  <Image
                    src={country.flag}
                    alt={country.label}
                    width={24}
                    height={24}
                  />
                  {country.label}
                </div>
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
    </>
  );
}
