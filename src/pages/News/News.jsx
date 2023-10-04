/* eslint-disable no-unused-vars */
import React from 'react'
import Header from '../Shared/Header/Header'
import RightSideNav from '../Shared/RightSideNav/RightSideNav'
import Navbar from '../Shared/Navbar/Navbar'
import { useLoaderData, useParams } from 'react-router-dom'
import { useEffect } from 'react'
import { useState } from 'react'
import { FiArrowLeft } from 'react-icons/fi';
import EditorsInsight from './EditorsInsight';

const News = () => {

    const [singleNews, setSingleNews] = useState({})

    const {id} = useParams();
    const news = useLoaderData();
    // console.log(news)

    useEffect(() => {
        const findNews = news?.find((singleNews) => singleNews._id === id)
        setSingleNews(findNews)
    },[id, news])

    const { title, image_url, details } = singleNews;

  return (
    <div className="py-10 px-8 md:px-12">
        <Header></Header>
        <Navbar></Navbar>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 pt-14">
            <div className='col-span-2'>
                <h3 className="text-lg font-semibold mb-5">Dragon News</h3>
                <div className='border p-6 rounded-md'>
                    <img src={image_url} className='mb-6'/>
                    <h2 className='text-xl font-bold leading-9 mb-4'>{title}</h2>
                    <p className='text-[#706F6F] font-light text-sm text-justify mb-6'>{details}</p>
                    <button className='bg-[#D72050] flex items-center gap-1 text-white text-sm px-4 py-2'><span><FiArrowLeft/></span>
                    All news in this category</button>
                </div>
                <div>
                    <EditorsInsight></EditorsInsight>
                </div>
            </div>
            <div>
                <RightSideNav></RightSideNav>
            </div>
        </div>
    </div>
  )
}

export default News
