import React from "react";
import { useSelector } from "react-redux";

import "./homebanner.scss";


import usedFetch from "../../../hook/usedFetch";
import Img from "../../../Components/Lazyloading/Img";
import Bannerbox from "./Bannerbox";

const Homebanner = () => {
  
  const { data, loading } = usedFetch("/movie/upcoming");
  const { url } = useSelector((state) => state.homepage);
  

  const Imgbox = [
    <div className="homebanner-img">
      <Img src={url.backdrop + data?.results?.[0].backdrop_path} />
    </div>,

    <div className="homebanner-img">
      <Img src={url.backdrop + data?.results?.[1].backdrop_path} />
    </div>,

    <div className="homebanner-img">
      <Img src={url.backdrop + data?.results?.[2].backdrop_path} />
    </div>,

    <div className="homebanner-img">
      <Img src={url.backdrop + data?.results?.[3].backdrop_path} />
    </div>,

    <div className="homebanner-img">
      <Img src={url.backdrop + data?.results?.[4].backdrop_path} />
    </div>,
  ];


  return (
    <div className="homebanner">
     
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

export default Homebanner;
