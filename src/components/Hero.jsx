import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import React, { useEffect, useLayoutEffect, useRef } from 'react'
import heroVideo from '../assets/hero-compressed.mp4'

const Hero = () => {

  useGSAP(()=>{
    
    let tl =gsap.timeline();
    tl.from(".MiniHead",{
      y: -20,
      opacity: 0,
      delay: 0.3,
    },"a")
    tl.from(".MiniPara",{
      y: 20,
      opacity: 0,
      delay:0.3,
    },"a")
  
  },[])

  function SplitText(Text) {
  let tempText = Text.innerText;
  Text.innerHTML = "";

  tempText.split("").forEach(char => {
    let span = document.createElement("span");

    if (char === " ") {
      span.innerHTML = "&nbsp;";
      span.style.display = "inline-block";
    } else {
      span.innerText = char;
      span.style.display = "inline-block"; 
    }

    Text.appendChild(span);
  });
}
  
  let MainText1= useRef();
  let MainText2 = useRef();
  useLayoutEffect(()=>{
    SplitText(MainText1.current);
    SplitText(MainText2.current);

    let MainSpan1 = MainText1.current.querySelectorAll("span");
    let MainSpan2 = MainText2.current.querySelectorAll("span");

    let tl2 = gsap.timeline();
    tl2.from(MainSpan1,{
      y:50,
      delay:0.4,
      opacity:0,
      stagger: 0.02,
    },"b")
    tl2.from(MainSpan2,{
      y:50,
      opacity:0,
      delay:0.4,
      stagger: 0.02,
    },"b")
  },[])

 
  return (
    <div className='relative isolate w-full min-h-[90vh] overflow-hidden mt-[28vw] sm:h-[90vh] sm:mt-[5rem] flex flex-col justify-center gap-4 px-4 md:items-center md:text-center'>
      <video
        className='absolute inset-0 -z-20 h-full w-full object-cover'
        src={heroVideo}
        autoPlay
        muted
        loop
        playsInline
        aria-hidden='true'
      />
      <div className='absolute inset-0 -z-10 bg-[#111111]/70' aria-hidden='true' />
      <div className='relative z-10'>
        <h2 className='MiniHead text-[3.8vw] font-medium uppercase sm:text-[1.5rem] lg:text-[1.6rem]'>The Studio Production / Addis Ababa</h2>
      </div>
      <div className='relative z-10'>
        <h1 className='text-[10vw] font-bold uppercase leading-tight sm:text-[3.8rem] lg:text-[4.5rem] xl:text-[5.5rem]'> <span ref={MainText1} >Creative Trade School</span><br className='hidden lg:block'/> <span ref={MainText2} >&amp; Production House</span></h1>
      </div>
      <div className='relative z-10 max-w-[75rem]'>
        <p className='MiniPara text-[3.8vw] sm:text-[1.5rem] lg:text-[1.8rem]'>The Studio Production PLC is an integrated creative trade school and production house in Addis Ababa, Ethiopia. We train emerging creatives, develop original ideas, and produce animation, film, media, and visual storytelling, connecting practical education with real production and opportunities beyond Ethiopia.</p>
      </div>
    </div>
  )
}

export default Hero
