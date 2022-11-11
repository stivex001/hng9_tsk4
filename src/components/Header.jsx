import React from "react";
import logo  from "../assets/logo.svg";
import brand  from "../assets/brand.svg";

const Header = () => {
  return (
    <header className="flex items-center justify-between mt-11">
      <div className="flex ">
        <img src={logo} alt="" />
        <img src={brand} alt="" />
      </div>
      <div>
        <ul className="flex gap-12 font-normal text-xl text-[#434343] cursor-pointer ">
          <li className="hover:underline decoration-[#843FE8]">Home</li>
          <li className="hover:underline decoration-[#843FE8]">Place to Stay</li>
          <li className="hover:underline decoration-[#843FE8]">NFTs</li>
          <li className="hover:underline decoration-[#843FE8]">Community</li>
        </ul>
      </div>
      <div>
        <button>Connect wallet</button>
      </div>
    </header>
  );
};

export default Header;
