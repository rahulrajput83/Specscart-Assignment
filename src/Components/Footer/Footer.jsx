/* Imports */
import React from 'react'
import Heading from './Heading';
import Items from './Items';
import { GrSend } from 'react-icons/gr'
import Social from './Social';
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter, FaYoutube } from 'react-icons/fa'
import Link from './Link';
import MobileHeading from './MobileHeading';
import BackToTop from './BackToTop';


/* Functional Footer Component */
function Footer() {
    return (
        <div className='bg-darkPurple mt-10 px-16 relative py-2 flex flex-col justify-center items-center'>
            <div className='w-full flex  py-1 justify-center items-center'>
                <div className=' bg-white rounded-full h-[2px] w-full hidden md:flex' ></div>
                <img className='w-24 mx-4' src='https://specscart.co.uk/skin/frontend/rwd/default/img/logo_symbol.svg' alt='' />
                <div className=' bg-white rounded-full hidden md:flex h-[2px] w-full' ></div>
            </div>
            <div className='w-full grid grid-cols-1 md:grid-cols-5'>
                 {/* Rendering Items Component with props. */}
                <Items heading='Glasses' />
                <Items heading='Sunglasses' />
                <Items heading='Help & Faq' />
                <Items heading='about us' />
                <div className='flex w-full flex-col'>
                    <div className='w-full hidden md:flex justify-between'>
                         {/* Rendering Heading Component with props. */}
                        <Heading text='subscribe' />
                        <Heading text='contact us' />
                    </div>
                    <div className="relative mt-4 w-full">
                        <input type="text" className="block p-3 w-full z-20 text-xs text-gray-900 bg-gray-50 rounded border border-gray-300 outline-none" placeholder="Sign up for our newsletter" />
                        <button className="absolute top-0 right-0 bottom-0 p-3 text-sm bg-[#26b3a3] rounded"><GrSend style={{ color: 'red' }} className=' w-6 h-5' /></button>
                    </div>
                    <div className='flex my-8 justify-center md:justify-start'>
                         {/* Rendering Social Component with props. */}
                        <Social icon={FaFacebookF} />
                        <Social icon={FaTwitter} />
                        <Social icon={FaInstagram} />
                        <Social icon={FaLinkedinIn} />
                        <Social icon={FaYoutube} />
                    </div>

                </div>
            </div>
            <div className='w-full flex flex-col md:hidden justify-center items-center'>
                <div className='my-2 bg-white rounded-full h-[2px] w-full' ></div>
                 {/* Rendering MobileHeading Component with props. */}
                <MobileHeading text='Glasses' />
                <MobileHeading text='Sunglasses' />
                <MobileHeading text='Lenses' />
                <MobileHeading text='Services' />
                <MobileHeading text='help & FAQs' />
                <MobileHeading text='About us' />
                <Heading text='Brands' />
                <div className='my-5 bg-white rounded-full h-[2px] w-full' ></div>
            </div>
            <div className='my-4 bg-white rounded-full h-[2px] w-full hidden md:flex' ></div>
            <div className='w-full mb-2 flex flex-col md:flex-row justify-between items-center'>
                <span className='text-xs text-white text-center'>Developed by HRM International Limited © 2018 Specscart.</span>
                <div className='flex mt-2 md:mt-0'>
                     {/* Rendering Link Component with props. */}
                    <Link text='Terms & Conditions' />
                    <div className=' bg-white rounded-full h-[full] w-[2px] mx-2 block' ></div>
                    {/* Rendering Link Component with props. */}
                    <Link text='Privacy Policy' />
                    <div className=' bg-white rounded-full h-[full] w-[2px] mx-2 hidden md:block' ></div>
                    {/* Rendering Link Component with props. */}
                    <Link text='Site Map' />
                </div>
            </div>
            {/* Rendering BackToTop Component. */}
            <BackToTop />
        </div>
    )
}


/* Exports Component */
export default Footer;