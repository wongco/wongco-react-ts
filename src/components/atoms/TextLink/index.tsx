import React from "react";
import styled from "styled-components";

const StyledLinkComp = styled.a`
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

export interface TextLinkProps
  extends Pick<
    React.ComponentPropsWithoutRef<"a">,
    "href" | "onClick" | "children"
  > {
  title?: string;
}

export default function TextLink({
  title,
  href,
  onClick,
  children,
}: TextLinkProps) {
  return (
    <StyledLinkComp href={href} onClick={onClick}>
      {title ?? children}
    </StyledLinkComp>
  );
}
