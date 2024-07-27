import React from "react";
import Layout from "../Layout/Layout";
import PageTop from "../Layout/PageTop";
import AboutInfo from "../Layout/AboutInfo";
import Aboutmain from "../Layout/Aboutmain";
import AboutHeritage from "../Layout/AboutHeritage";
import AboutJoin from "../Layout/AboutJoin";
import Aboutmember from "../Layout/Aboutmember";

const About = () => {
  return (
    <Layout>
      <Aboutmain/>
      <AboutHeritage/>
      <Aboutmember/>
      <AboutJoin/>
    </Layout>
  );
};

export default About;
