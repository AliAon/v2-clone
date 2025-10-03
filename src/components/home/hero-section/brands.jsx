"use client";

import { useState, useEffect } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";
import CarouselDots from "@/components/ui/carousel-dots";

export default function Brands() {
  const [api, setApi] = useState();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!api) return;

    const snapPoints = api.scrollSnapList();
    setCount(snapPoints.length);
    setCurrent(api.selectedScrollSnap());

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap());
    });

    const interval = setInterval(() => {
      if (!api) return;
      const nextIndex = (api.selectedScrollSnap() + 1) % snapPoints.length;
      api.scrollTo(nextIndex);
    }, 2000);

    return () => clearInterval(interval);
  }, [api]);

  const handleDotClick = (index) => {
    api?.scrollTo(index);
  };

  const brandLogos = [
    { src: "/assets/png/shopify.png", width: 101, height: 33 },
    { src: "/assets/png/commerce.png", width: 168, height: 36 },
    { src: "/assets/png/tiktok.png", width: 141, height: 36 },
    { src: "/assets/png/ebay.png", width: 84, height: 39 },
    { src: "/assets/png/etsy.png", width: 68, height: 33 },
    { src: "/assets/png/shopify.png", width: 101, height: 33 },
    { src: "/assets/png/commerce.png", width: 168, height: 36 },
    { src: "/assets/png/tiktok.png", width: 141, height: 36 },
    { src: "/assets/png/ebay.png", width: 84, height: 39 },
    { src: "/assets/png/etsy.png", width: 68, height: 33 },
  ];

  return (
    <div className="relative mt-5 md:mt-16">
      <div className="absolute -top-8 right-0 lg:-right-16 glow-blue z-10"></div>

      <Carousel setApi={setApi}>
        <CarouselContent className="h-29 items-center px-2">
          {brandLogos.map((logo, idx) => (
            <CarouselItem
              key={idx}
              className="basis-1/2 md:basis-1/3 lg:basis-1/4 xl:basis-1/5"
            >
              <div className="col-span-5 h-24 flex items-center justify-center rounded-3xl shadow-[inset_0px_0px_6px_rgba(40,206,236,0.5),_0px_0px_11.26px_rgba(40,206,236,0.8)] bg-white">
                <Image
                  src={logo.src}
                  alt=""
                  width={logo.width}
                  height={logo.height}
                />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>

        <CarouselPrevious className="hidden" />
        <CarouselNext className="hidden" />
      </Carousel>

      <div className="mt-3 md:mt-6">
        <CarouselDots
          count={count}
          current={current}
          handleDotClick={handleDotClick}
        />
      </div>
    </div>
  );
}
