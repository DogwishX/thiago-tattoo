import "./App.css";
import Gallery from "./Components/Gallery/Gallery";
import PhoneNumber from "./Components/PhoneNumber/PhoneNumber";
import Hero from "./Components/Hero/Hero";
import Section from "./Components/Section/Section";
import Profile from "./Components/Profile/Profile";
import Social from "./Components/Social/Social";

const images = [
  "images/5.jpg",
  "images/6.jpg",
  "images/1.jpg",
  "images/2.jpg",
  "images/3.jpg",
  "images/4.jpg",
  "images/5.jpg",
  "images/6.jpg",
  "images/1.jpg",
  "images/2.jpg",
];

function App() {
  return (
    <>
      <PhoneNumber number="15551234567" element="header" />
      <Hero />
      <Section title="Artist" backgroundColor="white">
        <Profile />
      </Section>
      <Section title="Thiago's work" backgroundColor="white">
        <Gallery images={images} />
      </Section>
      <Section title="Socials">
        <Social number="15551234567" />
      </Section>
    </>
  );
}

export default App;
