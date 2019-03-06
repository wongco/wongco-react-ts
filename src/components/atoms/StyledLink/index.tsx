import styled from 'styled-components';

const StyledLink = styled.a`
  text-decoration: none;
  color: black;
  padding: 0.75em;
  border-radius: 10%;
  font-size: 1.5em;
  font-weight: 200;

  &:hover {
    background: rgba(0, 0, 0, 0.5);
    color: white;
  }

  @media (max-width: 576px) {
    padding: 0.1em;
  }
`;

export default StyledLink;
