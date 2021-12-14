import "./Hero.css";

function Hero() {
  return (
    <div className="hero">
      <h1 className="hero__title">Thiago Tattoo Studio</h1>
      <h4 className="hero__subtitle">The home of Thiago Barbosa</h4>
      <img
        className="hero__image"
        src="https://cutewallpaper.org/21/black-and-white-anime/anime-girl,-black-and-white-anime,-kawaii,-manga,-otaku-.jpg"
        alt="man full of tattoos"
      />
      <button className="hero__button">ask any question</button>
    </div>
  );
}

export default Hero;
