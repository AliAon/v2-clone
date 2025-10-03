import { useRouter } from "next/router";
import React, { useState } from "react";
import { MdOutlineMailOutline } from "react-icons/md";
import InputField from "../input-field";
import * as Yup from "yup";
import { Field, Form, Formik } from "formik";
import { useForgetPasswordMutation } from "../../lib/services/userApi";
import Loader from "../../components/loader";
import { toast } from "react-toastify";
export default function ForgetPasswordForm() {
  const [ForgetPassword, { isLoading }] = useForgetPasswordMutation();
  const router = useRouter();
  const validationSchema = Yup.object().shape({
    email: Yup.string()
      .email("Invalid Email")
      .required("Provide Email Address"),
  });
  return (
    <>
      <Formik
        initialValues={{
          email: "",
        }}
        onSubmit={async (values, { resetForm, setSubmitting }) => {
          try {
            const response = await ForgetPassword(values).unwrap();
            toast.success(response.message, {
              hideProgressBar: true,
              position: "top-center",
              autoClose: 2000,
            });
            resetForm();
            router.push("/resetpassword");
          } catch (error) {
            toast.error(error.data.detail, {
              hideProgressBar: true,
              position: "top-center",
              autoClose: 2000,
            });
            resetForm();
          } finally {
            setSubmitting(false);
            resetForm();
          }
        }}
        validationSchema={validationSchema}
      >
        {(props) => (
          <Form
            id="forget_password"
            className="mx-auto my-5"
            onSubmit={props.handleSubmit}
          >
            <div className="mt-10">
              <div className="flex items-center gap-x-4 border-b border-b-[#7E7E7E] pb-2 w-full mt-16">
                <MdOutlineMailOutline className="text-[23px] text-[#7E7E7E]" />
                <Field
                  name="email"
                  placeholder="Email Address"
                  type="text"
                  as={InputField}
                />
              </div>

              {props.errors.email && props.touched.email && (
                <div id="feedback" className="text-[12px]  text-red-500	">
                  {props.errors.email}
                </div>
              )}
            </div>
          </Form>
        )}
      </Formik>
      <div className="text-center">
        <button
          form="forget_password"
          type="submit"
          disabled={isLoading}
          className="md:text-[20px] w-full lg:w-auto leading-[24px] font-semibold text-white bg-[#4CC5DB] px-10 py-3 rounded-full shadow-md"
        >
          {isLoading && <Loader />}
          {isLoading && <span>Loading...</span>}
          {!isLoading && <span>CONTINUE</span>}
        </button>
      </div>
    </>
  );
}
