import React from "react";
import Navbar from "../common/navbar";
import SubNavbar from "../common/sub-navbar";
import { PiBellBold } from "react-icons/pi";
import { GoHeart } from "react-icons/go";
import { IoCartOutline } from "react-icons/io5";
import Footer from "../common/footer";
import ClientOnly from "../client-only";

const list = [
  {
    id: 1,
    name: "Notification",
    icon: PiBellBold,
    href: "#",
    count: 6,
  },
  {
    id: 2,
    name: "Wishlist",
    icon: GoHeart,
    href: "#",
    count: 3,
  },
  {
    id: 3,
    name: "Cart",
    icon: IoCartOutline,
    href: "#",
    count: 2,
  },
];

export default function Layout({ children }) {
  return (
    <ClientOnly>
      <div className="relative">
        <Navbar />
        <SubNavbar />

        <div className="pb-14 lg:pb-0">{children}</div>
        <Footer />
        <ul className="fixed bottom-0 left-0 w-full lg:hidden grid grid-cols-3 lato py-3 bg-white border-t border-[#ECECEC] z-50">
          {list.map((item) => (
            <li key={item.id} className="flex flex-col gap-1 items-center">
              <div className="relative">
                {item.count && (
                  <div className="absolute -top-1.5 -right-1.5 w-[15px] h-[15px] flex items-center justify-center bg-[#40CEEC] rounded-full text-[9px] font-medium text-white">
                    {item.count}
                  </div>
                )}
                {<item.icon size={18} />}
              </div>
              <p className="text-xs text-[#7D7B7D] ">{item.name}</p>
            </li>
          ))}
        </ul>
      </div>
    </ClientOnly>
  );
}
