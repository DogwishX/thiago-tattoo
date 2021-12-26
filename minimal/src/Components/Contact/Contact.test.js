import { screen, render, fireEvent, cleanup } from "@testing-library/react";
import Contact from "./Contact";

describe("render", () => {
  beforeEach(() => render(<Contact />));
  afterEach(() => cleanup());

  test("name placeholder", () => {
    const nameInput = screen.getByTestId("contact__label--name");
    expect(nameInput.innerHTML).toBe("Name");
  });

  test("email placeholder", () => {
    const emailInput = screen.getByTestId("contact__label--email");
    expect(emailInput.innerHTML).toBe("Email");
  });

  test("input field on click", () => {
    const nameDiv = screen.getByTestId("contact__name");
    fireEvent.click(nameDiv);
    const nameInput = screen.getByTestId("contact__input--name");
    expect(nameInput).toBeTruthy();
  });
});

describe("interactions", () => {
  beforeEach(() => render(<Contact />));
  afterEach(() => cleanup());

  test("change input placeholder position on click", () => {
    const nameInput = screen.getByTestId("contact__name");
    fireEvent.click(nameInput);
    const label = screen.getByTestId("contact__label--name");
    expect(label.className).toBe("contact__label");
  });
});
