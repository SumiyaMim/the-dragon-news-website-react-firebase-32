/* eslint-disable no-unused-vars */
import React from "react";
import { Link } from "react-router-dom";
import { BsBookmark, BsShare } from "react-icons/bs";
import { BiSolidShow } from "react-icons/bi";
import Rating from "react-rating";

const NewsCard = ({ news }) => {
  const { title, image_url, details, _id, author, total_view, rating } = news;

  return (
    <div>
      <div className="bg-[#F3F3F3] p-5 flex justify-between items-center rounded-t-md">
        <div className="flex items-center gap-5">
          <img src={author.img} alt="" className="w-12 rounded-full" />
          <div>
            <h2 className="text-base font-bold mb-1">{author.name}</h2>
            <p className="text-[#706F6F] text-sm">{author.published_date}</p>
          </div>
        </div>
        <div className="flex items-center gap-4 text-[#706F6F] text-lg">
          <i>
            <BsBookmark />
          </i>
          <i>
            <BsShare />
          </i>
        </div>
      </div>
      <div className="border-x border-b mb-8 p-5 rounded-b-md">
        <h2 className="text-xl font-bold leading-9 mb-4">{title}</h2>
        <img src={image_url} className="mb-6" />
        {details.length > 200 ? (
          <p className="text-[#706F6F] font-light text-sm text-justify leading-6">
            {details.slice(0, 200)}...  <br />
            <Link to={`/news/${_id}`} className="text-[#FF8C47] font-bold">
              Read More
            </Link>
          </p>
        ) : (
          <p className="text-[#706F6F] font-light text-justify">{details}</p>
        )}
        <hr className="my-4" />
        <div className="flex justify-between items-center">
          <div className="flex gap-2 items-center">
            <p className="block font-sans text-sm font-normal leading-normal text-gray-700 antialiased opacity-75">
              <Rating
                emptySymbol={
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-5 h-5 text-[#FF8C47]"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
                    />
                  </svg>
                }
                fullSymbol={
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-5 h-5 text-[#FF8C47]"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                      clipRule="evenodd"
                    />
                  </svg>
                }
                initialRating={rating.number}
                readonly
              />
            </p>
            <p className="text-[#706F6F] font-medium text-sm mb-0.5">{rating.number}</p>
          </div>
          <div className="flex items-center gap-2 text-[#706F6F] font-medium text-sm">
            <i>
              <BiSolidShow className="text-2xl" />
            </i>
            <h3>{total_view}</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
