import React from 'react';
import image1 from '../../Images/specscart_awards_follower_rewards.png'

function Slide() {
  return (
    <div className='flex w-full flex-col justify-center items-center'>
        <img src={image1} alt='' className='w-full' />
        <div className='w-full flex justify-center items-center gap-4'>
            <span className='w-3 rounded-full bg-teal-500 h-3'></span>
            <span className='w-3 bg-gray-400 rounded-full h-3'></span>
        </div>
    </div>
  )
}

export default Slide