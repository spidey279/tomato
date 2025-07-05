import React, { useState } from "react";
import logo from "../assets/logo.png";
import { TiThMenu } from "react-icons/ti";
import { ImCross } from "react-icons/im";
import { FaShoppingCart } from "react-icons/fa";
import "../index.css";

const Navbar = () => {
  const [navMenuToggle, setnavMenuToggle] = useState(false);

  return (
    <div>
      <div className=" font-outfit ">
        <nav className="  p-3 w-[85%] m-auto flex justify-between items-center">
          <div className="w-20 cursor-pointer sm:w-23 lg:w-30">
            <img src={logo} className="w-full h-auto" alt="" />
          </div>
          <div className="hidden lg:block">
            <ul className="flex  text-gray-800 items-center  text-lg gap-10">
              <li className="cursor-pointer ">home</li>
              <li className="cursor-pointer ">menu</li>
              <li className="cursor-pointer ">mobile-app</li>
              <li className="cursor-pointer ">contact us</li>
            </ul>
          </div>
          <div className="flex items-center gap-5 lg:gap-6">
            <FaShoppingCart className="cursor-pointer text-2xl sm:text-3xl lg:text-4xl" />
            <button className="bg-white hidden lg:flex border-orange-500 text-md border-2 p-1 w-30  text-center rounded-full  items-center justify-center ">
              Sign In
            </button>
            <TiThMenu
              onClick={() => setnavMenuToggle(!navMenuToggle)}
              className={`${
                navMenuToggle ? " hidden" : " z-10000 block"
              } text-xl sm:text-2xl lg:hidden`}
            />
            <ImCross
              onClick={() => setnavMenuToggle(!navMenuToggle)}
              className={`${
                navMenuToggle ? "z-10000 block" : "hidden"
              } text-xl sm:text-2xl lg:hidden`}
            />
          </div>
        </nav>
      </div>
      <div
        className={`${
          navMenuToggle ? "translate-x-0   " : "translate-x-[110%]  "
        }  duration-[600ms] lg:hidden top-0 z-50 fixed text-black  ease-in-out  h-screen w-full bg-[#FFFEFA]`}
      >
        <ul className="flex flex-col items-center gap-10 font-semibold  mt-15">
          <li className="bg-orange-500 p-1 sm:text-lg w-30 text-center rounded-md">
            home{" "}
          </li>
          <li className="bg-orange-500 p-1 sm:text-lg w-30 text-center rounded-md">
            menu
          </li>
          <li className="bg-orange-500 p-1 sm:text-lg w-30 text-center rounded-md">
            mobile-app
          </li>
          <li className="bg-orange-500 p-1 sm:text-lg w-30 text-center rounded-md">
            contact us
          </li>
          <li className="bg-white border-orange-500 sm:text-lg border-2 p-1 w-30 text-center rounded-md">
            Sign In
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
