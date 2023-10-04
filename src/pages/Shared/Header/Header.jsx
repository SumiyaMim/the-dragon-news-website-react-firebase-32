/* eslint-disable no-unused-vars */
import React from 'react'
import logo from '../../../assets/logo.png'
import moment from 'moment/moment'

const Header = () => {
  return (
    <div className='text-center'>
        <img src={logo} className='mx-auto' />
        <p className='text-[#706F6F] text-sm pt-4 pb-2'>Journalism Without Fear or Favour</p>
        <p className='text-base font-medium text-[#706F6F] mb-7'>{moment().format("dddd, MMMM D, YYYY")}</p>
    </div>
  )
}

export default Header
