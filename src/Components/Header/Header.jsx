/* Imports */
import React from 'react'
import Heading from './Heading'
import Icons from './Icons'
import Line from './Line'
import Text from './Text'
import cart from '../../Images/Cart.png';
import Group2964 from '../../Images/Group_2964.png'
import Group2965 from '../../Images/Group_2965.png'
import Group2966 from '../../Images/Group_2966.png'
import Group2967 from '../../Images/Group_2967.png'
import { MdMenu } from 'react-icons/md'


/* Header Functional Component */
function Header() {
  return (
    <div className='w-full grid shadow-lg grid-cols-2 px-3 md:px-12 md:grid-cols-3 items-center justify-between'>

      <div className='w-full hidden md:flex py-1 flex-col'>
        <div className='flex items-center'>
          {/* Rendering Text Component with props. */}
          <Text text='Free Return' />
          {/* Rendering Line Component */}
          <Line />
          {/* Rendering Text Component with props. */}
          <Text text='Try At Home' />
          {/* Rendering Line Component */}
          <Line />
          {/* Rendering Text Component with props. */}
          <Text text='24 Hr Dispatch' />
        </div>
        <div className='flex mt-3 items-center'>
          {/* Rendering Heading Component with props */}
          <Heading text='Glasses' />
          <Heading text='Sunglasses' />
          <Heading text='Eye-Test' />
          <Heading text='Blogs' />
        </div>
      </div>
      <div className='w-fit bg-white md:w-full mx-auto flex border-none text-sm text-white  justify-center items-center'>
        <MdMenu className='text-darkPurple text-xl md:hidden' />
        <div className='flex w-fit bg-darkPurple flex-col mx-3 relative  overflow-hidden py-1 px-16 justify-center items-center'>
          <div className='absolute bg-white top-0 -left-7 -rotate-[24deg] w-12 h-24'></div>
          <img src='https://specscart.co.uk/skin/frontend/rwd/default/img/logo_symbol.svg' className='h-8' alt='' />
          <span className='text-xs'>Specscart</span>
          <div className='absolute bg-white top-0 -right-7 rotate-[24deg] w-12 h-24'></div>
        </div>
      </div>
      <div className='w-full py-1 flex mx-auto flex-col items-end'>
        <div className='hidden md:flex items-center'>
          {/* Rendering Text Component with props. */}
          <Text text='+441613125767' />
          {/* Rendering Line Component */}
          <Line />
          {/* Rendering Text Component with props. */}
          <Text text='Help' />
          {/* Rendering Line Component */}
          <Line />
          {/* Rendering Text Component with props. */}
          <Text text='Log In' />
        </div>
        <div className='flex mt-3 items-center'>
          <div className='hidden md:flex'><Icons icon={Group2964} /></div>
          {/* Rendering Icons Component with props */}
          <Icons icon={Group2966} />
          <Icons icon={Group2965} />
          <Icons icon={Group2967} />
          <Icons icon={cart} />
        </div>
      </div>
    </div>
  )
}

/* Exports */
export default Header