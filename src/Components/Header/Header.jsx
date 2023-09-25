import React, { useState, useEffect } from "react";
import { HiOutlineSearch } from "react-icons/hi";
import { SlMenu } from "react-icons/sl";
import { VscChromeClose } from "react-icons/vsc";
import { useNavigate, useLocation } from "react-router-dom";
import Logo from "../../assets/movix-logo.png";
import Mainbox from "../Mainbox/Mainbox";

import "./header.scss";

const Header = () => {

  const [showNavbar, setShowNavbar] = useState("top")
  const [lastscrollY , setlastscrollY] = useState(0)

  const [menubtn, setmenubtn] = useState(false);
  const [searchbtn, setsearchbtn] = useState(false);
  const [query, setquery] = useState("");
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);


  const setNavbar = ()=>{

    if(window.scrollY > 200){

      if(window.scrollY > lastscrollY && !menubtn){
        setShowNavbar("hide");
      }
      else{
        setShowNavbar("show");
      }

    }
    else{
      setShowNavbar("top");
    }

    setlastscrollY(window.scrollY);
  }


  useEffect(()=>{

    window.addEventListener("scroll" , setNavbar);

    return() =>{
      window.removeEventListener("scroll" , setNavbar)
    }

  }, [lastscrollY])


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
          <HiOutlineSearch
            onClick={showsearchbtns}
            style={{ fontSize: "20px" }}
          />
        </ul>

        <ul className="mobile-menu">
          <li className="menubars">
            <HiOutlineSearch onClick={showsearchbtns} />
          </li>
          <li className="menubars">
            {menubtn ? (
              <VscChromeClose onClick={() => setmenubtn(false)} />
            ) : (
              <SlMenu onClick={showbtns} />
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
              />

              <VscChromeClose onClick={() => setsearchbtn(false)} />
            </div>
          </Mainbox>
        </div>
      )}
    </div>
  );
};

export default Header;
