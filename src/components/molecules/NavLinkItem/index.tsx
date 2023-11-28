import styled from "styled-components";
import StyledLink from "../../atoms/StyledLink";
import { GenericReactProps } from "../../../types/GenericReactProps";

const StyledLi = styled.li`
  list-style: none;
  font-weight: bold;

  @media (max-width: 576px) {
    display: flex;
    justify-content: flex-end;
    margin: 0.5em 0;
  }
`;

interface Props extends GenericReactProps {
  onClick: () => void;
  href: string;
}

export default function NavLinkItem(props: Props) {
  return (
    <StyledLi>
      <StyledLink {...props}>{props.children}</StyledLink>
    </StyledLi>
  );
}
