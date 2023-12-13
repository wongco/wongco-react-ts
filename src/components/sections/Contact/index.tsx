import styled from "styled-components";
import IconLink from "../../atoms/IconLink";
import { faArrowAltCircleUp } from "@fortawesome/free-solid-svg-icons";

const StyledFooter = styled.footer`
  padding: 0;
  margin: 0;
`;

const StyledCopyrightContainer = styled.div`
  display: flex;
  /* background-color: #bfbfbf; */
  color: black;
  justify-content: center;
  align-items: center;
  font-weight: 400;
  font-size: 1.25em;
  margin: 0;
  padding: 1em 1em;
`;

const StyledCopyrightNote = styled.div`
  text-align: right;
  padding-right: 2em;
  font-size: 1vw;

  @media (max-width: 767.98px) {
    font-size: 0.8em;
    text-align: center;
    padding-right: 0;
    width: 70%;
  }
`;

export default function Contact() {
  return (
    <StyledFooter>
      <StyledCopyrightContainer>
        <IconLink href="#top" icon={faArrowAltCircleUp} hovercolor="blue" />
        <StyledCopyrightNote>
          Designed and built by Ginson Wong © 2023
        </StyledCopyrightNote>
      </StyledCopyrightContainer>
    </StyledFooter>
  );
}
