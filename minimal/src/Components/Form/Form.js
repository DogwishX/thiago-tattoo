import { useState, useEffect } from "react";
import "./Form.css";

function Form() {
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
    <form action="submit" className="form">
      {inputFields.map((item, index) => (
        <div
          className="form__input"
          key={index}
          id={`form__${item}`}
          onClick={displayInput}
          onBlur={hideInput}
          data-testid={`form__${item}`}
          data-fieldname={item}
        >
          <label
            htmlFor={`form__input--${item}`}
            className={
              displayInputObj[item] ? `form__label` : `form__label--placeholder`
            }
            data-testid={`form__label--${item}`}
          >
            {item.slice(0, 1).toUpperCase() + item.slice(1)}
          </label>
          <Input testid={`form__input--${item}`}></Input>
        </div>
      ))}
      <textarea
        placeholder="Message"
        className="form__message"
        required
      ></textarea>
      <div className="form__checkbox">
        <input id="newsletter-checkbox" type="checkbox" />
        <label htmlFor="newsletter-checkbox">
          Sign up for our email list for updates, promotions, and more.
        </label>
      </div>
      <button className="form__submit">send</button>
    </form>
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

export default Form;
