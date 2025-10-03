import Image from "next/image";
import React from "react";
import Slider from "react-slick";
import { Button } from "@/components/ui/button";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const HeroSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    arrows: false,
    appendDots: (dots) => (
      <div className="">
        <ul className="flex gap-0 justify-baseline ml-10">{dots}</ul>
      </div>
    ),
    customPaging: () => <div className="rounded-full slick-dot"></div>,
  };

  return (
    <div className="slider-containe">
      <Slider
        {...settings}
        className="lg:max-w-[480px] xl:max-w-[680px] rounded-2xl"
      >
        {[1, 2, 3].map((index) => (
          <div key={index} className="relative">
            <Image
              src={"/assets/jpg/hero.jpg"}
              alt="Slide Image"
              width={1500}
              height={630}
              className="w-full h-[202px] md:h-[390px]"
            />
          </div>
        ))}
      </Slider>

      <Button className="block lg:hidden w-full h-10 rounded-lg bg-[#FF7A53] inter font-semibold text-sm text-white mt-2">
        Shop Now
      </Button>
    </div>
  );
};

export default HeroSlider;
