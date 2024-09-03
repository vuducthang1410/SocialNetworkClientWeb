import PostData from "domain/entities/PostData";
import PostComponent from "presentation/components/PostComponent";
import StoryComponent from "presentation/components/StoryComponent";
import React, { useState } from "react";
import "./homepage.css";

type Props = {};

const HomePage = (props: Props) => {
  const [postData, setPostData] = useState<PostData[]>([
    {
      id: "123456789",
      isLike: true,
      amountComment: 10,
      amountLike: 20,
      contentUrl: "",
      idUserCreate: "uhjgfhjs-sjfskjs-skjshdjsd",
      content:
        "Trong ví dụ trên, Date chứa cả thông tin về ngày (2024-08-16) và thời gian (14:30:00). Điều này tương tự như LocalDateTime trong Java, nơi bạn có thể có cả ngày và giờ trong một đối tượng duy nhất.",
      timeCreate: new Date("2024-08-16T14:30:00"),
      urlAvatar:
        "https://www.vietnamworks.com/hrinsider/wp-content/uploads/2023/12/hinh-nen-dep-cho-dien-thoai-voi-hinh-anh-thien-nhien-phong-cach-truyen-tranh.jpg",
    },
    {
      id: "123456789",
      isLike: true,
      amountComment: 10,
      amountLike: 20,
      contentUrl: "",
      idUserCreate: "uhjgfhjs-sjfskjs-skjshdjsd",
      content:
        "Trong ví dụ trên, Date chứa cả thông tin về ngày (2024-08-16) và thời gian (14:30:00). Điều này tương tự như LocalDateTime trong Java, nơi bạn có thể có cả ngày và giờ trong một đối tượng duy nhất.",
      timeCreate: new Date("2024-08-16T14:30:00"),
      urlAvatar:
        "https://www.vietnamworks.com/hrinsider/wp-content/uploads/2023/12/hinh-nen-dep-cho-dien-thoai-voi-hinh-anh-thien-nhien-phong-cach-truyen-tranh.jpg",
    },
    {
      id: "123456789",
      isLike: true,
      amountComment: 10,
      amountLike: 20,
      contentUrl: "",
      idUserCreate: "uhjgfhjs-sjfskjs-skjshdjsd",
      content:
        "Trong ví dụ trên, Date chứa cả thông tin về ngày (2024-08-16) và thời gian (14:30:00). Điều này tương tự như LocalDateTime trong Java, nơi bạn có thể có cả ngày và giờ trong một đối tượng duy nhất.",
      timeCreate: new Date("2024-08-16T14:30:00"),
      urlAvatar:
        "https://www.vietnamworks.com/hrinsider/wp-content/uploads/2023/12/hinh-nen-dep-cho-dien-thoai-voi-hinh-anh-thien-nhien-phong-cach-truyen-tranh.jpg",
    },
    {
      id: "123456789",
      isLike: true,
      amountComment: 10,
      amountLike: 20,
      contentUrl: "",
      idUserCreate: "uhjgfhjs-sjfskjs-skjshdjsd",
      content:
        "Trong ví dụ trên, Date chứa cả thông tin về ngày (2024-08-16) và thời gian (14:30:00). Điều này tương tự như LocalDateTime trong Java, nơi bạn có thể có cả ngày và giờ trong một đối tượng duy nhất.",
      timeCreate: new Date("2024-08-16T14:30:00"),
      urlAvatar:
        "https://www.vietnamworks.com/hrinsider/wp-content/uploads/2023/12/hinh-nen-dep-cho-dien-thoai-voi-hinh-anh-thien-nhien-phong-cach-truyen-tranh.jpg",
    },
  ]);
  return (
    <div className="w-full h-full flex flex-col items-center">
      <div>
        <StoryComponent></StoryComponent>
      </div>
      <div className="flex">
        <ul className="main-content">
          {postData !== null &&
            postData?.map((value: PostData, index: number) => (
              <PostComponent key={index} data={value} />
            ))}
        </ul>
      </div>
    </div>
  );
};

export default HomePage;
