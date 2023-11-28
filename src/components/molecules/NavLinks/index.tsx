import styled from "styled-components";
import { GenericReactProps } from "../../../types/GenericReactProps";

const StyledNavLinks = styled.ol`
  display: flex;
  flex-flow: row none;
  align-items: center;

  /* Media Query for Mobile */
  @media (max-width: 576px) {
    flex: 1 1 100%;
    flex-flow: column wrap;
    display: ${(props: Props) => (props.isCollapsed ? "none" : "block")};
    margin: 0;
  }
`;

interface Props extends GenericReactProps {
  isCollapsed: boolean;
}

export default function NavLinks(props: Props) {
  return <StyledNavLinks {...props}>{props.children}</StyledNavLinks>;
}
