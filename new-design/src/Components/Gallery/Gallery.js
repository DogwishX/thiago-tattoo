import React, { useEffect, useState } from "react";
import "./Gallery.css";

function Gallery({ images }) {
  const [isMouseDown, setIsMouseDown] = useState(false);
  const [prevClientX, setPrevClientX] = useState(0);
  const [focusedImg, setFocusedImg] = useState(0);
  const [hasImgChanged, setHasImgChanged] = useState(false);
  const [automaticScroll, setAutomaticScroll] = useState(true);
  let automaticScrollTimeout;

  useEffect(() => {
    if (automaticScroll) {
      automaticScrollTimeout = setTimeout(changeFocusedImg, 3000);
    }
    return function cleanup() {
      clearTimeout(automaticScrollTimeout);
    };
  }, [focusedImg]);

  function changeFocusedImg(addOrSubtract = 1) {
    if (focusedImg >= images.length) {
      setFocusedImg(0);
      displayFocusedImg();
      return;
    }
    if (focusedImg < 0) {
      setFocusedImg(images.length - 1);
      displayFocusedImg();
      return;
    }
    setFocusedImg(focusedImg + addOrSubtract);
    displayFocusedImg();
  }

  function displayFocusedImg() {
    const imageNodeList = document.querySelectorAll(".gallery__image");
    if (imageNodeList[focusedImg]) {
      imageNodeList.forEach((image) => image.classList.remove("focused"));
      imageNodeList[focusedImg].classList.add("focused");
    }
  }

  return (
    <div
      className="gallery"
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
    >
      <div className="gallery__viewport">
        {images.map((image, index) => (
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
    setPrevClientX(clientX);
    setAutomaticScroll(false);
  }
  function handleMouseMove({ clientX }) {
    if (isMouseDown && !hasImgChanged) {
      const distanceX = prevClientX - clientX;
      distanceX > 0 ? changeFocusedImg() : changeFocusedImg(-1);
      setHasImgChanged(true);
    }
  }
  function handleMouseUp() {
    setIsMouseDown(false);
    setHasImgChanged(false);
    setTimeout(() => {
      setAutomaticScroll(true);
      changeFocusedImg();
    }, 7000);
  }
}

export default Gallery;
