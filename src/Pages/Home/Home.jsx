import "./home.scss";
import React from "react";
import Herobanner from "./Herobanner/Herobanner";
import Trending from "./Trending-section/Trending";
import Popular from "./Popular/Popular";
import Toprated from "./Toprated/Top-rated";

const Home = () => {
  return (
    <>
      <Herobanner />
      <Trending />
      <Popular />
      <Toprated />
    </>
  );
};

export default Home;
