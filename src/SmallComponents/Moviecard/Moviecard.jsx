import React from "react";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { useNavigate } from "react-router-dom";

import Img from "../Lazyloading/Img";
import Genres from "../Genres/Genres";
import RatingCircle from "../Ratingcircle/Ratingcircle";
import PosterFallback from "../../ExtraBox/Images/no-poster.png";
import dayjs from "dayjs";
import './moviecard.scss'



const Moviecard = ({ data, Search ,  mediaType }) => {
  const { url } = useSelector((store) => store.homepage);
  const navigate = useNavigate();

  const Posterimg = data?.poster_path
    ? url.poster + data?.poster_path
    : PosterFallback;

  return (
    <div
      className="moviecard"
      onClick={() => navigate(`/${data.media_type || mediaType}/${data.id}`)}
    >
      <div className="movieposter">
        <Img src={Posterimg} alt="poster" />

        {!Search && (
          <React.Fragment>
            <RatingCircle rating={data.vote_average.toFixed(1)} />
            <Genres data={data.genre_ids.slice(0, 2)} />
          </React.Fragment>
        )}
      </div>

      <div className="details">
        <span className="title">{data.title || data.name}</span>
        <span className="date">
          {dayjs(data.release_date).format("MMM D, YYYY")}
        </span>
      </div>
    </div>
  );
};

export default Moviecard;
