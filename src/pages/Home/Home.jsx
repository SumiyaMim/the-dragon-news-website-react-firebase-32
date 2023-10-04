/* eslint-disable no-unused-vars */
import React from "react";
import Header from "../Shared/Header/Header";
import Navbar from "../Shared/Navbar/Navbar";
import LeftSideNav from "../Shared/LeftSideNav/LeftSideNav";
import RightSideNav from "../Shared/RightSideNav/RightSideNav";
import Latest from "./Latest";
import { useLoaderData } from "react-router-dom";
import NewsCard from "./NewsCard";

const Home = () => {
  const news = useLoaderData();
//   console.log(news);

  return (
    <div className="py-10 px-8 md:px-12">
      <Header></Header>
      <Latest></Latest>
      <Navbar></Navbar>
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-y-6 lg:gap-6 pt-14">
        <div>
          <LeftSideNav></LeftSideNav>
        </div>

        {/* news container */}
        <div className="md:col-span-2">
          {news.map((singleNews) => (
            <NewsCard key={singleNews._id} news={singleNews}></NewsCard>
          ))}
        </div>

        <div>
          <RightSideNav></RightSideNav>
        </div>
      </div>
    </div>
  );
};

export default Home;
