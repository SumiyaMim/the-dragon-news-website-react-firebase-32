/* eslint-disable no-unused-vars */
import React from "react";
import { Link } from "react-router-dom";
import { FiArrowLeft } from 'react-icons/fi';

const Error = () => {
  return (
    <div className="flex items-center flex-col gap-4 my-48 lg:my-52">
      <h2 className="font-bold text-4xl">Oops!!! </h2>
      <h2 className="font-semibold text-2xl">No Data Found</h2>
      <Link
        to="/"
      >
        <button className='bg-[#D72050] flex rounded items-center gap-1 text-white font-medium text-sm px-4 py-2'><span><FiArrowLeft/></span>
        Go back to home</button>
      </Link>
    </div>
  );
};

export default Error;
