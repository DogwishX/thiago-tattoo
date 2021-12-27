import { useEffect, useState } from "react";
import "./Contact.css";
import Form from "../Form/Form";
import PhoneNumber from "../PhoneNumber/PhoneNumber";

function Contact() {
  return (
    <div id="contact">
      <h2 className="contact__title">Ask a question</h2>
      <Form />
      <div className="contact__details">
        <h3 className="contact__studio-name">thiago tattoo studio</h3>
        <p className="contact__address">
          64 South Great George's Street Dublin
        </p>
        <PhoneNumber number="15551234567" element="contact">
          +15551234567
        </PhoneNumber>
      </div>
      <Hours />
    </div>
  );
}

function Hours() {
  const [displayHours, setDisplayHours] = useState(false);
  function toggleDisplayHours() {
    setDisplayHours(!displayHours);
  }
  return (
    <div className="hours">
      <h1 className="hours__title">Hours</h1>
      <div className="hours__dropdown" onClick={toggleDisplayHours}>
        {displayHours ? (
          <HoursTable />
        ) : (
          <p className="hours__today">Opened today from 11:00 - 19:00</p>
        )}
      </div>
    </div>
  );
}

function HoursTable() {
  const daysOfWeek = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
  return (
    <div className="table">
      {daysOfWeek.map((day, index) => (
        <div key={index} className="table__row">
          <p className="table__day">{day}</p>
          <p className="table__hours">
            {day === "Sat" || day === "Sun"
              ? "By Appointment"
              : "11:00 – 19:00"}
          </p>
        </div>
      ))}
    </div>
  );
}

export default Contact;
