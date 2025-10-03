import React, { useState } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import Image from "next/image";
import { IoIosArrowDown } from "react-icons/io";
import { useRouter } from "next/router";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import AllCategory from "./all-category";

const meuu_list = [
  {
    name: "Home",
    href: "/",
  },
  {
    name: "Best Seller",
    href: "/best-seller",
  },
  {
    name: "Won Fast",
    href: "/won-fast",
  },
  {
    name: "Print on Demend",
    href: "/print-on-demand",
  },
];

const countries = [
  { label: "USA", value: "usa", flag: "/assets/png/usa.png" },
  { label: "Truky", value: "trukey", flag: "/assets/png/truky.png" },
  { label: "France", value: "fr", flag: "/assets/png/usa.png" },
];

export default function SubNavbar() {
  const router = useRouter();
  const pathname = router.pathname;
  const [selectedCountry, setSelectedCountry] = useState("usa");

  const selectedFlag = countries.find((c) => c.value === selectedCountry)?.flag;
  return (
    <div className="border-t border-b border-[#ECECEC]">
      <div className="max-w-7xl h-10 md:h-14 mx-auto flex items-center justify-between px-3 md:px-5 xl:px-8">
        <div className="flex items-center gap-6">
          <AllCategory />

          <div className="hidden xl:flex items-center gap-1.5">
            <Image src={"/assets/svg/deal.svg"} alt="" width={15} height={15} />
            <p className="quick_sand text-xs text-[#7D7B7D] font-bold">Deals</p>
          </div>

          <ul className="hidden xl:flex items-center gap-6 quick_sand">
            {meuu_list.map((item, index) => (
              <Link
                href={item.href}
                key={index}
                className={`flex items-center gap-1 text-xs font-bold ${
                  pathname === item.href ? "text-[#40CEEC]" : "text-[#7D7B7D]"
                }`}
              >
                {item.name}
                <IoIosArrowDown
                  size={10}
                  className={`${
                    pathname === item.href ? "text-[#40CEEC]" : "text-[#7D7B7D]"
                  }`}
                />
              </Link>
            ))}
          </ul>
        </div>
        <div className="flex items-center gap-2 md:gap-5 lg:gap-8 inter">
          <Button className="w-14 h-7 md:w-[90px] md:h-[35px] flex items-center gap-2 md:text-xs text-white font-bold bg-gradient-to-r from-[#40CEEC] to-[#247586] text-[6px] rounded-sm md:rounded-md">
            <Image
              src={"/assets/svg/wona-ai.svg"}
              alt=""
              width={15}
              height={15}
              className="w-[8px] h-[8px] md:w-[15px] md:h-[15px]"
            />
            WONA
          </Button>

          <Button
            variant="outline"
            className="inter gradient-border-text w-14 h-8 md:w-[80px] md:h-[38px] text-[6px] md:text-xs font-bold"
            style={{
              border: "3px solid transparent",
            }}
          >
            My Won
          </Button>

          <div className="flex items-center gap-3">
            <Image
              src={"/assets/png/truky.png"}
              alt=""
              width={18}
              height={18}
              className="w-[12px] h-[12px] md:w-[18px] md:h-[18px]"
            />
            <Image
              src={"/assets/svg/double-right.svg"}
              alt=""
              width={22}
              height={22}
              className="w-[10px] h-[10px] md:w-[22px] md:h-[22px]"
            />

            <Select value={selectedCountry} onValueChange={setSelectedCountry}>
              <SelectTrigger
                icon={false}
                className="w-auto h-auto p-0 border-none bg-transparent focus:ring-0 focus:ring-offset-0"
              >
                {selectedFlag && (
                  <Image
                    src={selectedFlag}
                    alt="flag"
                    width={18}
                    height={18}
                    className="w-[12px] h-[12px] md:w-[18px] md:h-[18px]"
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
        </div>
      </div>
    </div>
  );
}
