import { render, screen } from "@testing-library/react";
import ProjectButtons from "./ProjectButtons";

describe("ProjectButtons", () => {
  it("renders App Store link when appleAppStoreLink is provided", () => {
    render(<ProjectButtons appleAppStoreLink="https://apps.apple.com/app" />);

    const link = screen.getByRole("link", { name: /app store/i });
    expect(link).toHaveAttribute("href", "https://apps.apple.com/app");
  });

  it("renders GitHub link when githubLink is provided", () => {
    render(<ProjectButtons githubLink="https://github.com/project" />);

    const link = screen.getByRole("link", { name: /github/i });
    expect(link).toHaveAttribute("href", "https://github.com/project");
  });

  it("renders both links when both are provided", () => {
    render(
      <ProjectButtons
        appleAppStoreLink="https://apps.apple.com/app"
        githubLink="https://github.com/project"
      />,
    );

    expect(
      screen.getByRole("link", { name: /app store/i }),
    ).toBeInTheDocument();
    expect(screen.getByRole("link", { name: /github/i })).toBeInTheDocument();
  });

  it("renders neither link when both props are absent", () => {
    const { container } = render(<ProjectButtons />);

    const links = container.querySelectorAll("a");
    expect(links).toHaveLength(0);
  });
});
