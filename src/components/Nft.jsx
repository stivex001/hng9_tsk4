import React from "react";
import nft from "../assets/nft.svg"

const Nft = () => {
  return (
    <section className="gradient px-6 md:px-16 xl:px-0 pt-[100px] pb-[100px]">
      <div className="text-white flex flex-col-reverse items-center lg:flex-row lg:justify-between  max-w-[1240px] mx-auto">
        <div className="text-center lg:text-left lg:w-[40%] xl:w-[30%]">
          <h2 className="mb-[35px]">Metabnb NFTs</h2>
          <p className="mb-[57.55px]">
            Discover our NFT gift cards collection. Loyal customers gets amazing
            gift cards which are traded as NFTs. These NFTs gives our cutomer
            access to loads of our exclusive services.
          </p>
          <div className="bg-white rounded-lg w-[9.75rem] h-12 hover:scale-105 duration-200 mx-auto lg:mx-0">
            <button className="font-normal text-sm text-[#A02279] py-4 px-8">Learn more</button>
          </div>
          
        </div>
        <div className="mb-16 lg:mb-0 md:w-3/4 lg:w-1/2 xl:w-[60%]">
          <img src={nft} alt="" />
        </div>
      </div>
    </section>
  );
};

export default Nft;
