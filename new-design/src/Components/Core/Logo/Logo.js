import React from "react";
import "./Logo.css";

function Logo({ id }) {
  return (
    <div className="logo">
      <img src="logo-black.png" id={id} draggable="false" />
    </div>
  );
}

export default Logo;
