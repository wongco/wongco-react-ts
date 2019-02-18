import React, { PureComponent } from 'react';
import styled from 'styled-components';
import FontAwesomeLink from '../../atoms/FontAwesomeLink';

const StyledContactContainer = styled.footer`
  display: flex;
  /* flex-direction: row; */
  flex-basis: row wrap;
  justify-content: center;
  align-items: center;
  height: 60px;
  box-sizing: border-box;
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
