import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import usedFetch from "../../../hook/usedFetch";
import { useSelector } from "react-redux";
import Img from "../../../Components/Lazyloading/Img";
import Mainbox from "../../../Components/Mainbox/Mainbox";

const Herobanner = () => {
  const [background, setbackground] = useState(null);
  const [query, setquery] = useState("");
  const navigate = useNavigate();
  const { data, loading } = usedFetch("/movie/upcoming");
  const { url } = useSelector((state) => state.homepage);

  useEffect(() => {
    const bg =
      url.backdrop +
      data?.results?.[Math.floor(Math.random() * 20)]?.backdrop_path;
    setbackground(bg);
  }, [data]);

  function setqueryhandeler(event) {
    if (event.key === "Enter" && query.length > 0) {
      navigate(`/search/${query}`);
    }
  }

  return (
    <section id="herobanner">
      {!loading && (
        <div className="herobanner-img">
          <Img src={background} />
        </div>
      )}


      <div className="opacity-layer"></div>

      <Mainbox>
        <div className="heorbanner-content">
          <span className="title">Welcome.</span>
          <span className="subtitle">
            Millions of movies, TV shows and people to discover. Explore now.
          </span>

          <div className="searchbox">
            <input
              type="text"
              placeholder="Write your movie or TV show name here..."
              onChange={(e) => setquery(e.target.value)}
              onKeyUp={setqueryhandeler}
            />
            <button>Search</button>
          </div>
        </div>
      </Mainbox>
    </section>
  );
};

export default Herobanner;
