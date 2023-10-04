/* eslint-disable no-unused-vars */
import React from 'react'
import Marquee from "react-fast-marquee";
import { Link } from 'react-router-dom';

const Latest = () => {
  return (
    <div className='flex bg-zinc-100 p-5 gap-5'>
        <button className="bg-[#D72050] text-white px-4 py-1">Latest</button>
        <Marquee pauseOnHover={true} speed={60} className='font-semibold text-sm'>
                <Link className="mr-8" to="/">Match Highlights: Germany vs Spain — as it happened !</Link>
                <Link className="mr-8" to="/">Match Highlights: Germany vs Spain — as it happened !</Link>
                <Link className="mr-8" to="/">Match Highlights: Germany vs Spain — as it happened !</Link>
        </Marquee>
    </div>
  )
}

export default Latest
