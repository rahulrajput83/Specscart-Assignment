/* Imports */
import React from 'react'

/* Heading Functional Component */
function Heading(props) {
  return (
    <span className='text-sm mt-3 text-white uppercase font-semibold'>{props.text}</span>
  )
}

/* Exports Component */
export default Heading