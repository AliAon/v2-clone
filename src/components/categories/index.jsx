import React, { useState } from "react";
import Filters from "./filters";
import ClearFilter from "./filters/clear-filter";
import ProductsList from "./products";
import { IoIosArrowDown } from "react-icons/io";
import { Filter } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "../ui/sheet";
import { useGetAllCategoryQuery } from "@/lib/services/categoryApi";
import { useRouter } from "next/router";

const priceRange = [
  {
    id: "AllPrice",
    name: "All Price",
  },
  {
    id: "Under $20",
    name: "Under $20",
  },
  {
    id: "$25 to $100",
    name: "$25 to $100",
  },
  {
    id: "$100 to $300",
    name: "$100 to $300",
  },
  {
    id: "$300 to $500",
    name: "$300 to $500",
  },
  {
    id: "$500 to $1,000",
    name: "$500 to $1,000",
  },
  {
    id: "$1,000 to $10,000",
    name: "$1,000 to $10,000",
  },
];

const size = [
  {
    id: "S",
    name: "S",
  },
  {
    id: "M",
    name: "M",
  },
  {
    id: "L",
    name: "L",
  },
  {
    id: "XL",
    name: "XL",
  },
  {
    id: "XXL",
    name: "XXL",
  },
  {
    id: "XXXL",
    name: "XXXL",
  },
];

const brands = [
  {
    id: "Apple",
    name: "Apple",
  },
  {
    id: "Google",
    name: "Google",
  },
  {
    id: "Microsoft",
    name: "Microsoft",
  },
  {
    id: "Samsung",
    name: "Samsung",
  },
  {
    id: "Dell",
    name: "Dell",
  },
  {
    id: "HP",
    name: "HP",
  },

  {
    id: "Symphony",
    name: "Symphony",
  },
  {
    id: "Xiaomi",
    name: "Xiaomi",
  },
  {
    id: "Sony",
    name: "Sony",
  },
  {
    id: "Panasonic",
    name: "Panasonic",
  },
  {
    id: "LG",
    name: "LG",
  },
  {
    id: "Intel",
    name: "Intel",
  },
  {
    id: "One Plus",
    name: "One Plus",
  },
];

export default function Categories() {
  const [productCategory, setProductCategory] = useState([]);
  const router = useRouter();

  const { data, isLoading } = useGetAllCategoryQuery();

  const handleRemoveFilter = (itemToRemove) => {
    setProductCategory((prev) =>
      prev.filter((item) => item._id !== itemToRemove._id)
    );

    router.replace(
      {
        pathname: router.pathname,
      },
      undefined,
      { shallow: true }
    );
  };
  return (
    <div className="max-w-7xl mx-auto sm:my-20 mb-5 px-3 md:px-5 xl:px-8">
      <div>
        <div className=" py-2 sm:hidden flex items-center gap-2 ">
          <Sheet>
            <SheetTrigger
              className={
                "border-2 border-[#40CEEC] px-4 py-1 rounded-sm w-[120px] flex items-center justify-between bg-transparent text-black quick_sand font-medium text-sm"
              }
            >
              <span className="pr-6">Filter </span>
              <Filter className="" size={15} />
            </SheetTrigger>
            <SheetContent side="left" className={"overflow-y-scroll"}>
              <Filters
                productList={data}
                selectedItems={productCategory}
                setSelectedItems={setProductCategory}
                priceRange={priceRange}
                size={size}
                brands={brands}
              />
            </SheetContent>
          </Sheet>

          <p className="text-xs quick_sand font-medium text-[#7E7E7E]">{`Home > Men’s Clothing > Men Trench`}</p>
        </div>
      </div>
      <hr className="border-t sm:hidden border-[#DDDDDD]" />
      <div className="relative flex gap-10 quick_sand">
        <div className="absolute top-0 -right-10 glow-blue"></div>
        <div className="w-[300px] sm:block hidden">
          <p className="text-sm font-medium text-[#7E7E7E]">{`Home > Men’s Clothing > Men Trench`}</p>
        </div>
        <div className="flex-1 relative flex justify-between p-2">
          <p className="text-sm  font-semibold text-black">
            Showing 1-16 of 72 results
          </p>

          <div className="flex items-center gap-2 cursor-pointer z-10">
            <p className="text-sm font-semibold text-black">Shot by latest</p>
            <IoIosArrowDown size={15} color="#7D7B7D" />
          </div>
        </div>
      </div>

      <hr className="border-t border-[#DDDDDD] " />

      <div className="flex gap-10 mt-3">
        <div className="hidden lg:block w-[270px] xl:w-[300px] mt-5">
          <Filters
            isLoading={isLoading}
            productList={data}
            selectedItems={productCategory}
            setSelectedItems={setProductCategory}
            priceRange={priceRange}
            size={size}
            brands={brands}
          />
        </div>
        <div className="flex-1">
          {productCategory.length > 0 && (
            <div>
              <div className="flex items-center flex-wrap gap-2">
                {productCategory.map((item, index) => (
                  <ClearFilter
                    key={index}
                    item={item}
                    onRemove={handleRemoveFilter}
                  />
                ))}
              </div>
              <hr className="border-t border-[#DDDDDD] mt-2" />
            </div>
          )}

          <ProductsList />
        </div>
      </div>
    </div>
  );
}
