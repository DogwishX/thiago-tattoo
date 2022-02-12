import React from "react";
import "./Logo.css";

function Logo({ id }) {
  return (
    <div className="logo" id={id}>
      <img src="logo-black.png" draggable="false" />
    </div>
  );
}

export default Logo;
