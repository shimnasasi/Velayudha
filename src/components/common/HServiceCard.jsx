import React from "react";
import "./HServiceCard.css";
import logo from "../../Assets/Images/logo/shadowGreen.png";

function HServiceCard({ name }) {
  return (
    <div className="homeservicecard">
      <img src={logo} alt="" />
      <span className="servicecardname">{name}</span>

      <span className="servicecardpara">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corrupti
        voluptas saepe sint.
      </span>
    </div>
  );
}

export default HServiceCard;
