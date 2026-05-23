import * as stylex from "@stylexjs/stylex";

const styles = stylex.create({
  linkContainer: {
    textDecoration: "none",
    color: {
      default: "black",
    },
    padding: {
      default: "0.75em",
      "@media (max-width: 576px)": "0.1em",
    },
    fontSize: "1.5em",
    fontWeight: 200,
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
