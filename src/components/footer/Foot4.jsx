import React from 'react'
import BoxHead from './BoxHead'
import ContentBox from './ContentBox'
const Foot1 = () => {
  return (
    <div className='w-full grid grid-cols-2 gap-y-[15vw] gap-[2.5vw] border-t-1 border-zinc-700 pt-[10vw]  mt-[15vw] sm:gap-y-[3.8rem] sm:gap-[2rem] sm:pt-[3.5rem] sm:mt-[5rem] md:hidden'> 
      <div className='flex flex-col gap-[3vw] sm:gap-[1.1rem]'>
        <BoxHead head='studio services:'/>
        <ContentBox content='2D Animation'/>
        <ContentBox content='3D Modeling'/>
        <ContentBox content='Stop Motion'/>
        <ContentBox content='Film Production'/>
        <ContentBox content='Media Production'/>
        <ContentBox content='Creative Writing'/>
      </div>
      <div className='flex flex-col gap-[3vw] sm:gap-[1.1rem]'>
        <BoxHead hide='invisible' head='-'/>
        <ContentBox content='Commercials'/>
        <ContentBox content='Documentaries'/>
        <ContentBox content='Post-Production'/>
        <ContentBox content='Original Content'/>
        <ContentBox content='Film Workshops'/>
        <ContentBox content='Masterclasses'/>
      </div>
    </div>
  )
}

export default Foot1
