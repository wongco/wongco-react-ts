import { render, screen } from "@testing-library/react";
import { vi } from "vitest";
import ProjectInfo from "./ProjectInfo";

vi.mock("../../../hooks/useAOS", () => ({
  useAOS: vi.fn(),
}));

describe("ProjectInfo", () => {
  it("renders the header text", () => {
    render(<ProjectInfo header="My Project" body="Some body text." />);

    expect(screen.getByText("My Project")).toBeInTheDocument();
  });

  it("renders the body text", () => {
    render(<ProjectInfo header="My Project" body="Some body text." />);

    expect(screen.getByText("Some body text.")).toBeInTheDocument();
  });

  it("renders tags when provided", () => {
    render(
      <ProjectInfo
        header="My Project"
        body="Some body text."
        tags={["React", "TypeScript"]}
      />,
    );

    expect(screen.getByText("React, TypeScript")).toBeInTheDocument();
  });

  it("does not render tags element when tags is undefined", () => {
    const { container } = render(
      <ProjectInfo header="My Project" body="Some body text." />,
    );

    const tags = container.querySelectorAll('[class*="tags"]');
    expect(tags).toHaveLength(0);
  });

  it("renders ProjectButtons with githubLink", () => {
    render(
      <ProjectInfo
        header="My Project"
        body="Some body text."
        githubLink="https://github.com/project"
      />,
    );

    expect(screen.getByRole("link", { name: /github/i })).toBeInTheDocument();
  });

  it("renders ProjectButtons with appleAppStoreLink", () => {
    render(
      <ProjectInfo
        header="My Project"
        body="Some body text."
        appleAppStoreLink="https://apps.apple.com/app"
      />,
    );

    expect(
      screen.getByRole("link", { name: /app store/i }),
    ).toBeInTheDocument();
  });
});
