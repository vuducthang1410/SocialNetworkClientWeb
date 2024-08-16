import FacebookLogo from "presentation/assets/svg/FacebookLogo";
import GithubLogo from "presentation/assets/svg/GithubLogo";
import GoogleIcon from "presentation/assets/svg/GoogleIcon";
import SliderComponent from "presentation/components/SliderComponent";
import React, { useState } from "react";
import { AiOutlineUser } from "react-icons/ai";
import { GoEye, GoEyeClosed } from "react-icons/go";
import { IoKeyOutline } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import { handleTextInput } from "./HandleLoginPage";
import HeaderLogo from "presentation/components/HeaderLogo";
import UserLogin from "domain/entities/UserLogin";

type Props = {};

const LoginPage = (props: Props) => {
  const [userLogin, setUserLogin] = useState<UserLogin>({
    username: "",
    password: "",
  });
  const navigation = useNavigate();
  const [visible, setVisible] = useState(false);
  return (
    <div className="flex flex-row w-full">
      <main className="relative w-full flex justify-center items-center flex-col">
        <HeaderLogo/>
        <div className="flex justify-center items-center flex-col py-10">
          <div className="flex flex-col w-[300px] mb-10 ">
            <label className="text-left text-2xl font-semibold text-slate-700">
              {"Welcome, "}
            </label>
            <label className="m-1 ml-10 font-medium text-xl text-slate-500 ">
              {"Connect to your world - Log in to explore!"}
            </label>
          </div>

          <form className="flex gap-5 flex-col">
            <div className="relative rounded-3xl bg-zinc-100 ">
              <div className="absolute bg-white rounded-full h-9 w-9 flex justify-center items-center top-1 left-1 ">
                <AiOutlineUser />
              </div>
              <input
                placeholder="Email or username"
                required={true}
                name="username"
                id="username"
                onChange={(e) => {
                  handleTextInput(userLogin, setUserLogin, e);
                }}
                className="pl-14 pr-5 bg-slate-100 rounded-3xl h-11 w-[300px] py-1 placeholder-slate-400 outline-[0.1px] outline-purple-300"
              ></input>
            </div>
            <div className="relative rounded-3xl bg-zinc-100">
              <div className="absolute bg-white rounded-full h-9 w-9 flex justify-center items-center top-1 left-1 ">
                <IoKeyOutline />
              </div>
              <input
                placeholder="Password"
                required={true}
                name="password"
                id="password"
                onChange={(e) => {
                  handleTextInput(userLogin, setUserLogin, e);
                }}
                type={visible ? "text" : "password"}
                className="pl-14 pr-10 bg-slate-100 rounded-3xl h-11 w-[300px] py-1 placeholder-slate-400 outline-1 outline-purple-300"
              ></input>
              {userLogin?.password !== undefined &&
                userLogin.password.length > 0 && (
                  <div className="absolute top-1 right-1 rounded-full h-9 w-9 flex justify-center items-center">
                    <button type="button" onClick={() => setVisible(!visible)}>
                      {visible ? (
                        <GoEye size={20} />
                      ) : (
                        <GoEyeClosed size={20} />
                      )}
                    </button>
                  </div>
                )}
            </div>
            <div className="flex justify-end items-center">
              <button
                onClick={() => {
                  navigation("/auth/forgot-password");
                }}
                className="text-gray-500 font-medium mx-1 mb-2 text-right text-sm"
              >
                {"Lost password?"}
              </button>
            </div>
            <button
              type="submit"
              className=" bg-violet-600 rounded-3xl text-white w-[300px] h-10"
              onClick={(e) => {
                navigation("/")
              }}
            >
              {"Log into your account"}
            </button>
          </form>
          <div className="flex justify-center items-center">
            <div className="h-0 w-[70px] border-y border-slate-400"></div>
            <span className="text-slate-700 mx-4 mt-4 mb-7">OR</span>
            <div className="h-0 w-[70px] border-y border-slate-400"></div>
          </div>
          <div className="flex gap-5">
            <button className="flex justify-center items-center bg-red-100 rounded-3xl text-white  h-10 w-10">
              <GoogleIcon />
            </button>
            <button className="flex justify-center items-center bg-slate-100 rounded-3xl text-white h-10 w-10">
              <GithubLogo />
            </button>
            <button className="flex justify-center items-center bg-blue-100 rounded-3xl text-white h-10 w-10">
              <FacebookLogo />
            </button>
          </div>
          <div>
            <span className="text-gray-500">{"New user?"}</span>
            <button
              className="text-violet-600 my-5 mx-1"
              onClick={() => {
                navigation("/auth/sign-up");
              }}
            >
              {"Create your account"}
            </button>
          </div>
        </div>
      </main>
      <div className="h-screen w-1/2 max-md:w-0">
        <SliderComponent />
      </div>
    </div>
  );
};

export default LoginPage;
