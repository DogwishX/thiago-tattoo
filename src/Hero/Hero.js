import './Hero.css';
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
				<a className="learn-more">Learn More</a>

				<div class="scroll-arrow-wrap">
					<a href="#" class="scroll-arrow"></a>
				</div>
			</div>
		</>
	);
}

export default Hero;
