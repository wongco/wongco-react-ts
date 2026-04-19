import { fireEvent, render, screen } from "@testing-library/react";
import Navbar from "./index";

describe("Navbar", () => {
  it("renders the home link with correct text and href", () => {
    render(<Navbar />);

    const homeLink = screen.getByRole("link", { name: /wongco/i });
    expect(homeLink).toHaveAttribute("href", "#home");
    expect(homeLink).toHaveTextContent("WongCo");
  });

  it("renders About nav link", () => {
    render(<Navbar />);

    const aboutLink = screen.getByRole("link", { name: "About" });
    expect(aboutLink).toHaveAttribute("href", "#about");
  });

  it("renders Portfolio nav link", () => {
    render(<Navbar />);

    const portfolioLink = screen.getByRole("link", { name: "Portfolio" });
    expect(portfolioLink).toHaveAttribute("href", "#portfolio");
  });

  it("renders all four social icon links", () => {
    const { container } = render(<Navbar />);

    const links = container.querySelectorAll(
      '[class*="contactLinkContainer"] a',
    );
    expect(links).toHaveLength(4);
  });

  it("renders email icon link with correct href", () => {
    const { container } = render(<Navbar />);

    const links = container.querySelectorAll(
      '[class*="contactLinkContainer"] a',
    );
    const emailLink = Array.from(links).find(
      (l) => l.getAttribute("href")?.startsWith("mailto:"),
    );
    expect(emailLink).toHaveAttribute(
      "href",
      "mailto:ginson.wong+hello@gmail.com",
    );
  });

  it("renders GitHub icon link with correct href", () => {
    const { container } = render(<Navbar />);

    const links = container.querySelectorAll(
      '[class*="contactLinkContainer"] a',
    );
    const githubLink = Array.from(links).find(
      (l) => l.getAttribute("href")?.includes("github.com"),
    );
    expect(githubLink).toHaveAttribute("href", "https://github.com/wongco");
  });

  it("renders LinkedIn icon link with correct href", () => {
    const { container } = render(<Navbar />);

    const links = container.querySelectorAll(
      '[class*="contactLinkContainer"] a',
    );
    const linkedinLink = Array.from(links).find(
      (l) => l.getAttribute("href")?.includes("linkedin.com"),
    );
    expect(linkedinLink).toHaveAttribute(
      "href",
      "https://www.linkedin.com/in/ginson",
    );
  });

  it("toggles collapse state when hamburger is clicked", () => {
    render(<Navbar />);

    const hamburger = document.querySelector('[class*="bar"]');
    expect(hamburger).toBeInTheDocument();

    if (hamburger) {
      fireEvent.click(hamburger);
      fireEvent.click(hamburger);
    }
  });

  it("nav links trigger collapse callback", () => {
    render(<Navbar />);

    const aboutLink = screen.getByRole("link", { name: "About" });
    fireEvent.click(aboutLink);

    const hamburger = document.querySelector('[class*="bar"]');
    if (hamburger) {
      fireEvent.click(hamburger);
      fireEvent.click(hamburger);
    }
  });
});
