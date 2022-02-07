import { useState } from "react";
import useToggle from "../../../hooks/useToggle";
import "./Menu.css";

function Menu() {
  const [isMenuOpen, toggleIsMenuOpen] = useToggle(false);

  return (
    <div className="menu">
      <MenuIcon />
    </div>
  );

  function MenuIcon() {
    return (
      <div
        className={`menu__icon${isMenuOpen ? " menu__icon--active" : ""}`}
        onClick={toggleIsMenuOpen}
      >
        <span className="menu__icon--top"></span>
        <span className="menu__icon--mid"></span>
        <span className="menu__icon--bot"></span>
      </div>
    );
    {
      isMenuOpen && <div className="menu__items"></div>;
    }
  }
}

export default Menu;
