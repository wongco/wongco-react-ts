import React, { PureComponent } from 'react';
import styled from 'styled-components';
import FontAwesomeLink from '../../atoms/FontAwesomeLink';

const StyledContactContainer = styled.footer`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  height: 70px;
  box-sizing: border-box;

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
`;

interface MyComponentProps {
  children: any[];
  id: any;
}

class ContactBar extends PureComponent<MyComponentProps> {
  public static FaLink = (props: any) => <FontAwesomeLink {...props} />;

  public render() {
    return <StyledContactContainer {...this.props}>{this.props.children}</StyledContactContainer>;
  }
}

export default ContactBar;
