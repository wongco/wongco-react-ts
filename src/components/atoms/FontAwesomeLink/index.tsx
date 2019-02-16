import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import styled from 'styled-components';

const StyledFontAwesomeIcon = styled(FontAwesomeIcon)`
  margin: 15px;
  color: #343a40;

  &:hover {
    color: gray;
    transition: color 0.5s;
  }
`;

const FontAwesomeLink = (props: any) => {
  return (
    <a href={props.href}>
      <StyledFontAwesomeIcon icon={props.icon} size={props.size || '2x'} />
    </a>
  );
};

export default FontAwesomeLink;
