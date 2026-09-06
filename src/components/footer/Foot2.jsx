import React from 'react'
import BoxHead from './BoxHead'
import ContentBox from './ContentBox'

const Foot1 = () => {
  return (
    <div className='w-full grid grid-cols-2 md:grid-cols-4 gap-y-[15vw] gap-[2.5vw] sm:gap-y-[3.8rem] sm:gap-[2rem] md:mt-[-1.7rem] md:gap-[2.5rem]'>

      <div className='flex flex-col gap-[3vw] sm:gap-[1.1rem]'>
        <BoxHead head='creative practice:' />
        <ContentBox content='2D Animation' />
        <ContentBox content='3D Modeling' />
        <ContentBox content='Stop Motion' />
        <ContentBox content='Creative Writing' />
      </div>

      <div className='flex flex-col gap-[3vw] sm:gap-[1.1rem]'>
        <BoxHead head='education:' />
        <ContentBox content='AIME' />
        <ContentBox content='Literary Laboratory' />
        <ContentBox content='Workshops' />
        <ContentBox content='Masterclasses' />
      </div>

      <div className='flex flex-col gap-[3vw] sm:gap-[1.1rem]'>
        <BoxHead head='production:' />
        <ContentBox content='Animation' />
        <ContentBox content='Film & Media' />
        <ContentBox content='Commercials' />
        <ContentBox content='Documentary' />
      </div>

      <div className='flex flex-col gap-[3vw] sm:gap-[1.1rem]'>
        <BoxHead head='studio:' />
        <ContentBox content='Our Story' />
        <ContentBox content='Careers' />
        <ContentBox content='Contact' />
        <ContentBox content='Privacy Policy' />
      </div>

    </div>
  )
}

export default Foot1
