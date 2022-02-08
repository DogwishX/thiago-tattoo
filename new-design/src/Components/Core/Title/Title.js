import React from "react";
import "./Title.css";

function Title({ children, id }) {
  return (
    <h1 className="title" id={id}>
      {children}
    </h1>
  );
}

export default Title;
