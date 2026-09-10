import React from 'react'

const MenuItems = ({val}) => {
  return (
    <li className='cursor-pointer hover:text-[#6c7155] transition-all duration-200 capitalize text-[3vw] sm:text-[1rem] border-b-2 border-zinc-600 w-full py-[0.25rem] font-medium'>{val}</li>
  )
}

export default MenuItems
