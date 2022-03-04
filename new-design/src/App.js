import "./App.css";
import Nav from "./Components/Nav";
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
  const imgs = [
    {
      original: "https://picsum.photos/id/1018/1000/600/",
      thumbnail: "https://picsum.photos/id/1018/250/150/",
    },
    {
      original: "https://picsum.photos/id/1015/1000/600/",
      thumbnail: "https://picsum.photos/id/1015/250/150/",
    },
    {
      original: "https://picsum.photos/id/1019/1000/600/",
      thumbnail: "https://picsum.photos/id/1019/250/150/",
    },
  ];
  return (
    <div className="App">
      <Nav />
      <Hero />
      <AboutMe />
      <hr />
      <Gallery images={imgs} />
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
