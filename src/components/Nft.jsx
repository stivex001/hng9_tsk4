import React from "react";
import image7 from "../assets/image7.svg";
import image8 from "../assets/image8.svg";
import image9 from "../assets/image9.svg";

const Nft = () => {
  return (
    <div className="mt-14 w-full h-full bg-[#A02279] border border-[#000000]">
      <div className="container mt-[6.25rem] flex">
        <div>
          <h1 className="font-bold text-5xl text-white">Metabnb NFTs</h1>
          <p className="font-normal text-xl text-white mt-9">
            Discover our NFT gift cards collection. Loyal customers gets amazing
            gift cards which are traded as NFTs. These NFTs gives our cutomer
            access to loads of our exclusive services.
          </p>
          <div className="bg-white rounded-[8px] w-[9.75rem] mt-[71px] hover:scale-105 duration-200">
            <button className="font-normal text-sm text-[#A02279] py-4 px-8">Learn more</button>
          </div>
          
        </div>
        <div className="flex">
          <img src={image7} alt="" />
          <img src={image8} alt="" />
          <img src={image9} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Nft;
