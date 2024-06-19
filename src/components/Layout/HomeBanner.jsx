import React from "react";
import "./HomeBanner.css";
import { FaAnglesRight } from "react-icons/fa6";

const HomeBanner = () => {
  return (
    <div className="homeWrapper">
      <div className="content">
        <span className="ayurbanner">Velayudha</span>
        <span className="pharmabanner">pharmacy & Clinic</span>
        {/* <br /> */}
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo quia cum
          repellat aspernatur tenetur consequatur, maiores animi cupiditate at
          harum voluptate excepturi dolor. Repellendus, laborum quibusdam sed ab
          quidem blanditiis.
        </p>
        <button>
          Explore 
        </button>
      </div>
    </div>
  );
};

export default HomeBanner;
