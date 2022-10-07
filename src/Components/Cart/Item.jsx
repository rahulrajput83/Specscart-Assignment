/* Imports */
import React from 'react';
import { BsHeart } from 'react-icons/bs'
import Color from './Color';

/* Functional Component */
function Item(props) {
    return (
        <div className='w-full flex p-2 flex-col justify-center items-center'>
            <BsHeart className='ml-auto text-xl text-gray-600' />
            {/* Gets src from props */}
            <img src={props.image} alt='' className='mt-0' />
            <div className='w-full mx-auto flex justify-center items-center'>
                 {/* Rendering Color Component with props */}
                <Color background='bg-black' />
                <Color background='bg-slate-400' />
                <Color background='bg-sky-400' />
                <Color background='bg-rose-900' />
            </div>
            <div className='w-full my-4 gap-4 flex justify-center items-center'>
                <div className='flex justify-center items-center'>
                    <span className='text-slate-400 text-xs mr-2'>Tom Archer</span>
                    <span className='font-medium uppercase text-xl ml-2'>darwen 1</span>
                </div>
                <div className='flex justify-center items-center'>
                    <span className='text-slate-400 text-xs mr-2'>£49.99</span>
                    <span className='font-medium uppercase text-lg ml-2'> £39.99 </span>
                </div>
            </div>
            <div className={`w-full flex ${props.id === '2' ? 'md:hidden' : ''} justify-center items-center gap-8`}>
                <span className='text-xs py-2 px-12 font-medium cursor-pointer bg-slate-200 rounded-full'>View</span>
                <span className='text-xs py-2 px-6 text-white cursor-pointer font-medium bg-teal-400 rounded-full'>Try At Home</span>
            </div>
        </div>
    )
}

/* Export Component */
export default Item