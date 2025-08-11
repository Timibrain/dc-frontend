import React from 'react'
import { Link } from 'react-router-dom'

export const Navitem = ({icon, text, to, isopne, setIsopne}) => {
  return (

    <Link to={to}>
      <div className='flex text-black items-center lg:pl-4 pl-6  gap-4 cursor-pointer w-full hover:text-blue-400'>
        <span onClick={()=> setIsopne((prev) => 
          !prev)} data-tooltip-id={!isopne ? 'sidebar-tooltip' : undefined} data-tooltip-content={!isopne ? text : undefined} className='text-xl '>{icon}</span>
        {isopne && (
            <div>{text}</div>
        )}
    </div>
    </Link>
  )
}

export default Navitem