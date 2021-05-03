import Poster from "components/utils/Poster";
import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";

describe("<Poster />", () => {
  let propsList;
  beforeAll(() => {
    propsList = [
      {
        id: 2,
        title: "hello",
        year: "2016",
        average: 4.7,
        poster_url: "google.com",
        isMovie: true,
      },
      {
        id: 3,
        title: "hello",
        year: "2016",
        average: 4.7,
        poster_url: "google.com",
        isMovie: false,
      },
    ];
  });
  it("is on Movie page", () => {
    render(
      <BrowserRouter>
        <Poster {...propsList[0]} />
      </BrowserRouter>
    );
    expect(document.querySelector("a").href).toBe("http://localhost/movie/2");
  });
  it("is on TV page", () => {
    render(
      <BrowserRouter>
        <Poster {...propsList[1]} />
      </BrowserRouter>
    );
    expect(document.querySelector("a").href).toBe("http://localhost/show/3");
  });
});
