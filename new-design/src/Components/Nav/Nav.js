import { useEffect } from "react";
import Logo from "../Core/Logo";
import Menu from "../Menu";
import "./Nav.css";

function Nav() {
  useEffect(() => {
    const nav = document.querySelector(".nav");
    window.addEventListener("scroll", () => {
      window.scrollY > 10
        ? nav.classList.add("nav--sticky")
        : nav.classList.remove("nav--sticky");
    });
  }, []);

  return (
    <div className="nav">
      <Logo id="nav__logo" />
      <Menu id="nav__menu" items={["Home", "FAQ", "LoL"]} />
    </div>
  );
}

export default Nav;
