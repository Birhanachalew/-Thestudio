import React from 'react'
import ContentBox from './ContentBox'
import BoxHead from './BoxHead'

const Foot1 = () => {
  return (
    <div className='w-full grid grid-cols-2 gap-y-[15vw] gap-[2.5vw] border-t-1 border-zinc-700 pt-[10vw] mt-[15vw] sm:gap-y-[3.8rem] sm:gap-[2rem] sm:pt-[3.5rem] sm:mt-[5rem] md:mt-[4.2rem] md:gap-[2.5rem] md:grid-cols-4'>

      {/* Creative Disciplines */}
      <div className='flex flex-col gap-[3vw] sm:gap-[1.1rem]'>
        <BoxHead head='disciplines:' />
        <ContentBox content='2D Animation' />
        <ContentBox content='3D Modeling' />
        <ContentBox content='Stop Motion' />
        <ContentBox content='Creative Writing' />
        <ContentBox content='Media Production' />
      </div>

      {/* Education */}
      <div className='flex flex-col gap-[3vw] sm:gap-[1.1rem]'>
        <BoxHead head='education:' />
        <ContentBox content='AIME' />
        <ContentBox content='Literary Laboratory' />
        <ContentBox content='Workshops' />
        <ContentBox content='Masterclasses' />
        <ContentBox content='Creative Clubs' />
      </div>

      {/* Production */}
      <div className='hidden md:flex md:flex-col gap-[1.1rem]'>
        <BoxHead head='production:' />
        <ContentBox content='Animation' />
        <ContentBox content='Film & Media' />
        <ContentBox content='Commercials' />
        <ContentBox content='Documentary' />
        <ContentBox content='Post-Production' />
        <ContentBox content='Original Content' />
      </div>

      {/* The Studio */}
      <div className='hidden md:flex md:flex-col gap-[1.1rem]'>
        <BoxHead head='the studio:' />
        <ContentBox content='Our Story' />
        <ContentBox content='Careers' />
        <ContentBox content='Contact' />
        <ContentBox content='Partnerships' />
        <ContentBox content='Privacy Policy' />
      </div>

    </div>
  )
}

export default Foot1