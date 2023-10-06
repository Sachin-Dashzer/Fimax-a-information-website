import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { gsap } from "gsap";

import dayjs from "dayjs";

import Mainbox from "../../../Components/Mainbox/Mainbox";
import Genres from "../../../Components/Genres/Genres";
import RatingCircle from "../../../Components/Ratingcircle/Ratingcircle";

const Bannerbox = ({ Imgbox, loading, data }) => {
  const [show, setshow] = useState(0);
  const navigate = useNavigate();

  const prevdev = () => {
    setshow((prevIndex) =>
      prevIndex === 0 ? Imgbox.length - 1 : prevIndex - 1
    );
  };

  useEffect(() => {
    let slides = document.querySelector(".homebanner-content");
    let container = document.querySelector(".homebanner");

    gsap.fromTo(
      container,
      { css: { opacity: 0 } },
      { css: { opacity: 1 }, duration: 1, delay: 1 }
    );

    const interval = setInterval(() => {
      setshow((prevIndex) => (prevIndex + 1) % Imgbox.length);

      gsap.fromTo(
        slides,
        { css: { opacity: 0, transform: "translateX(-10%)" } },
        { css: { opacity: 1, transform: "translateX(0em)" }, duration: 1 }
      );
    }, 6000);

    return () => clearInterval(interval);
  }, [setshow]);

  return (
    <>
      {!loading && <div>{Imgbox[show]}</div>}

      <Mainbox>
        <div className="homebanner-content">

          <span className="heading"> # {show + 1} Spotlight </span>

          <span className="title">
            {data?.[show].title || data?.[show].name}
          </span>

          <Genres data={data?.[show].genre_ids.slice(0, 2)} />

          <div className="basics">
            <span>
              <i className="fa-regular fa-calendar"></i>{" "}
              {dayjs(data?.[show].release_date).format("DD-MM-YYYY")}
            </span>
            <span>
              <i className="fa-solid fa-globe"></i>{" "}
              {data?.[show].original_language === "en"
                ? "English"
                : data?.[show].original_language}
            </span>
          </div>

          <span className="discription">{data?.[show].overview}</span>

          <div className="button-box">
            <RatingCircle rating={data?.[show].vote_average.toFixed(1)} />
            <button onClick={() => navigate(`/movie/${data?.[show].id}`)}>
              More Details
            </button>
          </div>
          
        </div>
      </Mainbox>
    </>
  );
};

export default Bannerbox;
