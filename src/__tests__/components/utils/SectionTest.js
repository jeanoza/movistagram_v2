import Section from "components/utils/Section";
import { render, screen } from "@testing-library/react";

describe("<Section/>", () => {
  it("Props transfort test", () => {
    render(<Section title="Now Playing" />);
    expect(screen.getByText("Now Playing")).toBeInTheDocument();
  });
});
