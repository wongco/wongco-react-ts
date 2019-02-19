import React from 'react';
import styled from 'styled-components';

const StyledCopyrightContainer = styled.div`
  display: flex;
  background-color: #bfbfbf;
  color: white;
  justify-content: center;
  align-items: center;
  font-weight: 400;
  font-size: 1.25em;
  margin: 0;
  padding: 30px 0;
`;

const StyledCopyrightNote = styled.div`
  width: 100%;
  text-align: right;
  padding-right: 2em;
`;

const Contact = () => {
  return (
    <footer>
      <StyledCopyrightContainer>
        <StyledCopyrightNote>Designed and built by Ginson Wong © 2019</StyledCopyrightNote>
      </StyledCopyrightContainer>
    </footer>
  );
};

export default Contact;
