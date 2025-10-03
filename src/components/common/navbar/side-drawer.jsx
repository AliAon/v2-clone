import React from 'react'
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { FaAlignJustify } from 'react-icons/fa'
import { IoIosArrowDown } from 'react-icons/io';
import Link from 'next/link';
import { useRouter } from 'next/router';
import Image from 'next/image';

const meuu_list = [
  {
    name: "Home",
    href: "/",
  },
  {
    name: "Best Seller",
    href: "/best-seller",
  },
  {
    name: "Won Fast",
    href: "/won-fast",
  },
  {
    name: "Print on Demend",
    href: "/print-on-demand",
  },
];

export const SideDrawer = () => {
      const router = useRouter();
      const pathname = router.pathname;
    return (
     <Sheet>
  <SheetTrigger><FaAlignJustify size={20} className="text-[#40CEEC] cursor-pointer" /></SheetTrigger>
  <SheetContent>
    <SheetHeader>
      <SheetTitle><Link href={'/'}>
          <Image
            src={"/assets/png/logo.png"}
            alt="logo"
            width={172}
            height={20}
            />
            </Link></SheetTitle>
      <div className='flex flex-col gap-6 mt-5'>
         <div className="flex items-center gap-2">
            <Image src={"/assets/svg/deal.svg"} alt="" width={15} height={15} />
            <p className="quick_sand text-sm text-[#7D7B7D] font-bold">Deals</p>
          </div>

          <ul className="flex flex-col items-start gap-6 quick_sand pl-6">
            {meuu_list.map((item, index) => (
                <Link
                href={item.href}
                key={index}
                className={`flex items-center gap-1 text-sm font-bold ${
                    pathname === item.href ? "text-[#40CEEC]" : "text-[#7D7B7D]"
                }`}
                >
                {item.name}
                <IoIosArrowDown
                  size={10}
                  className={`${
                      pathname === item.href ? "text-[#40CEEC]" : "text-[#7D7B7D]"
                    }`}
                    />
              </Link>
            ))}
          </ul>
            </div>
    </SheetHeader>
  </SheetContent>
</Sheet>
    )
}