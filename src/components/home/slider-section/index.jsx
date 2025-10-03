import { Button } from "@/components/ui/button";
import React, { useEffect, useState } from "react";
import CardSlider from "./slider";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import CarouselDots from "@/components/ui/carousel-dots";
import Image from "next/image";

export default function SliderSection() {
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
    <div className="py-5 md:py-20 border-t border-b border-[#40CEEC] mt-5 md:mt-10 mb-5 md:mb-24 pl-3 pr-3 md:pr-0 md:pl-5 xl:pl-8">
      <div className="max-w-[1390px] ml-auto 2xl:max-w-7xl 2xl:mx-auto flex flex-col lg:flex-row items-start lg:items-center gap-5 md:gap-10">
        <div className="w-full lg:w-[360px]">
          <p className="text-base md:text-3xl text-center md:text-left font-bold text-black quick_sand">
            Lorem Ipsum is simply dummy{" "}
            <span className="text-[#40CEEC] font-normal">Text</span>
          </p>
          <p className="text-[8px] md:text-base text-center md:text-left font-semibold text-[#7D7B7D] quick_sand pt-1 md:pt-3">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </p>

          <Button className="hidden md:block w-[187px] h-[60px] rounded-full bg-gradient-to-r from-[#40CEEC] to-[#247586] text-xl font-bold text-white mt-7 inter">
            View More
          </Button>
        </div>

        <CardSlider />

        <div className="block md:hidden">
          <Carousel setApi={setApi}>
            <CarouselContent>
              <CarouselItem className="basis-1/2">
                <Image
                  src={"/assets/png/slider-1.png"}
                  alt=""
                  width={164}
                  height={246}
                  className="w-full"
                />
              </CarouselItem>
              <CarouselItem className="basis-1/2">
                <Image
                  src={"/assets/png/slider-1.png"}
                  alt=""
                  width={164}
                  height={246}
                  className="w-full"
                />
              </CarouselItem>
              <CarouselItem className="basis-1/2">
                <Image
                  src={"/assets/png/slider-1.png"}
                  alt=""
                  width={164}
                  height={246}
                  className="w-full"
                />
              </CarouselItem>
              <CarouselItem className="basis-1/2">
                <Image
                  src={"/assets/png/slider-1.png"}
                  alt=""
                  width={164}
                  height={246}
                  className="w-full"
                />
              </CarouselItem>
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

          <Button className="w-full h-10 rounded-xl bg-gradient-to-r from-[#40CEEC] to-[#247586] inter font-semibold text-sm text-white mt-2">
            Shop Now
          </Button>
        </div>
      </div>
    </div>
  );
}
