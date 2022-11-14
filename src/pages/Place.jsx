import React from "react";
import Footer from "../components/Footer/Footer";
import setting from "../assets/setting.svg";
import Card2 from "../components/Card2";
import Header from "../components/Header/Header";

const Place = () => {
  return (
    <>
      <main>
        <Header />
        <section className="px-6 max-w-[1240px] text-[#434343] mb-[75px] mx-auto flex md:justify-center md:px-16 lg:justify-start items-center xl:px-0">
        <ul className="hidden lg:flex justify-between items-center lg:gap-5 xl:gap-12">
          <li className="text-base xl:text-xl">Resturant</li>
          <li className="text-base xl:text-xl">Cottage</li>
          <li className="text-base xl:text-xl">Castle</li>
          <li className="text-base xl:text-xl">fantast city</li>
          <li className="text-base xl:text-xl">beach</li>
          <li className="text-base xl:text-xl">Carbins</li>
          <li className="text-base xl:text-xl">Off-grid</li>
          <li className="text-base xl:text-xl">Farm</li>
        </ul>
        <select className="h-[50px] w-full px-2 bg-white border border-[#B4B4B4] rounded-lg  lg:hidden">
          <option className="text-base">Resturant</option>
          <option className="text-base">Cottage</option>
          <option className="text-base">Castle</option>
          <option className="text-base">fantast city</option>
          <option className="text-base">beach</option>
          <option className="text-base">Carbins</option>
          <option className="text-base">Off-grid</option>
          <option className="text-base">Farm</option>
        </select>
        <button className="w-full ml-5 md:ml-16 border border-[#B4B4B4] flex justify-between items-center p-3 lg:w-[161px] rounded-lg">
          Location
          <img src={setting} alt="" className="ml-2 lg:ml-10" />
        </button>
      </section>
        <section className="mb-[92px] px-6 md:px-16 max-w-[1240px] lg:mx-auto lg:px-10 xl:px-0">
          <Card2 />
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Place;
