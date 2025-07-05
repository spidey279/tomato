import React, { useState } from "react";
import logo from "../assets/logo.png";
import { TiThMenu } from "react-icons/ti";
import { ImCross } from "react-icons/im";
import { FaShoppingCart } from "react-icons/fa";

const Navbar = () => {
  const [navMenuToggle, setnavMenuToggle] = useState(false);

  return (
    <div>
      <div className=" ">
        <nav className="bg-yellow-200   p-3 w-[85%] m-auto flex justify-between items-center">
          <div className="w-20">
            <img src={logo} className="w-full h-auto" alt="" />
          </div>
          <div className="flex items-center gap-3">
            <FaShoppingCart className="text-2xl" />

            <TiThMenu
              onClick={() => setnavMenuToggle(!navMenuToggle)}
              className={`${
                navMenuToggle ? " hidden" : " z-10000 block"
              } text-xl`}
            />
            <ImCross
              onClick={() => setnavMenuToggle(!navMenuToggle)}
              className={`${
                navMenuToggle ? "z-10000 block" : "hidden"
              } text-xl`}
            />
          </div>
        </nav>
      </div>
      <div
        className={`${
          navMenuToggle ? "translate-x-0   " : "translate-x-[110%]  "
        }  duration-[600ms] top-0 z-50 fixed text-black  ease-in-out  h-screen w-full bg-[#FFFEFA]`}
      >
        <ul className="flex flex-col items-center gap-10 font-semibold  mt-15">
          <li className="bg-orange-500 p-1 w-30 text-center rounded-md">
            home{" "}
          </li>
          <li className="bg-orange-500 p-1 w-30 text-center rounded-md">
            menu
          </li>
          <li className="bg-orange-500 p-1 w-30 text-center rounded-md">
            mobile-app
          </li>
          <li className="bg-orange-500 p-1 w-30 text-center rounded-md">
            contact us
          </li>
          <li className="bg-white border-orange-500 border-2 p-1 w-30 text-center rounded-md">
            Sign In
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
