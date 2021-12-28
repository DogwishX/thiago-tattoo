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
          <p className="hours__today">
            Opened today from 11:00 - 19:00{" "}
            <svg
              className="hours__arrow"
              viewBox="0 0 24 24"
              fill="currentColor"
              width="16"
              height="16"
              data-ux="Icon"
              class="x-el x-el-svg c2-1 c2-2 c2-39 c2-25 c2-6n c2-80 c2-26 c2-m c2-6p c2-3 c2-4 c2-5 c2-6 c2-7 c2-8"
            >
              <path
                fill-rule="evenodd"
                d="M19.544 7.236a.773.773 0 0 1-.031 1.06l-7.883 7.743-7.42-7.742a.773.773 0 0 1 0-1.061.699.699 0 0 1 1.017 0l6.433 6.713 6.868-6.745a.698.698 0 0 1 1.016.032"
              ></path>
            </svg>
          </p>
        )}
      </div>
    </div>
  );
}

function HoursTable() {
  const daysOfWeek = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
  const today = new Date().toLocaleDateString("en-gb", { weekday: "short" });

  return (
    <div className="table">
      {daysOfWeek.map((day, index) => (
        <div
          key={index}
          className={
            today === day ? "table__row table__row--active" : "table__row"
          }
        >
          <p className="table__day">{day}</p>
          <p className="table__hours">
            {day === "Sat" || day === "Sun"
              ? "By Appointment"
              : "11:00 – 19:00"}
          </p>
        </div>
      ))}
      <svg
        viewBox="0 0 24 24"
        fill="currentColor"
        width="16"
        height="16"
        data-ux="Icon"
        class="x-el x-el-svg c2-1 c2-2 c2-39 c2-25 c2-6n c2-80 c2-26 c2-m c2-6p c2-3 c2-4 c2-5 c2-6 c2-7 c2-8"
      >
        <path
          fill-rule="evenodd"
          d="M19.544 7.236a.773.773 0 0 1-.031 1.06l-7.883 7.743-7.42-7.742a.773.773 0 0 1 0-1.061.699.699 0 0 1 1.017 0l6.433 6.713 6.868-6.745a.698.698 0 0 1 1.016.032"
        ></path>
      </svg>
    </div>
  );
}

export default Contact;
