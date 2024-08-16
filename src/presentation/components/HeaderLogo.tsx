import imageAssets from "presentation/assets/images";
import React from "react";

type Props = {};

const HeaderLogo = (props: Props) => {
  return (
    <div className=" absolute max-md:top-8 max-md:left-5 max-lg:mx-1 top-10 left-12 flex justify-start items-center gap-3">
      <img src={imageAssets.logo} className="h-12 w-12" alt=""></img>
      <label className="font-semibold text-2xl">Hygge</label>
    </div>
  );
};

export default HeaderLogo;
