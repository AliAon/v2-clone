import React, { useState } from "react";
import { MdOutlineMailOutline } from "react-icons/md";
import { IoMdEyeOff } from "react-icons/io";
import * as Yup from "yup";
import Link from "next/link";
import { useDispatch } from "react-redux";
import { IoMdEye, IoMdLock } from "react-icons/io";
import { useRouter } from "next/router";
import { useLoginUserMutation } from "../../lib/services/userApi";
import InputField from "../input-field";
import { Field, Form, Formik } from "formik";
import { toast } from "react-toastify";
import { usertoken, authuser, isLogin } from "../../lib/features/authSlice";
import { Button } from "../ui/button";
import { Loader } from "lucide-react";

export default function LoginForm() {
  const [changeType, setPasswordType] = useState(false);
  const [LoginUser, { isLoading }] = useLoginUserMutation();
  const dispatch = useDispatch();
  const router = useRouter();
  const validationSchema = Yup.object().shape({
    email: Yup.string()
      .email("Invalid Email")
      .required("Provide Email Address"),
    password: Yup.string()
      // check minimum characters
      .min(4, "Password at least character")
      .required("Please Provide Password"),
  });
  return (
    <Formik
      initialValues={{
        email: "",
        password: "",
      }}
      onSubmit={async (values, { resetForm, setSubmitting }) => {
        try {
          const response = await LoginUser(values).unwrap();
          localStorage.setItem("token", response.token);
          localStorage.setItem("user", JSON.stringify(response.data));
          dispatch(usertoken(response.token));
          dispatch(authuser(response.data));

          if (response.success) {
            dispatch(isLogin(true));
            toast.success(response.message, {
              hideProgressBar: true,
              position: "top-center",
              autoClose: 2000,
            });
            router.push("/");
          }
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
        <Form className="mx-auto mt-10" onSubmit={props.handleSubmit}>
          <div className="mt-10 relative">
            <div className="flex items-center gap-x-4 border rounded-full border-[#7E7E7E] w-full mt-10 px-3 py-2">
              <MdOutlineMailOutline className="text-[23px] text-[#7E7E7E]" />
              <Field
                name="email"
                placeholder="sample@gamil.com"
                type="text"
                as={InputField}
              />
            </div>
            {props.errors.email && props.touched.email && (
              <div id="feedback" className="text-[12px]  text-red-500	mt-1">
                {props.errors.email}
              </div>
            )}
            <div className="flex items-center gap-x-4 border rounded-full border-[#7E7E7E] w-full mt-5 px-3 py-2">
              <IoMdLock className="text-[23px] text-[#7E7E7E]" />
              <Field
                name="password"
                placeholder="***************************"
                type={changeType ? "text" : "password"}
                as={InputField}
              />
              <div>
                {changeType ? (
                  <IoMdEye
                    size={20}
                    className="cursor-pointer"
                    onClick={() => setPasswordType((pre) => !pre)}
                  />
                ) : (
                  <IoMdEyeOff
                    size={20}
                    className="cursor-pointer"
                    onClick={() => setPasswordType((pre) => !pre)}
                  />
                )}
              </div>
            </div>
            {props.errors.password && props.touched.password && (
              <div id="feedback" className="text-[12px]  text-red-500	mt-1">
                {props.errors.password}
              </div>
            )}
          </div>

          <div className="flex flex-col items-center ">
            <Button
              type="submit"
              className="quick_sand font-bold inter bg-gradient-to-r from-[#40CEEC] to-[#247586] mt-10"
            >
              {isLoading && <Loader />}
              {isLoading && <span>Loading...</span>}
              {!isLoading && <span>Sign In</span>}
            </Button>

            <p className="text-center text-sm leading-[21px] font-semibold cursor-pointer text-[#4CC5DB] py-3">
              Create an account
              <Link href="/signup">
                <span className="underline text-black ml-[5px]">Sign Up</span>
              </Link>
            </p>
          </div>
        </Form>
      )}
    </Formik>
  );
}
