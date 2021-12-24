import { useEffect, useState } from "react";
import "./Contact.css";

function Contact() {
  const [displayInputObj, setDisplayInputObj] = useState({
    name: false,
    email: false,
  });
  const inputFields = ["name", "email", "message"];
  useEffect(() => {
    console.log(displayInputObj);
  }, [displayInputObj]);

  //   function handleInputsload() {
  //     const inputList = document.querySelectorAll(".contact__input");
  //     inputList.forEach((input) => {
  //       if (input.value === "") input.value = input.dataset.fieldname;
  //     });
  //   }

  function displayInput({ currentTarget }) {
    const tempObj = { ...displayInputObj };
    tempObj[currentTarget.dataset.fieldname] = true;
    setDisplayInputObj(tempObj);
  }

  return (
    <div id="contact">
      <form action="submit" className="contact__form">
        {inputFields.map((item, index) => (
          <div
            className="contact__input"
            key={index}
            onClick={displayInput}
            id={`contact__${item}`}
            data-testid={`contact__${item}`}
            data-fieldname={item}
          >
            <p
              className={
                displayInputObj[item]
                  ? `contact__${item}--label`
                  : `contact__${item}--placeholder`
              }
              data-testid={`contact__${item}Placeholder`}
            >
              {item.slice(0, 1).toUpperCase() + item.slice(1)}
            </p>
            {}
            {displayInputObj[item] ? (
              <input data-testid={`contact__input--${item}`}></input>
            ) : (
              ""
            )}
          </div>
        ))}
      </form>
    </div>
  );
}

export default Contact;
