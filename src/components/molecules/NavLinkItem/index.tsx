import React from 'react';
import styled from 'styled-components';
import StyledLink from '../../atoms/StyledLink';

const StyledLi = styled.li`
  list-style: none;
  font-weight: bold;

  @media (max-width: 576px) {
    display: flex;
    justify-content: flex-end;
    margin: 0.5em 0;
  }
`;

export default function NavLinkItem(props: any) {
  return (
    <StyledLi>
      <StyledLink {...props}>{props.children}</StyledLink>
    </StyledLi>
  );
}
