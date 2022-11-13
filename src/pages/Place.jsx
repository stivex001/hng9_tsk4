import React from "react";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header";
import setting from "../assets/setting.svg";
import { categories } from "../components/data";
import Card2 from "../components/Card2";

const Place = () => {
  return (
    <>
      <main>
        <Header />
        <section className="px-6 max-w-[1240px] text-[#434343] mb-[75px] mx-auto flex md:justify-center md:px-16 lg:justify-start items-center xl:px-0">
          <ul className="hidden lg:flex justify-between items-center lg:gap-5 xl:gap-12">
            {categories.map(({ id, name }) => (
              <div key={id}>
                <li className="text-base xl:text-xlcursor-pointer">{name}</li>
                <select className="h-[50px] w-full px-2 bg-white border border-[#B4B4B4] rounded-lg  lg:hidden">
                  <option className="text-base">{name}</option>
                </select>
              </div>
            ))}
            <button className="w-full ml-5 md:ml-16 border border-[#B4B4B4] flex justify-between items-center p-3 lg:w-[161px] rounded-lg">
              Location
              <img src={setting} alt="" className="ml-2 lg:ml-10" />
            </button>
          </ul>
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
