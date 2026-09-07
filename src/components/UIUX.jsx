import React, { useRef, useState } from "react";
import BlockData from "./Blocks/BlockData";
import ItemsMenu from "./itemsMenu/ItemsMenu";
import gsap from "gsap";

const UIUX = () => {
  let slide = useRef();
  let btnIcon = useRef();
  let Border = useRef();

  const [Toggle, setToggle] = useState(false);
  const rotation = Toggle ? 0 : 180;

  function ClickHandler() {
    gsap.to(btnIcon.current, {
      rotate: rotation,
    });

    if (Toggle) {
      gsap.to(slide.current, {
        height: "0px",
        duration: 0.3,
      });
      gsap.to(Border.current, {
        borderTopColor: "#3f3f46",
        duration: 0.2,
      });
      Border.current.style.borderTopColor = "";
    } else {
      gsap.to(slide.current, {
        height: "auto",
      });
      gsap.to(Border.current, {
        borderTopColor: "#d4d4d8",
        duration: 0.2,
      });
    }

    setToggle(!Toggle);
  }

  return (
    <div className="w-full mt-[22vw] sm:mt-[8.5rem] md:mt-[8rem] lg:mt-[6rem]">
      <div
        ref={Border}
        className="w-full flex justify-between items-center border-t-2 border-zinc-700 pt-[5vw] sm:pt-[1.8rem]"
      >
        <h2 className="text-[8vw] font-bold sm:text-[3.3rem] md:text-[3.4rem] lg:text-[3.2rem] xl:text-[3.4rem]">
          Studio Production
        </h2>
        <div
          onClick={ClickHandler}
          className="cursor-pointer flex justify-center items-center w-[8vw] h-[8vw] md:w-[3.2rem] md:h-[3.2rem] lg:w-[2.7rem] lg:h-[2.7rem] sm:w-[3rem] sm:h-[3rem] bg-transparent border-2 border-zinc-700 rounded-full "
        >
          <i
            ref={btnIcon}
            className="ri-arrow-down-s-line text-[4vw] sm:text-[1.5rem] md:text-[1.55rem] lg:text-[1.4rem] text-zinc-300"
          ></i>
        </div>
      </div>
      <div className="flex  flex-wrap mt-[6vw] sm:mt-[2.5rem]">
        <BlockData value="2D animation" />
        <BlockData value="3D modeling" />
        <BlockData value="stop motion" />
        <BlockData value="film production" />
        <BlockData value="media production" />
        <BlockData value="creative writing" />
        <BlockData value="visual storytelling" />
        <BlockData value="documentaries" />
        <BlockData value="commercials" />
        <BlockData value="post-production" />
        <BlockData value="original content" />
      </div>
      <div
        ref={slide}
        className="mt-[12vw] sm:mt-[4rem] w-full  h-[0px] overflow-hidden"
      >
        <ItemsMenu head="Animation Production" para="We develop original animation, from concept and storyboarding through production and final delivery." />
        <ItemsMenu head="Film & Media Production" para="We produce films, documentaries, commercials, and media projects with a clear creative vision." />
        <ItemsMenu head="Creative Writing" para="We shape strong stories, scripts, and narratives for film, animation, and original content." />
        <ItemsMenu head="Visual Storytelling" para="We turn ideas into compelling visual experiences that connect with audiences." />
        <ItemsMenu head="Original Content" para="We create original stories and productions that reflect the voice and imagination of The Studio Production." />
        <ItemsMenu head="Post-Production" para="We bring every project together with editing, sound, motion, and finishing." />
        <ItemsMenu head="Workshops & Education" para="We share practical creative skills through workshops, masterclasses, and learning communities." />
        <ItemsMenu head="Stop Motion" para="We build tactile worlds and memorable stories frame by frame." />
        <ItemsMenu head="3D Modeling" para="We create detailed 3D assets and environments for animation, film, and media." />
        <ItemsMenu head="Commercial Production" para="We produce engaging commercial stories for brands, organizations, and creative partners." />
        <ItemsMenu head="Creative Partnerships" para="We collaborate with artists, brands, and organizations to bring ambitious productions to life." />
      </div>
    </div>
  );
};

export default UIUX;
