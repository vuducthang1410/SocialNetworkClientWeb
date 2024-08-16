import ForgotPassword from "domain/entities/ForgotPassword";
import HeaderLogo from "presentation/components/HeaderLogo";
import React, { useEffect, useState } from "react";
import { handleInputForgotPassword } from "./handler";
import validateEmail from "presentation/utils/validateEmail";
import LoadingAnimation from "presentation/assets/svg/LoadingAnimation";
type Props = {};

const ForgotPasswordPage = (props: Props) => {
  const [isValid, setIsValid] = useState(true);
  const [isShowError, setIsShowError] = useState<boolean>(false);
  const [data, setData] = useState<ForgotPassword>({
    email: "",
    isSuccess: false,
  });
  const validateData = () => {
    if (!validateEmail(data.email)) {
      setIsValid(false);
    } else {
      if (isShowError === true) {
        setIsValid(true)
        setIsShowError(false);
      }
    }
  };
  useEffect(() => {
    if (isShowError === true) validateData();
  }, [data.email,isShowError]);
  return (
    <div className="relative h-screen w-full flex justify-center items-center flex-col gap-5">
      <HeaderLogo />
      <header className="flex flex-col justify-center items-center">
        <label className="text-3xl max-md:w-[350px] max-md:text-2xl  text-center font-semibold w-[450px]">
          Did you forgot your password?
        </label>
        <label className="w-[400px] max-md:w-[350px] text-center  text-sm m-2 text-gray-400 font-medium">
          Enter your email address you're using for your account below an we
          will send you a password reset link
        </label>
      </header>
      <main className="flex justify-center items-center flex-col">
        <div className="w-[400px] max-md:w-[350px]  my-2">
          <label className="text-left text-lg max-md:text-base text-gray-500 font-medium">
            Email Address
          </label>
        </div>

        <input
          className="outline-none border-x border-y w-[400px] h-10 rounded-lg px-3 py-2 max-md:w-[350px] "
          placeholder="Input your email"
          id="email"
          name="email"
          type="email"
          onChange={(e) => {
            handleInputForgotPassword(data, setData, e);
          }}
        ></input>
        {!isValid && isShowError && (
          <div className="w-[400px] max-md:w-[350px] mt-2">
            <label className="text-red-500">
              {"Email is not in correct format"}
            </label>
          </div>
        )}
        <button
          className="w-[400px] max-md:w-[350px] flex justify-center items-center  h-10 bg-violet-600 rounded-lg mt-5 text-white font-medium"
          onClick={() => {
            setIsShowError(true)
            // alert(data.email);
          }}
        >
          <LoadingAnimation height={30} width={30} mainColor="white" backgroundColor="background-color: rgb(124 58 237 / var(--tw-bg-opacity))"/>
        </button>
      </main>
      <footer className="">
        <a
          href="/auth/login"
          className="text-gray-500 underline flex gap-1 justify-center items-center"
        >
          {/* <FaArrowLeft /> */}
          Back to Log in
        </a>
      </footer>
    </div>
  );
};

export default ForgotPasswordPage;
