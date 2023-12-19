import * as stylex from "@stylexjs/stylex";

const styles = stylex.create({
  linkContainer: {
    textDecoration: "none",
    color: {
      default: "black",
      ":hover": "white",
    },
    padding: {
      default: "0.75em",
      "@media (max-width: 576px)": "0.1em",
    },
    borderRadius: "10%",
    fontSize: "1.5em",
    fontWeight: 200,
    backgroundColor: {
      ":hover": "rgba(0, 0, 0, 0.5)",
    },
  },
});

type TextLinkProps = {
  href: string;
  onClick: () => void;
  title: string;
};

export default function TextLink({ title, href, onClick }: TextLinkProps) {
  return (
    <a {...stylex.props(styles.linkContainer)} href={href} onClick={onClick}>
      {title}
    </a>
  );
}
