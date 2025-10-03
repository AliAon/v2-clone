import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useCreateOrderMutation } from "@/lib/services/orderApi";
import { useCreateShipingMutation } from "@/lib/services/shipingApi";
import { ErrorMessage, Field, Form, Formik } from "formik";
import Image from "next/image";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import * as Yup from "yup";
const validationSchema = Yup.object({
  firstName: Yup.string().required("Required"),
  lastName: Yup.string().required("Required"),
  phoneNumber: Yup.string()
    .matches(/^\+?[0-9]{7,15}$/, "Enter a valid phone number")
    .required("Phone number is required"),
  email: Yup.string().email("Invalid email").required("Required"),
  address1: Yup.string().required("Required"),
  city: Yup.string().required("Required"),
  country: Yup.string().required("Required"),
  zipCode: Yup.number()
    .typeError("Zip Code must be numeric")
    .positive("Zip Code cannot be negative")
    .integer("Zip Code must be digits only")
    .required("Zip Code is required"),
  cardNumber: Yup.string().required("Required"),
  expiry: Yup.string().required("Required"),
  cvc: Yup.number()
    .typeError("CVC must be a number")
    .positive("CVC cannot be negative")
    .integer("CVC must be digits only")
    .required("CVC is required"),
});
export default function CheckoutDetails({ handleClick }) {
  const cart = useSelector((state) => state.cart);
  const { user } = useSelector((state) => state.auth);

  const [creatingShipping, { isLoading }] = useCreateShipingMutation();
  const [creatingOrder, { isLoading: isLoadingOrder }] =
    useCreateOrderMutation();

  const initialValues = {
    firstName: "",
    lastName: "",
    phoneNumber: "",
    email: "",
    address1: "",
    address2: "",
    city: "",
    country: "",
    state: "",
    zipCode: "",
    cardAddress1: "",
    cardAddress2: "",
    cardNumber: "",
    expiry: "",
    cvc: "",
  };

  const handleSubmit = (values) => {
    console.log("Form Values:", values);
    creatingShipping({
      name: values.firstName + " " + values.lastName,
      address1: values.address1,
      address2: values.address2,
      city: values.city,
      state: values.state,
      postalCode: values.zipCode,
      country: values.country,
    })
      .unwrap()
      .then((res) => {
        creatingOrder({
          shippingId: res?._id,
          orderStatus: "Pending",
          shippingMethod: "673c783943cbce7381666e66",
        });
      })
      .catch((err) => {
        console.log("shipping error", err);
      });

    // call API or place order logic here
  };

  return (
    <div className="flex flex-col lg:flex-row gap-5 md:gap-10">
      <div className="flex-1">
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {({ handleSubmit }) => (
            <Form onSubmit={handleSubmit} className="flex-1">
              {/* Contact Information */}
              <div className="border border-[#40CEEC] rounded-md px-5 py-4">
                <p className="text-xl text-black font-medium quick_sand">
                  Contact Information
                </p>

                <div className="mt-5 space-y-5">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    {/* First Name */}
                    <div>
                      <p className="text-xs font-bold text-[#6C7275] quick_sand mb-2 uppercase">
                        FIRST Name
                      </p>
                      <Field
                        type="text"
                        name="firstName"
                        placeholder="First Name"
                        className="w-full h-10 border border-[#CBCBCB] rounded-md placeholder:text-[#6C7275] text-base quick_sand p-2"
                      />
                      <ErrorMessage
                        name="firstName"
                        component="div"
                        className="text-red-500 text-xs"
                      />
                    </div>

                    {/* Last Name */}
                    <div>
                      <p className="text-xs font-bold text-[#6C7275] quick_sand mb-2 uppercase">
                        Last name
                      </p>
                      <Field
                        type="text"
                        name="lastName"
                        placeholder="Last Name"
                        className="w-full h-10 border border-[#CBCBCB] rounded-md placeholder:text-[#6C7275] text-base quick_sand p-2"
                      />
                      <ErrorMessage
                        name="lastName"
                        component="div"
                        className="text-red-500 text-xs"
                      />
                    </div>
                  </div>

                  {/* Phone */}
                  <div>
                    <p className="text-xs font-bold text-[#6C7275] quick_sand mb-2 uppercase">
                      Phone Number
                    </p>
                    <Field
                      type="text"
                      name="phoneNumber"
                      pattern="^\+?[0-9]{7,15}$"
                      placeholder="Phone Number"
                      className="w-full h-10 border border-[#CBCBCB] rounded-md placeholder:text-[#6C7275] text-base quick_sand p-2"
                    />
                    <ErrorMessage
                      name="phoneNumber"
                      component="div"
                      className="text-red-500 text-xs"
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <p className="text-xs font-bold text-[#6C7275] quick_sand mb-2 uppercase">
                      Email address
                    </p>
                    <Field
                      type="email"
                      name="email"
                      placeholder="Your Email"
                      className="w-full h-10 border border-[#CBCBCB] rounded-md placeholder:text-[#6C7275] text-base quick_sand p-2"
                    />
                    <ErrorMessage
                      name="email"
                      component="div"
                      className="text-red-500 text-xs"
                    />
                  </div>
                </div>
              </div>

              {/* Shipping Address */}
              <div className="border border-[#40CEEC] rounded-md px-5 py-4 mt-5">
                <p className="text-xl text-black font-medium quick_sand">
                  Shipping Address
                </p>

                <div className="mt-5 space-y-5">
                  <div>
                    <p className="text-xs font-bold text-[#6C7275] quick_sand mb-2 uppercase">
                      Address 1*
                    </p>
                    <Field
                      type="text"
                      name="address1"
                      placeholder="Street Address"
                      className="w-full h-10 border border-[#CBCBCB] rounded-md placeholder:text-[#6C7275] text-base quick_sand p-2"
                    />
                    <ErrorMessage
                      name="address1"
                      component="div"
                      className="text-red-500 text-xs"
                    />
                  </div>

                  <div>
                    <p className="text-xs font-bold text-[#6C7275] quick_sand mb-2 uppercase">
                      Address 2*
                    </p>
                    <Field
                      type="text"
                      name="address2"
                      placeholder="Street Address"
                      className="w-full h-10 border border-[#CBCBCB] rounded-md placeholder:text-[#6C7275] text-base quick_sand p-2"
                    />
                  </div>

                  <div>
                    <p className="text-xs font-bold text-[#6C7275] quick_sand mb-2 uppercase">
                      Town / City *
                    </p>
                    <Field
                      type="text"
                      name="city"
                      placeholder="Town / City"
                      className="w-full h-10 border border-[#CBCBCB] rounded-md placeholder:text-[#6C7275] text-base quick_sand p-2"
                    />
                    <ErrorMessage
                      name="city"
                      component="div"
                      className="text-red-500 text-xs"
                    />
                  </div>

                  <div>
                    <p className="text-xs font-bold text-[#6C7275] quick_sand mb-2 uppercase">
                      Country *
                    </p>
                    <Field
                      type="text"
                      name="country"
                      placeholder="Country"
                      className="w-full h-10 border border-[#CBCBCB] rounded-md placeholder:text-[#6C7275] text-base quick_sand p-2"
                    />
                    <ErrorMessage
                      name="country"
                      component="div"
                      className="text-red-500 text-xs"
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div>
                      <p className="text-xs font-bold text-[#6C7275] quick_sand mb-2 uppercase">
                        State
                      </p>
                      <Field
                        type="text"
                        name="state"
                        placeholder="State"
                        className="w-full h-10 border border-[#CBCBCB] rounded-md placeholder:text-[#6C7275] text-base quick_sand p-2"
                      />
                    </div>

                    <div>
                      <p className="text-xs font-bold text-[#6C7275] quick_sand mb-2 uppercase">
                        Zip Code
                      </p>
                      <Field
                        name="zipCode"
                        type="number"
                        inputMode="numeric"
                        placeholder="Zip Code"
                        min="0"
                        className="w-full h-10 border border-[#CBCBCB] rounded-md placeholder:text-[#6C7275] text-base quick_sand p-2"
                      />
                      <ErrorMessage
                        name="zipCode"
                        component="div"
                        className="text-red-500 text-xs"
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Payment Method */}
              <div className="border border-[#40CEEC] rounded-md px-5 py-4 mt-5">
                <p className="text-xl text-black font-medium quick_sand">
                  Payment method
                </p>

                <div className="mt-5 space-y-5">
                  <div>
                    <p className="text-xs font-bold text-[#6C7275] quick_sand mb-2 uppercase">
                      Address 1*
                    </p>
                    <Field
                      type="text"
                      name="cardAddress1"
                      placeholder="Street Address"
                      className="w-full h-10 border border-[#CBCBCB] rounded-md placeholder:text-[#6C7275] text-base quick_sand p-2"
                    />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-[#6C7275] quick_sand mb-2 uppercase">
                      Address 2*
                    </p>
                    <Field
                      type="text"
                      name="cardAddress2"
                      placeholder="Street Address"
                      className="w-full h-10 border border-[#CBCBCB] rounded-md placeholder:text-[#6C7275] text-base quick_sand p-2"
                    />
                  </div>

                  <div>
                    <p className="text-xs font-bold text-[#6C7275] quick_sand mb-2 uppercase">
                      Card Number
                    </p>
                    <Field
                      type="text"
                      name="cardNumber"
                      placeholder="1234 1234 1234"
                      className="w-full h-10 border border-[#CBCBCB] rounded-md placeholder:text-[#6C7275] text-base quick_sand p-2"
                    />
                    <ErrorMessage
                      name="cardNumber"
                      component="div"
                      className="text-red-500 text-xs"
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div>
                      <p className="text-xs font-bold text-[#6C7275] quick_sand mb-2 uppercase">
                        Expiration date
                      </p>
                      <Field
                        type="date"
                        name="expiry"
                        placeholder="MM/YY"
                        className="w-full h-10 border border-[#CBCBCB] rounded-md placeholder:text-[#6C7275] text-base quick_sand p-2"
                      />
                      <ErrorMessage
                        name="expiry"
                        component="div"
                        className="text-red-500 text-xs"
                      />
                    </div>

                    <div>
                      <p className="text-xs font-bold text-[#6C7275] quick_sand mb-2 uppercase">
                        CVC
                      </p>
                      <Field
                        type="number"
                        name="cvc"
                        inputMode="numeric"
                        min="0"
                        placeholder="CVC code"
                        className="w-full h-10 border border-[#CBCBCB] rounded-md placeholder:text-[#6C7275] text-base quick_sand p-2"
                      />
                      <ErrorMessage
                        name="cvc"
                        component="div"
                        className="text-red-500 text-xs"
                      />
                    </div>
                  </div>
                </div>
              </div>

              <button
                type="submit"
                className="hidden lg:block w-full h-13 rounded-full bg-gradient-to-r from-[#40CEEC] to-[#247586] text-lg font-medium text-white mt-5 quick_sand"
              >
                Place Order
              </button>
            </Form>
          )}
        </Formik>
      </div>
      <div className="lg:w-[413px] h-fit border border-[#40CEEC] rounded-md px-5 py-4">
        <p className="text-xl text-[#141718] font-medium quick_sand">
          Order summary
        </p>

        {cart?.cart?.map((item, index) => (
          <div
            key={index}
            className="flex items-start justify-between gap-2 mt-5"
          >
            <div className="flex items-start gap-4">
              <div className="w-[82px] h-[74px] flex items-center justify-center border border-[#40CEEC] rounded-xl">
                <img
                  src={item?.image}
                  alt=""
                  width={151}
                  height={100}
                  className="w-[50px] h-[60px]"
                />
              </div>
              <div className="flex-1">
                <p className="line-clamp-1 text-sm font-semibold text-[#191C1F] quick_sand">
                  {item?.name}
                </p>

                <div className="flex items-center gap-2 mt-3.5">
                  <p className="text-xs text-[#7D7B7D] font-medium quick_sand">
                    Color: <span className="text-black">Grey</span>
                  </p>
                  <p className="text-xs text-[#7D7B7D] font-medium quick_sand capitalize">
                    Size: <span className="text-black">{item?.size}</span>
                  </p>
                  <p className="text-xs text-[#7D7B7D] font-medium quick_sand capitalize">
                    Quantity:{" "}
                    <span className="text-black">{item?.quantity}</span>
                  </p>
                </div>
              </div>
            </div>
            <p className="text-sm text-[#121212] font-semibold quick_sand">
              ${item?.price}
            </p>
          </div>
        ))}

        <div className="mt-5">
          <div className="flex items-center justify-between border-b border-[#EAEAEA] py-4">
            <p className="text-base text-[#141718] quick_sand">Shipping</p>
            <p className="text-base text-[#141718] font-semibold quick_sand">
              Free
            </p>
          </div>

          <div className="flex items-center justify-between border-b border-[#EAEAEA] py-4">
            <p className="text-base text-[#141718] quick_sand">Subtotal</p>
            <p className="text-base text-[#141718] font-semibold quick_sand">
              ${cart?.subtotal}
            </p>
          </div>

          <div className="flex items-center justify-between pt-4">
            <p className="text-xl font-medium text-[#141718] quick_sand">
              Total
            </p>
            <p className="text-xl text-[#141718] font-medium quick_sand">
              ${cart?.total}
            </p>
          </div>
        </div>
      </div>

      <Button
        onClick={() => handleClick("order_complete")}
        className="block lg:hidden w-full h-13 rounded-full bg-gradient-to-r from-[#40CEEC] to-[#247586] text-lg font-medium text-white quick_sand"
      >
        Place Order
      </Button>
    </div>
  );
}
