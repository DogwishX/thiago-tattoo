const media = [
	'2.jpg',
	'3.jpg',
	'4.jpg',
	'5.jpg',
	'6.jpg',
	'7.jpg',
	'8.jpg',
	'9.jpg',
	'10.jpg',
	'11.jpg',
];

function Gallery() {
	return (
		<>
			<section className="gallery__wrapper">
        <DisplayImages />
      </section>
		</>
	);
}

function DisplayImages() {
	return media.map((img) => (
		<img
			className="gallery__img"
			src={process.env.PUBLIC_URL + '/media/' + img}
			alt="Tattoo"
		/>
	));
}

export default Gallery;
