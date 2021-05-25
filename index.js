const addMenuIconAnimation = () => {
	let menuIcon = document.querySelector(".hamburger-menu");
	menuIcon.addEventListener("click", () => {
		menuIcon.classList.toggle("open-menu");
	});
};

const addParallaxAnimation = () => {
	let backgroundImage = document.querySelector(".hero");
	let speed = 7;
	backgroundImage.addEventListener("mousemove", ({ pageX, pageY }) => {
		let x = (window.innerWidth - pageX * speed) / 100;
		let y = (window.innerWidth - pageY * speed) / 100;
		backgroundImage.style.transform = `translate(${x}px, ${y}px)`;
		console.log(backgroundImage.style);
	});
};

addMenuIconAnimation();
addParallaxAnimation();
