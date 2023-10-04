/* eslint-disable no-unused-vars */
import React from 'react'
import editorsInsight1 from '../../assets/editorsInsight1.png'
import editorsInsight2 from '../../assets/editorsInsight2.png'
import editorsInsight3 from '../../assets/editorsInsight3.png'
import moment from 'moment';
import { HiOutlineCalendar } from 'react-icons/hi';

const EditorsInsight = () => {
  return (
    <div className="py-8">
      <h2 className="text-lg font-semibold mb-5">Editors Insight</h2>
      <div className='grid grid-cols-1 lg:grid-cols-3 gap-5'>
        <div>
            <img src={editorsInsight1} alt="" className='w-full mb-3'/>
            <h1 className='text-base font-semibold mb-4'>21 The Most Stylish Wedding Guest Dresses For Spring</h1>
            <div className='text-[#9F9F9F] flex gap-2'>
                <i><HiOutlineCalendar></HiOutlineCalendar></i>
                <p className='text-sm font-normal mb-7'>{moment().format("MMMM D, YYYY")}</p>
            </div>
        </div>
        <div>
            <img src={editorsInsight2} alt="" className='w-full mb-3'/>
            <h1 className='text-base font-semibold mb-4'>21 The Most Stylish Wedding Guest Dresses For Spring</h1>
            <div className='text-[#9F9F9F] flex gap-2'>
                <i><HiOutlineCalendar></HiOutlineCalendar></i>
                <p className='text-sm font-normal mb-7'>{moment().format("MMMM D, YYYY")}</p>
            </div>
        </div>
        <div>
            <img src={editorsInsight3} alt="" className='w-full mb-3'/>
            <h1 className='text-base font-semibold mb-4'>21 The Most Stylish Wedding Guest Dresses For Spring</h1>
            <div className='text-[#9F9F9F] flex gap-2'>
                <i><HiOutlineCalendar></HiOutlineCalendar></i>
                <p className='text-sm font-normal mb-7'>{moment().format("MMMM D, YYYY")}</p>
            </div>
        </div>
      </div>
    </div>
  )
}

export default EditorsInsight
