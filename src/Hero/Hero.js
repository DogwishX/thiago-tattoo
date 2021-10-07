import Nav from '../Nav/Nav';

function Hero() {
	return (
		<>
			<Nav />
			<div className="hero-wrapper">
				<div className="hero-background-wrapper">
					<div className="hero-background"></div>
				</div>
			</div>
			<div className="hero-content">
				<div className="call-to-action">
					<h4 className="welcome-text">
						Welcome to Pinku Tattoo
					</h4>
					<a className="learn-more">Learn More</a>
				</div>

				<div class="scroll-arrow-wrap">
					<a href="#" class="scroll-arrow"></a>
				</div>
			</div>
		</>
	);
}

export default Hero;
