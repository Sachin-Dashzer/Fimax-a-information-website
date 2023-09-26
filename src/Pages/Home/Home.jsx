import "./home.scss";
import React from "react";
import Herobanner from "./Herobanner/Herobanner";
import Trending from "./Trending-section/Trending";

const Home = () => {
  return (
    <>
      <Herobanner />
      <Trending />
    </>
  );
};

export default Home;
