import styled from 'styled-components';

const StyledLink = styled.a`
  text-decoration: none;
  color: white;
  padding: 0.75em;
  border-radius: 10%;

  &:hover {
    background: rgba(255, 255, 255, 0.5);
  }

  @media (max-width: 576px) {
    padding: 0.1em;
  }
`;

export default StyledLink;
