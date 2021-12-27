import { useEffect, useState } from "react";
import "./Contact.css";

function Contact() {
  const [displayInputObj, setDisplayInputObj] = useState({
    name: false,
    email: false,
  });
  const inputFields = ["name", "email"];

  function displayInput({ currentTarget }) {
    changeDisplayObjState(currentTarget, true);
    currentTarget.classList.add("contact__input--active");
  }

  function hideInput({ currentTarget }) {
    const input = document.querySelector(".contact__input--active > input");
    if (!input.value) changeDisplayObjState(currentTarget, false);
    currentTarget.classList.remove("contact__input--active");
  }

  function changeDisplayObjState(currentTarget, display) {
    const tempObj = { ...displayInputObj };
    const objKey = currentTarget.dataset.fieldname;
    tempObj[objKey] = display;
    setDisplayInputObj(tempObj);
  }

  return (
    <div id="contact">
      <h4 className="contact__title">Ask a question</h4>
      <form action="submit" className="contact__form">
        {inputFields.map((item, index) => (
          <div
            className="contact__input"
            key={index}
            id={`contact__${item}`}
            onClick={displayInput}
            onBlur={hideInput}
            data-testid={`contact__${item}`}
            data-fieldname={item}
          >
            <label
              htmlFor={`contact__input--${item}`}
              className={
                displayInputObj[item]
                  ? `contact__label`
                  : `contact__label--placeholder`
              }
              data-testid={`contact__label--${item}`}
            >
              {item.slice(0, 1).toUpperCase() + item.slice(1)}
            </label>
            <Input testid={`contact__input--${item}`}></Input>
          </div>
        ))}
        <textarea
          placeholder="Message"
          className="contact__message"
          required
        ></textarea>
        <div className="contact__checkbox">
          <input id="newsletter-checkbox" type="checkbox" />
          <label htmlFor="newsletter-checkbox">
            Sign up for our email list for updates, promotions, and more.
          </label>
        </div>
        <button className="contact__submit">send</button>
      </form>
    </div>
  );
}

function Input({ testid }) {
  useEffect(() => {
    const input = document.querySelector(".contact__input--active > input");
    if (input) input.focus();
  });
  return (
    <input
      data-testid={testid}
      id={testid}
      onBlur={({ currentTarget }) => currentTarget.blur()}
      type={/email/gi.test(testid) ? "email" : "text"}
      required
    />
  );
}

export default Contact;
