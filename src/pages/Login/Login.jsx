/* eslint-disable no-unused-vars */
import React, { useContext } from "react";
import Navbar from "../Shared/Navbar/Navbar";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";

const Login = () => {
  const { signIn } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    // console.log(e.currentTarget);

    const form = new FormData(e.currentTarget);
    const email = form.get("email");
    const password = form.get("password");
    console.log(email, password);

    // sign in user
    signIn(email, password)
      .then((result) => {
        console.log(result.user);

        // navigate after login
        navigate(location?.state ? location.state : '/');
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div className="bg-base-200 px-8 md:px-12">
      <Navbar></Navbar>
      <div className="py-16">
        <div className="bg-white p-8 md:p-16 md:w-3/4 lg:w-1/2 mx-auto rounded">
          <h2 className="text-2xl font-semibold text-center mb-8">
            Login your account
          </h2>
          <hr className="mb-8" />
          <form onSubmit={handleLogin}>
            <div className="form-control">
              <label className="label">
                <span className="label-text font-semibold">Email</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="Enter your email address"
                className="input bg-[#F3F3F3] focus:outline-none rounded placeholder:text-xs text-sm"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text font-semibold">Password</span>
              </label>
              <input
                type="password"
                name="password"
                placeholder="Enter your password"
                className="input bg-[#F3F3F3] focus:outline-none rounded placeholder:text-xs text-sm"
                required
              />
            </div>
            <div className="form-control my-6">
              <button className="bg-[#403F3F] w-full p-3 text-white rounded text-sm font-medium">
                Login
              </button>
            </div>
            <p className="text-[#706F6F] text-center text-xs font-semibold">
              Don’t Have An Account ?{" "}
              <Link to="/register">
                <span className="text-[#F75B5F]">Register</span>
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
