import React, { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";
import usedFetch from "../../../hook/usedFetch";
import { useSelector } from "react-redux";
import Img from "../../../Components/Lazyloading/Img";
import Bannerbox from "./Bannerbox";

const Herobanner = () => {
  const { data, loading } = usedFetch("/movie/upcoming");
  const { url } = useSelector((state) => state.homepage);
  

  const Imgbox = [
    <div className="herobanner-img">
      <Img src={url.backdrop + data?.results?.[0].backdrop_path} />
    </div>,

    <div className="herobanner-img">
      <Img src={url.backdrop + data?.results?.[1].backdrop_path} />
    </div>,

    <div className="herobanner-img">
      <Img src={url.backdrop + data?.results?.[2].backdrop_path} />
    </div>,

    <div className="herobanner-img">
      <Img src={url.backdrop + data?.results?.[3].backdrop_path} />
    </div>,

    <div className="herobanner-img">
      <Img src={url.backdrop + data?.results?.[4].backdrop_path} />
    </div>,
  ];


  return (
    <div className="herobanner">
     
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

export default Herobanner;
