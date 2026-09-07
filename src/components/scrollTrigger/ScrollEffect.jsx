import React from 'react'
import TriggerEleBox from './TriggerEleBox'
const ScrollEffect = () => {
  return (
    <div className='w-full text-black '>
      <div className='lg:flex '>
        <h1 className='text-[11vw] lg:w-[50%] font-bold leading-none sm:text-[4.2rem] md:text-[4.7rem] lg:text-[3.75rem]  xl:text-[4.5rem] '>Our Creative <br/>Production Process</h1>
        <p className='text-[5.4vw] mt-[8vw] lg:w-[50%] xl:w-[50%] font-normal leading-tight sm:text-[1.8rem] sm:mt-[2.2rem] lg:mt-[0.2rem] md:text-[1.85rem] lg:text-[1.55rem] xl:text-[1.65rem]'>Every Studio Production project begins with a strong idea. We shape the story, develop the visual language, produce the work, and refine every detail through post-production before sharing it with the world.</p>
      </div>
      <TriggerEleBox/>
    </div>
  )
}

export default ScrollEffect
