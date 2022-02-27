import React, { useEffect, useState } from "react";
import Title from "../Core/Title";
import Icon from "../Icon";
import "./Testimonials.css";

function Testimonials() {
  // States
  const [scrollPositions, setScrollPositions] = useState({
    leftScroll: 0,
    clientX: 0,
  });
  const [isMouseDown, setIsMouseDown] = useState(false);
  const [focusedCard, setFocusedCard] = useState(0);
  const testimonials = [{ 0: 1 }, { 0: 1 }, { 0: 1 }];

  useEffect(() => {
    const testimonialsDiv = document.querySelector(".testimonials");
    testimonialsDiv.addEventListener("wheel", preventScroll);
  }, []);

  return (
    <div className="testimonials">
      <div
        className="testimonials__cards"
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
      >
        <Card
          id="1"
          author="tina"
          text="We got exactly what we wanted for a fair price and they’ve healed beautifully, so we 100% happy with our choice to use Ink and Iron"
        />
        <Card
          author="tina"
          text="We got exactly what we wanted for a fair price and they’ve healed beautifully, so we 100% happy with our choice to use Ink and Iron"
        />
        <Card
          id="3"
          author="tina"
          text="We got exactly what we wanted for a fair price and they’ve healed beautifully, so we 100% happy with our choice to use Ink and Iron"
        />
      </div>
      <div className="testimonials__buttons">
        <button data-card="0" onClick={displayCard}>
          1
        </button>
        <button data-card="1" onClick={displayCard}>
          2
        </button>
        <button data-card="2" onClick={displayCard}>
          3
        </button>
      </div>
    </div>
  );

  function handleMouseDown({ currentTarget, clientX }) {
    setIsMouseDown(true);
    setScrollPositions({ leftScroll: currentTarget.scrollLeft, clientX });
  }
  function handleMouseMove({ currentTarget, clientX }) {
    const distanceX = clientX - scrollPositions.clientX;
    if (isMouseDown) {
      currentTarget.scrollLeft =
        scrollPositions.leftScroll +
        (distanceX > 0 ? -window.innerWidth : +window.innerWidth);
    }
  }
  function handleMouseUp() {
    setIsMouseDown(false);
  }

  function preventScroll(event) {
    event.preventDefault();
    event.stopPropagation();
    return false;
  }

  function displayCard({ currentTarget }) {
    const testimonialsCardsDiv = document.querySelector(".testimonials__cards");
    testimonialsCardsDiv.scrollLeft =
      window.innerWidth * currentTarget.dataset.card;
  }
}

function Card({ text, author, id }) {
  return (
    <blockquote className="testimonials__card" id={id}>
      <Icon icon="faQuoteRight" color="white" id="testimonials__icon" />
      <Title id="testimonials__title">what people say?</Title>
      <p className="testimonials__text">"{text}"</p>
      <p className="testimonials__author">{author}</p>
    </blockquote>
  );
}

export default Testimonials;
