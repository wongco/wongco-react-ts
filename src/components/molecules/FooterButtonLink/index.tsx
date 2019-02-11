import React from 'react';
import FooterButton from '../../atoms/FooterButton';

const FooterButtonLink = (props: any) => {
  return (
    <a href={props.href}>
      <FooterButton {...props}>{props.children}</FooterButton>
    </a>
  );
};

export default FooterButtonLink;
