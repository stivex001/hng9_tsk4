import React from "react";
import CTO from "../components/CTO";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import Hero from "../components/Hero";
import Nft from "../components/Nft";
import Places from "../components/Places";

const Home = () => {
  return (
    <>
      <Header />
      <Hero />
      <CTO />
      <Places />
      <Nft />
      <Footer />
    </>
  );
};

export default Home;
