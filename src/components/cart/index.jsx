import React, { useState } from "react";
import ShoppingCart from "./shopping-cart";
import { IoCheckmark } from "react-icons/io5";
import CheckoutDetails from "./checkout-details";
import OrderComplete from "./order-complete";
import { useSelector } from "react-redux";

const list = [
  {
    key: "shopping_cart",
    name: "Shopping cart",
  },
  {
    key: "checkout_details",
    name: "Checkout details",
  },
  {
    key: "order_complete",
    name: "Order complete",
  },
];

export default function Cart() {
  const [step, setStep] = useState("shopping_cart");
  const { cart } = useSelector((state) => state.cart);

  const handleClick = (key) => {
    setStep(key);
  };

  const currentStepIndex = list.findIndex((item) => item.key === step);

  return (
    <div>
      <div className="flex items-center justify-center gap-3">
        <p className="text-4xl font-bold quick_sand bg-gradient-to-r from-black to-[#40CEEC] text-transparent bg-clip-text">
          {step === "shopping_cart" && "Cart Items"}
          {step === "checkout_details" && "Check Out"}
          {step === "order_complete" && "Complete"}
        </p>
      </div>

      <div className="hidden max-w-[830px] mx-auto md:grid grid-cols-3 gap-8 mt-10">
        {list.map((item, index) => {
          const isActive = item.key === step;
          const isCompleted = index < currentStepIndex;

          return (
            <div
              key={index}
              className={`h-full flex items-center gap-4 border-b-2 pb-6 ${
                isActive
                  ? "border-[#23262F]"
                  : isCompleted
                  ? "border-[#40CEEC]"
                  : "border-[#B1B5C3]"
              }`}
            >
              <div
                className={`w-10 h-10 flex items-center justify-center text-base font-semibold inter rounded-full ${
                  isActive
                    ? "bg-[#23262F] text-white"
                    : isCompleted
                    ? "bg-[#40CEEC] text-white"
                    : "bg-[#B1B5C3] text-[#FCFCFD]"
                }`}
              >
                {isCompleted ? <IoCheckmark size={24} /> : index + 1}
              </div>

              <p
                className={`text-base font-semibold quick_sand ${
                  isActive
                    ? "text-[#23262F]"
                    : isCompleted
                    ? "text-[#40CEEC]"
                    : "text-[#B1B5C3]"
                }`}
              >
                {item.name}
              </p>
            </div>
          );
        })}
      </div>

      <div className="md:hidden max-w-[830px] mx-auto grid grid-cols-1 gap-8 mt-10">
        {list
          .filter((item) => item.key === step)
          .map((item, index) => {
            const isActive = item.key === step;
            const currentStepIndex = list.findIndex((i) => i.key === step);
            const itemIndex = list.findIndex((i) => i.key === item.key);
            const isCompleted = itemIndex < currentStepIndex;

            return (
              <div
                key={item.key}
                className={`h-full flex items-center gap-4 border-b-2 pb-6 ${
                  isActive
                    ? "border-[#23262F]"
                    : isCompleted
                    ? "border-[#40CEEC]"
                    : "border-[#B1B5C3]"
                }`}
                onClick={() => handleClick(item.key)}
              >
                <div
                  className={`w-10 h-10 flex items-center justify-center text-base font-semibold inter rounded-full ${
                    isActive
                      ? "bg-[#23262F] text-white"
                      : isCompleted
                      ? "bg-[#40CEEC] text-white"
                      : "bg-[#B1B5C3] text-[#FCFCFD]"
                  }`}
                >
                  {isCompleted ? <IoCheckmark size={24} /> : itemIndex + 1}
                </div>

                <p
                  className={`text-base font-semibold quick_sand ${
                    isActive
                      ? "text-[#23262F]"
                      : isCompleted
                      ? "text-[#40CEEC]"
                      : "text-[#B1B5C3]"
                  }`}
                >
                  {item.name}
                </p>
              </div>
            );
          })}
      </div>

      <div className="mt-10 md:mt-16">
        {step === "shopping_cart" && (
          <ShoppingCart cart={cart} handleClick={handleClick} />
        )}
        {step === "checkout_details" && (
          <CheckoutDetails handleClick={handleClick} />
        )}
        {step === "order_complete" && (
          <OrderComplete handleClick={handleClick} />
        )}
      </div>
    </div>
  );
}
