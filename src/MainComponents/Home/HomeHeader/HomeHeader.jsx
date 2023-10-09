import React from "react";
import { useSelector } from "react-redux";

import "./homeheader.scss";


import UsedFetch from "../../../ExtraBox/ApiCall/UsedFetch";
import Img from "../../../SmallComponents/Lazyloading/Img";
import Bannerbox from "./Bannerbox";

const HomeHeader = () => {
  
  const { data, loading } = UsedFetch("/movie/upcoming");
  const { url } = useSelector((state) => state.homepage);

  // console.log(data);
  

  const Imgbox = [
    <div className="home-header-img">
      <Img src={url.backdrop + data?.results?.[0].backdrop_path} />
    </div>,

    <div className="home-header-img">
      <Img src={url.backdrop + data?.results?.[1].backdrop_path} />
    </div>,

    <div className="home-header-img">
      <Img src={url.backdrop + data?.results?.[2].backdrop_path} />
    </div>,

    <div className="home-header-img">
      <Img src={url.backdrop + data?.results?.[3].backdrop_path} />
    </div>,

    <div className="home-header-img">
      <Img src={url.backdrop + data?.results?.[4].backdrop_path} />
    </div>,
  ];


  return (
    <div className="home-header">
     
          <Bannerbox
          Imgbox={Imgbox}
          loading={loading}
          data={data?.results}
        />

      <div className="opacity-layer"></div>
      <div className="opacity-layer-left"></div>
    </div>
  );
};

export default HomeHeader;
