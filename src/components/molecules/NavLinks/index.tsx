import React from 'react';
import styled from 'styled-components';

const StyledNavLinks = styled.ol`
  display: flex;
  flex-flow: row none;
  align-items: center;

  /* Media Query for Mobile */
  @media (max-width: 576px) {
    flex: 1 1 100%;
    flex-flow: column wrap;
    display: ${(props: any) => (props.isCollapsed ? 'none' : 'block')};
    margin: 0;
  }
`;

interface Props {
  isCollapsed: boolean;
  children: any;
}

export default function NavLinks(props: Props) {
  return <StyledNavLinks {...props}>{props.children}</StyledNavLinks>;
}
