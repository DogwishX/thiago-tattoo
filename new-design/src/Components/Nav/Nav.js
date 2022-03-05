import { useEffect } from "react";
import Logo from "../Core/Logo";
import Menu from "../Menu";
import "./Nav.css";

function Nav() {
  useEffect(() => {
    const nav = document.querySelector(".nav");
    window.addEventListener("scroll", () => {
      if (window.scrollY > 15) {
        return nav.classList.add("nav--sticky");
      } else {
        nav.classList.remove("nav--sticky");
      }
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
