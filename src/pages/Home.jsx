import React from "react";
import CTO from "../components/CTO";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Nft from "../components/Nft";
import Places from "../components/Places";

const Home = () => {
  return (
    <>
      <div className="container">
        <Header />
        <Hero />
      </div>
      <CTO />
      <div className="container">
        <Places />
      </div>
      <Nft />
      <Footer />
    </>
  );
};

export default Home;
