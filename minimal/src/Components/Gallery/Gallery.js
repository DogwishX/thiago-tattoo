import "./Gallery.css";

function Gallery({ images }) {
  function focusImage({ currentTarget }) {
    const middleOfScreen = window.innerWidth / 2;
    const imgOffset =
      -(currentTarget.width * currentTarget.id) +
      middleOfScreen -
      currentTarget.width / 2;
      
    const transformArgs = `transform: translateX(${imgOffset}px);`;

    removeFocusFromImgs();
    currentTarget.classList.add("focused");
    currentTarget.parentNode.style = transformArgs;
  }

  function removeFocusFromImgs() {
    const imgDivs = document.querySelectorAll(".gallery__image");
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
          onClick={focusImage}
        />
      ))}
    </div>
  );
}

export default Gallery;
