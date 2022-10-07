/* Imports */
import React from 'react';
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa'
import Icon from './Icon';

/* Functional Component */
function Follow() {
  return (
    <div className='w-full my-8 flex justify-center items-center'>
        <div className='flex border-[2px] py-2 px-6 rounded-full justify-center items-center border-gray-300 font-medium text-gray-500'>
            <span className='mr-1'>Follow @Specscartuk</span>
             {/* Rendering Icon Component with props */}
            <Icon icon={FaInstagram} />
            <Icon icon={FaFacebookF} />
            <Icon icon={FaTwitter} />
            <Icon icon={FaYoutube} />
        </div>
    </div>
  )
}

/* Exports */
export default Follow