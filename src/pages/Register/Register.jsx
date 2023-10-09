/* eslint-disable no-unused-vars */
import React, { useContext } from 'react'
import Navbar from '../Shared/Navbar/Navbar'
import { AuthContext } from '../../providers/AuthProvider';
import { useNavigate } from 'react-router-dom';

const Register = () => {

    const { createUser } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleRegister = e => {
        e.preventDefault();
    
        const form = new FormData(e.currentTarget);
        const name = form.get('name');
        const photo = form.get('photo');
        const email = form.get('email');
        const password = form.get('password');
        console.log(name, photo, email, password);
    
        // create user
        createUser(email, password)
        .then(result => {
            console.log(result.user)

            // navigate after register
            navigate('/');
        })
        .catch(error => {
            console.error(error)
        });
    }
    


  return (
    <div className="bg-base-200 px-8 md:px-12">
    <Navbar></Navbar>
    <div className="py-16">
      <div className="bg-white p-8 md:p-16 md:w-3/4 lg:w-1/2 mx-auto rounded">
        <h2 className="text-2xl font-semibold text-center mb-8">Register your account</h2>
        <hr className="mb-8"/>
        <form onSubmit={handleRegister}>
          <div className="form-control">
            <label className="label">
              <span className="label-text font-semibold">Name</span>
            </label>
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              className="input bg-[#F3F3F3] focus:outline-none rounded placeholder:text-xs text-sm"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text font-semibold">Photo URL</span>
            </label>
            <input
              type="text"
              name="photo"
              placeholder="Enter your photo url"
              className="input bg-[#F3F3F3] focus:outline-none rounded placeholder:text-xs text-sm"
              required
            />
          </div>
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
            <button className="bg-[#403F3F] w-full p-3 text-white rounded text-sm font-medium">Register</button>
          </div>
        </form>
      </div>
    </div>
  </div>
  )
}

export default Register
