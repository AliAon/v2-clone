import ProdcutCard from "@/components/common/product-card";
import { SkeletonCard } from "@/components/common/product-skeleton";
import { Button } from "@/components/ui/button";
import { useGetAllProductQuery } from "@/lib/services/productApi";
import { useRouter } from "next/router";
import React from "react";

export default function BestProducts({ bestProducts }) {
  const router = useRouter();

  const handleClick = () => {
    router.push("/categories");
  };
  return (
    <div className="max-w-7xl mx-auto pb-5 md:pb-16 px-3 md:px-5 xl:px-8">
      <div className="relative flex items-center justify-between">
        <div className="absolute -top-0 left-0 glow-blue"></div>
        <div>
          <div className="flex items-center gap-3">
            <div className="w-1.5 h-5 md:w-3 md:h-9 bg-[#40CEEC]"></div>
            <p className="text-xs md:text-xl font-bold quick_sand bg-gradient-to-r from-black to-[#40CEEC] text-transparent bg-clip-text">
              Best Selling Products
            </p>
          </div>
        </div>
        <Button
          variant="ghost"
          onClick={handleClick}
          className="text-xs text-black font-medium quick_sand"
        >
          View All
        </Button>
      </div>

      <div className="relative grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-x-3 gap-y-5 md:gap-x-5 md:gap-y-8 lg:gap-y-12 mt-3 md:mt-10">
        <div className="absolute top-1/2 -translate-y-1/2 right-0 lg:-right-16  glow-blue"></div>
        {bestProducts.length > 0
          ? bestProducts?.map((product, index) => (
              <ProdcutCard key={index} product={product} />
            ))
          : "No Product Found"}
      </div>
    </div>
  );
}
