import React from "react";
import { useSelector } from "react-redux";
import Mainbox from "../../../SmallComponents/Mainbox/Mainbox";
import Img from "../../../SmallComponents/Lazyloading/Img";
import Avatar from "../../../ExtraBox/Images/avatar.png";

import "./stars.scss";

const Stars = ({ casts, castloading }) => {
  const { url } = useSelector((store) => store.homepage);

  const skeleton = () => {
    return (
        <div className="skItem">
            <div className="circle skeleton"></div>
            <div className="row skeleton"></div>
            <div className="row2 skeleton"></div>
        </div>
    );
};


  return (
    <div className="Stars">
      <Mainbox>
        <div className="title">Movie cast details</div>

        {!castloading ? (
          <div className="castdata">
            {casts?.map((item) => {
              const Profilepic = item?.profile_path
                ? url.profile + item.profile_path
                : Avatar;

              return (
                <div key={item.id} className="castdetails">
                  <div className="image">
                    <Img src={Profilepic} alt="" />
                  </div>
                  <div className="actorname">{item?.name}</div>
                  <div className="charactername">{item?.character}</div>
                </div>
              );
            })}
          </div>
        ) : (
          <div className="castSkeleton">
            {skeleton()}
            {skeleton()}
            {skeleton()}
            {skeleton()}
            {skeleton()}
            {skeleton()}
          </div>
        )}
      </Mainbox>
    </div>
  );
};

export default Stars;
