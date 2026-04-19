import { fireEvent, render, screen } from "@testing-library/react";
import TextLink from "./index";

describe("TextLink", () => {
  it("renders the title as link text", () => {
    render(<TextLink href="#about" title="About" onClick={() => {}} />);

    expect(screen.getByText("About")).toBeInTheDocument();
  });

  it("renders an anchor with the correct href", () => {
    render(<TextLink href="#portfolio" title="Portfolio" onClick={() => {}} />);

    const link = screen.getByRole("link", { name: "Portfolio" });
    expect(link).toHaveAttribute("href", "#portfolio");
  });

  it("calls onClick when clicked", () => {
    const onClick = vi.fn();
    render(<TextLink href="#about" title="About" onClick={onClick} />);

    fireEvent.click(screen.getByText("About"));
    expect(onClick).toHaveBeenCalledTimes(1);
  });
});
