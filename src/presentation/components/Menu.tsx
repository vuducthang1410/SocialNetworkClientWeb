import React from "react";
import { AiFillHome, AiOutlineHome } from "react-icons/ai";
import { PiMessengerLogo, PiMessengerLogoFill } from "react-icons/pi";

import {
  HiMiniUsers,
  HiOutlineUserGroup,
  HiOutlineUsers,
  HiUserGroup,
} from "react-icons/hi2";
import { useNavigate } from "react-router-dom";
import { IoSearchOutline } from "react-icons/io5";
type Props = {};
interface ItemMenu {
  id: number;
  name: string;
  url: string;
  itemFocus: JSX.Element;
  itemNoFocus: JSX.Element;
}
const Menu = (props: Props) => {
  const navigation = useNavigate();
  const itemComponent: ItemMenu[] = [
    {
      id: 1,
      name: "Home",
      url: "/",
      itemFocus: <AiFillHome size={25}/>,
      itemNoFocus: <AiOutlineHome size={25}/>,
    },
    {
      id: 2,
      name: "Friend",
      url: "/friend",
      itemFocus: <HiMiniUsers size={25}/>,
      itemNoFocus: <HiOutlineUsers size={25}/>,
    },
    {
      id: 3,
      name: "Group",
      url: "/group",
      itemFocus: <HiUserGroup size={25}/>,
      itemNoFocus: <HiOutlineUserGroup size={25}/>,
    },
    {
      id: 4,
      name: "Message",
      url: "/message",
      itemFocus: <PiMessengerLogoFill size={25}/>,
      itemNoFocus: <PiMessengerLogo size={25}/>,
    },
    {
        id: 5,
        name: "Search",
        url: "/search",
        itemFocus:   <IoSearchOutline size={25} />,
        itemNoFocus:   <IoSearchOutline size={25} />,
      },
  ];
  return (
    <div className="w-1/5 overflow-hidden h-full fixed ml-4 border-r">
      {itemComponent.map((value: ItemMenu, index: number) => (
        <button
          key={value.id}
          className=" flex w-[270px] items-center h-14 gap-3 px-5 my-1 hover:bg-violet-100 rounded-xl"
          onClick={() => {
            navigation(value.url);
          }}
        >
          {value.itemNoFocus}
          <label className="font-medium">{value.name}</label>
        </button>
      ))}
    </div>
  );
};

export default Menu;
