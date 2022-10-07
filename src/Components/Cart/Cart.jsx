/* Imports */
import React from 'react'
import Item from './Item';
import Glass1 from '../../Images/Glass1.jpg'
import Glass2 from '../../Images/Glass2.jpg'

/* Functional Component */
function Cart() {
  return (
    <div className='w-full grid my-12 grid-cols-1 gap-y-10 px-2 md:px-20 md:grid-cols-2'>
         {/* Rendering Item Component with props */}
        <Item id='1' image={Glass1} />
         {/* Rendering Item Component with props */}
        <Item id='2' image={Glass2} />
    </div>
  )
}

/* Export Component */
export default Cart