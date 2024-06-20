import React from 'react'
import { MdOutlineFiberNew } from "react-icons/md";

const Additional = () => {
  return (
    <div className='flex justify-between text-black py-3'>
        <h2  className='text-[26px] font-medium'>Recommended Jobs</h2>
        <div className='flex border border-slate-500 rounded-3xl p-2 '>
            <h3>Most recent</h3>
            < MdOutlineFiberNew className='text-2xl'/>
        </div>
    </div>
  )
}

export default Additional