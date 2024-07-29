import React, { useState } from "react";
import "./NavBar.css";
import logo from "../../Assets/Images/logo/shadowGreen.png";
import { FaPhoneSquareAlt } from "react-icons/fa";
import { FaSquareWhatsapp } from "react-icons/fa6";
import { FaInstagramSquare } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import Bottombar from "./Bottombar";
import { Link } from "react-router-dom";

const NavBar = () => {
  const [view, setView] = useState(false);
  return (
    <div>
      <div className="navWrapper">
        <div className="Navleft">
          <img
            src={logo}
            alt=""
            onClick={() => {
              setView(!view);
            }}
          />
          <div className="Name">
            <span className="Velayudha">Velayudha</span>
            <span className="pharma">pharmacy & Clinic</span>
          </div>
        </div>
        <div className="navRight">
          <div className="icons">
            <a href="">
              <FaPhoneSquareAlt className="contactIcon" />
            </a>
            <a href="https://wa.me/+919562465095/?text=let me know more about *Velayudha Pharmacy and Clinic*">
              <FaSquareWhatsapp className="contactIcon" />
            </a>
            <a href="">
              <FaInstagramSquare className="contactIcon" />
            </a>
            <a href="">
              <FaFacebookSquare className="contactIcon" />
            </a>
          </div>
        </div>
      </div>

      <Bottombar />
      {view ? (
        <div className="list2">
          <Link to={"/"}>
            <li>Home</li>
          </Link>
          <Link to={"/About"}>
            <li>About Us</li>
          </Link>
          <Link to={"/services"}>
            <li>Service</li>
          </Link>

          <Link to={"/contact"}>
            <li>Contact Us</li>
          </Link>
        </div>
      ) : null}
    </div>
  );
};

export default NavBar;
