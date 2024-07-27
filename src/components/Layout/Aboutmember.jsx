import React from "react";
import "./Aboutmember.css";

const Aboutmember = () => {
  return (
    <div className="aboutmember">
      <span className="heritage"> Our Legacy Lives On..</span>
      <div className="member">
      <div className="membershadow"/>
        <img
          className="img"
          src="https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
          alt=""
        />
        <div>
          {/* <h5 className="h55">Velayudha pharmacy and Clinic</h5> */}
          <h1 className="h11">Dr.Abhilash CP</h1>

          <p className="paragraph">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.Lorem Ipsum has been the industry's standard dummy text
            ever sincethe 1500s,when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.It has survived not
            only five centuries, but also the leap into electronic type
            setting,remaining essentially unchanged. a galley of type and
            scrambled it to make a type specimen book.It has survived not only
            five
          </p>
        </div>
      </div>
    </div>
  );
};

export default Aboutmember;
