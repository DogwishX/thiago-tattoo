import React, { useEffect, useState } from "react";
import "./Gallery.css";

function Gallery({ imgs }) {
  const [isMouseDown, setIsMouseDown] = useState(false);
  const [positions, setPositions] = useState({ offsetLeft: 0, clientX: 0 });
  const [focusedImg, setFocusedImg] = useState(3);
  const [hasImgChanged, setHasImageChanged] = useState(false);

  useEffect(() => {
    const galleryViewportDiv = document.querySelector(".gallery__viewport");

    galleryViewportDiv.style = `transform: translateX(-${positions.offsetLeft}px)`;
  });

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
    setPositions({ ...positions, clientX });
  }

  function handleMouseMove({ target, currentTarget, clientX }) {
    const distanceX = clientX - positions.clientX;
    if (isMouseDown && !hasImgChanged) {
      distanceX > 0 ? changeFocusedImg(+1) : changeFocusedImg(-1);
    }
  }

  function handleMouseUp() {
    setIsMouseDown(false);
    setHasImageChanged(false);
  }

  function changeFocusedImg(addOrSubtract) {
    // Validation of focusedImg values
    if (
      focusedImg - addOrSubtract < 0 ||
      focusedImg + addOrSubtract >= imgs.length
    ) {
      return;
    }

    setFocusedImg(focusedImg + addOrSubtract);

    // Handle gallery__viewport offset
    const positionsClone = { ...positions };
    const imagesNodeList = document.querySelectorAll(".gallery__image");
    const focusedImgWidth = imagesNodeList[focusedImg].width;
    positionsClone.offsetLeft =
      addOrSubtract * focusedImgWidth + positions.offsetLeft;
    setPositions(positionsClone);

    // // Exit function
    setHasImageChanged(true);
  }
}

export default Gallery;
