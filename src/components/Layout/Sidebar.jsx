import React, { useState } from "react";
import "./Sidebar.css";
import ServiceDetails from "./ServiceDetails";
import serviceList from "../../utils/services.json";

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
      {serviceList
        .filter((item) => item.serviceName === serviceName)
        .map((list) => (
          <ServiceDetails
            service={list.serviceName}
            description={list.description}
            image={list.image}
          />
        ))}

      {/* {serviceList.map((list)=>(
        <ServiceDetails />
      ))} */}

      {/* {console.log(serviceList)}
      {serviceList
        .filter((item) => item.service === serviceName)
        .map((list) => (
          <ServiceDetails
            description={list.description}
            image={list.image}
            service={list.service}
          />
        ))} */}
    </div>
  );
};

export default Sidebar;
