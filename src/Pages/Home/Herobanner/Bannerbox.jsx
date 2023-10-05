import React, { useEffect, useState } from "react";
import Mainbox from "../../../Components/Mainbox/Mainbox";
import "./herobanner.scss";
import dayjs from "dayjs";
import { useNavigate } from "react-router-dom";
import Genres from "../../../Components/Genres/Genres";
import RatingCircle from "../../../Components/RatingCircle/RatingCircle";
import { gsap } from "gsap";


const Bannerbox = ({ Imgbox, loading, data }) => {
  const [show, setshow] = useState(0);
  const navigate = useNavigate();

  const prevdev = () => {
    setshow((prevIndex) =>
      prevIndex === 0 ? Imgbox.length - 1 : prevIndex - 1
    );
  };

  useEffect(() => {

    let slides = document.querySelector(".herobanner-content");
    
    const interval = setInterval(() => {
      
      setshow((prevIndex) => (prevIndex + 1) % Imgbox.length);
      
      gsap.fromTo(slides, {css : {opacity : 0 , transform : 'translateX(-10%)'}} , {css : {opacity : 0.7 , transform : "translateX(0em)" } ,duration : 1})

    }, 6000);
    
    return () => clearInterval(interval);
  }, [setshow]);

  return (
    <>
      {!loading && <div>{Imgbox[show]}</div>}

      <Mainbox>
        <div className="herobanner-content">
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
