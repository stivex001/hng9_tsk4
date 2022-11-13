import React from "react";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header";
import setting from "../assets/setting.svg";
import { categories } from "../components/data";
import Card2 from "../components/Card2";

const Place = () => {
  return (
    <>
      <main className="container">
        <Header />
        <section className="py-32 ">
          <ul className="flex justify-between items-center">
            {categories.map(({ id, name }) => (
              <div key={id}>
                <li className="font-normal text-xl cursor-pointer">{name}</li>
              </div>
            ))}
            <div className="flex border border-[#B4B4B4]">
              <input
                className="px-3 outline-none w-[10rem] h-12"
                type="text"
                placeholder="Location"
              />
              <img className="mr-5" src={setting} alt="" />
            </div>
          </ul>
        </section>
        <section className="py-16">
            <Card2 />
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Place;
