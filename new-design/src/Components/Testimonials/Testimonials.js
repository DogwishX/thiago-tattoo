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
  const [hasCardChanged, setHasCardChanged] = useState(false);
  const testimonials = [{ 0: 1 }, { 0: 1 }, { 0: 1 }];

  useEffect(() => {
    const testimonialsDiv = document.querySelector(".testimonials");
    testimonialsDiv.addEventListener("wheel", preventScroll);
  }, []);

  useEffect(() => {
    const testimonialsCardsDiv = document.querySelector(".testimonials__cards");
    const testimonialsButtonsDiv = document.querySelectorAll(
      ".testimonials__button"
    );
    testimonialsButtonsDiv.forEach((button) =>
      button.classList.remove("focused")
    );
    testimonialsCardsDiv.scrollLeft = window.innerWidth * focusedCard;
    testimonialsButtonsDiv[focusedCard].classList.add("focused");
  }, [focusedCard]);

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
        <div
          className="testimonials__button"
          data-card="0"
          onClick={displayCard}
        ></div>
        <div
          className="testimonials__button"
          data-card="1"
          onClick={displayCard}
        ></div>
        <div
          className="testimonials__button"
          data-card="2"
          onClick={displayCard}
        ></div>
      </div>
    </div>
  );

  function handleMouseDown({ currentTarget, clientX }) {
    setIsMouseDown(true);
    setScrollPositions({ leftScroll: currentTarget.scrollLeft, clientX });
  }
  function handleMouseMove({ currentTarget, clientX }) {
    const distanceX = clientX - scrollPositions.clientX;
    if (isMouseDown && !hasCardChanged) {
      let windowWidth;

      if (distanceX > 0) {
        if (focusedCard - 1 < 0) return;
        setFocusedCard(focusedCard - 1);
        windowWidth = -window.innerWidth;
      } else {
        if (focusedCard + 1 >= testimonials.length) return;
        setFocusedCard(focusedCard + 1);
        windowWidth = window.innerWidth;
      }

      currentTarget.scrollLeft = scrollPositions.leftScroll + windowWidth;
      setHasCardChanged(true);
    }
  }
  function handleMouseUp() {
    setIsMouseDown(false);
    setHasCardChanged(false);
  }

  function preventScroll(event) {
    event.preventDefault();
    event.stopPropagation();
    return false;
  }

  function displayCard({ currentTarget }) {
    setFocusedCard(currentTarget.dataset.card);
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
