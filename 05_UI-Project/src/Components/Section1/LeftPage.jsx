
import React from "react";
import "remixicon/fonts/remixicon.css";
import HeroText from "./HeroText";
import Arrow from "./Arrow";

const LeftPage = () => {
  return (
    <div className="h-full w-1/4 flex text-black flex-col justify-between ">
      <HeroText />
      <Arrow />
    </div>
  );
};

export default LeftPage;
