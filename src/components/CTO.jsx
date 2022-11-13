import React from "react";
import opensea from "../assets/opensea.svg";
import mbtoken from "../assets/mb-token.png";
import metamask from "../assets/metamask.svg";

const CTO = () => {
  return (
    <div className="mt-[96px] bg-gradient-to-r from-[#A02279] to-[#A02279]">
      <div className="flex justify-evenly">
          <img src={mbtoken} alt="" />
        <img src={metamask} alt="" />
        <img src={opensea} alt="" />
      </div>
    </div>
  );
};

export default CTO;
