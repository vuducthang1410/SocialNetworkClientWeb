import React, { useState } from "react";
import StoryItem from "./StoryItem";
import { IoMdAdd } from "react-icons/io";
import StoryData from "domain/entities/StoryData";

type Props = {};

const StoryComponent = (props: Props) => {
  const [storyData, setStoryData] = useState<StoryData[]>([
    {
      id: "162dgdg",
      userId: "abc123xyz",
      fullName: "Vũ Đức Thắng",
      isOnline: true,
      urlAvatar:
        "https://dashboard.dienthoaivui.com.vn/uploads/wp-content/uploads/2023/02/hinh-nen-phi-hanh-gia-01.jpg",
      urlBackgroupStory:
        "https://www.vietnamworks.com/hrinsider/wp-content/uploads/2023/12/hinh-nen-dep-cho-dien-thoai-voi-hinh-anh-thien-nhien-phong-cach-truyen-tranh.jpg",
    },
    {
      id: "1",
      userId: "user1",
      fullName: "Nguyễn Văn A",
      isOnline: true,
      urlAvatar:
        "https://dashboard.dienthoaivui.com.vn/uploads/wp-content/uploads/2023/02/hinh-nen-phi-hanh-gia-01.jpg",
      urlBackgroupStory:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlAQQB3e2v4_XU1wwyTuj-NBZakcvx3M_F_g&s",
    },
    {
      id: "2",
      userId: "user2",
      fullName: "Trần Thị B",
      isOnline: false,
      urlAvatar:
        "https://dashboard.dienthoaivui.com.vn/uploads/wp-content/uploads/2023/02/hinh-nen-phi-hanh-gia-01.jpg",
      urlBackgroupStory:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlAQQB3e2v4_XU1wwyTuj-NBZakcvx3M_F_g&s",
    },
    {
      id: "3",
      userId: "user3",
      fullName: "Lê Văn C",
      isOnline: true,
      urlAvatar:
        "https://dashboard.dienthoaivui.com.vn/uploads/wp-content/uploads/2023/02/hinh-nen-phi-hanh-gia-01.jpg",
      urlBackgroupStory:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlAQQB3e2v4_XU1wwyTuj-NBZakcvx3M_F_g&s",
    },
    {
      id: "4",
      userId: "user4",
      fullName: "Phạm Thị D",
      isOnline: true,
      urlAvatar:
        "https://dashboard.dienthoaivui.com.vn/uploads/wp-content/uploads/2023/02/hinh-nen-phi-hanh-gia-01.jpg",
      urlBackgroupStory:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlAQQB3e2v4_XU1wwyTuj-NBZakcvx3M_F_g&s",
    },
    {
      id: "5",
      userId: "user5",
      fullName: "Hoàng Văn E",
      isOnline: false,
      urlAvatar:
        "https://dashboard.dienthoaivui.com.vn/uploads/wp-content/uploads/2023/02/hinh-nen-phi-hanh-gia-01.jpg",
      urlBackgroupStory:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlAQQB3e2v4_XU1wwyTuj-NBZakcvx3M_F_g&s",
    },
    {
      id: "6",
      userId: "user6",
      fullName: "Nguyễn Thị F",
      isOnline: true,
      urlAvatar:
        "https://dashboard.dienthoaivui.com.vn/uploads/wp-content/uploads/2023/02/hinh-nen-phi-hanh-gia-01.jpg",
      urlBackgroupStory:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlAQQB3e2v4_XU1wwyTuj-NBZakcvx3M_F_g&s",
    },
    {
      id: "7",
      userId: "user7",
      fullName: "Trương Văn G",
      isOnline: false,
      urlAvatar:
        "https://dashboard.dienthoaivui.com.vn/uploads/wp-content/uploads/2023/02/hinh-nen-phi-hanh-gia-01.jpg",
      urlBackgroupStory:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlAQQB3e2v4_XU1wwyTuj-NBZakcvx3M_F_g&s",
    },
    {
      id: "8",
      userId: "user8",
      fullName: "Lê Thị H",
      isOnline: true,
      urlAvatar:
        "https://dashboard.dienthoaivui.com.vn/uploads/wp-content/uploads/2023/02/hinh-nen-phi-hanh-gia-01.jpg",
      urlBackgroupStory:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlAQQB3e2v4_XU1wwyTuj-NBZakcvx3M_F_g&s",
    },
    {
      id: "9",
      userId: "user9",
      fullName: "Phạm Văn I",
      isOnline: true,
      urlAvatar:
        "https://dashboard.dienthoaivui.com.vn/uploads/wp-content/uploads/2023/02/hinh-nen-phi-hanh-gia-01.jpg",
      urlBackgroupStory:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlAQQB3e2v4_XU1wwyTuj-NBZakcvx3M_F_g&s",
    },
    {
      id: "10",
      userId: "user10",
      fullName: "Hoàng Thị J",
      isOnline: false,
      urlAvatar:
        "https://dashboard.dienthoaivui.com.vn/uploads/wp-content/uploads/2023/02/hinh-nen-phi-hanh-gia-01.jpg",
      urlBackgroupStory:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlAQQB3e2v4_XU1wwyTuj-NBZakcvx3M_F_g&s",
    },
  ]);
  const data: number[] = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  return (
    <div className="flex gap-2 overflow-x-scroll w-[625px]  m-5">
      <button className="w-[150px] min-w-[150px] h-[250px] relative bg-blue-100 rounded-2xl overflow-hidden">
        <img
          src="https://www.vietnamworks.com/hrinsider/wp-content/uploads/2023/12/hinh-nen-dien-thoai-35.jpg"
          alt="hehe"
          height={250}
          className="rounded-2xl"
        ></img>
        <div className="absolute bottom-0 gap-2 h-[50px] bg-gray-600  rounded-b-2xl w-[150px] flex justify-center items-center flex-col">
          <div className="h-8 w-8 absolute -top-4 rounded-full bg-violet-600 flex justify-center items-center">
            <IoMdAdd color="white" size={30} />
          </div>
          <label className="text-white text-sm font-medium">
            Create history
          </label>
        </div>
      </button>
      {storyData.map((value: StoryData, index: number) => (
        <StoryItem key={index} storyDataItem={value}/>
      ))}
    </div>
  );
};

export default StoryComponent;
