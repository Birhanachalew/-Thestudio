import React from "react";
import BlackScrollBox from "./BlackScrollBox";

const TriggerEleBox = () => {

  return (
    <div className="Main-Box mt-[15vw] md:mt-[6rem] lg:grid lg:grid-cols-3 lg:gap-[1rem] lg:border-t-1 lg:border-zinc-300  ">
      <div className="flex flex-col gap-[1vw] border-t-1 border-zinc-300 py-[5vw] lg:border-r-1 lg:border-t-0">
        <h3 className="text-[5.5vw] capitalize pb-[2vw] sm:pb-[1rem] sm:text-[2.3rem] lg:text-[1.8rem] xl:text-[2rem]">
          story development
        </h3>
        <BlackScrollBox no="1" value="creative workshop" trans="0%" />
        <BlackScrollBox no="2" value="concept development" trans="3%"  />
        <BlackScrollBox no="3" value="script and narrative" trans="6%" />
        <BlackScrollBox no="4" value="visual direction" trans="9%" />
        <BlackScrollBox no="5" value="storyboarding" trans= "12%" />
        <BlackScrollBox no="6" value="production planning" trans="15%" />
      </div>
      <div className="flex flex-col gap-[1vw] border-t-1 border-zinc-300 lg:border-r-1 lg:border-t-0 py-[5vw] xl:text-[2rem]">
        <h3 className="text-[5.5vw] capitalize pb-[2vw] sm:pb-[1rem] sm:text-[2.3rem] lg:text-[1.8rem]">
          animation and film
        </h3>
        <BlackScrollBox no="7" value="animation production" trans="0%" />
        <BlackScrollBox no="8" value="film and media" trans="3%" />
      </div>
      <div className="flex flex-col gap-[1vw] border-t-1 border-zinc-300  py-[5vw]">
        <h3 className="text-[5.5vw] capitalize pb-[2vw] sm:pb-[1rem] sm:text-[2.3rem] lg:text-[1.8rem] xl:text-[2rem]">
          finishing and delivery
        </h3>
        <BlackScrollBox no="9" value="editing and sound" trans="0%" />
        <BlackScrollBox no="10" value="motion and color" trans="3%" />
        <BlackScrollBox no="11" value="final delivery" trans="6%" />
      </div>
      <div></div>
    </div>
  );
};

export default TriggerEleBox;
