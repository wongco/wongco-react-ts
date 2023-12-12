import styled from "styled-components";

const StyledNavLinks = styled.ol`
  display: flex;
  flex-flow: row none;
  align-items: center;

  /* Media Query for Mobile */
  @media (max-width: 576px) {
    flex: 1 1 100%;
    flex-flow: column wrap;
    display: ${(props: StyledNavLinksProps) =>
      props.isCollapsed ? "none" : "block"};
    margin: 0;
  }
`;

interface StyledNavLinksProps
  extends Pick<React.ComponentPropsWithoutRef<"ol">, "children"> {
  isCollapsed: boolean;
}

export default function NavLinks(props: StyledNavLinksProps) {
  return <StyledNavLinks {...props}>{props.children}</StyledNavLinks>;
}
