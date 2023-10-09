import React from "react";

import "./pagenotfound.scss";

import Mainbox from "../../SmallComponents/Mainbox/Mainbox";
const PageNotFound = () => {
    return (
        <div className="pageNotFound">
            <Mainbox>
                <span className="bigText">404</span>
                <span className="smallText">Page not found!</span>
            </Mainbox>
        </div>
    );
};

export default PageNotFound;