import { faBars } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { PureComponent } from 'react';
import styled from 'styled-components';
import NavLinks from '../../molecules/NavLinks';

const StyledNav = styled.nav`
  display: flex;
  flex-flow: row none;
  justify-content: space-between;
  align-items: center;
  box-shadow: 2em 2em 18em white;

  /* Permalink - use to edit and share this gradient: http://colorzilla.com/gradient-editor/#f6e6b4+0,ed9017+100;Yellow+3D+%231 */
  background: #f6e6b4; /* Old browsers */
  background: -moz-linear-gradient(-45deg, #f6e6b4 0%, #ed9017 100%); /* FF3.6-15 */
  background: -webkit-linear-gradient(
    -45deg,
    #f6e6b4 0%,
    #ed9017 100%
  ); /* Chrome10-25,Safari5.1-6 */
  background: linear-gradient(
    135deg,
    #f6e6b4 0%,
    #ed9017 100%
  ); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#f6e6b4', endColorstr='#ed9017',GradientType=1 ); /* IE6-9 fallback on horizontal gradient */

  @media (max-width: 576px) {
    flex-flow: row wrap;
  }
`;

const StyledHome = styled.p`
  font-size: 120%;
  font-weight: bold;
  margin-left: 1em;

  @media (max-width: 576px) {
    flex: 1;
    margin: 0.75em;
  }
`;

/** Component for Mobile Only Dropdown Button */
const StyledBar = styled.div`
  display: none;

  @media (max-width: 576px) {
    display: flex;
    cursor: pointer;
    margin-right: 1em;
  }
`;

const StyledHomeLink = styled.a`
  text-decoration: none;
  color: black;
  padding: 0.75em;
  border-radius: 10%;

  @media (max-width: 576px) {
    flex: 1 1 100%;
    padding: 0.1em;
  }
`;

interface StateProps {
  isCollapsed: boolean;
}

class Navbar extends PureComponent {
  public state = {
    isCollapsed: true,
  };

  /** handle collapsing of navbar in mobile view */
  public handleClick = () => {
    this.setState((st: StateProps) => ({ isCollapsed: !st.isCollapsed }));
  };

  public render() {
    return (
      <StyledNav>
        <StyledHome>
          <StyledHomeLink href="#home">WongCo</StyledHomeLink>
        </StyledHome>
        <StyledBar onClick={this.handleClick}>
          <FontAwesomeIcon icon={faBars} size={'2x'} />
        </StyledBar>
        <NavLinks isCollapsed={this.state.isCollapsed}>
          <NavLinks.Item onClick={this.handleClick} href="#about">
            About
          </NavLinks.Item>
          <NavLinks.Item onClick={this.handleClick} href="#portfolio">
            Portfolio
          </NavLinks.Item>
          <NavLinks.Item onClick={this.handleClick} href="#contact">
            Contact
          </NavLinks.Item>
        </NavLinks>
      </StyledNav>
    );
  }
}

export default Navbar;
