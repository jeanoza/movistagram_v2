import { render, screen, fireEvent } from "@testing-library/react";
import NavBar from "components/views/NavBar/NavBar";
import userEvent from "@testing-library/user-event";
import { MemoryRouter } from "react-router-dom";
const setup = () =>
  render(
    <MemoryRouter>
      <NavBar />
    </MemoryRouter>
  );
describe("<NavBar/>", () => {
  it("verify rendering", () => {
    setup();
  });
  describe("Search Bar", () => {
    it("input test", () => {
      setup();
      const input = screen.getByPlaceholderText(/search movie or tv show/i);
      userEvent.type(input, "haha");
      expect(input).toHaveValue("haha");
    });
  });
});
