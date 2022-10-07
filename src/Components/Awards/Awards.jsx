import React from 'react'
import Slide from './Slide';

function Awards() {
    return (
        <div className='md:px-28 w-full my-12 grid grid-cols-1 md:grid-cols-2 md:gap-x-20 gap-y-10 px-4 justify-center items-center'>
            <div className='flex w-full flex-col justify-center items-center md:items-start'>
                <div className='grid text-center md:text-start w-full gap-x-10 md:gap-x-20 text-xl md:text-2xl font-semibold text-gray-700 grid-cols-4 md:grid-cols-1'>
                    <div className=''>Awards.</div>
                    <div className='grid grid-cols-3 md:grid-cols-4 gap-x-24 md:gap-x-10 col-span-3'>
                        <span>Followers.</span>
                        <span> Rewards.</span>
                    </div>
                </div>
                <span className='w-full text-sm text-center md:text-start mt-4 text-gray-500'>Our work speaks for itself - Specscart has been awarded first prize in Venture Further 2018 Business Category. We are constantly working to innovate new ways and technology to become UK’s leading Eye Care provider.</span>
            </div>
            <Slide />
        </div>
    )
}

export default Awards;