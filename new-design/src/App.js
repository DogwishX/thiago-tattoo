import "./App.css";
import AboutMe from "./Components/AboutMe";
import Hero from "./Components/Hero";
import WhatIOffer from "./Components/WhatIOffer";

function App() {
  return (
    <div className="App">
      <Hero />
      <AboutMe />
      <hr />
      <WhatIOffer />
    </div>
  );
}

export default App;
