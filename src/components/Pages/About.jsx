import React from "react";
import Layout from "../Layout/Layout";
import PageTop from "../Layout/PageTop";
import { Link } from "react-router-dom";
import { FaAngleDoubleRight } from "react-icons/fa";

const About = () => {
  return (
    <Layout>
      <PageTop PageName="About Us" />
      <div>About</div>
    </Layout>
  );
};

export default About;
