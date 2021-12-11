import "./Gallery.css";

function Gallery({ images }) {
  function handleClick({ currentTarget }) {
    loopCarousel(currentTarget);
  }

  function loopCarousel(currentTarget) {
    const imgDivs = document.querySelectorAll(".gallery__image");
    const currentImgId = Number(currentTarget.id);

    if (currentImgId === 1) {
      changeFocus(currentImgId, imgDivs);
      return setTimeout(
        () => changeFocus(imgDivs.length - 3, imgDivs, false),
        450
      );
    }
    if (currentImgId === imgDivs.length - 2) {
      changeFocus(currentImgId, imgDivs);
      return setTimeout(() => changeFocus(2, imgDivs, false), 500);
    }

    return changeFocus(currentImgId, imgDivs);
  }

  function changeFocus(divId, imgDivs, transition = true) {
    removeFocusFromImgs(imgDivs);
    focusImage(imgDivs[divId], transition);
  }

  function focusImage(currentTarget, transition) {
    const middleOfScreen = window.innerWidth / 2;
    const imgOffset =
      -(currentTarget.width * currentTarget.id) +
      middleOfScreen -
      currentTarget.width / 2;
    const transformArgs = `transform: translateX(${imgOffset}px); transition: ${
      transition ? `all 0.4s ease-in-out` : "none"
    }`;
    currentTarget.classList.add("focused");
    currentTarget.parentNode.style = transformArgs;
  }

  function removeFocusFromImgs(imgDivs) {
    imgDivs.forEach((img) => img.classList.remove("focused"));
  }

  return (
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
  );
}

export default Gallery;
