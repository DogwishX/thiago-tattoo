import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import * as solidIcons from "@fortawesome/free-solid-svg-icons";
import * as brandsIcons from "@fortawesome/free-brands-svg-icons";
import "./Icon.css";

function Icon({ icon, id, color = "black", size = "1x" }) {
  return (
    <div className="icon" id={id}>
      <FontAwesomeIcon
        className="icon__fontawesome"
        icon={solidIcons[icon] || brandsIcons[icon]}
        color={color}
        size={size}
      />
    </div>
  );
}

export default Icon;
