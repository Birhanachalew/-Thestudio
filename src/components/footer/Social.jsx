import React from 'react'
import BoxHead from './BoxHead'
import SocialBox from './SocialBox'
const Social = () => {
  return (
    <div className='w-full mt-[15vw] sm:mt-[7rem] md:mt-[5rem] md:pt-[3.4rem] md:border-t-2 md:border-zinc-700 md:'> 
      <BoxHead head='our social:'/>
      <div className='flex w-full flex-wrap gap-[1vw] mt-[3vw] sm:mt-[1.5rem]'>
        <SocialBox label='Facebook' icon='ri-facebook-fill' href='https://www.facebook.com/'/>
        <SocialBox label='LinkedIn' icon='ri-linkedin-fill' href='https://www.linkedin.com/company/thestudioproductionplc'/>
        <SocialBox label='Instagram' icon='ri-instagram-line' href='https://www.instagram.com/thestudioproductionplc/'/>
        <SocialBox label='Telegram' icon='ri-telegram-fill' href='https://t.me/thestudioproductionplc'/>
        <SocialBox label='TikTok' icon='ri-tiktok-fill' href='https://www.tiktok.com/@thestudioproductionplc'/>
        <SocialBox label='YouTube' icon='ri-youtube-fill' href='https://youtube.com/@thestudioproductionplc?si=u28MNDzT418aOoI8'/>
      </div>
    </div>
  )
}

export default Social
