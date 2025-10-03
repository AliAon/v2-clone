import { useRouter } from 'next/router';
import React from 'react'
import { useDispatch } from 'react-redux';
import { IoMdLock } from "react-icons/io";
import { useResetPasswordMutation } from "../../lib/services/userApi";
import Loader from "../../components/loader";
import InputField from "../input-field";
import * as Yup from "yup";
import { Field, Form, Formik } from "formik";
import { MdNumbers, MdOutlineMailOutline } from "react-icons/md";
import { toast } from "react-toastify";

export default function ResetPasswordForm() {
    const [ResetPassword, { isLoading }] = useResetPasswordMutation();
    const dispatch = useDispatch();
    const router = useRouter();
    const validationSchema = Yup.object().shape({
      code: Yup.string().required("Provide Code "),
      email: Yup.string()
        .email("Invalid Email")
        .required("Provide Email Address"),
      password: Yup.string()
        // check minimum characters
        .min(8, "Password at least character")
        .required("Please Provide Password"),
      confirmPassword: Yup.string()
        .required("Please Re-Type Password")
        .oneOf([Yup.ref("password")], "Passwords does not match"),
    });
  return (
    <Formik
    initialValues={{
      email:"",
      code: "",
      password: "",
    }}
    onSubmit={async (values, { resetForm, setSubmitting }) => {
      try {
        const response = await ResetPassword({
          email:values.email,
          code: values.code,
          password: values.password,
        }).unwrap();
        if (response.status) {
          toast.success(response.message, {
            hideProgressBar: true,
            position: "top-center",
            autoClose: 2000,
          });
        }
        router.push("/login");
        resetForm();
      } catch (error) {
        toast.error("Invalid Credentials", {
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
        id="resetpassowrd_form"
        className="mx-auto my-10"
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
        <div className="mt-10">
          <div className="flex items-center gap-x-4 border-b border-b-[#7E7E7E] pb-2 w-full mt-10">
            <MdNumbers className="text-[23px] text-[#7E7E7E]" />
            <Field
              name="code"
              placeholder="Code"
              type="text"
              as={InputField}
            />
          </div>
          {props.errors.code && props.touched.code && (
            <div id="feedback" className="text-[12px]  text-red-500	">
              {props.errors.code}
            </div>
          )}
        </div>
        <div className="mt-10">
          <div className="flex items-center gap-x-4 border-b border-b-[#7E7E7E] pb-2 w-full ">
            <IoMdLock className="text-[23px] text-[#7E7E7E]" />
            <Field
              name="password"
              placeholder="Enter New Password"
              type={"password"}
              as={InputField}
            />
          </div>
          {props.errors.password &&
            props.touched.password && (
              <div id="feedback" className="text-[12px]  text-red-500	">
                {props.errors.password}
              </div>
            )}
          <div className="flex items-center gap-x-4 border-b border-b-[#7E7E7E] pb-2 w-full mt-10">
            <IoMdLock className="text-[23px] text-[#7E7E7E]" />
            <Field
              name="confirmPassword"
              placeholder="Re-Enter Password"
              type={"password"}
              as={InputField}
            />
          </div>
          {props.errors.confirmPassword &&
            props.touched.confirmPassword && (
              <div id="feedback" className="text-[12px]  text-red-500	">
                {props.errors.confirmPassword}
              </div>
            )}
        </div>
        <div className="text-center">
        <button
          type="submit"
          className="md:text-[20px] w-full mt-10 md:w-auto leading-[24px] font-semibold text-white bg-[#4CC5DB] px-10 py-3 rounded-full shadow-md"
        >
          {isLoading && <Loader />}
          {isLoading && <span>Loading...</span>}
          {!isLoading && <span>CONTINUE</span>}
        </button>
        </div>
      </Form>
    )}
  </Formik>  )
}
