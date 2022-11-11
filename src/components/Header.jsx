import React from "react";
import logo from "../assets/logo.svg";
import brand from "../assets/brand.svg";
import { Link } from "react-router-dom";
import { myLinks } from "./data";
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const Header = () => {
  const [menu, setMenu] = useState(false);

  const showMenu = () => {
    setMenu(!menu);
  };

  return (
    <header className="flex items-center justify-between mt-11">
      <Link to="/">
        <div className="hidden md:flex cursor-pointer ">
          <img src={logo} alt="" />
          <img src={brand} alt="" />
        </div>
      </Link>

      <nav className="hidden lg:block">
        <ul className="flex gap-12 font-normal text-xl text-[#434343] cursor-pointer ">
          {myLinks.map(({ name, id, link }) => (
            <Link
              to={link}
              key={id}
              className="hover:underline decoration-[#843FE8]"
            >
              {name}
            </Link>
          ))}
        </ul>
      </nav>
      <div className="hidden lg:block bg-gradient-to-r from-[#A02279] to-[#A02279] rounded-[10px] hover:scale-105 duration-200">
        <button className="font-normal text-sm text-white py-3 px-5">
          Connect wallet
        </button>
      </div>

      <div
        onClick={showMenu}
        className="lg:hidden cursor-pointer order-first md:order-last z-10"
      >
        {menu ? (
          <FaTimes className="text-[#A02279]" size={50} />
        ) : (
          <FaBars className="text-[#A02279]" size={50} />
        )}
      </div>

      {menu && (
        <ul className="bg-[#404040] flex flex-col justify-center items-center absolute left-0 top-[50px] w-full">
          {myLinks.map(({ id, name, link }) => (
            <Link
              key={id}
              to={link}
              className="p-4 hover:underline hover:scale-105 duration-200 cursor-pointer py-4 text-2xl text-center text-white"
            >
              {name}
            </Link>
          ))}
          <div className="bg-gradient-to-r from-[#A02279] to-[#A02279] rounded-[10px] hover:scale-105 duration-200 mb-10">
            <button className="font-normal text-sm text-white py-3 px-5">
              Connect wallet
            </button>
          </div>
        </ul>
      )}
    </header>
  );
};

export default Header;
