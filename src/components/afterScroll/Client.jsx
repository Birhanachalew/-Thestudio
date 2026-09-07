import React from 'react'
import Review from './review'
import review1 from '../../assets/review1.webp'
import review2 from '../../assets/review2.webp'

const Client = () => {
  return (
    <div className='lg:flex lg:w-full lg:gap-[3rem]'>
      <div className='lg:w-[45%] lg:h-fit lg:sticky lg:top-1'>
        <h5 className='text-[3.4vw] uppercase sm:text-[1.4rem] md:text-[1.35rem] lg:text-[1rem] xl:text-[1.1rem]'>testimonials</h5>
        <h1 className='text-[11vw] font-bold leading-none mt-[10vw] sm:mt-[5rem] sm:text-[4rem] md:text-[4.2rem] lg:text-[2.6rem] xl:text-[3rem]'>Stories from our creative partners</h1>
        <p className='text-[4.3vw] leading-tight mt-[8vw] sm:mt-[3.5rem] sm:text-[1.55rem] lg:text-[1.3rem] lg:mt-[2.5rem] xl:text-[1.4rem] font-normal leading-tight'>We work with artists, educators, brands, and organizations to create thoughtful animation, film, media, and original content from first idea to final delivery.</p>
      </div>
      <div className='mt-[22vw] sm:mt-[8.5rem] md:mt-[8rem] lg:mt-0 lg:w-[55%]'>
        <Review no='/01' review='"The Studio Production brought clarity, craft, and imagination to every stage of our project. Their team made the creative process feel effortless."' pic={review1} name='Creative Partner' Title='Animation Production'/>

        <Review no='/02' review='"They listen closely, care about the work, and turn ambitious ideas into productions people remember."'pic={review2} name='Studio Partner' Title='Film & Media Production'/>
      </div>
    </div>
  )
}

export default Client
