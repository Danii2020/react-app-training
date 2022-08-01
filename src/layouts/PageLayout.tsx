/* eslint-disable no-undef */
import { Grid } from '@mui/material';
import React from 'react';
import NavBar from './NavBar';
import Body from './Body';

type LayoutProps = {
  body: JSX.Element
}

function PageLayout({ body }: LayoutProps):JSX.Element {
  return (
    <Grid
      container
      columns={{ xs: 4, sm: 8, md: 12 }}
      sx={{
        marginTop: '2rem',
      }}
    >
      <Grid item xs={1}>
        <NavBar />
      </Grid>
      <Grid item xs={1}>
        <Body content={body} />
      </Grid>
    </Grid>
  )
}

export default PageLayout;
