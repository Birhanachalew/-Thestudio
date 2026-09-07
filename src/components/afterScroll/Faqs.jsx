import React from 'react'
import Question from './Question'
const Faqs = () => {
  return (
    <div> 
        <div className='lg:pl-[15vw] w-full  md:mb-[6rem] '> 
          <h1 className='text-[11vw] sm:text-[4rem] md:text-[4.8rem] lg:text-[5.2rem] font-bold mt-[27vw] sm:mt-[10rem] lg:w-[50rem] leading-none'>Frequently Asked Questions</h1> 
        </div>
        <Question head='What does The Studio Production create?' no='/00-1' para='We create animation, films, documentaries, commercials, educational projects, and original media content.'/>
        <Question head='Can you help develop an idea from the beginning?' no='/00-2' para='Yes. We support concept development, writing, storyboarding, production, post-production, and final delivery.'/>
        <Question head='Do you offer workshops and masterclasses?' no='/00-3' para='Yes. Our education programs share practical skills in animation, storytelling, film, and creative production.'/>
        <Question head='How can we work with The Studio Production?' no='/00-4' para='Contact us with your idea, brief, or collaboration proposal and our team will discuss the right production approach.'/>
    </div>
  )
}

export default Faqs
