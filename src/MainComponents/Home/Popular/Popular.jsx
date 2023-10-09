import React, { useState } from "react";

import Mainbox from "../../../SmallComponents/Mainbox/Mainbox";
import Changebtn from "../../../SmallComponents/Changebtn/Changebtn";
import HomeMoviecard from "../../../SmallComponents/HomeMoviecard/HomeMoviecard";
import UsedFetch from "../../../ExtraBox/ApiCall/UsedFetch";

const Popular = () => {
  const [pagetype, setpagetype] = useState("movie");
  const { data, loading } = UsedFetch(`/${pagetype}/popular`);

  const onbtnchange = (item) => {
    setpagetype(item === "Movie" ? "movie" : "tv");
  };

  return (
    <section id="movies-selection-box">
      <Mainbox>
        <h1>Popular Movies/TV Series</h1>
        <Changebtn data={["Movie", "Tv"]} onbtnchange={onbtnchange} />
      </Mainbox>
      <HomeMoviecard
        data={data?.results}
        loading={loading}
        pagetype={pagetype}
      />
    </section>
  );
};

export default Popular;
