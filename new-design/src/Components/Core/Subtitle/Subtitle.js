import React from "react";
import "./Subtitle.css";

function Subtitle({ children, id }) {
  return (
    <h4 className="subtitle" id={id}>
      {children}
    </h4>
  );
}

export default Subtitle;
