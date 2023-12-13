import styled from "styled-components";
import TextLink, { TextLinkProps } from "../../atoms/TextLink";

const StyledLi = styled.li`
  list-style: none;
  font-weight: bold;

  @media (max-width: 576px) {
    display: flex;
    justify-content: flex-end;
    margin: 0.5em 0;
  }
`;

export default function NavLinkItem({ href, onClick, title }: TextLinkProps) {
  return (
    <StyledLi>
      <TextLink href={href} onClick={onClick} title={title} />
    </StyledLi>
  );
}
