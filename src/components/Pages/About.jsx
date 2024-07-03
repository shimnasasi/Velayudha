import React from "react";
import Layout from "../Layout/Layout";
import PageTop from "../Layout/PageTop";
import AboutInfo from "../Layout/AboutInfo";
import AboutTeam from "../Layout/AboutTeam";
import Aboutmain from "../Layout/Aboutmain";
import AboutHeritage from "../Layout/AboutHeritage";
import AboutJoin from "../Layout/AboutJoin";

const About = () => {
  return (
    <Layout>
      {/* <AboutTeam /> */}
      <Aboutmain/>
      <AboutHeritage/>
      <AboutJoin/>
    </Layout>
  );
};

export default About;
