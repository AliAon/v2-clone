import React, { useEffect, useState } from "react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import Image from "next/image";
import { IoIosArrowDown } from "react-icons/io";
import { useGetAllCategoryQuery } from "@/lib/services/categoryApi";
import Loader from "../loader";
import { useRouter } from "next/router";

export default function AllCategory() {
  const [popoverOpen, setPopoverOpen] = useState(false);
  const [active, setActive] = useState("");
  const [activeItem, setActiveItem] = useState([]);
  const router = useRouter();
  const location = router.pathname;

  const { data, isLoading } = useGetAllCategoryQuery();
  console.log("data", data);

  useEffect(() => {
    if (data) {
      setActive(data[0].name);
      setActiveItem(data[0].subcategories);
    }
  }, [data]);

  const handleClick = (active, activeItem) => {
    setActive(active);
    setActiveItem(activeItem);
  };
  const handleClickItem = (category, subCategory) => {
    const encoded = encodeURIComponent(category);
    if (location === "/categories") {
      router.replace(
        `/categories?category=${encoded}&subCategory=${subCategory}`
      );
    } else {
      router.push(`/categories?category=${encoded}&subCategory=${subCategory}`);
      setPopoverOpen(false);
    }
  };

  return (
    <div className="relative">
      <Popover open={popoverOpen} onOpenChange={setPopoverOpen}>
        <PopoverTrigger className="w-[115px] md:w-[195px] h-7 md:h-9 text-[8px] md:text-xs font-bold flex items-center justify-between md:justify-center gap-2 bg-gradient-to-r from-[#40CEEC] to-[#247586] rounded-sm md:rounded-md !text-white quick_sand cursor-pointer px-3 md:px-5">
          <Image
            src={"/assets/svg/browse.svg"}
            alt="flag"
            width={12}
            height={12}
            className="w-[8px] h-[8px] md:w-3 md:h-3"
          />
          All Categories
          <IoIosArrowDown
            color="#fff"
            className="w-[7px] h-[7px] md:w-[15px] md:h-[15px] md:mt-0.5"
          />
        </PopoverTrigger>
        <PopoverContent className="w-[340px] sm:w-[620px] md:w-[700px] lg:w-[900px] absolute -left-15 md:-left-24 xl:left-1/2 mt-1.5 rounded-t-none rounded-b-2xl flex gap-3">
          {isLoading ? (
            <div className="w-full h-40 flex items-center justify-center">
              <Loader />
            </div>
          ) : data?.length === 0 ? (
            <div className="w-full h-40 flex items-center justify-center text-center">
              <p>No Category Found</p>
            </div>
          ) : (
            <>
              <div className="relative w-[120px] sm:w-[180px] lg:w-[210px] border-r border-[#EBEEF6] pr-5 space-y-0.5">
                <div className="absolute top-1/2 -translate-y-1/2 left-0 glow-blue -z-10"></div>
                {data?.map((item, index) => (
                  <div
                    key={index}
                    onClick={() => handleClick(item?.name, item?.subcategories)}
                    className={`text-xs font-medium quick_sand rounded-md px-3 md:px-5 py-3 cursor-pointer hover:bg-gradient-to-r from-[#40CEEC] to-[#2491A4] hover:text-white z-10 ${
                      active === item?.name
                        ? "text-white bg-gradient-to-r from-[#40CEEC] to-[#2491A4]"
                        : "text-gray-700"
                    }`}
                  >
                    {item?.name}
                  </div>
                ))}
              </div>
              <div className="relative flex-1 sm:px-3 md:px-5 py-2">
                <div className="absolute top-0 left-10 glow-blue -z-10"></div>
                <div className="absolute top-0 right-10 glow-blue -z-10"></div>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 glow-blue -z-10"></div>
                <div className="absolute bottom-0 right-10 glow-blue -z-10"></div>
                <div className="absolute bottom-0 left-10 glow-blue -z-10"></div>
                <div className="flex flex-wrap justify-center gap-7 border-b border-[#EBEEF6] pb-4">
                  {activeItem?.length === 0 ? (
                    <div className="w-full h-40 flex items-center justify-center text-center">
                      <p>No Sub-Category Found</p>
                    </div>
                  ) : (
                    activeItem?.map((item, index) => (
                      <div
                        onClick={() => handleClickItem(active, item?.name)}
                        className="flex flex-col items-center cursor-pointer"
                      >
                        <Image
                          src={"/assets/png/search-icon.png"}
                          alt=""
                          width={45}
                          height={45}
                          className="w-7 md:w-[45px]"
                        />

                        <p className="text-[10px] text-gray-700 font-medium quick_sand pt-2 text-center">
                          {item?.name}
                        </p>
                      </div>
                    ))
                  )}
                </div>
              </div>
            </>
          )}
        </PopoverContent>
      </Popover>
    </div>
  );
}
