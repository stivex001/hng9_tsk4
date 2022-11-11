import React from "react";
import image3 from "../assets/image 3.svg";
import image4 from "../assets/image 4.svg";
import image5 from "../assets/image 5.svg";
import image6 from "../assets/image 6.svg";

const Hero = () => {
  return (
    <main className="mt-32 flex justify-between">
      <div className="flex flex-col gap-12 max-w-[646px]">
        <h1 className="font-normal text-5xl leading-[78px]">
          Rent a <span className="text-[#A02279]">Place</span> away from <span className="text-[#A02279]">Home</span> in the{" "}
          <span className="text-[#A02279]">Metaverse</span>{" "}
        </h1>
        <p className="font-normal text-2xl max-w-[636px]">
          we provide you access to luxury and affordable houses in the
          metaverse, get a chance to turn your imagination to reality at your
          comfort zone
        </p>
        <div>
          <input className="border border-[#A3A3A3] text-[#B8B8B8] font-normal text-sm px-5 py-4 rounded-md outline-none" type="text" placeholder="Search for location" />
          <button className="bg-gradient-to-r from-[#A02279] to-[#A02279] rounded-md text-sm font-normal text-white py-4 px-20">search</button>
        </div>
      </div>
      <div className="flex gap-2">
        <div>
          <img src={image3} alt="image3" />
          <img src={image5} alt="image5" />
        </div>

        <div>
          <img src={image4} alt="image4" />
          <img src={image6} alt="image6" />
        </div>
      </div>
    </main>
  );
};

export default Hero;
