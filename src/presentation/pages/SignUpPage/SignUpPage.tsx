import { AiOutlineReload, AiOutlineUser } from "react-icons/ai";
import { IoKeyOutline } from "react-icons/io5";
import { GoEye } from "react-icons/go";
import { GoEyeClosed } from "react-icons/go";
import { useState } from "react";
import GithubLogo from "presentation/assets/svg/GithubLogo";
import GoogleIcon from "presentation/assets/svg/GoogleIcon";
import imageAssets from "presentation/assets/images";
import FacebookLogo from "presentation/assets/svg/FacebookLogo";
import SliderComponent from "presentation/components/SliderComponent";
import { handleTextInputSignUp } from "./HandleSignUpPage";
import { useNavigate } from "react-router-dom";
import { IoIosRepeat } from "react-icons/io";
import UserSignup from "domain/entities/UserSignup";
import { ActionType } from "domain/enums/ActionTypeSaga";
import { useDispatch } from "react-redux";
type Props = {};
const SignUpPage = (props: Props) => {
  const [userSignup, setUserSignup] = useState<UserSignup>({
    username: "",
    password: "",
    firstname:"",
    lastname:"",
    confirmPassword:""
  });
  const navigation = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const dispatch=useDispatch()
  const handleSignup = (event: React.FormEvent<HTMLFormElement>) => {
    console.log("hhe")
    event.preventDefault(); // Ngăn chặn hành vi mặc định của form
    // Dispatch action với dữ liệu userSignup
    dispatch({ type: ActionType.SIGN_UP, payload: userSignup });
};
  return (
    <div className="flex flex-row h-full w-full">
      <main className="relative h-screen w-full flex justify-center items-center flex-col">
        <div className=" absolute max-md:top-8 max-md:left-5 max-lg:mx-1 top-8 left-10 flex justify-start items-center gap-3">
          <img src={imageAssets.logo} className="h-12 w-12" alt=""></img>
          <label className="font-semibold text-2xl">Hygge</label>
        </div>
        <div className="flex justify-center items-center flex-col py-10">
          <div className="flex flex-col w-[300px] mb-5  max-lg:mb-10 ">
            <label className="text-left text-2xl font-semibold text-slate-700">
              {"Welcome to Hygge,"}
            </label>
            <label className="m-1 ml-12 font-medium text-lg text-slate-500 ">
              {"Start your connection process Register now!"}
            </label>
          </div>
          <form className="flex gap-4 flex-col" onSubmit={handleSignup}>
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
                  handleTextInputSignUp(userSignup, setUserSignup, e);
                }}
                className="pl-14 pr-5 bg-slate-100 rounded-3xl h-11 w-[300px] py-1 placeholder-slate-400 outline-[0.1px] outline-purple-300"
              ></input>
            </div>

            <div className="flex flex-row gap-2">
              <div className="relative rounded-3xl bg-zinc-100">
                <input
                  placeholder="First name"
                  required={true}
                  name="firstname"
                  id="firstname"
                  onChange={(e) => {
                    handleTextInputSignUp(userSignup, setUserSignup, e);
                  }}
                  type={"text"}
                  className="pl-5 pr-3 bg-slate-100 rounded-3xl h-11 w-[170px] py-1 placeholder-slate-400 outline-1 outline-purple-300"
                ></input>
              </div>
              <div className="relative rounded-3xl bg-zinc-100">
                <input
                  placeholder="Last name"
                  required={true}
                  name="lastname"
                  id="lastname"
                  onChange={(e) => {
                    handleTextInputSignUp(userSignup, setUserSignup, e);
                  }}
                  type={"text"}
                  className="pl-5 pr-3 bg-slate-100 rounded-3xl h-11 w-[120px] py-1 placeholder-slate-400 outline-1 outline-purple-300"
                ></input>
              </div>
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
                  handleTextInputSignUp(userSignup, setUserSignup, e);
                }}
                type={showPassword ? "text" : "password"}
                className="pl-14 pr-10 bg-slate-100 rounded-3xl h-11 w-[300px] py-1 placeholder-slate-400 outline-1 outline-purple-300"
              ></input>
              {userSignup?.password !== undefined &&
                userSignup?.password.length > 0 && (
                  <div className="absolute top-1 right-1 rounded-full h-9 w-9 flex justify-center items-center">
                    <button type="button" onClick={() => setShowPassword(!showPassword)}>
                      {showPassword ? (
                        <GoEye size={20} />
                      ) : (
                        <GoEyeClosed size={20} />
                      )}
                    </button>
                  </div>
                )}
            </div>
            <div className="relative rounded-3xl bg-zinc-100">
              <div className="absolute bg-white rounded-full h-9 w-9 flex justify-center items-center top-1 left-1 ">
              <IoIosRepeat size={20}/>
              </div>
              <input
                placeholder="Confirm password"
                required={true}
                name="confirmPassword"
                id="confirmPassword"
                onChange={(e) => {
                  handleTextInputSignUp(userSignup, setUserSignup, e);
                }}
                type={showConfirmPassword? "text" : "password"}
                className="pl-14 pr-10 bg-slate-100 rounded-3xl h-11 w-[300px] py-1 placeholder-slate-400 outline-1 outline-purple-300"
              ></input>
              {userSignup?.confirmPassword !== undefined &&
                userSignup.confirmPassword.length > 0 && (
                  <div className="absolute top-1 right-1 rounded-full h-9 w-9 flex justify-center items-center">
                    <button type="button" onClick={() => setShowConfirmPassword(!showConfirmPassword)}>
                      {showConfirmPassword ? (
                        <GoEye size={20} />
                      ) : (
                        <GoEyeClosed size={20} />
                      )}
                    </button>
                  </div>
                )}
            </div>
            <button
              type="submit"
              className=" bg-violet-600 mt-2 rounded-3xl text-white w-[300px] h-10"
            >
              {"Register your account"}
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
            <span className="text-gray-500">{"You have an account?"}</span>
            <button
              className="text-violet-600 my-5 mx-1"
              onClick={() => {
                navigation("/auth/login");
              }}
            >
              {"Login"}
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

export default SignUpPage;
