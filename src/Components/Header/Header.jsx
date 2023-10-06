import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import Logo from "../../assets/movix-logo.png";
import Mainbox from "../Mainbox/Mainbox";

import "./header.scss";

const Header = () => {
  const [showNavbar, setShowNavbar] = useState("top");
  const [lastscrollY, setlastscrollY] = useState(0);

  const [menubtn, setmenubtn] = useState(false);
  const [searchbtn, setsearchbtn] = useState(false);
  const [query, setquery] = useState("");
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  const setNavbar = () => {
    if (window.scrollY > 200) {
      if (window.scrollY > lastscrollY && !menubtn) {
        setShowNavbar("hide");
      } else {
        setShowNavbar("show");
      }
    } else {
      setShowNavbar("top");
    }

    setlastscrollY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", setNavbar);

    return () => {
      window.removeEventListener("scroll", setNavbar);
    };
  }, [lastscrollY]);

  function setqueryhandeler(event) {
    if (event.key === "Enter" && query.length > 0) {
      navigate(`/search/${query}`);

      setTimeout(() => {
        setsearchbtn(false);
      }, 1000);
    }
  }

  const showbtns = () => {
    setmenubtn(true);
    setsearchbtn(false);
  };

  const showsearchbtns = () => {
    setmenubtn(false);
    setsearchbtn(true);
  };

  const setNavigation = (x) => {
    navigate(`/explore/${x}`);
    showbtns();
  };

  return (
    <div className={`header ${showNavbar}`}>
      <Mainbox>
        <div className="logo" onClick={() => navigate("/")}>
          <img src={Logo} alt="" />
          <h1>Fimax</h1>
        </div>
        <ul className={`menu ${menubtn ? "menuactive" : ""}`}>
          <li className="menubars" onClick={() => setNavigation("movies")}>
            movies
          </li>
          <li className="menubars" onClick={() => setNavigation("tv")}>
            Tv show
          </li>
          <i
            className="fa-solid fa-magnifying-glass"
            onClick={showsearchbtns}
            style={{ fontSize: "20px" }}
          ></i>
        </ul>

        <ul className="mobile-menu">
          <li className="menubars">
            <i
              className="fa-solid fa-magnifying-glass"
              onClick={showsearchbtns}
            ></i>
          </li>
          <li className="menubars">
            {menubtn ? (
              <i className="fa-solid fa-xmark" onClick={() => setmenubtn(false)}></i>
            ) : (
              <i className="fa-solid fa-bars" onClick={showbtns}></i>
            )}
          </li>
        </ul>
      </Mainbox>

      {searchbtn && (
        <div className="searchbar">
          <Mainbox>
            <div className="searchbox">
              <input
                type="text"
                placeholder="Search a Movie or Tv show"
                onChange={(e) => setquery(e.target.value)}
                onKeyUp={setqueryhandeler}
                autoFocus
              />
              <i className="fa-solid fa-xmark" onClick={() => setsearchbtn(false)} style={{color : "black" , fontSize : "3em" , marginRight : "0%"}}></i>

            </div>
          </Mainbox>
        </div>
      )}
    </div>
  );
};

export default Header;
