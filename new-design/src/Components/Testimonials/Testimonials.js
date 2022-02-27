import React, { useEffect, useState } from "react";
import Title from "../Core/Title";
import Icon from "../Icon";
import "./Testimonials.css";

function Testimonials({}) {
  const [scrollPositions, setScrollPositions] = useState({
    leftScroll: 0,
    clientX: 0,
  });
  const [isMouseDown, setIsMouseDown] = useState(false);
  const [focusedCard, setFocusedCard] = useState(0);
  const [changedCardTriggered, setChangedCardTriggered] = useState(false);
  const testimonials = [{ a: "b" }, { a: "b" }, { a: "b" }];
  return (
    <div
      className="testimonials"
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
    >
      <Card
        author="tina"
        text="We got exactly what we wanted for a fair price and they’ve healed beautifully, so we 100% happy with our choice to use Ink and Iron"
      />
      <Card
        author="tina"
        text="We got exactly what we wanted for a fair price and they’ve healed beautifully, so we 100% happy with our choice to use Ink and Iron"
      />
      <Card
        author="tina"
        text="We got exactly what we wanted for a fair price and they’ve healed beautifully, so we 100% happy with our choice to use Ink and Iron"
      />
    </div>
  );

  function handleMouseDown({ currentTarget, clientX }) {
    setIsMouseDown(true);
    setScrollPositions({ leftScroll: currentTarget.scrollLeft, clientX });
  }
  function handleMouseMove({ currentTarget, clientX }) {
    if (changedCardTriggered) return;
    if (focusedCard < 0) return setFocusedCard(0);
    if (focusedCard >= testimonials.length)
      return setFocusedCard(testimonials.length - 1);
    if (isMouseDown) {
      const distanceX = clientX - scrollPositions.clientX;
      distanceX > 0
        ? setFocusedCard(focusedCard - 1)
        : setFocusedCard(focusedCard + 1);
      currentTarget.scrollLeft = window.innerWidth * focusedCard;
      return setChangedCardTriggered(true);
    }
  }
  function handleMouseUp() {
    setIsMouseDown(false);
    setChangedCardTriggered(false);
  }
}

function Card({ text, author }) {
  return (
    <blockquote className="testimonials__card">
      <Icon icon="faQuoteRight" color="white" id="testimonials__icon" />
      <Title id="testimonials__title">what people say?</Title>
      <p className="testimonials__text">"{text}"</p>
      <p className="testimonials__author">{author}</p>
    </blockquote>
  );
}

export default Testimonials;
