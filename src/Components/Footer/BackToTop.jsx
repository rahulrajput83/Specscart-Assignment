import React from 'react';
import {BsArrowUp} from 'react-icons/bs'

function BackToTop() {
  return (
    <div className='absolute left-3 bottom-5 hidden md:block cursor-pointer bg-darkPurple rounded shadow-sm shadow-white/50 p-3'><BsArrowUp className='text-white' /></div>
  )
}

export default BackToTop