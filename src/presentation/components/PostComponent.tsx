import PostData from "domain/entities/PostData";
import React from "react";

type Props = { data: PostData };

const PostComponent = (props: Props) => {
  const post = props.data;
  return (
    <li className="h-[300px] w-[625px] bg-gray-100 m-2 rounded-xl flex-none">
      <img src={post.urlAvatar} alt="avatar" className="h-[45px] w-[45px] rounded-full "/>
    </li>
  );
};

export default PostComponent;
