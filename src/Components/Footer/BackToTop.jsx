/* Imports */
import React from 'react';
import {BsArrowUp} from 'react-icons/bs'

/* Function Component - BackToTop button at footer */
function BackToTop() {
  return (
    <div className='absolute left-3 bottom-5 hidden md:block cursor-pointer bg-darkPurple rounded shadow-sm shadow-white/50 p-3'><BsArrowUp className='text-white' /></div>
  )
}
/* Export */
export default BackToTop