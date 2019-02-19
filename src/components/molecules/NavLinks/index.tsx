import React, { PureComponent } from 'react';
import styled from 'styled-components';
import NavLinkItem from '../NavLinkItem';

const StyledNavLinks = styled.ol`
  display: flex;
  flex-flow: row none;
  /* margin-right: 1em; */
  align-items: center;

  /* Media Query for Mobile */
  @media (max-width: 576px) {
    flex-flow: column wrap;
    flex: 1 1 100%;
    display: ${(props: any) => (props.isCollapsed ? 'none' : 'block')};
    margin: 0;
  }
`;

interface MyComponentProps {
  isCollapsed: boolean;
}

class NavLinks extends PureComponent<MyComponentProps> {
  // static prop for individual navbar item links
  public static Item = (props: any) => <NavLinkItem {...props}>{props.children}</NavLinkItem>;

  public render() {
    return <StyledNavLinks {...this.props}>{this.props.children}</StyledNavLinks>;
  }
}

export default NavLinks;
