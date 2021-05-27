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
	let smoothness = 10;
	backgroundImage.addEventListener("mousemove", ({ offsetY, offsetX }) => {
		backgroundImage.style.backgroundPositionX = -offsetX / smoothness + "px";
		backgroundImage.style.backgroundPositionY = -offsetY / smoothness + "px";
	});
};

handleMenuIcon();
parallaxAnimation();
