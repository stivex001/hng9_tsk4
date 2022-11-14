import React, { useEffect, useState } from "react";
import { IoIosMenu } from "react-icons/io";
import logo from "../../../assets/logo.svg";
import Modal from "../../Modal";
import NavList from "./NavList";

const Navbar = () => {
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
    setmodalOpen((prev) => !prev);
    setMenu(false);
  };

  return (
    <>
      <nav className="flex justify-between items-center max-w-[1240px] mx-auto mb-12 lg:mb-[125px]">
        <img src={logo} alt="logo" className="h-5 md:h-8" />
        <NavList menu={menu} showMenu={showMenu} toggleModal={toggleModal} />
        <button
          onClick={toggleModal}
          className="hidden text-sm h-10 w-36 gradient rounded-[10px] lg:block lg:text-base lg:h-12 lg:w-44 text-white hover:opacity-75"
        >
          Connect wallet
        </button>

        <div onClick={showMenu} className="text-4xl cursor-pointer lg:hidden">
          <IoIosMenu />
        </div>
      </nav>
      <Modal toggleModal={toggleModal} modalOpen={modalOpen} />
    </>
  );
};

export default Navbar;
