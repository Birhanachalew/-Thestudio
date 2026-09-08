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
        <Question head='What is included in the 3-month course?' no='/00-5' para='The 3-month course combines practical lessons, guided projects, creative workshops, and production experience to help emerging creatives build a strong foundation.'/>
        <Question head='What will I learn in the 2D Animation course?' no='/00-6' para='You will learn the foundations of 2D animation, including drawing for motion, character development, storyboarding, timing, and creating finished animated scenes.'/>
        <Question head='What does the 3D Modeling course cover?' no='/00-7' para='The 3D Modeling course covers modeling techniques, digital environments, basic materials and lighting, and developing 3D assets for animation and media production.'/>
        <Question head='What is covered in the Creative Writing Masterclass?' no='/00-8' para='The Creative Writing Masterclass focuses on story ideas, character development, script structure, dialogue, visual storytelling, and turning original concepts into production-ready narratives.'/>
    </div>
  )
}

export default Faqs
