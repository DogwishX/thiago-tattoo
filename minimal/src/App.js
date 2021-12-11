import "./App.css";
import Gallery from "./Components/Gallery/Gallery";

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
  return <Gallery images={images} />;
}

export default App;
