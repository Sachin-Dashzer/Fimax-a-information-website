import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import dayjs from "dayjs";

import Img from "../Lazyloading/Img";
import PosterFallback from "../../assets/no-poster.png";
import Ratingcircle from "../Ratingcircle/Ratingcircle";
import Genras from "../Genres/Genres";
import Mainbox from "../Mainbox/Mainbox";

import "./homemoviecard.scss";

const Movietypeboxes = ({ data, loading, pagetype, title }) => {
  
  const navigate = useNavigate();
  const movingcontainer = useRef(null);
  const { url } = useSelector((state) => state.homepage);

  const navigation = (dir) => {
    const container = movingcontainer.current;

    const scrollAmount =
      dir === "left"
        ? container.scrollLeft - (container.offsetWidth + 20)
        : container.scrollLeft + (container.offsetWidth + 20);

    container.scrollTo({
      left: scrollAmount,
      behavior: "smooth",
    });
  };

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
    <div className="home-movie-card">
      <Mainbox>
        {title && <div className="carouselTitle">{title}</div>}
        <i
          className="fa-solid fa-arrow-left arrow arrow-left"
          onClick={() => navigation("left")}
        ></i>

        <i
          className="fa-solid fa-arrow-right arrow arrow-right"
          onClick={() => navigation("right")}
        ></i>

        {!loading ? (
          <div className="movie-section" ref={movingcontainer}>
            {data?.map((item, index) => {
              const posterUrl = item.poster_path
                ? url.poster + item.poster_path
                : PosterFallback;

              return (
                <div
                  className="movie-box"
                  key={item.id}
                  onClick={() =>
                    navigate(`/${item.media_type || pagetype}/${item.id}`)
                  }
                >
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
                    <div className="genres">
                      <Genras data={item.genre_ids.slice(0, 2)} />
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
