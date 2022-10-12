import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
  font-size: 100%;
  font-weight: 600;
  margin: 0 15px;
  padding: 10px 10px;
  border-radius: 5px;
  border: none;
  background-color: #343a40;
  color: white;

  &:hover {
    background-color: gray;
  }
`;

export default function FooterButton(props: any) {
  return (
    <StyledButton type="button" {...props}>
      {props.children}
    </StyledButton>
  );
}
