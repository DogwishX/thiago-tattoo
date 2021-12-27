import "./App.css";
import Gallery from "./Components/Gallery/Gallery";
import PhoneNumber from "./Components/PhoneNumber/PhoneNumber";
import Hero from "./Components/Hero/Hero";
import Section from "./Components/Section/Section";
import Description from "./Components/Description/Description";
import Social from "./Components/Social/Social";
import Contact from "./Components/Contact/Contact";

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
      <PhoneNumber number="15551234567" element="header">
        +15551234567
      </PhoneNumber>
      <Hero />
      <Section title="Artist" backgroundColor="white">
        <Description
          descriptionTitle="Thiago Barbosa"
          src="https://m.media-amazon.com/images/I/41ZlUB3EKxL._AC_SY1000_.jpg"
        >
          {" "}
          This is Thiago Barbosa. Born in Brazil and raised in Brazil, he has
          been tattooing for over 15 years.
        </Description>
      </Section>
      <Section title="Socials">
        <Social number="15551234567" />
      </Section>
      <Section title="Thiago's work" backgroundColor="white">
        <Gallery images={images} />
      </Section>
      <Section title="AfterCare">
        <Description
          descriptionTitle="DERMALIZE"
          id="dermalize"
          src="https://img1.wsimg.com/isteam/ip/475923f3-0063-4645-8197-3f6580a2f00c/5a964202-2a47-4b14-b7f3-18246878e1f8.jpg/:/cr=t:23.68%25,l:23.68%25,w:52.63%25,h:52.63%25/rs=w:400,cg:true,m"
        >
          The first piece of Dermalize Protective Tattoo Film can be left on the
          skin for up to a max of 24 hours. The exact time will depend on the
          amount of fluid buildup that the wound exudes: this will vary from
          person to person. In case of copious bleeding or weeping, the film can
          be replaced with another piece before 24 hours (a change after 4, 6 or
          8 hours is also possible). In most cases people choose to wear the
          first piece for the first 24 hours, but it is advisable to change it
          whenever it gets dirty, too loose or full of liquids. When removing
          the film, make sure to carefully wash the area with suggested soap and
          water, and gently let the tattoo dry for 30 minutes.
          <br />
          <br />
          This will also make it easier to remove it later on. Any further
          application of Dermalize can be kept on for a variable amount of time,
          depending on the client’s need, changing it when you deem it
          necessary. The total suggested use time of Dermalize, covering all
          applications, is between 6 and 7 days. If the Dermalize is hard to
          pull off the skin, simply let some warm water run under the tattoo
          film, so that the glue becomes weaker. Making removal of the film is
          easier. After the removal of the film, the tattoo will be dry. This is
          normal, and one should the tattoo with some lotion, coconut oil, or
          bepanthen to avoid alleviate any dryness.
        </Description>
      </Section>
      <Section title="Contact" backgroundColor="white">
        <Contact />
      </Section>
    </>
  );
}

export default App;
