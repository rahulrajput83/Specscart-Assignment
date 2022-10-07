/* Imports */
import React from 'react'

/* Functional Component */
function Color(props) {
  return (
    <div className={`w-5 h-5 mx-2 border-[3px] border-white shadow-md rounded-full ${props.background}`}></div>
  )
}

/* Export Component */
export default Color