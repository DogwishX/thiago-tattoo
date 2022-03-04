import ImageGallery from "react-image-gallery";
import Title from "../Core/Title";
import "./Gallery.css";

function Gallery({ images }) {
  return (
    <div className="gallery">
      <Title id="gallery__title">My Work</Title>
      <ImageGallery
        items={images}
        showThumbnails={false}
        showBullets={true}
        autoPlay={true}
      />
    </div>
  );
}

export default Gallery;
