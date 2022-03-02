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
    "https://www.pinclipart.com/picdir/big/495-4957775_chibi-png-steven-universe-chibi-steven-clipart.png",
    "https://thumbs.dreamstime.com/b/menina-bonito-do-chibi-anime-tirada-nas-cores-pastel-o-%C3%A9-uma-pintada-senta-se-em-um-ponto-ardente-com-seu-gato-154450440.jpg",
    "https://qph.fs.quoracdn.net/main-qimg-ab5ef0f05f2a03126d749a7eea7dc6f2-pjlq",
    "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/3d057b43-ac11-468f-98c5-66fc5ef9b634/ddcxzhm-0bc1ed95-7e2c-4904-89dc-bad71e306d6c.png/v1/fill/w_250,h_250,strp/squall_chibi_by_dilaneko_ddcxzhm-250t.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTI0MCIsInBhdGgiOiJcL2ZcLzNkMDU3YjQzLWFjMTEtNDY4Zi05OGM1LTY2ZmM1ZWY5YjYzNFwvZGRjeHpobS0wYmMxZWQ5NS03ZTJjLTQ5MDQtODlkYy1iYWQ3MWUzMDZkNmMucG5nIiwid2lkdGgiOiI8PTEyNDAifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.YJKWhdXpxTFB-hqN5Vcwo7aLQBi2W3VOqsGaizETqRM",
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
