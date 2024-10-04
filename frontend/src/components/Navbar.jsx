/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { FaFile } from 'react-icons/fa';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import hamburger from '../assets/burger-menu-svgrepo-com.svg';
import close from '../assets/close-svgrepo-com.svg';
import About from './HomePage/About';

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation(); // Get the current route

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  const toPublish = () => {
    navigate('/addjournals');
  };

  // Function to determine if the link is active
  const isActive = (path) => {
    if ((path === '/' || path === '/home') && (location.pathname === '/' || location.pathname === '/home')) {
      return 'text-green-500 font-bold';
    }
    return location.pathname === path ? 'text-green-500 font-bold' : ''; // Add your active class styles here
  };

  return (
    <>
      <header className="flex items-center justify-between border-b-4 border-green-400">
        <span className="text-5xl">
          J<span className="text-4xl mb-2 absolute">F</span>
        </span>
        <div className="flex flex-row gap-x-4 justify-center items-center">
          <button
            onClick={toPublish}
            className="flex ml-8 bg-green-400 w-[15rem] h-[3rem]  items-center justify-center rounded-full "
          >
            <FaFile className=" text-3xl px-2 -ml-2 "></FaFile>
            <button className="text-xl">Add your Journal</button>
          </button>

          {/* hidden lg: */}
          <div className="block relative">
            <ul
              className={`bg-[#f3f4f5] z-50
                lg:flex flex-col lg:flex-row absolute lg:static gap-x-12 text-xl
                top-8  ${isMenuOpen ? '-left-12' : 'hidden'} px-5 lg:p-0 shadow-lg lg:shadow-none lg: overflow-hidden
              `}
            >
              <Link to="/home">
                <li className={`p-4 ml-3 lg:p-0 shadow-sm ${isActive('/')}` }>
                  Home
                </li>
              </Link>
              <Link to="/journals">
                <li className={`p-4 lg:p-0 ${isActive('/journals')}`}>
                  Journals
                </li>
              </Link>
              <Link to="/contactus">
                <li className={`p-4 lg:p-0 transition-transform ease-in-out ${isActive('/contactus')}`}>
                  Contact us
                </li>
              </Link>
              <Link to="/profile">
                <li className={`p-4 lg:p-0 ${isActive('/profile')}`}>
                  Profile
                </li>
              </Link>
            </ul>
          </div>
          <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <img src={isMenuOpen ? close : hamburger} className="h-8 lg:hidden" />
          </button>
        </div>
      </header>
      <hr className="h-[0.1rem] flex justify-center bg-green-500 mt-4 shadow-2xl" />
    </>
  );
};

export default Navbar;
