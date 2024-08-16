import imageAssets from "presentation/assets/images";
import React from "react";
import { AiOutlineBars } from "react-icons/ai";
import { FaRegBell } from "react-icons/fa";
import { GoBell } from "react-icons/go";
import { IoSearchOutline } from "react-icons/io5";
import { RiMessengerLine } from "react-icons/ri";
type Props = {};

const Header = (props: Props) => {
  return (
    <header className="flex flex-row w-full bg-white border-b overflow-hidden fixed z-10">
      <div className="flex w-1/5 flex-row">
        <a href="/" className="pl-10 my-2  bg-white">
          <img
            src={imageAssets.logo}
            alt="This is a logo"
            width={50}
            height={50}
          />
        </a>
      </div>

      <div className="w-3/5 flex justify-center items-center ">
        <div className="bg-gray-50 w-[500px] h-10 rounded-full flex relative">
          <div className="absolute top-1 left-1 bg-white h-8 w-8  rounded-full flex justify-center items-center">
            <IoSearchOutline size={20} />
          </div>
          <input
            className="rounded-full pl-10 pr-5 w-[600px] h-10 bg-gray-100 outline-violet-400"
            placeholder="Search"
          ></input>
        </div>
      </div>
      <div className="flex flex-row gap-3 w-1/5 justify-end mr-4 items-center ">
        <button className="bg-gray-200 flex justify-center items-center h-10 w-10 rounded-full hover:bg-gray-400">
          <AiOutlineBars size={20} />
        </button>
        <button className="bg-gray-200 flex justify-center items-center h-10 w-10 rounded-full hover:bg-gray-400">
          <RiMessengerLine size={20} />
        </button>
        <button className="bg-gray-200 flex justify-center items-center h-10 w-10 rounded-full hover:bg-gray-400">
          <GoBell size={20} />
        </button>
        <a href="/">
          <img
            src={imageAssets.logo}
            height={50}
            width={50}
            alt="This is a logo"
          />
        </a>
      </div>
    </header>
  );
};

export default Header;
