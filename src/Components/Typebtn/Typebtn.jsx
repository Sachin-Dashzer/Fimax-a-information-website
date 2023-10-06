import React, { useState } from "react";
import "./typebtn.scss";

const Typebtn = ({ data  , onbtnchange }) => {
  const [clicked, setclicked] = useState(0);
  const [name, setname] = useState('')


  const changebtns = (item , index) => {

    setname('active');

    setTimeout(() => {
        setclicked(index);
    }, 300);

    onbtnchange(item , index);
  };

  return (
    <div className="typebtn">
      <div className="typebtn-items">
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
        <span className=" selected {name}" ></span>
      </div>
    </div>
  );
};

export default Typebtn;
