import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Image from "next/image";
import React from "react";
import { TiSocialTwitter } from "react-icons/ti";
import {
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaPinterestP,
} from "react-icons/fa";
import Link from "next/link";

const top_list = [
  {
    image: "/assets/svg/footer-1.svg",
    name: "Best prices & offers",
    des: "Orders $50 or more",
  },
  {
    image: "/assets/svg/footer-2.svg",
    name: "Free delivery",
    des: "24/7 amazing services",
  },
  {
    image: "/assets/svg/footer-3.svg",
    name: "Great daily deal",
    des: "When you sign up",
  },
  {
    image: "/assets/svg/footer-4.svg",
    name: "Wide assortment",
    des: "Mega Discounts",
  },
  {
    image: "/assets/svg/footer-5.svg",
    name: "Easy returns",
    des: "Within 30 days",
  },
];

const categories = [
  {
    key: "Pregnant & Postpartum",
    name: "Pregnant & Postpartum",
  },
  {
    key: "Milks & Foods",
    name: "Milks & Foods",
  },
  {
    key: "Diapers & Wipes",
    name: "Diapers & Wipes",
  },
  {
    key: "Infant",
    name: "Infant",
  },
  {
    key: "Eat & Drink Supplies",
    name: "Eat & Drink Supplies",
  },
  {
    key: "Baby Fashion",
    name: "Baby Fashion",
  },
  {
    key: "Baby Out",
    name: "Baby Out",
  },
  {
    key: "Toys & Study",
    name: "Toys & Study",
  },
  {
    key: "Stroller, Crib, Chair",
    name: "Stroller, Crib, Chair",
  },
  {
    key: "Washes & Bath",
    name: "Washes & Bath",
  },
  {
    key: "Homewares",
    name: "Homewares",
  },
];

const company = [
  {
    key: "Pregnant & Postpartum",
    name: "About Swatbabymall",
    href: "/about-us",
  },
  {
    key: "Milks & Foods",
    name: "Contact",
    href: "/contact-us",
  },
  {
    key: "Diapers & Wipes",
    name: "Career",
    href: "/contact-us",
  },
  {
    key: "Blog",
    name: "Blog",
    href: "/contact-us",
  },
  {
    key: "Eat & Drink Supplies",
    name: "Sitemap",
    href: "/contact-us",
  },
  {
    key: "Baby Fashion",
    name: "Store Locations",
    href: "/contact-us",
  },
];

const wonport_academy = [
  {
    key: "Customer Service",
    name: "Customer Service",
    href: "/contact-us",
  },
  {
    key: "Policy",
    name: "Policy",
    href: "/privacy-policies",
  },
  {
    key: "Terms & Conditions",
    name: "Terms & Conditions",
    href: "/terms-conditions",
  },
  {
    key: "Trach Order",
    name: "Trach Order",
    href: "/contact-us",
  },
  {
    key: "FAQs",
    name: "FAQs",
    href: "/contact-us",
  },
  {
    key: "My Account",
    name: "My Account",
    href: "/contact-us",
  },
  {
    key: "Product Support",
    name: "Product Support",
    href: "/contact-us",
  },
];

const wona_below = [
  {
    key: "Become Seller",
    name: "Become Seller",
  },
  {
    key: "Affiliate",
    name: "Affiliate",
  },
  {
    key: "Advertise",
    name: "Advertise",
  },
  {
    key: "Partnership",
    name: "Partnership",
  },
  {
    key: "Care Services",
    name: "Care Services",
  },
];

