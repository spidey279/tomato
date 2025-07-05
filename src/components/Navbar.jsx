import React, { useState } from "react";
import logo from "../assets/logo.png";
import { TiThMenu } from "react-icons/ti";
import { ImCross } from "react-icons/im";

const Navbar = () => {
  const [navMenuToggle, setnavMenuToggle] = useState(false);

  return (
    <div>
      <div className=" ">
        <nav className="bg-yellow-200   p-3 w-[85%] m-auto flex justify-between items-center">
          <div className="w-20">
            <img src={logo} className="w-full h-auto" alt="" />
          </div>
          <TiThMenu
            onClick={() => setnavMenuToggle(!navMenuToggle)}
            className={`${navMenuToggle ? " hidden" : "z-10000 block"} text-xl`}
          />
          <ImCross
            onClick={() => setnavMenuToggle(!navMenuToggle)}
            className={`${navMenuToggle ? "z-10000 block" : "hidden"} text-xl`}
          />
        </nav>
      </div>
      <div
        className={`${
          navMenuToggle ? "translate-x-0   " : "translate-x-[110%]  "
        }  duration-[600ms] top-0 z-50 fixed   ease-in-out  h-screen w-full bg-red-400`}
      >
        <ul>
          <li>1</li>
          <li>1</li>
          <li>1</li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
