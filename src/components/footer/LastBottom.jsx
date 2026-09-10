import React from 'react'
import logo from '../../assets/Logo Design-08.png'
import SocialBox from './SocialBox'

const LastBottom = () => {
  return (
    <div className='w-full flex flex-col md:flex-row items-center justify-center mt-[15vw] sm:mt-[6rem] border-t-2 border-zinc-700 gap-[8vw] md:gap-[4rem] pt-[7vw] sm:pt-[2.2rem] pb-[5vw] sm:pb-[1.2rem] text-center'>
      <div className='shrink-0'>
        <img
          src={logo}
          alt='The Studio Production'
          className='w-[10rem] sm:w-[13rem] h-auto object-contain mx-auto'
        />
      </div>
      <div className='flex flex-col items-center shrink-0'>
        <div className='flex flex-wrap justify-center gap-[1vw] mt-[3vw] sm:mt-[1.5rem]'>
          <SocialBox label='Facebook' icon='ri-facebook-fill' href='https://www.facebook.com/'/>
          <SocialBox label='LinkedIn' icon='ri-linkedin-fill' href='https://www.linkedin.com/company/thestudioproductionplc'/>
          <SocialBox label='Instagram' icon='ri-instagram-line' href='https://www.instagram.com/thestudioproductionplc/'/>
          <SocialBox label='Telegram' icon='ri-telegram-fill' href='https://t.me/thestudioproductionplc'/>
          <SocialBox label='TikTok' icon='ri-tiktok-fill' href='https://www.tiktok.com/@thestudioproductionplc'/>
          <SocialBox label='YouTube' icon='ri-youtube-fill' href='https://youtube.com/@thestudioproductionplc?si=u28MNDzT418aOoI8'/>
        </div>
      </div>
      <div className='shrink-0 capitalize text-[1.1rem] leading-tight max-w-[20rem]'>
        <h5>Copyright © 2026 Thestudioporoductionplc. All rights reserved.</h5>
      </div>
    </div>
  )
}

export default LastBottom
