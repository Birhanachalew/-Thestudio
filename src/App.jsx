import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Card from "./components/Card";
import Mid from "./components/Mid";
import DataNav from "./components/DataNav";
import MainData from "./components/MainData";
// import Button from "./components/button/button";
import DigitalProduct from "./components/DigitalProduct";
import UIUX from "./components/UIUX";
import ProductDesign from "./components/ProductDesign";
import ScrollEffect from "./components/scrollTrigger/ScrollEffect";
import AfterScroll from "./components/afterScroll/AfterScroll";
import AniGreenBlock from "./components/afterScroll/AniGreenBlock";
import Faqs from "./components/afterScroll/Faqs";
import Foot1 from "./components/footer/Foot1";
import LastBottom from "./components/footer/LastBottom";
import MainDataNavi from "./components/MainDataNavi";

const App = () => {
  // ye sra code become a client walay button ka hy
  let content1 = useRef();
  let content2 = useRef();

  function splitText(ref) {
    let sampleHead = ref.innerText;
    ref.innerHTML = "";
    sampleHead.split("").forEach((char) => {
      let span = document.createElement("span");
      span.innerText = char;
      span.style.display = "inline-block";
      span.innerHTML = char === " " ? "&nbsp;" : char;

      ref.appendChild(span);
    });
  }

  useEffect(() => {
    let Head1 = content1.current.querySelector("h4");
    let Head2 = content2.current.querySelector("h4");

    splitText(Head1);
    splitText(Head2);
  }, []);

  function MouseEnter() {
    if (window.innerWidth >= 768) {
      let conIcon1 = content1.current.querySelector("i");
      let conSpan1 = content1.current.querySelectorAll("h4 span");
      let tl = gsap.timeline();

      tl.to(
        conSpan1,
        {
          y: "-30px",
          opacity: 0,
          duration: 0.3,
          stagger: 0.01,
          ease: "power2.out",
        },
        "together"
      );

      tl.to(
        conIcon1,
        {
          y: "-30px",
          opacity: 0,
          duration: 0.3,
          scale: 0,
          ease: "power2.out",
        },
        "together"
      );

      let conSpan2 = content2.current.querySelectorAll("h4 span");
      let conIcon2 = content2.current.querySelector("i");

      // because of opacity zero which i give in content2 thats why my i am witing this animaition here to visible it
      gsap.to(content2.current, {
        opacity: 1,
      });
      let tl2 = gsap.timeline();
      tl2.to(
        conSpan2,
        {
          opacity: 1,
          y: "-30px",
          duration: 0.3,
          stagger: 0.01,
          ease: "power2.out",
        },
        "together2"
      );

      tl2.to(
        conIcon2,
        {
          opacity: 1,
          y: "-30px",
          duration: 0.3,
          scale: 1,
          ease: "power2.out",
        },
        "together2"
      );
    }
  }

  function MouseLeave() {
    let conIcon1 = content1.current.querySelector("i");
    let conSpan1 = content1.current.querySelectorAll("h4 span");
    let tl = gsap.timeline();

    tl.to(
      conSpan1,
      {
        y: "0px",
        opacity: 1,
        duration: 0.3,
        stagger: 0.01,
        ease: "power2.out",
      },
      "together"
    );

    tl.to(
      conIcon1,
      {
        y: "0px",
        opacity: 1,
        duration: 0.3,
        scale: 1,
        ease: "power2.out",
      },
      "together"
    );

    let conSpan2 = content2.current.querySelectorAll("h4 span");
    let conIcon2 = content2.current.querySelector("i");

    let tl2 = gsap.timeline();

    tl2.to(
      conSpan2,
      {
        opacity: 0,
        y: "-20px",
        duration: 0.3,
        stagger: 0.01,
        ease: "power2.out",
      },
      "together2"
    );

    tl2.to(
      conIcon2,
      {
        opacity: 0,
        y: "-20px",
        duration: 0.3,
        scale: 0,
        ease: "power2.out",
      },
      "together2"
    );
  }
  // yaha buttoon wala code end hoagya



  return (
      <div >
        <Header />
        <main className="w-full h-full px-3 lg:px-10 ">
          <div className="w-full flex flex-col gap-[10vw] sm:gap-[0rem]">
            <Hero />
          </div>
          <div className=" w-full mt-[5rem] px-2 grid justify-center gap-4 md:grid-cols-2 md:grid-rows-3 lg:grid-cols-6 lg:grid-rows-[25rem_21rem]">
            <Card
              className="lg:col-span-2 lg:row-span-1 "
              head="Creative disciplines"
              para="2D Animation, 3D Modeling, Stop Motion & Creative Writing"
              no="/01"
              video="https://res.cloudinary.com/dx48q3i5w/video/upload/v1763406247/card2_fgjxol.webm"
            />
            <Card
              className="lg:col-span-2"
              head="3 MONTHS"
              para="Industry-focused creative programs built around practice, mentorship & production"
              no="/02"
              video="https://res.cloudinary.com/dx48q3i5w/video/upload/v1763406246/card1_kuntbt.webm"
            />
            <Card
              className="lg:col-span-2"
              head="2025"
              para="A creative school and production house under one roof"
              no="/03"
              video="https://res.cloudinary.com/dx48q3i5w/video/upload/v1763406247/card2_fgjxol.webm"
            />
            <Card
              className=" lg:col-span-3 "
              head="Addis Ababa"
              para="Rooted in Ethiopia, creating for the world"
              no="/04"
            />
            <Card
              className="md:col-span-2 lg:col-span-3 "
              head="All-in-One Production"
              para="From story development to final delivery, we bring the whole production together"
              no="/05"
            />
          </div>
        </main>
        <Mid />
        {/* yaha sara sticky button wala kam hua wa hy  */}
        <div className="w-full h-full px-3 lg:px-10 bg-[#111111]">
          <DataNav />
          <div className="w-full flex flex-col lg:border-t-2 lg:border-zinc-800 lg:flex-row lg:gap-[1.4rem] mt-15 ">
            <MainDataNavi />
            <div className="w-full flex flex-col lg:flex-row lg:gap-[1rem] xl:gap-[2rem] ">
              <MainData
                head="Original Animation"
                para="A Studio Production story developed through concept, character, motion, and final animation."
                video="https://res.cloudinary.com/dx48q3i5w/video/upload/v1763406247/data1_rrj9we.mp4"
              />
              {/* ye button mobile sy ly kr md tk ki screens mn show hoga  */}
              <div className="buttonWraper w-full bg-[#111111] sticky top-[73%] mt-[-4rem] left-[0%] py-[3.5vw] sm:py-[1.5rem] md:py-[1.4rem] z-10 lg:hidden">
                <div className="flex justify-center items-center w-full bg-[#4F5BFF] rounded-full py-[3.5vw] sm:py-[1.5rem] md:py-[1.4rem]">
                  <h2 className="text-[3vw] sm:text-[1.3rem]  uppercase font-medium">
                    explore all productions{" "}
                  </h2>
                  <i className="ri-arrow-right-up-line -1"></i>
                </div>
              </div>
              {/* yaha button end hogaya  */}
              <MainData
                head="Film & Media Production"
                para="A visual production shaped through storytelling, filming, editing, sound, and finishing."
                video="https://res.cloudinary.com/dx48q3i5w/video/upload/v1763406256/data2_lzdvko.mp4"
              />
            </div>
          </div>

          {/*  yaha ye sra sticky wala kam end hogaya hy */}
          <div className="lg:flex gap-[1rem] relative ">
            <div className="sidebar w-[25%]">
              {/* ye hy wo become a client waala button jis ka code upper likha hy  */}
              <div
                onMouseEnter={MouseEnter}
                onMouseLeave={MouseLeave}
                className="bg-[#6c7155] sticky top-[25vw] mb-[3rem] w-full mt-[7.5rem] flex justify-center items-center rounded-full cursor-pointer hidden lg:flex lg:flex-col py-[0.8rem] overflow-hidden"
              >
                <div ref={content1} className="flex items-center gap-[0.5rem]">
                  <h4 className="text-[1.1rem]  font-medium uppercase ">
                    partner with us{" "}
                  </h4>
                  <i className="pl-1 ri-arrow-right-up-line"></i>
                </div>
                <div
                  ref={content2}
                  className="flex items-center gap-[0.5rem] absolute bottom-[-18px] opacity-0"
                >
                  <h4 className="text-[1.1rem] font-medium uppercase ">
                    partner with us{" "}
                  </h4>
                  <i className="pl-1 ri-arrow-right-up-line"></i>
                </div>
              </div>
              {/* yaha button end hogaya hy  */}
            </div>
            <div className="lg:w-full">
              <DigitalProduct />
              {/* ye sara ui effect wala section hy */}
              <div className="w-full flex flex-col items-center justify-center">
                <UIUX />
                <ProductDesign />
                {/* button hy ye  */}
                <div className="w-[85%] mt-[7vw] sm:mt-[2.6rem] md:mt-[3rem] bg-[#6c7155] flex justify-center items-center py-[4vw] sm:py-[1.4rem] md:py-[1.3rem] rounded-full cursor-pointer lg:hidden">
                  <h4 className="text-[3.3vw] sm:text-[1.4rem] md:text-[1.3rem] font-medium uppercase ">
                    become a client{" "}
                    <i className="pl-1 ri-arrow-right-up-line"></i>
                  </h4>
                </div>
              </div>
            </div>
            {/* yha button end hogaya hy  */}
          </div>
          {/* Yaha sy scroll trigger walay part ka kam shuru ho rha hy  */}
        </div>
        <div className="w-full bg-white px-3 lg:px-10 mt-[9vw] sm:mt-[4rem] pt-[15vw] sm:pt-[5rem] pb-[24vw] sm:pb-[10rem] lg:pb-[5rem]">
          <ScrollEffect />
        </div>

        <div className="w-full px-3 lg:px-10 pt-[25vw] sm:pt-[9rem] ">
          <AfterScroll />
        </div>

        {/* ye hy green animated block wala section  */}
        <AniGreenBlock />
        <div className="w-full px-3 lg:px-10 ">
          <Faqs />
          <footer>
            <Foot1 />
            <LastBottom />
          </footer>
        </div>
      </div>
  );
};

export default App;
