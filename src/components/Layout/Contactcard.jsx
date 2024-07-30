import React from "react";
import "./Contactcard.css";
import { FaPhoneSquareAlt } from "react-icons/fa";

const Contactcard = () => {
  return (
    <div className="contactMain">
      <div className="cardWrapper">
        <div>
          <h1 className="contactHead">
            Our Contact <br className="headbreak" /> Information
          </h1>
          <p className="paraEnq">
            Have a Enquiry or some feedback for us?
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
          src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3929.3234843400674!2d76.28818897503099!3d9.99011519011477!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zOcKwNTknMjQuNCJOIDc2wrAxNycyNi44IkU!5e0!3m2!1sen!2sin!4v1722317199126!5m2!1sen!2sin"
        ></iframe>
        {/* <iframe
          src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3929.3234843400674!2d76.28818897503099!3d9.99011519011477!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zOcKwNTknMjQuNCJOIDc2wrAxNycyNi44IkU!5e0!3m2!1sen!2sin!4v1722317199126!5m2!1sen!2sin"
          width="600"
          height="450"
          style="border:0;"
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe> */}
      </div>
    </div>
  );
};

export default Contactcard;
