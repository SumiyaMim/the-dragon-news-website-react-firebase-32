/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom';
import image1 from '../../../assets/1.png';
import image2 from '../../../assets/2.png';
import image3 from '../../../assets/3.png';
import moment from 'moment';
import { HiOutlineCalendar } from 'react-icons/hi';



const LeftSideNav = () => {

  const [categories, setCategories] = useState([]);

  useEffect(() => {
      fetch('categories.json')
          .then(res => res.json())
          .then(data => setCategories(data))
  }, [])

  return (
    <div>
      <h2 className="text-lg font-semibold mb-2">All Categories</h2>
      {
          categories.map(category => <NavLink
          className='block py-4 px-4 lg:px-10 text-base font-semibold rounded-md text-[#9F9F9F] hover:text-black hover:bg-[#E7E7E7]'
          key={category.id}
          to={`/category/${category.id}`}
          >{category.name}</NavLink>)
      }

      <div className='py-10'>
        <div>
          <img src={image1} alt="" className='w-full mb-3'/>
          <h1 className='text-sm font-semibold mb-5'>Bayern Slams Authorities Over Flight Delay to Club World Cup</h1>
          <div className='flex gap-6'>
            <p className='text-xs font-medium'>Sports</p>
            <div className='text-[#9F9F9F] flex gap-2'>
              <i><HiOutlineCalendar></HiOutlineCalendar></i>
              <p className='text-xs font-normal mb-7'>{moment().format("MMMM D, YYYY")}</p>
            </div>
          </div>
        </div>
        <div>
          <img src={image2} alt="" className='w-full mb-3'/>
          <h1 className='text-sm font-semibold mb-5'>Bayern Slams Authorities Over Flight Delay to Club World Cup</h1>
          <div className='flex gap-6'>
            <p className='text-xs font-medium'>Sports</p>
            <div className='text-[#9F9F9F] flex gap-2'>
              <i><HiOutlineCalendar></HiOutlineCalendar></i>
              <p className='text-xs font-normal mb-7'>{moment().format("MMMM D, YYYY")}</p>
            </div>
          </div>
        </div>
        <div>
          <img src={image3} alt="" className='w-full mb-3'/>
          <h1 className='text-sm font-semibold mb-5'>Bayern Slams Authorities Over Flight Delay to Club World Cup</h1>
          <div className='flex gap-6'>
            <p className='text-xs font-medium'>Sports</p>
            <div className='text-[#9F9F9F] flex gap-2'>
              <i><HiOutlineCalendar></HiOutlineCalendar></i>
              <p className='text-xs font-normal mb-7'>{moment().format("MMMM D, YYYY")}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LeftSideNav
