import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { render, screen } from "@testing-library/react";
import IconLink from "./index";

describe("IconLink", () => {
  it("renders an anchor tag with the correct href", () => {
    render(<IconLink icon={faEnvelope} href="https://example.com" />);

    const link = screen.getByRole("link");
    expect(link).toHaveAttribute("href", "https://example.com");
  });

  it("renders a FontAwesome icon inside the anchor", () => {
    const { container } = render(
      <IconLink icon={faEnvelope} href="https://example.com" />,
    );

    const svg = container.querySelector("svg");
    expect(svg).toBeInTheDocument();
  });

  it("applies custom hovercolor when provided", () => {
    const { container } = render(
      <IconLink
        icon={faEnvelope}
        href="https://example.com"
        hovercolor="red"
      />,
    );

    const svg = container.querySelector("svg");
    expect(svg).toBeInTheDocument();
  });

  it("uses default hovercolor when not provided", () => {
    render(<IconLink icon={faEnvelope} href="https://example.com" />);

    const link = screen.getByRole("link");
    expect(link).toBeInTheDocument();
  });
});
