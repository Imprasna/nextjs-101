import React from 'react'

const Menu = ({children}) => {
  return (
    <div className='group relative cursor-pointer text-2xl uppercase leading-6 text-black overflow-hidden'>
        <span className='inline-block p-1 transition duration-500 ease-out group-hover:-translate-y-[120%]'>{children}</span>
        <span className='absolute left-0 translate-y-[120%] rotate-12 inline-block p-1 transition duration-500 ease-out group-hover:translate-y-0 group-hover:rotate-0'>{children}</span>
    </div>
  )
}

export default Menu