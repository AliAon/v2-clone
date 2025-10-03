import React from "react";
import MapCard from "./map-card";
import Image from "next/image";
import { TiSocialTwitter } from "react-icons/ti";
import {
  FaFacebookF,
  FaInstagram,
  FaPinterestP,
  FaYoutube,
} from "react-icons/fa";

export default function ContactMap() {
  return (
    <div className="quick_sand">
      <p className="text-sm font-semibold text-[#40CEEC]">Contact Us</p>
      <p className="sm:text-3xl text-2xl font-bold text-[#101828] mt-2 md:mt-3">{`Don’t hesitate to Contact Us`}</p>
      <p className="max-w-[415px] text-sm md:text-base text-[#667085] mt-3 md:mt-6">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry.
      </p>

      <div className="relative grid grid-cols-2 sm:gap-8 gap-4 mt-5 md:mt-8">
        <div className="absolute top-0 -right-10 glow-blue -z-10"></div>
        <MapCard
          icon={"/assets/svg/map-pin.svg"}
          bgColor={"#E2F3FF"}
          lable={"Office"}
          address={"JI. Merdeka Raya No.73B"}
        />
        <MapCard
          icon={"/assets/svg/phone.svg"}
          bgColor={"#F6EEE7"}
          lable={"Phone"}
          address={"(021) 111 444 90"}
        />
        <MapCard
          icon={"/assets/svg/clock.svg"}
          bgColor={"#FFF2F2"}
          lable={"Work Hours"}
          address={"Everyday 09 am- 07 pm"}
        />
        <MapCard
          icon={"/assets/svg/envelope.svg"}
          bgColor={"#E2FFF1"}
          lable={"Email"}
          address={"won@support.com"}
        />
      </div>

      <Image
        src={"/assets/png/map.png"}
        alt=""
        width={451}
        height={262}
        className="w-full mt-8 shadow-[0px_3px_15px_3.75px_#40CEEC80] rounded-3xl"
      />

      <div className="hidden sm:flex items-center justify-between mt-8">
        <p className="sm:text-3xl text-xl font-semibold text-[#101828]">Social Media:</p>
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 flex items-center justify-center bg-gradient-to-b from-[#40CEEC] to-[#247586] rounded-full cursor-pointer">
            <TiSocialTwitter size={18} color="#fff" />
          </div>

          <div className="w-8 h-8 flex items-center justify-center bg-gradient-to-b from-[#40CEEC] to-[#247586] rounded-full cursor-pointer">
            <FaFacebookF size={16} color="#fff" />
          </div>

          <div className="w-8 h-8 flex items-center justify-center bg-gradient-to-b from-[#40CEEC] to-[#247586] rounded-full cursor-pointer">
            <FaInstagram size={18} color="#fff" />
          </div>

          <div className="w-8 h-8 flex items-center justify-center bg-gradient-to-b from-[#40CEEC] to-[#247586] rounded-full cursor-pointer">
            <FaYoutube size={18} color="#fff" />
          </div>

          <div className="w-8 h-8 flex items-center justify-center bg-gradient-to-b from-[#40CEEC] to-[#247586] rounded-full cursor-pointer">
            <FaPinterestP size={18} color="#fff" />
          </div>
        </div>
      </div>
    </div>
  );
}
