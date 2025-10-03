import LoginForm from "@/components/auth-form/LoginForm";
import Head from "next/head";

export default function Login() {
  return (
    <>
      <div className="inter max-w-96 w-[90%] mx-auto  ">
        <Head>
          <title>Login - Wonport</title>
        </Head>
        <div className=" relative flex justify-center items-center h-screen ">
          <div className="w-[100%] mx-auto border rounded-4xl p-8">
            <div>
              <p className="quick_sand text-3xl leading-[48px] font-bold text-[#4CC5DB] text-center">
                Welcome Back
              </p>
              <p className="text-sm  quick_sand leading-[18px] text-[#7d7b7d] font-medium text-center pt-1">
                Enter your email and password
              </p>
            </div>
            <LoginForm />
          </div>
        </div>
      </div>
    </>
  );
}
