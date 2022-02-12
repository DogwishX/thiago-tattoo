import useToggle from "../../hooks/useToggle";
import MenuItem from "../MenuItem";
import "./Menu.css";

function Menu({ id, items }) {
  const [isMenuOpen, toggleIsMenuOpen] = useToggle(false);

  return (
    <div className="menu" id={id}>
      <div
        className={`menu__icon${isMenuOpen ? " menu__icon--active" : ""}`}
        onClick={toggleIsMenuOpen}
      >
        <span className="menu__icon--top"></span>
        <span className="menu__icon--mid"></span>
        <span className="menu__icon--bot"></span>
      </div>
      {isMenuOpen && (
        <div className="menu__items">
          {items.map((item) => (
            <MenuItem item={item} />
          ))}
        </div>
      )}
    </div>
  );
}

export default Menu;
