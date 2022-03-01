import React, { useState } from "react";
import "./Gallery.css";

function Gallery({ imgs }) {
  const [isMouseDown, setIsMouseDown] = useState(false);
  const [positions, setPositions] = useState({ offset: 0, clientX: 0 });
  const [focusedImg, setFocusedImg] = useState(2);

  return (
    <div
      className="gallery"
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
    >
      <div className="gallery__viewport">
        {imgs.map((image, index) => (
          <img
            key={index}
            data-imgid={index}
            draggable="false"
            className="gallery__image"
            src={image}
          />
        ))}
      </div>
    </div>
  );

  function handleMouseDown({ currentTarget, clientX }) {
    setIsMouseDown(true);
    setPositions({ offsetLeft: currentTarget.offsetLeft, clientX });
  }

  function handleMouseMove({ target, currentTarget, clientX }) {
    const distanceX = clientX - positions.clientX;
    const offsetLeft =
      positions.offsetLeft + (distanceX > 0 ? -target.width : +target.width);

    if (isMouseDown) {
      currentTarget.style = `transform: translateX(${offsetLeft}px)`;
    }
  }

  function handleMouseUp() {
    setIsMouseDown(false);
  }
}

export default Gallery;
