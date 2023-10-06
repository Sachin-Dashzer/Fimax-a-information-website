import "./home.scss";
import React from "react";
import Homebanner from "./Homebanner/Homebanner";
import Trending from "./Trending-section/Trending";
import Popular from "./Popular/Popular";
import Toprated from "./Toprated/Top-rated";

const Home = () => {
  return (
    <>
      <Homebanner />
      <Trending />
      <Popular />
      <Toprated />
    </>
  );
};

export default Home;
