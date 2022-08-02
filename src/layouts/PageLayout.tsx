/* eslint-disable no-undef */
import { Container } from '@mui/material';
import React from 'react';
import NavBar from './NavBar';
import Body from './Body';

type LayoutProps = {
  body: JSX.Element
}

function PageLayout({ body }: LayoutProps):JSX.Element {
  return (
    <>
      <NavBar />
      <Container
        sx={{
          background: 'whitesmoke',
          width: '80vw',
          height: '500px',
          borderRadius: '16px',
          marginTop: '5rem',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Body content={body} />
      </Container>
    </>
  )
}

export default PageLayout;
