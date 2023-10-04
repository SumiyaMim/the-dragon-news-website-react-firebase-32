/* eslint-disable no-unused-vars */
import React, { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import userDefaultPic from "../../../assets/user.png";
import { AuthContext } from "../../../providers/AuthProvider";

const Navbar = () => {

  const { user, logOut } = useContext(AuthContext);

  const handleSignOut = () => {
    logOut()
        .then()
        .catch()
  }

  const navLinks = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/about">About</NavLink>
      </li>
      <li>
        <NavLink to="/career">Career</NavLink>
      </li>
    </>
  );

  return (
    <div className="navbar px-0">
      <div className="navbar-start">
        <div className="lg:hidden">
          <ul className="menu-horizontal px-1 gap-5 text-[#706F6F] font-medium text-sm">
            {navLinks}
          </ul>
        </div>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu-horizontal px-1 gap-5 text-[#706F6F] font-medium text-sm">
          {navLinks}
        </ul>
      </div>
      <div className="navbar-end flex gap-2 items-center">
        <div className="avatar">
          <div className="w-8 rounded-full">
            <img src={userDefaultPic} />
          </div>
        </div>
        {
            user ?
            <button onClick={handleSignOut} className="bg-[#403F3F] text-white font-semibold px-8 py-2 text-sm">Log Out</button>
            :
            <Link to="/login">
                <button className="bg-[#403F3F] text-white font-semibold px-8 py-2 text-sm">Login</button>
            </Link>
        }
      </div>
    </div>
  );
};

export default Navbar;
