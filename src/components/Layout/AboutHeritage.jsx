import React from "react";
import "./AboutHeritage.css";
import LegacyCard from "./LegacyCard";
import img1 from "../../Assets/Images/legacy/1.png";
import img2 from "../../Assets/Images/legacy/2.png";
import img3 from "../../Assets/Images/legacy/3.png";

function AboutHeritage() {
  const legecyinfo = [
    {
      name: "Velayudha vaidhyar",
      image: img2,
      period: "1948-1988",
      details:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit."
    },
    {
      name: "Velayudha vaidhyar",
      image: img1,
      period: "1948-1988",
      details:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit."
    },

    {
      name: "Velayudha vaidhyar",
      image: img3,
      period: "1948-1988",
      details:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit."
    }
  ];
  return (
    <div>
      <div className="AboutHeritagetop">
        <span className="heritage"> Our Heritage</span>
        <p className="AboutHeritagepara">
          Founded by the visionary Velayudha Vaidhyar, our clinic has a
          long-standing history of providing authentic Ayurvedic treatments.
          From a modest beginning, we have grown into a trusted name in
          Ayurveda, committed to the principles of natural healing and overall
          well-being.
        </p>
        <div className="cardsLegacyheritage">
          {legecyinfo.map((list) => (
            <LegacyCard
              name={list.name}
              details={list.details}
              image={list.image}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default AboutHeritage;
