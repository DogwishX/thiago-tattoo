import React from "react";
import "./Quote.css";

function Quote({ text, author, id }) {
  return (
    <div className="quote" id={id}>
      <p className="quote__text">{text}</p>
      <p className="quote__author">{author}</p>
    </div>
  );
}

export default Quote;
