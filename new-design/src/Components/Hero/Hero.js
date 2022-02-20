import React from "react";
import Title from "../Core/Title";
import Subtitle from "../Core/Subtitle";
import ArrowDown from "../ArrowDown";
import "./Hero.css";

function Hero() {
  return (
    <div className="hero">
      <Title id="hero__title">thiago Tattoo</Title>
      <Subtitle id="hero__subtitle">custom tattoos</Subtitle>
      <ArrowDown id="hero__arrow" />
    </div>
  );
}

export default Hero;
