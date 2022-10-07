import React from 'react'
import Item from './Item';
import Glass1 from '../../Images/Glass1.jpg'
import Glass2 from '../../Images/Glass2.jpg'

function Cart() {
  return (
    <div className='w-full grid my-12 grid-cols-1 gap-y-10 px-2 md:px-20 md:grid-cols-2'>
        <Item id='1' image={Glass1} />
        <Item id='2' image={Glass2} />
    </div>
  )
}

export default Cart