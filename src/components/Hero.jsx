import React from "react";
import image3 from "../assets/image 3.svg";
import image4 from "../assets/image 4.svg";
import image5 from "../assets/image 5.svg";
import image6 from "../assets/image 6.svg";

const Hero = () => {
  return (
    <main className="mt-32 flex flex-col gap-4 items-center lg:flex-row justify-between">
      <div className="md:w-[70%] mx-auto lg:mx-0 lg:w-[40%] xl:w-[50%]">
        <h1 className="mb-12">
          Rent a <span className="text-[#A02279]">Place</span> away from <span className="text-[#A02279]">Home</span> in the{" "}
          <span className="text-[#A02279]">Metaverse</span>{" "}
        </h1>
        <p className="text-center font-normal mb-12 lg:text-left xl:text-2xl">
          we provide you access to luxury and affordable houses in the
          metaverse, get a chance to turn your imagination to reality at your
          comfort zone
        </p>
        <div className="flex rounded-md">
          <input className="border border-[#A3A3A3] text-[#B8B8B8] h-[54px] w-3/5 font-normal text-sm px-4 outline-none" type="text" placeholder="Search for location" />
          <button className="w-[40%] xl:w-[30%] h-[54px] text-base gradient rounded-r-lg text-white text-center">search</button>
        </div>
      </div>
      <div className="mb-[67px] flex items-center md:justify-center lg:w-[45%] lg:justify-between xl:w-auto gap-2">
        <div className="mr-2 mt-[90px] flex flex-col ">
          <img src={image4} alt="image4" className="hover:scale-105 duration-200 w-full" />
          <img src={image6} alt="image6" className="hover:scale-105 duration-200 w-full" />
        </div>
        <div className="flex flex-col mb-[90px]">
          <img src={image3} alt="image3" className="hover:scale-105 duration-200 w-full"/>
          <img src={image5} alt="image5" className="hover:scale-105 duration-200 w-full"/>
        </div>
      </div>
    </main>
  );
};

export default Hero;
