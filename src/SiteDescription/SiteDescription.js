import logo from '../shared/white-logo.png';

function SiteDescription(props) {
	return (
		<>
			<article className="site-description__wrapper">
				<h1 className="site-description__title">
					Tattoo Shop in Ariquemes, RO
				</h1>
				<p className="site-description__text">
					Lorem ipsum dolor sit amet consectetur,
					adipisicing elit. Unde ipsa odio esse
					corrupti, debitis laborum sit repellendus
					repudiandae! Similique velit debitis earum vel
					voluptatibus! Lorem ipsum dolor sit amet
					consectetur adipisicing elit. Modi nesciunt
					nulla minima officia deserunt maxime
					repellendus. Magnam ducimus repellendus error
					consequuntur illo ab nulla?
				</p>
				<img
					className="site-description__logo"
					src={logo}
					alt="logo"
				/>
			</article>
		</>
	);
}

export default SiteDescription;
