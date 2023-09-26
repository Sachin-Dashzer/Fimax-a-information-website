import React, { useRef } from "react";
import {
  BsFillArrowLeftCircleFill,
  BsFillArrowRightCircleFill,
} from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import dayjs from "dayjs";

import Img from "../Lazyloading/Img";
import PosterFallback from "../../assets/no-poster.png";
import Ratingcircle from "../Ratingcircle/Ratingcircle";
import Mainbox from "../Mainbox/Mainbox";

import "./movietypeboxes.scss";

const Movietypeboxes = ({ data, loading }) => {
  const { url } = useSelector((state) => state.homepage);

  const skItem = () => {
    return (
      <div className="skeletonItem">
        <div className="posterBlock skeleton"></div>
        <div className="textBlock">
          <div className="title skeleton"></div>
          <div className="date skeleton"></div>
        </div>
      </div>
    );
  };

  return (
    <div className="movietypebox">
      <Mainbox>
        <BsFillArrowLeftCircleFill className="arrow arrow-left" />
        <BsFillArrowRightCircleFill className="arrow arrow-right" />

        {!loading ? (
          <div className="movie-section">
            {data?.map((item, index) => {
              const posterUrl = item.poster_path
                ? url.poster + item.poster_path
                : PosterFallback;

              return (
                <div className="movie-box" key={item.id}>
                  <div className="moviebox-img">
                    <Img
                      src={posterUrl}
                      alt={item.title || item.name}
                      width={10}
                      height={10}
                    />

                    <div className="rating">
                      <Ratingcircle rating={item.vote_average.toFixed(1)} />
                    </div>
                  </div>
                  <div className="moviebox-text">
                    <span className="title">{item.title || item.name}</span>
                    <span className="date">
                      {" "}
                      {dayjs(item.release_date || item.first_air_date).format(
                        "MMM D, YYYY"
                      )}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          <div className="skeleton">
            {skItem()}
            {skItem()}
            {skItem()}
            {skItem()}
            {skItem()}
          </div>
        )}
      </Mainbox>
    </div>
  );
};

export default Movietypeboxes;
