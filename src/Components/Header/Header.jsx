import React, { useState, useEffect } from "react";
import { HiOutlineSearch } from "react-icons/hi";
import { SlMenu } from "react-icons/sl";
import { VscChromeClose } from "react-icons/vsc";
import { useNavigate, useLocation } from "react-router-dom";
import Logo from "../../assets/movix-logo.png";
import Mainbox from "../Mainbox/Mainbox";

import "./header.scss";

const Header = () => {
  const [menubtn, setmenubtn] = useState(false);
  const navigate = useNavigate();

  const showbtns = () => {
    setmenubtn(!menubtn);
  };

  const setNavigation = (x)=>{
    navigate(`/explore/${x}`)
    showbtns();
  }

  return (
    <div className="header">
      <Mainbox>
        <div className="logo" onClick={() => navigate("/")}>
          <img src={Logo} alt="" />
          <h1>Fimax</h1>
        </div>
        <ul className={`menu ${menubtn ? "menuactive" : ""}`}>
          <li className="menubars" onClick={()=>setNavigation("movies")}>movies</li>
          <li className="menubars" onClick={()=>setNavigation("tv")}>Tv show</li>
          <HiOutlineSearch style={{ fontSize: "20px" }} />
        </ul>

        <ul className="mobile-menu">
          <li className="menubars">
            <HiOutlineSearch />
          </li>
          <li className="menubars">
            <SlMenu onClick={showbtns} />
          </li>
        </ul>
      </Mainbox>
    </div>
  );
};

export default Header;
