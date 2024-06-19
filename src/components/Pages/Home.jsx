import React from "react";
import Layout from "../Layout/Layout";
import HomeBanner from "../Layout/HomeBanner";
import HomeService from "../Layout/HomeService";

const Home = () => {
  return (
    <Layout>
      <div>
        <HomeBanner />
        <HomeService/>
      </div>
    </Layout>
  );
};

export default Home;
