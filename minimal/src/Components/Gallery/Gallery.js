import { useState, useEffect } from "react";
import "./Gallery.css";

function Gallery({ images }) {
  const [focusedImg, setFocusedImg] = useState(3);
  const [automaticScroll, setAutomaticScroll] = useState(true);
  const transitionSpeed = 700
  let automaticScrollTimeout;
  useEffect(() => {
    if (automaticScroll) {
      automaticScrollTimeout = setTimeout(() => {
        const imgDivs = document.querySelectorAll(".gallery__image");
        if (focusedImg === imgDivs.length - 2) setFocusedImg(3);
        else if (focusedImg === 1) setFocusedImg(imgDivs.length - 2);
        else setFocusedImg(focusedImg + 1);
        loopCarousel(imgDivs[focusedImg]);
      }, 3000);
      return function cleanup() {
        clearTimeout(automaticScrollTimeout);
      };
    }
  }, [focusedImg]);

  function handleClick({ currentTarget }) {
    setFocusedImg(currentTarget.id);
    setAutomaticScroll(false);
    loopCarousel(currentTarget);
  }

  function loopCarousel(currentTarget) {
    const imgDivs = document.querySelectorAll(".gallery__image");
    const currentImgId = Number(currentTarget.id);
    const loopImgOffset = 60;

    if (currentImgId === 1) {
      changeFocus(currentImgId, imgDivs);
      return setTimeout(
        () => changeFocus(imgDivs.length - 3, imgDivs, false, -loopImgOffset),
        transitionSpeed
      );
    }
    if (currentImgId === imgDivs.length - 2) {
      changeFocus(currentImgId, imgDivs);
      return setTimeout(
        () => changeFocus(2, imgDivs, false, loopImgOffset),
        transitionSpeed
      );
    }

    return changeFocus(currentImgId, imgDivs);
  }

  function changeFocus(divId, imgDivs, transition = true, additionalOffset) {
    removeFocusFromImgs(imgDivs);
    focusImage(imgDivs[divId], transition, additionalOffset);
  }

  function focusImage(currentTarget, transition, additionalOffset) {
    const middleOfParentElement = currentTarget.parentNode.clientWidth / 2;
    const imgOffset =
      -(currentTarget.width * currentTarget.id) +
      middleOfParentElement -
      currentTarget.width / 2;
    const transformArgs = `transform: translateX(${
      transition ? imgOffset : 
      imgOffset + additionalOffset
    }px); transition: ${transition ? `all ${transitionSpeed/1000}s ease-in-out` : "none"}`;
    currentTarget.classList.add("focused");
    currentTarget.parentNode.style = transformArgs;
  }

  function removeFocusFromImgs(imgDivs) {
    imgDivs.forEach((img) => img.classList.remove("focused"));
  }

  return (
    <div className="gallery__viewport">
      <div className="gallery">
        {images.map((src, index) => (
          <img
            id={index}
            key={index}
            className="gallery__image"
            data-testid="gallery__image"
            src={src}
            alt={`tattoo ${index + 1}`}
            onClick={handleClick}
          />
        ))}
      </div>
    </div>
  );
}

export default Gallery;
