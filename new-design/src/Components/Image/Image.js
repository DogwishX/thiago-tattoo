import React from "react";
import "./Image.css";

function Image({ src, id, alt }) {
  return (
    <div className="image" id={id}>
      <img className="image__img" src={src} alt={alt || ""} />
    </div>
  );
}

export default Image;
