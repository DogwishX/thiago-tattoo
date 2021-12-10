import { cleanup, fireEvent, render, screen } from "@testing-library/react";
import Gallery from "./Gallery";
import img1 from "";

const images = ["images/1.jpg", "images/2.jpg", "images/3.jpg", "images/4.jpg"];

beforeEach(() => {
  render(<Gallery images={images} />);
});

afterEach(() => {
  cleanup();
});

test("Render image", () => {
  const imagesRendered = screen.getAllByTestId(/gallery__image/i);
  expect(imagesRendered[0].src).toBe("http://localhost/images/1.jpg");
});