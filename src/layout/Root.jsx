/* eslint-disable no-unused-vars */
import React from 'react'
import { Outlet } from 'react-router-dom'

const Root = () => {
  return (
    <div className='max-w-md md:max-w-3xl lg:max-w-7xl mx-auto font-poppins'>
      <Outlet></Outlet>
    </div>
  )
}

export default Root
