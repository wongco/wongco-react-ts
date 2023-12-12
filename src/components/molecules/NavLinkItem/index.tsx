import styled from "styled-components";
import StyledLink, { StyledLinkProps } from "../../atoms/StyledLink";

const StyledLi = styled.li`
  list-style: none;
  font-weight: bold;

  @media (max-width: 576px) {
    display: flex;
    justify-content: flex-end;
    margin: 0.5em 0;
  }
`;

export default function NavLinkItem({ href, onClick, title }: StyledLinkProps) {
  return (
    <StyledLi>
      <StyledLink href={href} onClick={onClick} title={title} />
    </StyledLi>
  );
}
