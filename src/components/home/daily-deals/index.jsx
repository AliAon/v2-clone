import { Button } from "@/components/ui/button";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import CarouselDots from "@/components/ui/carousel-dots";

export default function DailyDeals() {
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
      <div className="flex items-center justify-between">
        <div>
          <div className="flex items-center gap-3">
            <div className="w-1.5 h-5 md:w-3 md:h-9 bg-[#40CEEC]"></div>
            <p className="text-xs md:text-xl font-bold quick_sand bg-gradient-to-r from-black to-[#40CEEC] text-transparent bg-clip-text">
              Daily Deals
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

      <div className="max-w-6xl mx-auto hidden md:grid grid-cols-2 gap-5 mt-3 md:mt-10">
        <div className="relative">
          <div className="absolute top-20 left-0 lg:-left-16 glow-blue z-10"></div>
          <div className="absolute top-6 right-6 w-11 h-11 flex items-center justify-center bg-[#40CEEC] rounded-full cursor-pointer shadow-md z-10">
            <Image
              src={"/assets/svg/right-arrow.svg"}
              alt=""
              width={14}
              height={14}
            />
          </div>
          <Image
            src={"/assets/png/deals-1.png"}
            alt=""
            width={529}
            height={596}
            className="w-full h-full"
          />

          <div className="absolute bottom-10 left-8">
            <p className="text-xl font-bold quick_sand text-white">
              VR Headset and <br /> Controllers
            </p>

            <Button
              className={
                "w-[80px] h-6.5 rounded-full text-white mt-2 text-[9px] font-bold inter bg-gradient-to-r from-[#40CEEC] to-[#247586]"
              }
            >
              Shop Now
            </Button>
          </div>
        </div>

        <div className="flex flex-col justify-between">
          <div className="relative">
            <div className="absolute top-6 right-6 w-11 h-11 flex items-center justify-center bg-[#40CEEC] rounded-full cursor-pointer shadow-md">
              <Image
                src={"/assets/svg/right-arrow.svg"}
                alt=""
                width={14}
                height={14}
              />
            </div>
            <Image
              src={"/assets/png/deals-2.png"}
              alt=""
              width={463}
              height={278}
              className="w-full"
            />
            <div className="absolute bottom-10 left-8">
              <p className="text-xl font-bold quick_sand text-white uppercase">
                massage chair <br /> Luxury
              </p>

              <Button
                className={
                  "w-[80px] h-6.5 rounded-full text-white mt-2 text-[9px] font-bold inter bg-gradient-to-r from-[#40CEEC] to-[#247586]"
                }
              >
                Shop Now
              </Button>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -bottom-8 -right-16 glow-blue z-10"></div>
            <div className="absolute top-6 right-6 w-11 h-11 flex items-center justify-center bg-[#40CEEC] rounded-full cursor-pointer shadow-md">
              <Image
                src={"/assets/svg/right-arrow.svg"}
                alt=""
                width={14}
                height={14}
              />
            </div>
            <Image
              src={"/assets/png/deals-3.png"}
              alt=""
              width={463}
              height={278}
              className="w-full"
            />

            <div className="absolute bottom-10 left-8">
              <p className="text-xl font-bold quick_sand text-white uppercase">
                OKODo <br />{" "}
                <span className="text-sm font-normal"> hero 11+ black</span>
              </p>

              <Button
                className={
                  "w-[80px] h-6.5 rounded-full text-white mt-2 text-[9px] font-bold inter bg-gradient-to-r from-[#40CEEC] to-[#247586]"
                }
              >
                Shop Now
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="relative mt-3 md:mt-10 block md:hidden">
        <div className="absolute bottom-10 right-0 lg:-right-10 glow-blue"></div>
        <Carousel setApi={setApi}>
          <CarouselContent>
            <CarouselItem className="basis-1/1">
              <div className="relative">
                <div className="absolute top-20 left-0 lg:-left-16 glow-blue z-10"></div>
                <div className="absolute top-4 right-4 w-11 h-11 flex items-center justify-center bg-[#40CEEC] rounded-full cursor-pointer shadow-md z-10">
                  <Image
                    src={"/assets/svg/right-arrow.svg"}
                    alt=""
                    width={14}
                    height={14}
                  />
                </div>
                <Image
                  src={"/assets/png/deals-1.png"}
                  alt=""
                  width={343}
                  height={244}
                  className="w-full object-contain"
                />

                <div className="absolute bottom-7 left-5">
                  <p className="text-xl font-bold quick_sand text-white">
                    VR Headset and <br /> Controllers
                  </p>

                  <Button
                    className={
                      "w-[80px] h-6.5 rounded-full text-white mt-2 text-[9px] font-bold inter bg-gradient-to-r from-[#40CEEC] to-[#247586]"
                    }
                  >
                    Shop Now
                  </Button>
                </div>
              </div>
            </CarouselItem>
            <CarouselItem className="basis-1/1">
              <div className="relative">
                <div className="absolute top-20 left-0 lg:-left-16 glow-blue z-10"></div>
                <div className="absolute top-4 right-4 w-11 h-11 flex items-center justify-center bg-[#40CEEC] rounded-full cursor-pointer shadow-md z-10">
                  <Image
                    src={"/assets/svg/right-arrow.svg"}
                    alt=""
                    width={14}
                    height={14}
                  />
                </div>
                <Image
                  src={"/assets/png/deals-1.png"}
                  alt=""
                  width={343}
                  height={244}
                  className="w-full object-contain"
                />

                <div className="absolute bottom-7 left-5">
                  <p className="text-xl font-bold quick_sand text-white">
                    VR Headset and <br /> Controllers
                  </p>

                  <Button
                    className={
                      "w-[80px] h-6.5 rounded-full text-white mt-2 text-[9px] font-bold inter bg-gradient-to-r from-[#40CEEC] to-[#247586]"
                    }
                  >
                    Shop Now
                  </Button>
                </div>
              </div>
            </CarouselItem>
            <CarouselItem className="basis-1/1">
              <div className="relative">
                <div className="absolute top-20 left-0 lg:-left-16 glow-blue z-10"></div>
                <div className="absolute top-4 right-4 w-11 h-11 flex items-center justify-center bg-[#40CEEC] rounded-full cursor-pointer shadow-md z-10">
                  <Image
                    src={"/assets/svg/right-arrow.svg"}
                    alt=""
                    width={14}
                    height={14}
                  />
                </div>
                <Image
                  src={"/assets/png/deals-1.png"}
                  alt=""
                  width={343}
                  height={244}
                  className="w-full object-contain"
                />

                <div className="absolute bottom-7 left-5">
                  <p className="text-xl font-bold quick_sand text-white">
                    VR Headset and <br /> Controllers
                  </p>

                  <Button
                    className={
                      "w-[80px] h-6.5 rounded-full text-white mt-2 text-[9px] font-bold inter bg-gradient-to-r from-[#40CEEC] to-[#247586]"
                    }
                  >
                    Shop Now
                  </Button>
                </div>
              </div>
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
      </div>
    </div>
  );
}
