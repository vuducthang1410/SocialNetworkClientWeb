import StoryComponent from "presentation/components/StoryComponent";
import React from "react";

type Props = {};

const HomePage = (props: Props) => {
  return (
    <div className="w-full h-full flex flex-col items-center">
      <div>
        <StoryComponent></StoryComponent>
      </div>

      <div className="h-[800px] flex-none w-[625px] bg-blue-100">HomePage</div>
      <div className="h-[800px] flex-none w-[625px] bg-red-100">HomePage</div>
    </div>
  );
};

export default HomePage;
