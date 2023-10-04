/* eslint-disable no-unused-vars */
import React from 'react'
import { FaFacebookF, FaGithub, FaGoogle, FaInstagram, FaTwitter } from 'react-icons/fa';
import qZone1 from '../../../assets/qZone1.png';
import qZone2 from '../../../assets/qZone2.png';
import qZone3 from '../../../assets/qZone3.png';
import bg from '../../../assets/bg.png';

const RightSideNav = () => {
  return (
    <div>

      {/* login with */}
      <div className='space-y-2 mb-8'>
        <h2 className="text-lg font-semibold mb-2">Login With</h2>
        <button className="btn btn-outline hover:bg-blue-500 hover:border-blue-500 w-full normal-case text-blue-600 rounded-md">
            <FaGoogle></FaGoogle>
            Login with Google
        </button>
        <button className="btn btn-outline w-full normal-case rounded-md">
            <FaGithub></FaGithub>
            Login with GitHub
        </button>
      </div>

      {/* find us on */}
      <div className='mb-8'>
        <h2 className="text-lg font-semibold mb-5">Find Us On</h2>
        <a className='p-4 flex items-center gap-4 border rounded-t-md text-base font-medium text-[#706F6F]' href="">
            <div className='bg-[#F3F3F3] p-2 rounded-full'>
              <FaFacebookF className='text-[#3B599C]'></FaFacebookF>
            </div>
            <span>Facebook</span>
        </a>
        <a className='p-4 flex text-base items-center gap-4 border-x font-medium text-[#706F6F]' href="">
            <div className='bg-[#F3F3F3] p-2 rounded-full'>
              <FaTwitter className='text-[#58A7DE]'></FaTwitter>
            </div>
            <span>Twitter</span>
        </a>
        <a className='p-4 flex text-base items-center gap-4 border rounded-b-md font-medium text-[#706F6F]' href="">
            <div className='bg-[#F3F3F3] p-2 rounded-full'>
              <FaInstagram className='text-[#D82D7E]'></FaInstagram>
            </div>
            <span>Instagram</span>
        </a>
      </div>

       {/* q zone */}
       <div className='p-4 space-y-3 mb-6 bg-[#F3F3F3]'>
            <h2 className="text-lg font-semibold mb-5">Q-Zone</h2>
            <img src={qZone1} alt="" className='mx-auto'/>
            <img src={qZone2} alt="" className='mx-auto'/>
            <img src={qZone3} alt="" className='mx-auto'/>
        </div>

        <div className='relative'>
          <img src={bg} alt="" className='w-full'/>
          <div className='absolute inset-0 flex flex-col justify-center items-center text-center text-white bg-opacity-75'>
            <h1 className='text-3xl font-bold leading-10 mb-5'>Create an Amazing Newspaper</h1>
            <p className='w-72 md:w-96 lg:w-48 mx-auto mb-7'>Discover thousands of options, easy to customize layouts, one-click to import demo and much more.</p>
            <button className='bg-[#D72050] px-5 py-3 font-semibold text-base'>Learn More</button>
          </div>
        </div>
    </div>
  )
}

export default RightSideNav
