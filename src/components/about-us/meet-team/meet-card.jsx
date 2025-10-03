import Image from "next/image";
import React from "react";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";

export default function MeetCard() {
  return (
    <div
      className="group xl:w-[270px] md:w-[230px] max-w-[230px] rounded-full border flex flex-col items-center quick_sand p-2 bg-white hover:bg-gradient-to-b from-[#40CEEC] to-[#247586] z-10"
      style={{
        boxShadow: "0px 3px 12px 3.75px #40CEEC80",
      }}
    >
      <Image
        src={"/assets/png/team-avatar.png"}
        alt=""
        width={225}
        height={225}
        className="xl:w-full xl:h-full sm:w-[180px] sm:h-[180px] w-[150px] h-[150px] rounded-full"
      />
      <div className="px-5 pb-10">
        <p className="sm:text-2xl  text-base font-bold text-black text-center mt-4 group-hover:text-white">
          ARIK SMITH
        </p>
        <p className="sm:text-base text-xs font-semibold text-[#797979] text-center mt-2 text-wrap group-hover:text-white">
          Lorem Ipsum is simply dummy text of the
        </p>

        <div className="flex justify-center gap-3 mt-3">
          <div className="sm:w-10 sm:h-10 w-7 h-7 flex items-center justify-center bg-[#40CEEC] rounded-full cursor-pointer group-hover:bg-white">
            <FaTwitter
              size={15}
              className="text-white group-hover:text-[#40CEEC]"
            />
          </div>
          <div className="sm:w-10 sm:h-10 w-7 h-7 flex items-center justify-center bg-[#40CEEC] rounded-full cursor-pointer group-hover:bg-white">
            <FaFacebookF
              size={15}
              className="text-white group-hover:text-[#40CEEC]"
            />
          </div>
          <div className="sm:w-10 sm:h-10 w-7 h-7 flex items-center justify-center bg-[#40CEEC] rounded-full cursor-pointer group-hover:bg-white">
            <FaInstagram
              size={15}
              className="text-white group-hover:text-[#40CEEC]"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
