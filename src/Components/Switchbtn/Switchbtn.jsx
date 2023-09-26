import React, { useState } from "react";
import "./switchbtn.scss";

const Switchbtn = ({ data  , onbtnchange }) => {
  const [clicked, setclicked] = useState(0);
  const [left , setleft] = useState(0) ;

  const changebtns = (item , index) => {

    setleft(index * 80);

    setTimeout(() => {
        setclicked(index);
    }, 300);

    onbtnchange(item , index);
  };

  return (
    <div className="switchbtn">
      <div className="btnitems">
        {data.map((item, index) => {
          return (
            <span
              key={index}
              className={`btns ${(clicked === index ? "active" : "")}`}
              onClick={()=> changebtns(item, index)}
            >
              {item}
            </span>
          );
        })}
        <span className="selected" style={{left}}></span>
      </div>
    </div>
  );
};

export default Switchbtn;
