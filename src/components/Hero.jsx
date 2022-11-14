import React from "react";
import HeroImg from "../assets/hero-img.png";

const Hero = () => {
  return (
    <main className="flex flex-col-reverse mb-20 mx-auto lg:mb-0 px-6 lg:px-10 lg:flex-row lg:justify-between max-w-[1240px] xl:px-0">
      <div className="md:w-[70%] mx-auto lg:mx-0 lg:w-[40%] xl:w-[50%]">
        <h1 className="mb-12">
          Rent a <span className="text-[#A02279]">Place</span> away from{" "}
          <span className="text-[#A02279]">Home</span> in the{" "}
          <span className="text-[#A02279]">Metaverse</span>{" "}
        </h1>
        <p className="text-center font-normal mb-12 lg:text-left xl:text-2xl">
          we provide you access to luxury and affordable houses in the
          metaverse, get a chance to turn your imagination to reality at your
          comfort zone
        </p>
        <div className="">
          <input
            className="border border-[#A3A3A3] text-[#B8B8B8] h-[54px] w-3/5 font-normal text-sm px-4 outline-none"
            type="text"
            placeholder="Search for location"
          />
          <button className="w-[40%] xl:w-[30%] h-[54px] text-base gradient rounded-r-lg text-white text-center">
            search
          </button>
        </div>
      </div>
      <div className="mb-[67px] flex items-center md:justify-center lg:w-[50%] lg:justify-between xl:w-auto">
        <img src={HeroImg} alt="" />
      </div>
    </main>
  );
};

export default Hero;
