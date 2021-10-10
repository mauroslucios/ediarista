import React from 'react';
import { FooterStyled, FooterContainer, FooterTitle } from './footer.style';
import { Typography } from '@mui/material';

const Footer = () => {
  return (
    <FooterStyled>
      <FooterContainer>
        <FooterTitle>Quem somos</FooterTitle>
        <Typography>Footer</Typography>
      </FooterContainer>
    </FooterStyled>
  );
};

export default Footer;
