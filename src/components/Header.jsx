import React, { useEffect } from "react";
import logo from "../assets/logo.svg";
import brand from "../assets/brand.svg";
import { Link } from "react-router-dom";
import { myLinks } from "./data";
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import Modal from "./Modal";

const Header = () => {
  const [menu, setMenu] = useState(false);
  const [modalOpen, setmodalOpen] = useState(false);

  useEffect(() => {
    if (modalOpen || menu) {
      document.documentElement.style.overflow = "hidden";
    }

    return () => {
      document.documentElement.style.overflowY = "scroll";
    };
  }, [modalOpen, menu]);

  const showMenu = () => {
    setMenu((prev) => !prev);
  };

  const toggleModal = () => {
    setmodalOpen((previousState) => !previousState);
    setMenu(false);
  };

  return (
    <>
      <header className="flex items-center justify-between max-w-[1240px] mx-auto mt-11 px-6 md:px-16 lg:px-10 xl:px-0">
        <Link to="/">
          <div className="hidden md:flex cursor-pointer ">
            <img src={logo} alt="" />
            <img src={brand} alt="" />
          </div>
        </Link>

        <nav className="hidden lg:flex">
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
          <button
            onClick={toggleModal}
            className="font-normal text-sm text-white py-3 px-5"
          >
            Connect wallet
          </button>
        </div>

        <div
          onClick={showMenu}
          className="lg:hidden cursor-pointer order-first md:order-last z-10"
        >
          {menu ? (
            <FaTimes className="text-white" size={50} />
          ) : (
            <FaBars className="text-[#A02279]" size={50} />
          )}
        </div>

        {/* ########################### MOBILE ###################### */}

        <ul
          className={`${
            menu ? "translate-y-0" : "-translate-y-full"
          } transition-all absolute inset-0 gradient h-[380px] text-white px-8 pb-16 xl:hidden`}
        >
          {myLinks.map(({ id, name, link }) => (
            <Link key={id} to={link} className="text-xl border-b">
              {name}
            </Link>
          ))}
          <div className="h-14 mt-6 rounded-md hover:opacity-75 w-[250px] border-white">
            <button className="font-normal text-sm text-white ">
              Connect wallet
            </button>
          </div>
        </ul>
      </header>
      <Modal toggleModal={toggleModal} modalOpen={modalOpen} />
    </>
  );
};

export default Header;
