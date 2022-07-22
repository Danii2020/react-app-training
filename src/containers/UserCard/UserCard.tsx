/* eslint-disable camelcase */
import { Grid, CardMedia } from '@mui/material';
import React from 'react';
import MainUserInfo from '../../components/MainUserInfo/MainUserInfo';
import UserDescription from './UserDescription/UserDescription';

function UserCard(props: { userState: any }) {
  const { userState } = props;
  const { avatar_url } = userState;

  return (
    <Grid container spacing={2}>
      <Grid item xs={3}>
        <CardMedia component="img" alt="GitHub User" image={avatar_url} />
      </Grid>
      <Grid item xs={9}>
        <MainUserInfo userState={userState} />
      </Grid>
      <UserDescription userState={userState} />
    </Grid>
  );
}

export default UserCard;
