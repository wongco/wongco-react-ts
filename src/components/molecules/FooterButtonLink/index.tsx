import React from 'react';
import FooterButton from '../../atoms/FooterButton';

export default function FooterButtonLink(props: any) {
  return (
    <a href={props.href}>
      <FooterButton {...props}>{props.children}</FooterButton>
    </a>
  );
}
