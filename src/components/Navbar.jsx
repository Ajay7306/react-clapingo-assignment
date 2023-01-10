import React from "react";
import { logo } from "../assets";
import { Link} from "react-router-dom";


const Navbar = () => {
  return (
    <nav className="bg-white px-2 sm:px-4 py-2.5 dark:bg-gray-900 fixed w-full z-20 top-0 left-0 nav">
      <div className=" flex  flex-wrap items-center justify-between mx-auto">
        <img src={logo} className="h-6 mr-3 sm:h-9" alt="Logo" />
        <div className="flex flex-row justify-between gap-[10px] md:order-2">
          <Link to="/signup">
            <button
              type="button"
              className="flex flex-row justify-center items-center transition ease-in-out delay-150 duration-300 hover:-translate-y-1 hover:scale-110  text-white btn hover:bg-focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-[80px] text-sm px-5 py-2.5 text-center mr-3 md:mr-0 dark:green-600 dark:hover:bg-green-700 dark:focus:ring-green-800 "
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-5 h-5 mr-[10px]"
              >
                <path
                  fillRule="evenodd"
                  d="M7.5 6a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM3.751 20.105a8.25 8.25 0 0116.498 0 .75.75 0 01-.437.695A18.683 18.683 0 0112 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 01-.437-.695z"
                  clipRule="evenodd"
                />
              </svg>
              Sign Up
            </button>
          </Link>
          <Link to="/login">
            <button
              type="button"
              className="flex flex-row justify-center items-center transition ease-in-out delay-150 duration-300 hover:-translate-y-1 hover:scale-110  text-white btn hover:bg-focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-[80px] text-sm px-5 py-2.5 text-center mr-3 md:mr-0 dark:green-600 dark:hover:bg-green-700 dark:focus:ring-green-800 "
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-5 h-5 mr-[10px]"
              >
                <path
                  fillRule="evenodd"
                  d="M7.5 6a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM3.751 20.105a8.25 8.25 0 0116.498 0 .75.75 0 01-.437.695A18.683 18.683 0 0112 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 01-.437-.695z"
                  clipRule="evenodd"
                />
              </svg>
              Login
            </button>
          </Link>
          <button
            data-collapse-toggle="navbar-sticky"
            type="button"
            className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-sticky"
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-6 h-6"
              aria-hidden="true"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </button>
        </div>
        <div
          className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
          id="navbar-sticky"
        >
          <ul className="flex flex-col gap-[48px] p-4 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            <li>
              <a
                href="#"
                className="block py-2 pl-3 pr-4 text-white bg-[#00CDAC] rounded md:bg-transparent md:text-[#00CDAC] md:p-0 dark:text-white"
                aria-current="page"
              >
                Plans & Pricing
              </a>
            </li>
            <li>
              <a
                href="#"
              className="block py-2 pl-3 pr-4 text-[#060606] rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-[#00CDAC] md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
              >
                Teach with us
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block py-2 pl-3 pr-4 text-[#060606] rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-[#00CDAC] md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
              >
                Affiliate Program
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block py-2 pl-3 pr-4 text-[#060606] rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-[#00CDAC] md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
              >
                Kids
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
