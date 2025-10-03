import Image from "next/image";
import React, { useState } from "react";
import { GoHeart } from "react-icons/go";
import { LuArrowDown, LuUser } from "react-icons/lu";
import { PiBellBold } from "react-icons/pi";
import { IoCartOutline } from "react-icons/io5";
import { GrLocation } from "react-icons/gr";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { FaAlignJustify } from "react-icons/fa";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ChevronDown } from "lucide-react";
import { logout } from "@/lib/features/authSlice";
import { SideDrawer } from "./side-drawer";

const list = [
  {
    id: 1,
    name: "Notification",
    icon: PiBellBold,
    href: "/notification",
    count: 6,
  },
  {
    id: 2,
    name: "Wishlist",
    icon: GoHeart,
    href: "/wishlist",
    count: 3,
  },
  {
    id: 3,
    name: "Cart",
    icon: IoCartOutline,
    href: "/cart",
    count: 2,
  },
];

export default function Navbar() {
  const [location, setLocation] = useState("");
  const auth = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const { cart } = useSelector((state) => state.cart);

  return (
    <div>
      <div className="max-w-7xl lg:h-[80px] mx-auto flex flex-col lg:flex-row lg:items-center justify-between gap-1.5 lg:gap-5 xl:gap-0 px-3 md:px-5 xl:px-8 py-3 lg:py-0">
        <div className="flex items-center justify-between lg:hidden">
          <Link href={"/"}>
            <Image
              src={"/assets/png/logo.png"}
              alt="logo"
              width={172}
              height={20}
            />
          </Link>
          <SideDrawer />
        </div>
        <div className="lg:flex-none w-full lg:w-[300px] xl:w-[435px] h-10 flex items-center gap-2 md:gap-3 border-2 border-[#40CEEC] rounded-md px-3 md:px-5">
          <Select onValueChange={setLocation}>
            <SelectTrigger className="h-8 text-xs lg:text-[10px] font-bold border-0 p-0 quick_sand">
              <SelectValue placeholder="Products & Sellers" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="light">Light</SelectItem>
              <SelectItem value="dark">Dark</SelectItem>
              <SelectItem value="system">System</SelectItem>
            </SelectContent>
          </Select>

          <div className="flex-1 border-l border-[#CACACA] pl-3 lato">
            <Input
              placeholder="Search your products..."
              className="h-7 border-0 shadow-none p-0 text-xs lg:text-[11px]"
            />
          </div>
        </div>
        <Link href="/">
          <Image
            src={"/assets/png/logo.png"}
            alt="logo"
            width={172}
            height={20}
            className="hidden lg:block"
          />
        </Link>

        <div className="flex items-center gap-5 quick_sand">
          <Select onValueChange={setLocation}>
            <SelectTrigger className="w-full lg:w-[200px] xl:w-[125px] py-[17px] text-xs md:text-[9px] font-medium border-2 border-[#40CEEC] text-[#40CEEC] flex items-center px-2 md:px-5">
              <GrLocation
                color="#B6B6B6"
                className="w-2.5 h-2.5 md:w-3.5 md:h-3.5"
              />
              <SelectValue placeholder="Your Location">{location}</SelectValue>
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="Truky">Truky</SelectItem>
              <SelectItem value="USA">USA</SelectItem>
            </SelectContent>
          </Select>

          <ul className="hidden xl:flex items-center gap-4 lato">
            {list.map((item) => (
              <Link
                href={item.href}
                key={item.id}
                className="flex items-center gap-2"
              >
                <div className="relative">
                  {item.name === "Cart" && (
                    <div className="absolute -top-1.5 -right-1.5 w-[15px] h-[15px] flex items-center justify-center bg-[#40CEEC] rounded-full text-[9px] font-medium text-white">
                      {cart?.length}
                    </div>
                  )}

                  {<item.icon size={18} />}
                </div>
                <p className="text-base text-[#7D7B7D] ">{item.name}</p>
              </Link>
            ))}

            {/* Account */}
            {auth.isLogin && (
              <DropdownMenu>
                <DropdownMenuTrigger>
                  <li className="flex items-center cursor-pointer gap-2">
                    <div className="relative ">{<LuUser size={18} />}</div>
                    <p className="text-base text-[#7D7B7D] ">Account</p>
                    <div className="relative  rounded-full h-5 w-5 flex items-center justify-center">
                      {<ChevronDown className="cursor-pointer" size={14} />}
                    </div>
                  </li>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  <DropdownMenuItem onClick={() => dispatch(logout())}>
                    Logout
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            )}
            {/*Sign In*/}
            {!auth.isLogin && (
              <Link href={"/login"} className="flex items-center gap-2">
                <div className="relative">{<LuUser size={18} />}</div>
                <p className="text-base text-[#7D7B7D] ">Sign In</p>
              </Link>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
}
