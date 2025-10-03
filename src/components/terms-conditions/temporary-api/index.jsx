import Image from "next/image";
import React from "react";

export default function TemporaryApi() {
  return (
    <div className="mt-10 md:mt-24 quick_sand">
      <div className="max-w-4xl mx-auto">
        <p className="text-sm font-semibold text-[#40CEEC] text-center">
          {`Temporary API’s`}
        </p>
        <p className="text-2xl md:text-3xl font-semibold text-[#101828] pt-3 text-center">
          Temporary Suspension; Limiting API Requests
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-0 mt-10 md:mt-20">
        <div className="relative flex justify-center lg:block">
          <div className="absolute bottom-0 -left-10 glow-blue"></div>
          <Image
            src={"/assets/png/temp-api.png"}
            alt=""
            width={438}
            height={375}
          />
        </div>

        <div className="relative flex flex-col justify-between">
          <div className="absolute bottom-0 -right-10 glow-blue"></div>
          <div>
            <p className="text-2xl md:text-3xl font-semibold text-[#101828]">Lorem Ipsum</p>
            <p className="text-sm md:text-base text-[#667085] mt-2 md:mt-4">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries.
            </p>
          </div>

          <div className="mt-5 lg:mt-0">
           <p className="text-2xl md:text-3xl font-semibold text-[#101828]">Lorem Ipsum</p>
          <p className="text-sm md:text-base text-[#667085] mt-2 md:mt-4">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
