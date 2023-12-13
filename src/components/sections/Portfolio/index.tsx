import styled from "styled-components";
import PortfolioGroupmuse from "./PortfolioGroupmuse";
import PortfolioHackOrSnooze from "./PortfolioHackOrSnooze";
import PortfolioJobly from "./PortfolioJobly";

const StyledPortfolioContainer = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-around;
  align-items: center;
  height: 100%;
  padding: 20px;
`;

const StyledDivider = styled.hr`
  border-radius: 50px;
  color: gray;
  width: 80vw;
  height: 0.25px;
  margin: 0;
`;

export default function Portfolio() {
  return (
    <StyledPortfolioContainer id="portfolio">
      <PortfolioGroupmuse />
      <StyledDivider />
      <PortfolioJobly />
      <StyledDivider />
      <PortfolioHackOrSnooze />
      <StyledDivider />
    </StyledPortfolioContainer>
  );
}
