import logo from '../shared/white-logo.png';

function Nav() {
	return (
		<>
			{/* Mobile View */}
			<ul className="nav">
				<Logo />
				<CompanyName />
				<MenuIcon />
			</ul>
			<section>
				<ul className="menu-items">
          <li>Tattoo Shop</li>
          <li>About Us</li>
          <li>Store</li>
          <li>FAQ</li>
          <li>Contact Us</li>
        </ul>
			</section>
		</>
	);
}

function Logo() {
	return (
		<li className="nav-logo">
			<img src={logo} alt="logo" />
		</li>
	);
}

function CompanyName() {
	return (
		<li className="name">
			Pinku <div className="underline" />
		</li>
	);
}

function MenuIcon() {
	return (
		<li
			className="menu-icon"
			onClick={handleMenuIconClick}
		>
			<div className="menu-top" />
			<div className="menu-mid" />
			<div className="menu-bot" />
		</li>
	);
}

function handleMenuIconClick(event) {
	document.querySelector('body').classList.toggle('open-menu');
}

export default Nav;
