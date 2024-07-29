import React, { useState } from "react";
import "./Sidebar.css";
import ServiceDetails from "./ServiceDetails";
import img1 from "../../Assets/Images/services/Arthritis.jpg";
import { serviceDetailsList } from "../../utils/services";

const Sidebar = () => {
  const [serviceName, setServiceName] = useState("Diabetics");

  const serviceHandle = (e) => {
    setServiceName(e.target.innerText);
  };
  return (
    <div className="servicemain">
      <div className="sidebar">
        <ul className="services">
          <li className="servicelist" onClick={serviceHandle}>
            Arthritis
          </li>
          <li className="servicelist" onClick={serviceHandle}>
            Migraine,Sinusitis
          </li>
          <li className="servicelist" onClick={serviceHandle}>
            Diabetics
          </li>
          <li className="servicelist" onClick={serviceHandle}>
            Skin treatment
          </li>
          <li className="servicelist" onClick={serviceHandle}>
            Hair fall & Dandruf
          </li>
          <li className="servicelist" onClick={serviceHandle}>
            Depression & Anxiety
          </li>
          <li className="servicelist" onClick={serviceHandle}>
            Gastric Problem
          </li>
          <li className="servicelist" onClick={serviceHandle}>
            Immunity booster Program
          </li>
        </ul>
      </div>
      {serviceDetailsList
        .filter((item) => item.serviceName === serviceName)
        .map((list) => (
          <div className="DisDetails">
            <div className="DisDetailsInfo">
              <h1>{list.serviceName}</h1>
              <h3>{list.description}</h3>
            </div>
            <img className="DisDetailsImg" src={list.image} alt="" />
          </div>
        ))}
    </div>
  );
};

export default Sidebar;
