import React from "react";

export default function Navbar() {
  return (
    <div className="border border-gray-400 shadow-md">
      <div className=" max-w-6xl mx-auto flex items-center justify-between py-3 px-3">
        <div>
          <p className=" font-semibold cursor-pointer text-xl hover:text-blue-500 transition duration-150 ease-in-out">
            Mishu.dev
          </p>
        </div>
        <div className="">
          <ul className="flex items-center lg:space-x-9 md:space-x-6 sm:space-x-3 xs:space-x-2 text-lg font-semibold">
            <li className="cursor-pointer  hover:text-slate-500 transition duration-150 ease-in-out">
              Home
            </li>
            <li className="cursor-pointer  hover:text-slate-500 transition duration-150 ease-in-out">
              About
            </li>
            <li className="cursor-pointer  hover:text-slate-500 transition duration-150 ease-in-out">
              Projects
            </li>
            <li className="cursor-pointer hover:text-slate-500 transition duration-150 ease-in-out">
              Contact
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
