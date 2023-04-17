import styled from 'styled-components';
import FontAwesomeLink from '../../atoms/FontAwesomeLink';

const StyledContactContainer = styled.footer`
  display: flex;
  flex-basis: row wrap;
  justify-content: center;
  align-items: center;
  height: 60px;
  box-sizing: border-box;
`;

interface Props {
  children: any[];
  id: any;
}

export function FaLink(props: any) {
  return <FontAwesomeLink {...props} />;
}

export default function ContactBar(props: Props) {
  return <StyledContactContainer {...props}>{props.children}</StyledContactContainer>;
}
