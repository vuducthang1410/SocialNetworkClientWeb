import StoryData from "domain/entities/StoryData";
import React from "react";

type Props = {
  storyDataItem: StoryData;
};

const StoryItem = (props: Props) => {
  const storyDataItem:StoryData=props.storyDataItem;
  return (
    <button className="w-[150px] min-w-[150px] relative h-[250px] bg-blue-100 rounded-2xl overflow-hidden">
      <img
        src={storyDataItem.urlBackgroupStory}
        alt="hehe"
        height={250}
        className="rounded-2xl"
      ></img>
      <div className={`absolute top-3 left-3 border-y-[3.5px] border-x-[3.5px] rounded-full`}>
        <img src={storyDataItem.urlAvatar} alt="avatar"className="w-[35px] h-[35px] rounded-full object-cover"/>
      </div>
      <div className="absolute bottom-3 left-3">
      <label className="text-white text-sm font-medium">{storyDataItem.fullName}</label>
      </div>
    </button>
  );
};

export default StoryItem;
