import styled from 'styled-components';
import { GenericReactProps } from '../../../types/GenericReactProps';

const StyledContactContainer = styled.footer`
  display: flex;
  flex-basis: row wrap;
  justify-content: center;
  align-items: center;
  height: 60px;
  box-sizing: border-box;
`;

export default function ContactBar(props: GenericReactProps) {
  return <StyledContactContainer {...props}>{props.children}</StyledContactContainer>;
}
