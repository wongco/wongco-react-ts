import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";

const StyledFontAwesomeIcon = styled(FontAwesomeIcon)`
  margin: 15px;
  color: Dimgray;

  &:hover {
    color: ${(props: { hovercolor?: string }) => props.hovercolor || "black"};
    transition: color 0.5s;
  }
`;

type IconLinkProps = {
  hovercolor?: string;
  icon: IconDefinition;
  href: string;
};

export default function IconLink({ hovercolor, icon, href }: IconLinkProps) {
  return (
    <a href={href}>
      <StyledFontAwesomeIcon icon={icon} size={"2x"} hovercolor={hovercolor} />
    </a>
  );
}
