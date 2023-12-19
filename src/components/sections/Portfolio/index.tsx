import PortfolioGroupmuse from "./PortfolioGroupmuse";
import PortfolioHackOrSnooze from "./PortfolioHackOrSnooze";
import PortfolioJobly from "./PortfolioJobly";
import * as stylex from "@stylexjs/stylex";

const styles = stylex.create({
  portfolioContainer: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-around",
    alignItems: "center",
    height: "100%",
    padding: "20px",
  },
  divider: {
    width: "80vw",
    height: "0.25px",
    margin: "0",
    borderRadius: "50px",
    color: "gray",
  },
});

export default function Portfolio() {
  return (
    <div {...stylex.props(styles.portfolioContainer)} id="portfolio">
      <PortfolioGroupmuse />
      <hr {...stylex.props(styles.divider)} />
      <PortfolioJobly />
      <hr {...stylex.props(styles.divider)} />
      <PortfolioHackOrSnooze />
      <hr {...stylex.props(styles.divider)} />
    </div>
  );
}
