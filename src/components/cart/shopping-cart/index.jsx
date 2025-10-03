import React, { useEffect, useState } from "react";
import ShoppingCard from "./shopping-card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { addSubTotal, addTotal } from "@/lib/features/cartSlice";

export default function ShoppingCart({ handleClick, cart }) {
  const dispatch = useDispatch();
  const subtotal = cart?.reduce((a, b) => a + b.price * b.quantity, 0);
  const { subtotal: subtotalRedux } = useSelector((state) => state.cart);
  const { total } = useSelector((state) => state.cart);

  useEffect(() => {
    dispatch(addSubTotal(subtotal));
    dispatch(addTotal(subtotal));
  }, [cart, subtotal, dispatch]);

  return (
    <div className="flex flex-col lg:flex-row gap-10">
      <div className="flex-1">
        <div className="hidden md:flex items-center justify-between border-b border-[#6C7275] pb-5">
          <div className="w-[300px] text-base text-[#121212] font-semibold quick_sand">
            Product
          </div>
          <div className="w-[100px] text-base text-[#121212] font-semibold quick_sand text-center">
            Quantity
          </div>
          <div className="w-[100px] text-base text-[#121212] font-semibold quick_sand text-center">
            Price
          </div>
          <div className="w-[100px] text-base text-[#121212] font-semibold quick_sand text-end">
            Subtotal
          </div>
        </div>

        <div>
          {cart?.length === 0 ? (
            <p className="text-sm text-center mt-10 uppercase">Cart is empty</p>
          ) : (
            cart?.map((item, index) => <ShoppingCard key={index} item={item} />)
          )}
        </div>
      </div>
      <div className="lg:w-[413px] h-fit border border-[#40CEEC] rounded-md px-5 pt-6 pb-4">
        <p className="text-xl text-[#141718] font-medium quick_sand">
          Cart summary
        </p>

        <div className="mt-3">
          <div className="flex items-center justify-between border-b border-[#EAEAEA] py-4">
            <p className="text-base text-[#141718] quick_sand">Subtotal</p>
            <p className="text-base text-[#141718] font-semibold quick_sand">
              ${subtotalRedux}
            </p>
          </div>

          <div className="flex items-center justify-between border-b border-[#EAEAEA] py-4">
            <p className="text-base text-[#141718] quick_sand">
              Discount (10%)
            </p>
            <p className="text-base text-[#141718] font-semibold quick_sand">
              $1234.00
            </p>
          </div>

          <div className="flex items-center justify-between border-b border-[#EAEAEA] py-4">
            <p className="text-base text-[#141718] quick_sand">
              Delivery Charges
            </p>
            <p className="text-base text-[#141718] font-semibold quick_sand">
              $1234.00
            </p>
          </div>

          <div className="flex items-center justify-between border-b border-[#EAEAEA] py-4">
            <p className="text-base text-[#141718] quick_sand">
              Service Tax (18%)
            </p>
            <p className="text-base text-[#141718] font-semibold quick_sand">
              $1234.00
            </p>
          </div>

          <div className="flex items-center justify-between py-4">
            <p className="text-xl font-semibold text-[#141718] quick_sand">
              Total
            </p>
            <p className="text-xl text-[#141718] font-semibold quick_sand">
              ${total}
            </p>
          </div>
        </div>

        <Button
          onClick={() => handleClick("checkout_details")}
          className="w-full h-13 rounded-full bg-gradient-to-r from-[#40CEEC] to-[#247586] text-lg font-medium text-white mt-3 quick_sand"
        >
          Checkout
        </Button>
        <Link href={"/categories"}>
          <Button
            variant="outline"
            className="w-full h-13 quick_sand rounded-full text-lg font-medium mt-3 border border-[#40CEEC] bg-gradient-to-r from-black to-[#40CEEC] text-transparent bg-clip-text"
          >
            Continue Shopping
          </Button>
        </Link>
      </div>
    </div>
  );
}
