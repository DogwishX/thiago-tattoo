import "./App.css";
import AboutMe from "./Components/AboutMe";
import Hero from "./Components/Hero";
import WhatIOffer from "./Components/WhatIOffer";
import Map from "./Components/Map";
import Contact from "./Components/Contact";
import Socials from "./Components/Socials";
import Footer from "./Components/Footer";
import Gallery from "./Components/Gallery";
import Testimonials from "./Components/Testimonials";

function App() {
  return (
    <div className="App">
      <Hero />
      <AboutMe />
      <hr />
      <Gallery />
      <hr />
      <WhatIOffer />
      <hr />
      <Testimonials />
      <hr />
      <Map coords={[-8.74907, -63.88753]} />
      <hr />
      <Contact />
      <hr />
      <Socials />
      <Footer />
    </div>
  );
}

export default App;
