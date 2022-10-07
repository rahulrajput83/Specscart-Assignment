/* Imports */
import React from 'react';
import UV from '../../Images/Group_5636.png'
import glare from '../../Images/Group_5544.png';
import resistance from '../../Images/Group_5556.png';
import scratch from '../../Images/Group_5547.png';
import bgSecond from '../../Images/Image_30.png';
import rocket from '../../Images/Group_6249.png'

/* Glasses Functional Component */
function Glasses() {
    return (
        <div className='w-full px-4 my-6 flex flex-col justify-center items-center'>
            <span className='text-gray-700 text-xl font-bold text-center'>4 frames, 3 lenses, 7 days - direct to your home.</span>
            <span className='my-4 md:w-3/4 text-sm text-center text-gray-500'>We get it - sometimes you need to hold the glasses in your hand (or take a selfie wearing them) to know if they’re made for you or not. With our Free Home Trial, get 4 frames of your choice at your home, along with 3 cool lenses. </span>

            <div className='w-full md:px-20 mt-8 grid grid-cols-1 md:grid-cols-3 hover:md:grid-cols-5  gap-y-2 justify-center items-center'>
                <div className={`bg-card1 ml-auto cursor-pointer py-6 px-4 hover:md:col-span-3 h-40 hover:h-64 w-full flex flex-col md:h-72 hover:md:h-72 rounded-t-md md:rounded-tl-md md:rounded-bl-md md:rounded-t-none bg-no-repeat bg-cover bg-center`}>
                    <span className='text-white'>Anti Reflective Glasses</span>
                    <span className='text-xs text-gray-400'>At No Added Cost</span>
                    <div className='w-full mt-auto text-xs flex text-white'>
                        <span className='underline mr-2 md:no-underline md:rounded-full md:bg-white md:text-darkPurple p-2'>Shop Men</span>
                        <span className='underline ml-2 md:no-underline md:rounded-full md:bg-white md:text-darkPurple p-2'>Shop Women</span>
                    </div>
                </div>
                <div className={`bg-darkPurple relative overflow-hidden hover:md:col-span-3 md:flex-col hover:md:flex-row   cursor-pointer py-6 h-40 hover:h-64 md:h-72 hover:md:h-72 w-full flex flex-col`}>
                    <div className='flex flex-col w-full'>
                    <span className='text-white w-fit bg-gradient-to-r px-4 py-1 from-teal-600 to-slate-800'>Anti Reflective Glasses</span>
                    <span className='text-xs text-gray-400 px-4'>At Specscart - it’s Free and will always be.</span>
                    <div className='w-full mt-auto py-4 px-4 gap-2 grid grid-cols-4 md:grid-cols-1'>
                        <div className='flex text-xs text-white'>
                            <img src={UV} alt='' className='h-4' />
                            <span className='mx-2'>Anti-UV</span>
                        </div>
                        <div className='flex text-xs text-white'>
                            <img src={glare} alt='' className='h-4' />
                            <span className='mx-2'>Anti-Glare</span>
                        </div>
                        <div className='flex text-xs text-white'>
                            <img src={resistance} alt='' className='h-4' />
                            <span className='mx-2'>Impact Resistance</span>
                        </div>
                        <div className='flex text-xs text-white'>
                            <img src={scratch} alt='' className='h-4' />
                            <span className='mx-2'>Anti-Scratch</span>
                        </div>
                    </div>
                    </div>
                    <img src={bgSecond} alt='' className='h-28 bottom-5 right-5 absolute w-auto' />
                </div>
                <div className={`bg-darkPurple mr-auto opacity-75 cursor-pointer hover:md:col-span-3 py-6 px-4 h-32 hover:h-64 md:h-72 hover:md:h-72 md:rounded-tr-md md:rounded-br-md md:rounded-b-none w-full flex flex-row md:flex-col rounded-b-md bg-no-repeat bg-cover bg-center justify-center items-center md:justify-start md:items-start hover:md:flex-row`}>
                    <div className='flex flex-col h-full w-full'>
                        <span className='text-white'>24H Dispatch</span>
                        <span className='text-xs text-gray-400'>Free Shipping Across the Globe!</span>
                        <div className='w-full mb-4 hidden text-xs md:flex mt-auto text-white'>
                            <span className='rounded-full bg-white text-darkPurple mr-2 p-2'>Shop Men</span>
                            <span className='rounded-full bg-white text-darkPurple ml-2 p-2'>Shop Women</span>
                        </div>
                    </div>
                    <img src={rocket} alt='' className='h-40 mx-auto w-auto my-auto' />
                </div>

            </div>
        </div>
    )
}

/* Exports */
export default Glasses