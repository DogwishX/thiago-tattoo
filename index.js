// // 											Variables 											//
// // Menu Icon //
const menuIcon = document.querySelector(".hamburger-menu");
const menuItems = document.querySelector(".menu-items");
let isMenuOpen = false;

// // Functions
const openMenu = () => {
	menuIcon.classList.toggle("open-menu");
	isMenuOpen = !isMenuOpen;
	isMenuOpen
		? ((menuItems.style.opacity = 0.95), (menuItems.style.zIndex = 1))
		: ((menuItems.style.opacity = 0), (menuItems.style.zIndex = -1));
};

// const backgroundParallax = () => {
// 	let backgroundImage = document.querySelector(".hero-background");
// 	let speed = 3;
// 	window.addEventListener("mousemove", ({ pageX, pageY }) => {
// 		let x = (window.innerWidth - pageX * speed) / 100;
// 		let y = (window.innerWidth - pageY * speed) / 100;
// 		backgroundImage.style.transform = `translate(${x}px, ${y}px)`;
// 	});
// };

// // Execute functions
// backgroundParallax();
menuIcon.addEventListener("click", openMenu);
