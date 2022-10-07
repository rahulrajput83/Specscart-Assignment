import React from 'react'

function Link(props) {
  return (
    <span className={`${props.text === 'Site Map' ? 'hidden md:block' : 'block'} text-xs text-white `}>{props.text}</span>
  )
}

export default Link