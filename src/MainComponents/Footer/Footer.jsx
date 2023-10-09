import React from "react";
import Mainbox from "../../SmallComponents/Mainbox/Mainbox";

import "./footer.scss";

const Footer = () => {
  return (
    <footer className="footer">
      <Mainbox>
        <ul className="menuItems">
          <li className="menuItem">Terms Of Use</li>
          <li className="menuItem">Privacy-Policy</li>
          <li className="menuItem">About</li>
          <li className="menuItem">Blog</li>
          <li className="menuItem">FAQ</li>
        </ul>
        <div className="infoText">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur.
        </div>
        <div className="socialIcons">
          <span className="icon">
            <i className="fa-brands fa-facebook"></i>{" "}
          </span>
          <span className="icon">
            <i className="fa-brands fa-instagram"></i>{" "}
          </span>
          <span className="icon">
            <i className="fa-brands fa-x-twitter"></i>{" "}
          </span>
          <span className="icon">
            <i className="fa-brands fa-linkedin-in"></i>{" "}
          </span>
        </div>
      </Mainbox>
    </footer>
  );
};

export default Footer;
