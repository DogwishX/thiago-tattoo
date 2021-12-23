import React from "react";
import "./Description.css";
function Description({ children, descriptionTitle, src, id }) {
  return (
    <div className="description" id={id}>
      <img
        className="description__image"
        src={src}
        alt="thiago barbosa"
      />
      <h4 className="description__name">{descriptionTitle}</h4>
      <p className="description__text">
        {children}
      </p>
    </div>
  );
}

export default Description;
