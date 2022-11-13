import React from "react";
import opensea from "../assets/opensea.svg";
import mbtoken from "../assets/mb-token.svg";
import metamask from "../assets/metamask.svg";

const CTO = () => {
  return (
    <section className="gradient flex flex-col lg:flex-row justify-around items-center p-[15px] mb-[19px]">
      <div className="flex justify-evenly">
          <img src={mbtoken} alt="" className="my-10 lg:my-0" />
        <img src={metamask} alt="" className="my-10 lg:my-0" />
        <img src={opensea} alt="" className="my-10 lg:my-0" />
      </div>
    </section>
  );
};

export default CTO;
