import React, { useEffect, useState } from "react";
import { IoClose } from "react-icons/io5";
import { FiMinus, FiPlus } from "react-icons/fi";
import { useDispatch } from "react-redux";
import {
  removeItemFromCart,
  updateCartItemQuantity,
} from "@/lib/features/cartSlice";
import Link from "next/link";

export default function ShoppingCard({ item }) {
  const [quantity, setQuantity] = useState(1);
  const dispatch = useDispatch();

  const handleIncrement = () => {
    const newQuantity = quantity + 1;
    setQuantity(newQuantity);
    dispatch(
      updateCartItemQuantity({
        product_id: item.product_id,
        quantity: newQuantity,
      })
    );
  };

  const handleDecrement = () => {
    if (quantity > 1) {
      const newQuantity = quantity - 1;
      setQuantity(newQuantity);
      dispatch(
        updateCartItemQuantity({
          product_id: item.product_id,
          quantity: newQuantity,
        })
      );
    }
  };

  useEffect(() => {
    setQuantity(item?.quantity);
  }, [item?.quantity]);

  const handleRemove = () => {
    dispatch(removeItemFromCart(item?.product_id));
  };

  return (
    <div className="flex flex-col md:flex-row gap-3 md:gap-0 items-start justify-between border-b md:border-b-0 border-[#6C7275] pb-5 md:pb-0 mt-4">
      <div className="md:w-[300px] flex items-center gap-3">
        <div className="w-[151px] h-[135px] flex items-center justify-center border-2 border-[#40CEEC] rounded-[20px]">
          <img
            src={item?.image}
            alt=""
            width={151}
            height={100}
            className="w-[100px] h-[110px]"
          />
        </div>

        <div className="flex-1 h-[135px] flex flex-col justify-between py-2.5">
          <Link
            href={`/product/${item?.product_id}`}
            title={item?.name}
            className="text-sm text-[#191C1F] font-semibold quick_sand line-clamp-2 capitalize"
          >
            {item?.name}
          </Link>

          <div className="flex items-center gap-2">
            <p className="text-xs text-[#7D7B7D] font-medium quick_sand">
              {Object.keys(item.selectedOptions).map((key) => (
                <p className="capitalize">
                  {key}:
                  <span className="text-black capitalize">
                    {` ` + item.selectedOptions[key]}
                  </span>
                </p>
              ))}
            </p>
          </div>

          <button
            onClick={handleRemove}
            className="flex items-center gap-1 text-sm text-[#D90000] font-semibold quick_sand cursor-pointer"
          >
            <IoClose size={20} color="#D90000" />
            Remove
          </button>
        </div>
      </div>
      <div className="w-full md:w-[100px] h-10 flex items-center justify-between border border-[#6C7275] rounded-sm px-2">
        <FiMinus
          size={16}
          color="#121212"
          className="cursor-pointer"
          onClick={handleDecrement}
        />
        <p className="text-xs text-[#121212] font-semibold quick_sand select-none">
          {quantity}
        </p>
        <FiPlus
          size={16}
          color="#121212"
          className="cursor-pointer"
          onClick={handleIncrement}
        />
      </div>

      <div className="flex items-center justify-between md:justify-center w-full md:w-[100px] md:h-10 text-lg text-[#121212] quick_sand text-center">
        <div className="block md:hidden text-base text-[#121212] font-semibold quick_sand text-center">
          Price
        </div>
        ${item?.price}
      </div>

      <div className="flex items-center justify-between md:justify-end text-end w-full md:w-[100px] md:h-10 text-lg font-semibold text-[#121212] quick_sand">
        <div className="block md:hidden text-base text-[#121212] font-semibold quick_sand text-end">
          Subtotal
        </div>
        ${item?.price * quantity}
      </div>
    </div>
  );
}
