import { Button } from "@/components/ui/button";
import React, { useState, useEffect } from "react";
import DropShipping from "./drop-shipping";
import WholeSale from "./whole-sale";
import PreOrder from "./pre-order";
import Customize from "./customize";
import { useDispatch } from "react-redux";
import Image from "next/image";
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
import { countries, tab_list } from "@/data";
import { addItemToCart } from "@/lib/features/cartSlice";
import { Check, CheckCircle } from "lucide-react";
import Link from "next/link";

export default function TabSection({
  product,
  setSelectedImage,
  selectedImage,
}) {
  const variants = product?.variants || [];
  const [variant, setVariant] = useState();
  const [count, setCount] = useState(1);
  const [selectedCountry, setSelectedCountry] = useState("trukey");
  const [isShowCartAlert, setIsShowCartAlert] = useState(false);
  const [selectedVariant, setSelectedVariant] = useState();
  const [visibleTabs, setVisibleTabs] = useState([]);
  const [activeTab, setActiveTab] = useState("");
  const dispatch = useDispatch();
  const [selectedOptions, setSelectedOptions] = useState(() => {});
  const handleSelectChange = (optionName, value) => {
    setSelectedOptions((prev) => ({
      ...prev,
      [optionName]: value,
    }));
  };

  const handleIncreament = () => {
    setCount(count + 1);
  };

  const handleDecreament = () => {
    setCount((prev) => (prev > 0 ? prev - 1 : 0));
  };

  const selectedFlag = countries.find((c) => c.value === selectedCountry)?.flag;

  const handleClick = (image, variant) => {
    setSelectedVariant(image);
    setVariant(variant);
  };

  useEffect(() => {
    if (variants.length > 0) {
      // set first variant
      setVariant(variants[0]);
      setSelectedVariant(variants[0]?.image);

      // set default option values (first value of each option)
      if (product?.option?.length > 0) {
        const defaults = {};
        product.option.forEach((opt) => {
          if (opt.values?.length > 0) {
            defaults[opt.option] = opt.values[0]; // pick first
          }
        });
        setSelectedOptions(defaults);
      }
    }
  }, [variants, product]);

  useEffect(() => {
    if (variant) {
      const availableTabs = {
        dropshipping: variant?.pricing_overrides?.dropshipping?.enabled,
        wholesale: variant?.pricing_overrides?.wholesale?.enabled,
        preorder: variant?.pricing_overrides?.preorder?.enabled ?? false,
        customize: variant?.pricing_overrides?.customization?.enabled,
      };

      const filteredTabs = tab_list.filter(
        (tab) => availableTabs[tab.conditionKey]
      );

      setVisibleTabs(filteredTabs);
    }
  }, [variant]);

  useEffect(() => {
    if (Object.keys(selectedOptions ?? {}).length > 0) {
      // find a variant whose option combination matches all selectedOptions
      const matched = variants.find((v) => {
        const combination = v?.options?.[0]?.combination || {};
        return Object.entries(selectedOptions).every(
          ([key, value]) => combination[key] === value
        );
      });

      if (matched) {
        setVariant(matched);
        setSelectedVariant(matched.image);
        if (matched.image) {
          setSelectedImage(matched?.image[0]);
        }
      }
    }
  }, [selectedOptions, variants]);

  useEffect(() => {
    if (visibleTabs.length > 0) {
      const isActiveTabVisible = visibleTabs.some(
        (tab) => tab.key === activeTab
      );
      if (!isActiveTabVisible) {
        setActiveTab(visibleTabs[0].key);
      }
    }
  }, [visibleTabs, activeTab]);

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  const handleAddToCart = () => {
    const data = {
      name: product?.product_title,
      product_id: variant?.productId,
      variant_id: variant?._id,
      shippingCost: 100,
      quantity: count,
      price: variant?.pricing_overrides?.basePrice,
      image: selectedImage?.url,
      selectedOptions: selectedOptions,
    };
    dispatch(addItemToCart(data));
    setIsShowCartAlert(true);
  };
  return (
    <div className="relative">
      <div className="absolute top-0 -right-10 glow-blue"></div>

      {visibleTabs.length > 0 ? (
        <>
          <div className="h-13 flex items-center justify-between border-t border-b border-[#ECECEC]">
            {visibleTabs.map((item, index) => (
              <Button
                key={index}
                onClick={() => handleTabClick(item.key)}
                className={`h-8 md:h-9 text-[9px] md:text-sm font-medium quick_sand rounded-full hover:bg-gradient-to-r from-[#40CEEC] to-[#247586] shadow-none z-10 px-3 md:px-5 ${
                  item.key === activeTab
                    ? "bg-gradient-to-r from-[#40CEEC] to-[#247586] text-white"
                    : "bg-transparent text-[#7D7B7D] hover:text-white"
                }`}
              >
                {item.name}
              </Button>
            ))}
          </div>

          <div className="pt-4">
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
              <p className="text-[10px] text-gray-600">
                (21,671 User feedback)
              </p>
            </div>
            <p className="text-sm font-bold text-gray-900 pt-3 quick_sand">
              {product?.product_title}
            </p>

            <div className="hidden md:grid grid-cols-3 gap-4 mt-5">
              <p className="text-[9px] md:text-xs text-gray-600 quick_sand">
                Sku:{" "}
                <span className="text-gray-900 font-bold">{variant?.sku}</span>
              </p>
              <p className="text-[9px] md:text-xs text-gray-600 quick_sand">
                Availability:{" "}
                <span className="text-green-500 font-bold capitalize">
                  {product?.status}
                </span>
              </p>
              <div className="flex items-center gap-2">
                <p className="text-[9px] md:text-xs text-gray-600 quick_sand">
                  Ship from:{" "}
                  <span className="text-gray-900 font-bold">Turkey</span>
                </p>
                <Image
                  src={"/assets/png/truky.png"}
                  alt=""
                  width={18}
                  height={18}
                />
              </div>
              <p className="text-[9px] md:text-xs text-gray-600 quick_sand">
                Brand:{" "}
                <span className="text-gray-900 font-bold">
                  {" "}
                  {product?.brand?.name}
                </span>
              </p>
              <p className="text-[9px] md:text-xs text-gray-600 quick_sand">
                Category:{" "}
                <span className="text-gray-900 font-bold">
                  {" "}
                  {product?.category?.name}
                </span>
              </p>
              <p className="text-[9px] md:text-xs text-gray-600 quick_sand">
                Sold this Month:{" "}
                <span className="text-gray-900 font-bold">100+</span>
              </p>
            </div>

            {activeTab === "dropshipping" && (
              <DropShipping
                product={product}
                variant={variant}
                setVariant={setVariant}
                selectedVariant={selectedVariant}
                handleClick={handleClick}
              />
            )}
            {activeTab === "wholesale" && (
              <WholeSale
                product={product}
                variant={variant}
                setVariant={setVariant}
                selectedVariant={selectedVariant}
                handleClick={handleClick}
              />
            )}

            {activeTab === "customize" && (
              <Customize
                product={product}
                variant={variant}
                setVariant={setVariant}
                selectedVariant={selectedVariant}
                handleClick={handleClick}
              />
            )}

            <div className="flex gap-2 justify-between mt-3 md:mt-7">
              {/* <div>
                <p className="text-xs font-bold text-gray-900 quick_sand">
                  Color
                </p>
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
              </div> */}
              <div>
                {product.option?.map((item, index) => (
                  <div key={index}>
                    <p className="text-xs font-bold text-gray-900 quick_sand capitalize">
                      {item.option}
                    </p>
                    <div className="flex">
                      <Select
                        value={selectedOptions[item.option] || ""}
                        onValueChange={(value) =>
                          handleSelectChange(item.option, value)
                        }
                      >
                        <SelectTrigger className="w-[130px] rounded-full border-gray-100 mt-2 cursor-pointer quick_sand capitalize">
                          <SelectValue placeholder={item.option} />
                        </SelectTrigger>
                        <SelectContent className="quick_sand">
                          {item?.values?.map((val, idx) => (
                            <SelectItem
                              className="capitalize"
                              key={idx}
                              value={val}
                            >
                              {val}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>

                      {/* Show clear only on last index */}
                      {index === product.option.length - 1 && (
                        <button
                          onClick={() => setSelectedOptions({})}
                          className="underline text-xs mt-2 ml-2"
                        >
                          Clear
                        </button>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              <div className="hidden md:block border-[1.5px] border-[#40CEEC] rounded-2xl p-4 shadow-md shadow-[#40CEEC66] h-[80px]">
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
            <div>
              <div className="block md:hidden border-[1.5px] border-[#40CEEC] rounded-2xl p-4 shadow-md shadow-[#40CEEC66] mt-4 h-[80px]">
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
            <div className="md:hidden grid grid-cols-3 gap-4 mt-5">
              <p className="text-[9px] md:text-xs text-gray-600 quick_sand">
                Sku:{" "}
                <span className="text-gray-900 font-bold">{variant?.sku}</span>
              </p>
              <p className="text-[9px] md:text-xs text-gray-600 quick_sand">
                Availability:{" "}
                <span className="text-green-500 font-bold">In Stock</span>
              </p>
              <div className="flex items-center gap-2">
                <p className="text-[9px] md:text-xs text-gray-600 quick_sand">
                  Ship from:{" "}
                  <span className="text-gray-900 font-bold">Turkey</span>
                </p>
                <Image
                  src={"/assets/png/truky.png"}
                  alt=""
                  width={18}
                  height={18}
                />
              </div>
              <p className="text-[9px] md:text-xs text-gray-600 quick_sand">
                Brand:{" "}
                <span className="text-gray-900 font-bold">
                  {variant?.brand}
                </span>
              </p>
              <p className="text-[9px] md:text-xs text-gray-600 quick_sand">
                Category:{" "}
                <span className="text-gray-900 font-bold">
                  {variant?.category?.name}
                </span>
              </p>
              <p className="text-[9px] md:text-xs text-gray-600 quick_sand">
                Sold this Month:{" "}
                <span className="text-gray-900 font-bold">100+</span>
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

              <Button
                onClick={handleAddToCart}
                disabled={Object.keys(selectedOptions).length === 0}
                className={`w-[150px] rounded-full quick_sand uppercase text-[9px] md:text-xs font-bold shadow-sm shadow-[#40CEEC4D] 
                ${
                  Object.keys(selectedOptions).length === 0
                    ? "bg-gray-300 cursor-not-allowed" // disabled styles
                    : "bg-[#40CEEC] hover:bg-[#84daeb]"
                }`}
              >
                Add to cart
                <PiShoppingCartSimpleBold size={18} />
              </Button>
              <Button
                variant="outline"
                disabled={Object.keys(selectedOptions).length === 0}
                className={`w-[80px] md:w-[90px] rounded-full quick_sand uppercase md:text-xs font-bold shadow-sm shadow-[#40CEEC4D] text-[9px] 
                ${
                  Object.keys(selectedOptions).length === 0
                    ? "text-gray-400 border-gray-300 cursor-not-allowed" // disabled styles
                    : "text-[#40CEEC] border-[1.5px] border-[#40CEEC]"
                }
              `}
              >
                Buy now
              </Button>
            </div>
            {isShowCartAlert && (
              <div className="border-[2.25px] border-[#40CEEC] rounded flex items-center justify-between  mt-6 p-2">
                <div className="flex items-center gap-2">
                  <CheckCircle color="#40CEEC" size={20} />
                  <span className="text-gray-900 font-bold text-xs quick_sand">
                    “{product?.product_title}” has been added to your cart.
                  </span>
                </div>
                <Link
                  href={"/cart"}
                  className="text-[#40CEEC] font-semibold text-xs underline"
                >
                  View Cart
                </Link>
              </div>
            )}
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

                  <Select
                    value={selectedCountry}
                    onValueChange={setSelectedCountry}
                  >
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
                  <Select
                    value={selectedCountry}
                    onValueChange={setSelectedCountry}
                  >
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
                    <span className="font-bold">
                      {product?.processingTime} days for 80% orders
                    </span>
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
        </>
      ) : (
        <p className="text-sm font-bold text-center text-gray-900 pt-3 quick_sand">
          No Tabs
        </p>
      )}
    </div>
  );
}
