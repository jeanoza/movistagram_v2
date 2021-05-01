import React from "react";
import { getByText, render, act } from "@testing-library/react";
import Home from "components/views/Home/Home";
import Section from "components/utils/Section";

describe("<Home />", () => {
  it("Snapshot", () => {
    const page = render(<Home />);
    expect(page.container).toMatchSnapshot();
  });
});
