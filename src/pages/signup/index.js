import SignUpForm from "@/components/auth-form/sign-up-form";
import Head from "next/head";

export default function Signup() {
  return (
    <>
      <div className="inter max-w-96 w-[90%] mx-auto  ">
        <Head>
          <title>Signup - Wonport</title>
        </Head>
        <div className=" relative flex justify-center items-center h-screen ">
          <div className="w-[100%] mx-auto border rounded-4xl p-8">
            <div>
              <p className="quick_sand text-3xl leading-[48px] font-bold text-[#4CC5DB] text-center">
                Creat an account
              </p>
              <p className="text-sm  quick_sand leading-[18px] text-[#7d7b7d] font-medium text-center pt-1">
                Enter your email and password
              </p>
            </div>
            <SignUpForm />
          </div>
        </div>
      </div>
    </>
  );
}
