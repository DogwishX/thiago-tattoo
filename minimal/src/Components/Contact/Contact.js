import { useEffect, useState } from "react";
import "./Contact.css";
import Form from "../Form/Form";
import PhoneNumber from "../PhoneNumber/PhoneNumber";

function Contact() {
  return (
    <div id="contact">
      <h2 className="contact__title">Ask a question</h2>
      <Form />
      <h3 className="contact__studio-name">Thiago Tattoo</h3>
      <div className="contact__details">
        <p>Phone</p>
        <PhoneNumber number="15551234567" element="contact">
          +15551234567
        </PhoneNumber>
      </div>
      <Hours />
    </div>
  );
}

function Hours() {
  return (
    <div className="hours">
      <div className="hours__dropdown"></div>
    </div>
  );
}

export default Contact;
