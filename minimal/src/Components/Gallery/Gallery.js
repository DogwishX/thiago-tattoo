import "./Gallery.css";

function Gallery({ images }) {
  let previousFocusedImgId;
  function focusImage({ currentTarget }) {
    currentTarget.parentNode.style = `transform: translateX(${
      -currentTarget.width * currentTarget.id + currentTarget.width / 2
    }px);`;
    currentTarget.classList.add("focused");
    removeFocusPreviousImage(currentTarget.id);
  }

  function removeFocusPreviousImage(currentFocusedImgId) {
    const imgDivs = document.querySelectorAll(".gallery__image");
    previousFocusedImgId &&
      imgDivs[previousFocusedImgId].classList.remove("focused");
    previousFocusedImgId = currentFocusedImgId;
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
          onClick={focusImage}
        />
      ))}
    </div>
  );
}

export default Gallery;
