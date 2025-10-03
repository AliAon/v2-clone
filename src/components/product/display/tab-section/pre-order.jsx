import Image from "next/image";
import React, { useState } from "react";
import { AiFillStar } from "react-icons/ai";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import {
  PiShoppingCartSimpleBold,
  PiArrowsClockwise,
  PiCopyLight,
} from "react-icons/pi";
import { GoHeart } from "react-icons/go";
import { FaFacebook, FaTwitter, FaPinterestP } from "react-icons/fa";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";

const countries = [
  { label: "USA", value: "usa", flag: "/assets/png/usa.png" },
  { label: "Truky", value: "trukey", flag: "/assets/png/truky.png" },
  { label: "France", value: "fr", flag: "/assets/png/usa.png" },
];

export default function PreOrder({
  product,
  variant,
  setVariant,
  handleClick,
  selectedVariant,
}) {
  const [count, setCount] = useState(1);
  const [selectedCountry, setSelectedCountry] = useState("trukey");

  const handleIncreament = () => {
    if (count < variant?.preorder?.maxQuantity) {
      setCount(count + 1);
    }
  };

  const handleDecreament = () => {
    if (count > variant?.preorder?.minQuantity) {
      setCount(count - 1);
    }
  };

  const selectedFlag = countries.find((c) => c.value === selectedCountry)?.flag;

  // const sizes = variant?.options.find((o) => o.name === "size");
  // const sizeOptions = sizes ? [{ name: sizes.value, value: sizes.value }] : [];
  const sizeOptions = [];

  return (
    <div>
      <div className="flex items-center gap-2 quick_sand">
        <div className="flex items-center gap-1">
          <AiFillStar size={18} color="#EFD33D" />
          <AiFillStar size={18} color="#EFD33D" />
          <AiFillStar size={18} color="#EFD33D" />
          <AiFillStar size={18} color="#EFD33D" />
          <AiFillStar size={18} color="#EFD33D" />
        </div>
        <p className="text-[10px] font-semibold text-gray-900">
          4.7 Star Rating
        </p>
        <p className="text-[10px] text-gray-600">(21,671 User feedback)</p>
      </div>
      <p className="text-sm font-bold text-gray-900 pt-3 quick_sand">
        {product?.name}
      </p>

      <div className="hidden md:grid grid-cols-3 gap-4 mt-5">
        <p className="text-[9px] md:text-xs text-gray-600 quick_sand">
          Sku: <span className="text-gray-900 font-bold">A264671</span>
        </p>
        <p className="text-[9px] md:text-xs text-gray-600 quick_sand">
          Availability:{" "}
          <span className="text-green-500 font-bold capitalize">
            {product?.status}
          </span>
        </p>
        <div className="flex items-center gap-2">
          <p className="text-[9px] md:text-xs text-gray-600 quick_sand">
            Ship from: <span className="text-gray-900 font-bold">Turkey</span>
          </p>
          <Image src={"/assets/png/truky.png"} alt="" width={18} height={18} />
        </div>
        <p className="text-[9px] md:text-xs text-gray-600 quick_sand">
          Brand: <span className="text-gray-900 font-bold">Outfitters</span>
        </p>
        <p className="text-[9px] md:text-xs text-gray-600 quick_sand">
          Category:{" "}
          <span className="text-gray-900 font-bold">{`Men’s Clothing`}</span>
        </p>
        <p className="text-[9px] md:text-xs text-gray-600 quick_sand">
          Sold this Month: <span className="text-gray-900 font-bold">100+</span>
        </p>
      </div>

      <div className="h-12 flex items-center gap-3 mt-3 md:mt-7">
        <div className="flex gap-1.5">
          {variant?.preorder?.priceRange?.map((item, index) => (
            <div key={index} className="quick_sand">
              <p className="text-xl font-semibold text-[#40CEEC] quick_sand text-center">
                ${item?.price}
              </p>
              <p className="text-sm text-center">MOQ≥{item?.max}</p>
            </div>
          ))}
          {/* <p className="text-sm text-gray-500 line-through quick_sand">
            $199.00
          </p> */}
        </div>

        {/* <div className="w-fit bg-[#EFD33D] text-sm font-semibold quick_sand text-gray-900 text-center rounded md:rounded-sm px-3 py-2 md:px-4 md:py-2.5">
          21% OFF
        </div> */}
      </div>

      <div className="flex justify-between mt-3 md:mt-7">
        <div>
          <p className="text-xs font-bold text-gray-900 quick_sand">Color</p>
          <div className="flex items-center gap-3 mt-2">
            {product?.variants?.map((item, index) => (
              <div
                key={index}
                onClick={() => {
                  handleClick(item?.image);
                  setVariant(item);
                }}
                className={`w-[55px] h-[55px] flex items-center justify-center !rounded-lg cursor-pointer p-2 ${
                  item?.image === selectedVariant
                    ? "border-[1.5px] border-transparent gradient-border-text !rounded-lg"
                    : "border"
                }`}
              >
                <Image
                  src={item?.image}
                  alt=""
                  width={72}
                  height={72}
                  className="w-[32px] h-[40px]"
                />
              </div>
            ))}
          </div>
        </div>

        <div>
          <p className="text-xs font-bold text-gray-900 quick_sand">Size</p>

          <Select>
            <SelectTrigger className="w-[130px] rounded-full border-gray-100 mt-2 cursor-pointer  quick_sand">
              <SelectValue placeholder="Size" />
            </SelectTrigger>
            <SelectContent className="quick_sand">
              {sizeOptions?.map((item, index) => (
                <SelectItem
                  className="capitalize"
                  key={index}
                  value={item.value}
                >
                  {item.name}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <div className="hidden md:block border-[1.5px] border-[#40CEEC] rounded-2xl p-4 shadow-md shadow-[#40CEEC66]">
          <p className="text-xs text-gray-900 quick_sand">
            100% Guarantee Safe Checkout
          </p>

          <Image
            src={"/assets/png/payment-method.png"}
            alt=""
            width={200}
            height={11}
            className="mt-3"
          />
        </div>
      </div>

      <div className="block md:hidden border-[1.5px] border-[#40CEEC] rounded-2xl p-4 shadow-md shadow-[#40CEEC66] mt-4">
        <p className="text-xs text-gray-900 quick_sand">
          100% Guarantee Safe Checkout
        </p>

        <Image
          src={"/assets/png/payment-method.png"}
          alt=""
          width={200}
          height={11}
          className="mt-3"
        />
      </div>
      <div className="md:hidden grid grid-cols-3 gap-4 mt-5">
        <p className="text-[9px] md:text-xs text-gray-600 quick_sand">
          Sku: <span className="text-gray-900 font-bold">A264671</span>
        </p>
        <p className="text-[9px] md:text-xs text-gray-600 quick_sand">
          Availability:{" "}
          <span className="text-green-500 font-bold">In Stock</span>
        </p>
        <div className="flex items-center gap-2">
          <p className="text-[9px] md:text-xs text-gray-600 quick_sand">
            Ship from: <span className="text-gray-900 font-bold">Turkey</span>
          </p>
          <Image src={"/assets/png/truky.png"} alt="" width={18} height={18} />
        </div>
        <p className="text-[9px] md:text-xs text-gray-600 quick_sand">
          Brand: <span className="text-gray-900 font-bold">Outfitters</span>
        </p>
        <p className="text-[9px] md:text-xs text-gray-600 quick_sand">
          Category:{" "}
          <span className="text-gray-900 font-bold">{`Men’s Clothing`}</span>
        </p>
        <p className="text-[9px] md:text-xs text-gray-600 quick_sand">
          Sold this Month: <span className="text-gray-900 font-bold">100+</span>
        </p>
      </div>

      <div className="flex gap-5 mt-6">
        <div className="flex items-center gap-3 border border-gray-100 rounded-full px-3 py-2 shadow-sm shadow-[#40CEEC4D]">
          <AiOutlineMinus
            onClick={handleDecreament}
            size={13}
            color="#191C1F"
            className="cursor-pointer"
          />
          <p className="text-xs text-gray-700 quick_sand">{count}</p>
          <AiOutlinePlus
            onClick={handleIncreament}
            size={13}
            color="#191C1F"
            className="cursor-pointer"
          />
        </div>

        <Button className="w-[150px] bg-[#40CEEC] rounded-full quick_sand uppercase text-[9px] md:text-xs font-bold hover:bg-[#84daeb] shadow-sm shadow-[#40CEEC4D]">
          Add to card
          <PiShoppingCartSimpleBold size={18} />
        </Button>

        <Button
          variant={"outline"}
          className="w-[80px] md:w-[90px] text-[#40CEEC] border-[1.5px] border-[#40CEEC] rounded-full quick_sand uppercase md:text-xs font-bold shadow-sm shadow-[#40CEEC4D] text-[9px]"
        >
          Buy now
        </Button>
      </div>

      <div className="relative flex items-center justify-between mt-6">
        <div className="absolute top-0 -right-10 glow-blue"></div>
        <div className="flex items-center gap-5">
          <div className="flex items-center gap-2">
            <GoHeart
              color="#475156"
              className="w-3 h-3 md:w-[18px] md:h-[18px]"
            />
            <p className="text-[9px] md:text-xs text-gray-700 quick_sand">
              Add to Wishlist
            </p>
          </div>
          <div className="flex items-center gap-2">
            <PiArrowsClockwise
              color="#475156"
              className="w-3 h-3 md:w-[18px] md:h-[18px]"
            />
            <p className="text-[9px] md:text-xs text-gray-700 quick_sand">
              Add to Compare
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2 md:gap-5 z-10">
          <p className="text-[9px] md:text-xs text-gray-700 quick_sand">
            Share product:
          </p>
          <div className="flex items-center gap-3">
            <PiCopyLight
              color="#475156"
              className="w-3 h-3 md:w-[18px] md:h-[18px] cursor-pointer"
            />
            <FaFacebook
              color="#40CEEC"
              className="w-3 h-3 md:w-[18px] md:h-[18px] cursor-pointer"
            />
            <FaTwitter
              color="#475156"
              className="w-3 h-3 md:w-[18px] md:h-[18px] cursor-pointer"
            />
            <FaPinterestP
              color="#475156"
              className="w-3 h-3 md:w-[18px] md:h-[18px] cursor-pointer"
            />
          </div>
        </div>
      </div>

      <div className="border-[2.25px] border-[#40CEEC] rounded-2xl p-4 mt-7 z-10">
        <div className="w-full grid grid-cols-12 xl:flex items-center gap-5 md:gap-8">
          <div className="col-span-6">
            <p className="text-xs font-bold quick_sand text-black pb-2">
              Selling On:
            </p>

            <Select value={selectedCountry} onValueChange={setSelectedCountry}>
              <SelectTrigger
                icon={false}
                className="w-full xl:w-25 !h-11 border-none bg-transparent focus:ring-0 focus:ring-offset-0 shadow-md shadow-[#40CEEC80] rounded-full cursor-pointer"
              >
                {selectedFlag && (
                  <Image
                    src={selectedFlag}
                    alt="flag"
                    width={27}
                    height={27}
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
          <div className="col-span-6">
            <p className="text-xs font-bold quick_sand text-black pb-2">
              Ship To:
            </p>
            <Select value={selectedCountry} onValueChange={setSelectedCountry}>
              <SelectTrigger
                icon={false}
                className="w-full xl:w-25 !h-11 border-none focus:ring-0 focus:ring-offset-0 shadow-md shadow-[#40CEEC80] rounded-full cursor-pointer bg-white"
              >
                {selectedFlag && (
                  <Image
                    src={selectedFlag}
                    alt="flag"
                    width={27}
                    height={27}
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

          <div className="col-span-12 flex-1">
            <p className="text-xs font-bold quick_sand text-black pb-2">
              By Shipping Method:
            </p>
            <Select>
              <SelectTrigger className="relative w-full !h-11 border-none bg-white focus:ring-0 focus:ring-offset-0 shadow-md shadow-[#40CEEC80] rounded-full cursor-pointer quick_sand ps-36 font-bold text-[#40CEEC]">
                <SelectValue placeholder="Size" />
                <p className="absolute left-3 text-xs font-medium text-black">
                  WON Packet Ordinary:
                </p>
              </SelectTrigger>
              <SelectContent className="quick_sand">
                <SelectItem value="small">Small</SelectItem>
                <SelectItem value="medium">Medium</SelectItem>
                <SelectItem value="large">Large</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        <div className="flex flex-col xl:flex-row justify-between mt-3">
          <div>
            <p className="text-xs font-medium quick_sand text-black">
              Estimated Processing Time:{" "}
              <span className="font-bold">1-3 days for 80% orders</span>
            </p>
            <p className="text-xs font-medium quick_sand text-black pt-3">
              Estimated Delivery Time:{" "}
              <span className="font-bold"> 7-12 days</span>
            </p>
            <p className="text-xs font-medium quick_sand text-black pt-3">
              Shipping Fee: <span className="font-bold">$8.72</span>
            </p>
          </div>
          <div>
            <div className="flex justify-end">
              <Button
                variant={"outline"}
                className="h-8 border-[#7D7B7D] text-xs text-[#7D7B7D] font-medium quick_sand rounded-full px-6"
              >
                Buy Example
              </Button>
            </div>

            <div className="flex gap-3 mt-4">
              <Button
                variant={"outline"}
                className="h-8 border-[#40CEEC] text-xs text-[#40CEEC] font-medium quick_sand rounded-full px-4 md:px-6"
              >
                List
              </Button>
              <Button
                variant={"outline"}
                className="h-8 border-[#40CEEC] text-xs text-[#40CEEC] font-medium quick_sand rounded-full px-4 md:px-6"
              >
                Connect
              </Button>
              <Button
                variant={"outline"}
                className="h-8 border-[#7D7B7D] text-xs text-[#7D7B7D] font-medium quick_sand rounded-full px-4 md:px-6"
              >
                Add to My Products
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
