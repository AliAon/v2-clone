import Image from "next/image";
import React from "react";

export default function HeroSection({ title, description, banner }) {
  return (
    <div className="relative">
      <div className="absolute top-4 right-17 glow-blue"></div>
      <div className="absolute bottom-4 right-28 glow-blue"></div>
      <div className="absolute bottom-10 left-20 glow-blue"></div>
      <div
        className="absolute top-1/2 -translate-y-1/2 left-0 w-3 h-13 md:w-[72px] md:h-[170px] bg-[#66D8F0] rounded-r-full"
        style={{ boxShadow: "0px 3px 18px 0px #40CEEC80" }}
      ></div>

      <div
        className="absolute top-1/2 -translate-y-1/2 right-0 w-3 h-13 md:w-[72px] md:h-[170px] bg-[#66D8F0] rounded-l-full"
        style={{ boxShadow: "0px 3px 18px 0px #40CEEC80" }}
      ></div>

      <div className="max-w-7xl mx-auto px-3 md:px-5 xl:px-8">
        <div
          className="relative grid grid-cols-2 border rounded-full bg-white"
          style={{
            boxShadow: "0 0 15px 3px rgba(64, 206, 236, 0.5)",
          }}
        >
          <div
            className="absolute top-10 left-1 md:top-50 md:-left-2 w-3 h-3 md:w-6 md:h-6 rounded-full bg-[#40CEEC]"
            style={{
              boxShadow: "0px 3px 3px 0px #00000025",
              filter: "blur(1.9px)",
            }}
          ></div>

          <div
            className="absolute top-2 md:top-8 xl:top-13 right-5 lg:right-12 w-5 h-5 md:w-13 md:h-13 rounded-full bg-[#40CEEC]"
            style={{
              boxShadow: "0px 3px 3px 0px #00000025",
              filter: "blur(2.5px)",
            }}
          ></div>

          <div
            className="absolute -bottom-2 sm:-bottom-5  sm:left-[500px] left-[300px] w-4 h-4 md:w-9 md:h-9 rounded-full bg-[#40CEEC]"
            style={{
              boxShadow: "0px 3px 3px 0px #00000025",
              filter: "blur(1.9px)",
            }}
          ></div>

          <div className="max-w-[150px] sm:pl-0 pl-5 lg:max-w-[350px] xl:max-w-[420px] mx-auto place-content-center">
            <p
              className="sm:text-3xl lg:text-4xl xl:text-5xl text-base font-bold text-[#40CEEC] audiowide_regular"
              style={{ textShadow: "0px 3px 3px #40CEEC66" }}
            >
              {title}
            </p>
            <p className="text-xs lg:line-clamp-4 line-clamp-2 lg:text-sm xl:text-lg font-medium text-black mt-4 quick_sand">
              {description}
            </p>
          </div>
          <div>
            <Image
              src={banner}
              alt=""
              width={600}
              height={525}
              className="w-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
