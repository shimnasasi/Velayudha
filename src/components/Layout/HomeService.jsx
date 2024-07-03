import React from "react";
import "./HomeService.css";
import MainHead from "../common/MainHead";

import HServiceCard from "../common/HServiceCard";

const HomeService = () => {
  return (
    <div className="HSWrapper">
      <MainHead Heading={"Experience  Our Exclusive Care"} />
      <span className="homeservicepara">
        We offer a comprehensive range of Ayurvedic treatments and services
        designed to promote balance and well-being, including:
      </span>
      <div className="serviceslist">
       <HServiceCard/>
       <HServiceCard/>
       <HServiceCard/>
       <HServiceCard/>
       <HServiceCard/>
       <HServiceCard/>
       <HServiceCard/>
       <HServiceCard/>
      </div>
    </div>
  );
};

export default HomeService;
