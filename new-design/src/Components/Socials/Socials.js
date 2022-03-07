import React from "react";
import Logo from "../Core/Logo";
import Icon from "../Icon";
import "./Socials.css";

function Socials() {
  return (
    <div id="socials">
      <Logo id="socials__logo" />
      <div id="socials__icons">
        <Icon icon="faFacebookF" color="white" />
        <Icon icon="faInstagram" color="white" />
        <Icon icon="faWhatsapp" color="white" />
      </div>
    </div>
  );
}

export default Socials;
