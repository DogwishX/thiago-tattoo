import React from "react";
import "./ArrowDown.css";

function ArrowDown({ id }) {
  return (
    <div className="arrow-down" id={id}>
      <svg className="arrow-down__svg">
        <polygon
          className="arrow-down__polygon"
          points="37.6,64 0,36.1 5.1,32.8 37.6,56.8 70.4,32.8 75.5,36.1 "
        />
      </svg>
    </div>
  );
}

export default ArrowDown;
