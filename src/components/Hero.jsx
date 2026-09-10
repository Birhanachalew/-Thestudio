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
        <h2 className='MiniHead text-[3.8vw] font-medium uppercase sm:text-[1.5rem] lg:text-[1.6rem]'>The Studio Production PLC / Addis Ababa</h2>
      </div>
      <div className='relative z-10'>
        <h1 className='text-[10vw] font-bold uppercase leading-tight sm:text-[3.8rem] lg:text-[4.5rem] xl:text-[5.5rem]'> <span ref={MainText1} >Where Creative Practice</span><br className='hidden lg:block'/> <span ref={MainText2} >Meets Production.</span></h1>
      </div>
      <div className='relative z-10 flex max-w-[58rem] flex-col items-center gap-6'>
        <p className='MiniPara text-[4.2vw] leading-tight sm:text-[1.5rem] lg:text-[1.8rem]'>Learn the craft. Develop your ideas. Produce real work.</p>
        <p className='max-w-[52rem] text-[3.8vw] leading-tight sm:text-[1.2rem] lg:text-[1.4rem]'>Join our 3-month programs in 2D Animation, 3D Modeling, and Creative Writing, or partner with The Studio for professional creative production.</p>
        <div className='flex w-full flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4'>
          <a href='#programs' className='flex w-full max-w-[20rem] items-center justify-center gap-2 rounded-full bg-[#6c7155] px-6 py-4 text-[3.2vw] font-medium uppercase sm:w-auto sm:text-[1rem]'>
            Register for a program <i className='ri-arrow-right-up-line' aria-hidden='true'></i>
          </a>
          <a href='#contact' className='flex w-full max-w-[20rem] items-center justify-center gap-2 rounded-full border-2 border-white px-6 py-[0.875rem] text-[3.2vw] font-medium uppercase sm:w-auto sm:text-[1rem]'>
            Become a client <i className='ri-arrow-right-up-line' aria-hidden='true'></i>
          </a>
        </div>
      </div>
    </div>
  )
}

export default Hero
