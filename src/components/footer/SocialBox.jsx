import React from 'react'

const SocialBox = ({label, icon, href}) => {
  return (
    <a
      href={href}
      target='_blank'
      rel='noreferrer'
      title={label}
      aria-label={label}
      className='h-[12vw] w-[12vw] sm:h-[3.2rem] sm:w-[3.2rem] md:h-[3rem] md:w-[3rem] cursor-pointer rounded-full border-2 border-zinc-300 flex items-center justify-center'
    >
      <i className={`${icon} text-[5.5vw] sm:text-[1.5rem] md:text-[1.35rem]`} aria-hidden='true'></i>
    </a>
  )
}

export default SocialBox
