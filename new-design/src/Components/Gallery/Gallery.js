import React, { useEffect, useState } from "react";
import "./Gallery.css";

function Gallery({ images }) {
  const [isMouseDown, setIsMouseDown] = useState(false);
  const [prevClientX, setPrevClientX] = useState(0);
  const [focusedImg, setFocusedImg] = useState(0);
  const [hasImgChanged, setHasImgChanged] = useState(false);
  const [galleryOffsetLeft, setGalleryOffsetLeft] = useState(0);

  useEffect(() => {
    displayFocusedImg();
  }, [focusedImg]);

  function displayFocusedImg() {
    const galleryViewport = document.querySelector(".gallery__viewport");
    const imageNodeList = document.querySelectorAll(".gallery__image");
    if (imageNodeList[focusedImg]) {
      imageNodeList.forEach((image) => image.classList.remove("focused"));
      imageNodeList[focusedImg].classList.add("focused");
      galleryViewport.style = `transform: translateX(${galleryOffsetLeft}px)`;
    }
  }

  function handleMouseDown({ currentTarget, clientX }) {
    setIsMouseDown(true);
    setPrevClientX(clientX);
  }
  function handleMouseMove({ clientX }) {
    if (isMouseDown && !hasImgChanged) {
      const distanceX = clientX - prevClientX;

      if (distanceX > 0) {
        focusedImg - 1 <= -1
          ? applyOffset(images.length - 1, "left")
          : applyOffset(focusedImg - 1, "left");
      } else {
        focusedImg + 1 >= images.length
          ? applyOffset(0, "right")
          : applyOffset(focusedImg + 1, "right");
      }

      setHasImgChanged(true);
    }
  }

  function applyOffset(index, direction) {
    setFocusedImg(index);
    const imageNodeList = document.querySelectorAll(".gallery__image");
    const focusedImgWidth = imageNodeList[focusedImg].width;
    if (focusedImg === 0 && direction === "left") {
      const sumOfImagesWidth = [...imageNodeList].reduce(
        (sum, currentImage) => sum + currentImage.width,
        0
      );
      return setGalleryOffsetLeft(-sumOfImagesWidth);
    }
    if (focusedImg === images.length - 1 && direction === "right")
      return setGalleryOffsetLeft(0);

    direction === "left"
      ? setGalleryOffsetLeft(galleryOffsetLeft + focusedImgWidth)
      : setGalleryOffsetLeft(galleryOffsetLeft - focusedImgWidth);
  }

  function handleMouseUp() {
    setIsMouseDown(false);
    setHasImgChanged(false);
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
}

export default Gallery;
