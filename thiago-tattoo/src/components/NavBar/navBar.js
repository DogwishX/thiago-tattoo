import React from "react";
import data from "../../data";
import MenuIcon from "../MenuIcon/MenuIcon";
import "./navBar.css";

function NavBar({ data }) {
	let { logo } = data.navBar;
	return (
		<div class="nav-bar">
			<img src={logo} class="logo" />
			<MenuIcon />
			{console.log(logo)}
		</div>
	);
}

export default NavBar;
