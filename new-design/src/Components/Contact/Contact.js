import React from "react";
import Title from "../Core/Title";
import Icon from "../Icon";
import "./Contact.css";

function Contact() {
  return (
    <div id="contact">
      <Title id="contact__title">contact</Title>
      <div id="contact__items">
        <ContactItem
          id="contact__phone"
          icon="faPhone"
          name="call us"
          details="(630) 270-5330"
        />
        <ContactItem
          id="contact__address"
          icon="faLocationDot"
          name="address"
          details="3700 N Cicero Ave."
        />
        <ContactItem
          id="contact__email"
          icon="faEnvelope"
          name="email"
          details="pinkutattoo@gmail.com"
        />
      </div>
    </div>
  );
}

function ContactItem({ id, icon, name, details }) {
  return (
    <div className="contact__item">
      <Icon id={id} icon={icon} color="white" />
      <div className="contact__info">
        <p className="contact__name">{name}</p>
        <p className="contact__details">{details}</p>
      </div>
    </div>
  );
}

export default Contact;
