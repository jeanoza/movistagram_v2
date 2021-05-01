import Poster from "components/utils/Poster";
import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";

describe("<Poster />", () => {
  let props;
  beforeAll(() => {
    props = {
      id: 2,
      title: "hello",
      year: "2016",
      average: 4.7,
      poster_url: "google.com",
      isMovie: true,
    };
  });
  it("is on Movie page", () => {
    render(
      <BrowserRouter>
        <Poster {...props} />
      </BrowserRouter>
    );
    expect(document.querySelector("a").href).toBe("http://localhost/movie/2");
  });
});
