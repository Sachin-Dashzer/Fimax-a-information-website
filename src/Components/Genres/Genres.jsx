import React from "react";
import { useSelector } from "react-redux";

import "./genres.scss";

const Genres = ({ data }) => {
  const { genre } = useSelector((state) => state.homepage);

  return (
    <div className="genres">
      {data?.map((g) => {

        if (!genre[g]) return;
        return (
          <div key={g} className="genre">
            {genre[g]}
          </div>
        );
      })}
    </div>
  );
};

export default Genres;
