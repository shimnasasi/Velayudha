import React from "react";
import "./Contactcard.css";
import { FaPhoneSquareAlt } from "react-icons/fa";

const Contactcard = () => {
  return (
    <div className="contactMain">
      <div className="cardWrapper">
        <div>
          <h1 className="contactHead">Our Contact Information</h1>
          <p>
            Have a inquiry or some feedback for us?
            <br /> Fill out the form below to contact our team.
          </p>
        </div>
        <div className="contactDetails">
          <h2 className="heading">Address</h2>
          <p className="para">
            Ernakulam <br />
            Kerala
          </p>
        </div>
        <div className="contactDetails">
          <h2 className="heading">Contact no</h2>
          <p className="para">
            <FaPhoneSquareAlt />
            +91-9745249762 <br />
          </p>
          {/* <p className="para">
            <FaPhoneSquareAlt />
            +1234567890
          </p> */}
        </div>
        <div className="contactDetails">
          <h2 className="heading">Email</h2>
          <p className="para">
            abcde@gmail.com <br />
            abcde@gmail.com
          </p>
        </div>
      </div>
      <div className="contact">
        <iframe
          title="map"
          className="map"
          src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d31086.233396003274!2d77.5734042!3d13.113171200000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1718780091297!5m2!1sen!2sin"
        ></iframe>
      </div>
    </div>
  );
};

export default Contactcard;
