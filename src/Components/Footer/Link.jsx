/* Imports */
import React from 'react'

/* Link Functional Component */
function Link(props) {
  return (
    <span className={`${props.text === 'Site Map' ? 'hidden md:block' : 'block'} text-xs text-white `}>{props.text}</span>
  )
}

/* Exports Component */
export default Link