"use client";

import ProdcutCard from "@/components/common/product-card";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import CarouselDots from "@/components/ui/carousel-dots";

export default function Recommended({ recommendedProducts }) {
  const [api, setApi] = useState();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!api) {
      return;
    }
    const snapPoints = api.scrollSnapList();
    setCount(snapPoints.length);
    setCurrent(api.selectedScrollSnap());

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap());
    });
  }, [api]);

  const handleDotClick = (index) => {
    api?.scrollTo(index);
  };

  return (
    <div className="max-w-7xl mx-auto pb-5 md:pb-16 px-3 md:px-5 xl:px-8">
      <div className="relative flex items-center justify-between">
        <div className="absolute top-10 left-0 lg:-left-10 glow-blue"></div>
        <div>
          <div className="flex items-center gap-3">
            <div className="w-1.5 h-5 md:w-3 md:h-9 bg-[#40CEEC]"></div>
            <p className="text-xs md:text-xl font-bold quick_sand bg-gradient-to-r from-black to-[#40CEEC] text-transparent bg-clip-text">
              Recommended
            </p>
          </div>
        </div>
        <Button
          variant="ghost"
          className="text-xs text-black font-medium quick_sand"
        >
          View All
        </Button>
      </div>

      <div className="relative mt-3 md:mt-10">
        <div className="absolute bottom-10 right-0 lg:-right-10 glow-blue"></div>
        <Carousel setApi={setApi}>
          <CarouselContent>
            {recommendedProducts?.map((product) => (
              <CarouselItem className="basis-1/2 md:basis-1/3 lg:basis-1/4 xl:basis-1/5">
                <ProdcutCard key={product.id} product={product} />
              </CarouselItem>
            ))}
          </CarouselContent>

          <CarouselPrevious className="hidden xl:flex" />
          <CarouselNext className="hidden xl:flex" />
        </Carousel>

        <div className="mt-3 md:mt-6">
          <CarouselDots
            count={count}
            current={current}
            handleDotClick={handleDotClick}
          />
        </div>
      </div>
    </div>
  );
}