export default function Footer() {
  return (
    <div>
      <div className="hidden lg:block bg-gradient-to-r from-[#40CEEC] to-[#247586]">
        <div className="h-auto lg:h-[75px] max-w-7xl mx-auto grid grid-cols-10 lg:flex items-center justify-between gap-5 lg:gap-0 px-3 md:px-5 xl:px-8 py-3 lg:py-0">
          {top_list.map((item, index) => (
            <div key={index} className="col-span-5 flex items-center gap-3">
              <Image src={item.image} alt="" width={45} height={45} />
              <div>
                <p className="text-sm font-semibold quick_sand text-white">
                  {item.name}
                </p>
                <p className="text-xs font-semibold lato text-white pt-1">
                  {item.des}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-10 lg:hidden gap-3 px-3 md:px-5">
        {top_list.map((item, index) => (
          <div
            key={index}
            className="flex items-center justify-center col-span-5 bg-gradient-to-r from-[#40CEEC] to-[#247586] rounded-xl px-3 h-[73px]"
          >
            <div className="col-span-5 flex items-center gap-3">
              <Image src={item.image} alt="" width={35} height={35} />
              <div>
                <p className="text-[10px] md:text-sm font-semibold quick_sand text-white">
                  {item.name}
                </p>
                <p className="text-[9px] md:text-xs font-semibold lato text-white pt-1">
                  {item.des}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="relative max-w-7xl mx-auto px-3 md:px-5 xl:px-8">
        <div className="absolute -top-8 -left-3 glow-blue"></div>
        <Image
          src={"/assets/png/logo.png"}
          alt=""
          width={176}
          height={20}
          className="block lg:hidden cursor-pointer mt-5"
        />
        <div className="grid grid-cols-10 xl:grid-cols-12 gap-5 md:gap-8 xl:gap-10 my-2 lg:my-16">
          <div className="block xl:hidden col-span-10">
            <div className="flex items-start justify-between">
              <p className="text-sm font-bold text-black quick_sand">
                Track your Shipment
              </p>
              <Image
                src={"/assets/png/footer-shipment.png"}
                alt=""
                width={60}
                height={49}
              />
            </div>

            <div className="relative mt-3">
              <Input
                placeholder="Tracking Number..."
                className="h-11 bg-[#EDF0F7] !text-xs text-[#757575] placeholder:text-[#757575] inter border-0 rounded-[9px] pr-28"
              />
              <Button className="absolute top-0 right-0 w-24 h-11 rounded-[9px] bg-gradient-to-r from-[#40CEEC] to-[#247586] text-xs font-bold quick_sand">
                TRACK
              </Button>
            </div>

            <div className="lg:hidden flex items-center justify-between mt-5">
              <Image
                src={"/assets/png/ebay.png"}
                alt=""
                width={55}
                height={22}
                className="cursor-pointer"
              />
              <Image
                src={"/assets/png/amazon.png"}
                alt=""
                width={64}
                height={19}
                className="cursor-pointer"
              />
              <Image
                src={"/assets/png/etsy.png"}
                alt=""
                width={44}
                height={22}
                className="cursor-pointer"
              />
              <Image
                src={"/assets/png/shopify.png"}
                alt=""
                width={74}
                height={20}
                className="cursor-pointer"
              />
            </div>
          </div>
          <div className="col-span-5 lg:col-span-2 xl:col-span-2">
            <ul>
              <p className="text-sm font-bold text-black quick_sand">
                Top Categories
              </p>
              <div className="mt-6">
                {categories.map((item, index) => (
                  <li
                    key={index}
                    className="text-xs text-[#666666] cursor-pointer inter py-2.5"
                  >
                    {item.name}
                  </li>
                ))}
              </div>
            </ul>
          </div>
          <div className="col-span-5 lg:col-span-2 xl:col-span-2">
            <ul>
              <p className="text-sm font-bold text-black quick_sand">Company</p>
              <div className="flex flex-col mt-6">
                {company.map((item, index) => (
                  <Link
                    key={index}
                    href={item.href}
                    className="text-xs text-[#666666] cursor-pointer inter py-2.5"
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </ul>
          </div>
          <div className="col-span-5 lg:col-span-2 xl:col-span-2">
            <ul>
              <p className="text-sm font-bold text-black quick_sand">
                Wonport Academy
              </p>
              <div className="flex flex-col mt-6">
                {wonport_academy.map((item, index) => (
                  <Link
                    href={item.href}
                    key={index}
                    className="text-xs text-[#666666] cursor-pointer inter py-2.5"
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </ul>
          </div>
          <div className="col-span-5 lg:col-span-2 xl:col-span-2">
            <ul>
              <p className="text-sm font-bold text-black quick_sand">
                Wona below
              </p>
              <div className="mt-6">
                {wona_below.map((item, index) => (
                  <li
                    key={index}
                    className="text-xs text-[#666666] cursor-pointer inter py-2.5"
                  >
                    {item.name}
                  </li>
                ))}
              </div>
            </ul>
          </div>
          <div className="relative col-span-10 xl:col-span-4">
            <div className="absolute bottom-14 right-0 glow-blue"></div>
            <div className="hidden xl:block">
              <div className="flex items-start justify-between">
                <p className="text-sm font-bold text-black quick_sand">
                  Track your Shipment
                </p>
                <Image
                  src={"/assets/png/footer-shipment.png"}
                  alt=""
                  width={60}
                  height={49}
                />
              </div>

              <div className="relative mt-3">
                <Input
                  placeholder="Tracking Number..."
                  className="h-11 bg-[#EDF0F7] !text-xs text-[#757575] placeholder:text-[#757575] inter border-0 rounded-[9px] pr-28"
                />
                <Button className="absolute top-0 right-0 w-24 h-11 rounded-[9px] bg-gradient-to-r from-[#40CEEC] to-[#247586] text-xs font-bold quick_sand">
                  TRACK
                </Button>
              </div>
            </div>

            <div className="inter xl:mt-24">
              <div className="flex gap-1">
                <p className="text-xs text-black">Hotline 24/7:</p>
                <p className="text-xs text-[#40CEEC] font-bold">
                  (+325) 3686 25 16
                </p>
              </div>
              <div className="flex gap-1 mt-2">
                <p className="text-xs text-black">Work Hours:</p>
                <p className="text-xs text-[#666666]">
                  Monday-Saturday: 9.00am - 5.00pm
                </p>
              </div>
              <div className="flex gap-1 mt-2">
                <p className="text-xs text-black">Mail:</p>
                <p className="text-xs text-[#666666]">contact@wonpot.com</p>
              </div>
            </div>

            <div className="flex items-center justify-center lg:justify-start gap-4 mt-7 md:mt-10">
              <div className="w-10 h-10 flex items-center justify-center bg-gradient-to-b from-[#40CEEC] to-[#247586] rounded-full cursor-pointer">
                <TiSocialTwitter size={18} color="#fff" />
              </div>

              <div className="w-10 h-10 flex items-center justify-center bg-gradient-to-b from-[#40CEEC] to-[#247586] rounded-full cursor-pointer">
                <FaFacebookF size={16} color="#fff" />
              </div>

              <div className="w-10 h-10 flex items-center justify-center bg-gradient-to-b from-[#40CEEC] to-[#247586] rounded-full cursor-pointer">
                <FaInstagram size={18} color="#fff" />
              </div>

              <div className="w-10 h-10 flex items-center justify-center bg-gradient-to-b from-[#40CEEC] to-[#247586] rounded-full cursor-pointer">
                <FaYoutube size={18} color="#fff" />
              </div>

              <div className="w-10 h-10 flex items-center justify-center bg-gradient-to-b from-[#40CEEC] to-[#247586] rounded-full cursor-pointer">
                <FaPinterestP size={18} color="#fff" />
              </div>
            </div>
          </div>
        </div>

        <div className="hidden relative lg:flex items-center justify-between">
          <div className="absolute top-5 left-1/2 -translate-x-1/2 glow-blue"></div>
          <Image
            src={"/assets/png/logo.png"}
            alt=""
            width={176}
            height={20}
            className="cursor-pointer"
          />
          <div className="flex items-center gap-5">
            <Image
              src={"/assets/png/ebay.png"}
              alt=""
              width={40}
              height={15}
              className="cursor-pointer"
            />
            <Image
              src={"/assets/png/amazon.png"}
              alt=""
              width={46}
              height={13}
              className="cursor-pointer"
            />
            <Image
              src={"/assets/png/etsy.png"}
              alt=""
              width={30}
              height={15}
              className="cursor-pointer"
            />
            <Image
              src={"/assets/png/shopify.png"}
              alt=""
              width={51}
              height={15}
              className="cursor-pointer"
            />
          </div>
        </div>

        <hr className="border-t border-[#DEE2E6] my-6" />

        <p className="text-xs text-center text-[#666666] pb-6 lg:pb-20">
          © 2024 Wonport . All Rights Reserved
        </p>
      </div>
    </div>
  );
}
