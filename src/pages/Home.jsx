import React from "react";
import CTO from "../components/CTO";
import Header from "../components/Header";
import Hero from "../components/Hero";

const Home = () => {
  return (
    <>
      <div className="container">
        <Header />
        <Hero />
      </div>
      <CTO />
      <div className="container"></div>
    </>
  );
};

export default Home;
