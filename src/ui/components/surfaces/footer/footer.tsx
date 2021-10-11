import React from 'react';
import {
  FooterStyled,
  FooterContainer,
  FooterTitle,
  AppList,
} from './footer.style';
import { Typography, Box } from '@mui/material';

const Footer = () => {
  return (
    <FooterStyled>
      <FooterContainer>
        <Box sx={{ maxWidth: '400px' }}>
          <FooterTitle>Quem somos</FooterTitle>
          <Typography variant={'body2'} sx={{ mt: 2 }}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate
            exercitationem aliquid perferendis, facere laudantium enim quasi
            assumenda laboriosam aspernatur quas dignissimos cum magni omnis,
            doloremque suscipit, mollitia possimus minima quibusdam!
          </Typography>
        </Box>
        <div>
          <FooterTitle>Baixe nossos aplicativos</FooterTitle>
          <AppList>
            <li>
              <a href='/' target={'_blank'} rel={'noopener noreferrer'}>
                <img src={'/img/logos/app-store.png'} alt={'AppStore'} />
              </a>
            </li>
            <li>
              <a href='/' target={'_blank'} rel={'noopener noreferrer'}>
                <img src={'/img/logos/google-play.png'} alt={'Google Play'} />
              </a>
            </li>
          </AppList>
        </div>
      </FooterContainer>
    </FooterStyled>
  );
};

export default Footer;
