function Gallery({ images }) {
  return (
    <div className="gallery">
      {images.map((src, index) => (
        <img
          key={index}
          className="gallery__image"
          data-testid="gallery__image"
          src={src}
          alt={`tattoo ${index}`}
        />
      ))}
    </div>
  );
}

export default Gallery;
