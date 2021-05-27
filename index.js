const handleMenuIcon = () => {
	const menuIcon = document.querySelector(".hamburger-menu");
	const menuItems = document.querySelector(".menu-items");
	let menuOpen = false;

	menuIcon.addEventListener("click", () => {
		menuIcon.classList.toggle("open-menu");
		console.log(menuItems.style.opacity);
		menuOpen = !menuOpen;
		menuOpen
			? ((menuItems.style.opacity = 0.95), (menuItems.style.zIndex = 1))
			: ((menuItems.style.opacity = 0), (menuItems.style.zIndex = -1));
	});
};

const parallaxAnimation = () => {
	let backgroundImage = document.querySelector(".hero");
	let speed = 10;
	backgroundImage.addEventListener("mousemove", ({ pageX, pageY }) => {
		let x = (window.innerWidth - pageX * speed) / 100;
		let y = (window.innerWidth - pageY * speed) / 100;
		backgroundImage.style.transform = `translate(${x}px, ${y}px)`;
	});
};

handleMenuIcon();
parallaxAnimation();
