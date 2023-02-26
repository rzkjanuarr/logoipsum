import React from "react";

function Header() {
  return (
    <header id="header" className="py-7 my-0.5 px-24 max-w-screen-xl mx-auto">
      <nav className="grid items-center grid-flow-col grid-cols-12 gap-8">
        <img
          src="./img/logo.svg"
          className="col-span-3 cursor-pointer"
          alt="Logo"
        />
        <ul className="flex justify-between col-span-4 col-start-5 mx-2 text-black">
          <li className="pb-3 border-b-2 border-blue-900 cursor-pointer">
            Home
          </li>
          <li className="pb-3 cursor-pointer hover:border-b-2 hover:border-blue-900">
            Features
          </li>
          <li className="pb-3 cursor-pointer hover:border-b-2 hover:border-blue-900">
            Pricing
          </li>
          <li className="pb-3 cursor-pointer hover:border-b-2 hover:border-blue-900">
            Blog
          </li>
        </ul>
        <div className="flex col-span-3 col-start-10">
          <button className="flex-grow py-5 ml-8 text-center text-white capitalize transition duration-300 ease-in-out bg-orange-600 rounded-xl hover:bg-orange-200 hover:text-black">
            Get Started
          </button>
        </div>
      </nav>
      <div className="grid grid-flow-col grid-cols-12 gap-12 py-1 mt-24 mb-12">
        <div className="flex flex-col col-span-5 py-20 my-3">
          <h1 className="font-bold leading-tight text-7xl">
            Grow your subscription business
          </h1>
          <p className="my-8 text-1l text-neutral-500">
            Outcome-centered products that reduce churn, optimize pricing, and
            grow your subscription business end-to-end.
          </p>
          <div className="flex">
            <button className="py-5 font-bold text-white transition duration-300 bg-blue-900 rounded-xl px-14 hover:bg-blue-400">
              Get Started
            </button>
            <button className="flex items-center justify-center p-5 ml-10 transition duration-300 border border-gray-100 rounded-full hover:border-gray-600">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12 0.75V23.25"
                  stroke="#19191B"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M1.5 12.75L12 23.25L22.5 12.75"
                  stroke="#19191B"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </button>
          </div>
        </div>
        <div className="relative col-span-7 col-start-7 -mr-16">
          <div className="absolute">
            <img src="./img/hero.png" alt="Logo" className="w-full" />
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
