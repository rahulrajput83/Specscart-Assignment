/* Imports */
import React from 'react';
import { BsFillStarFill } from 'react-icons/bs';
import Star from './Star';
import { HiOutlineChevronLeft, HiOutlineChevronRight } from 'react-icons/hi'
import LinesEllipsis from 'react-lines-ellipsis'
import responsiveHOC from 'react-lines-ellipsis/lib/responsiveHOC'
import More from './More';
import one from '../../Images/freepressjournal_import_2017_10_Tom-Cruise.png'
import right from '../../Images/808675.png';
import left from '../../Images/5cb30b93b42e95ee807cc073b66ea1a2.png'


const ResponsiveEllipsis = responsiveHOC()(LinesEllipsis)
const star = [BsFillStarFill, BsFillStarFill, BsFillStarFill, BsFillStarFill, BsFillStarFill]
const user = [left, left, one, right, right]

/* Functioanl Component */
function Reviews() {
    return (
        <div className='w-full relative flex flex-col md:px-28 my-6 px-4 justify-center items-center'>
            <span className='text-gray-700 text-xl font-semibold'>Google & Fb Reviews</span>
            <div className='w-full md:w-3/4 flex flex-col justify-center items-center'>
                <div className='flex justify-center my-5 items-center'>
                    {user.map((item, index) => {
                        return (
                            <img className={`mx-1 md:mx-2 ${(index === 0 || index === 4 ? 'w-8 h-8 md:w-10 md:h-10 opacity-50' : '') || (index === 1 || index === 3 ? 'w-12 h-12 md:w-16 md:h-16' : '') || (index === 2 ? 'w-16 h-16 md:w-24 md:h-24' : '')}`} src={item} alt='' key={`user-${index}`} />
                        )
                    })}
                </div>
                <span className='font-medium text-lg'>Joshua Segar</span>
                <div className='w-full mb-4 mt-1 flex justify-center items-center'>
                    {star.map((data, index) => {
                        return (
                            <Star icon={data} key={`star-${index}`} />
                        )
                    })}
                </div>
                <span className='w-full text-gray-500 text-xs font-medium text-center'><ResponsiveEllipsis ellipsis=''
                    basedOn='letters' maxLine="5" text="Fantastic company! I discovered them while searching for home trial glassses on Google and I’m so glad I did! Excellent customer service, super fast and efficient! The website is very easy to use and very user friendly. While ordony glasses, I had some technical problems which were resolved within seconds by chat. The glasses arrived 2 days after ordering and came in a lovely box (looked a little bit like an iPhone box ;) ), together with an adjustment took and cleaning spray. The company certainly deserves the award that they recently received!" /></span>
                <div className='my-4 font-semibold cursor-pointer flex flex-col w-full justify-center items-center md:hidden text-teal-500 text-lg'>
                    <span>Learn More</span>
                    <div className='flex my-4 justify-center items-center'>
                        {/* Rendering More Component with props */}
                        <More background='bg-teal-500' />
                        <More background='bg-gray-400' />
                        <More background='bg-gray-400' />
                        <More background='bg-gray-400' />
                    </div>
                </div>
            </div>
            <div className='absolute hidden md:flex left-32 bg-white shadow-md cursor-pointer rounded-full'>
                <HiOutlineChevronLeft className='m-3' />
            </div>
            <div className='absolute hidden md:flex right-32 bg-white shadow-md cursor-pointer rounded-full'>
                <HiOutlineChevronRight className='m-3' />
            </div>
        </div>
    )
}

/* Exports */
export default Reviews