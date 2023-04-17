import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styled from 'styled-components';

const StyledFontAwesomeIcon = styled(FontAwesomeIcon) <FontAwesomePropTypes>`
  margin: 15px;
  color: Dimgray;

  &:hover {
    color: ${props => props.hovercolor || 'black'};
    transition: color 0.5s;
  }
`;

interface FontAwesomePropTypes {
  hovercolor?: string;
  icon: IconDefinition;
}

type Props = FontAwesomePropTypes & {
  href: string;
};

export default function FontAwesomeLink(props: Props) {
  return (
    <a href={props.href}>
      <StyledFontAwesomeIcon icon={props.icon} size={'2x'} hovercolor={props.hovercolor} />
    </a>
  );
}
