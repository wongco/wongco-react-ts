import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import styled from 'styled-components';

const StyledFontAwesomeIcon = styled(FontAwesomeIcon)<FontAwesomePropTypes>`
  margin: 15px;
  color: Dimgray;

  &:hover {
    color: ${props => props.hovercolor || 'black'};
    transition: color 0.5s;
  }
`;

const FontAwesomeLink = (props: any) => {
  return (
    <a href={props.href}>
      <StyledFontAwesomeIcon
        icon={props.icon}
        size={props.size || '2x'}
        hovercolor={props.hovercolor}
      />
    </a>
  );
};

interface FontAwesomePropTypes {
  hovercolor?: string;
  icon: any;
  size?: string;
}

export default FontAwesomeLink;
