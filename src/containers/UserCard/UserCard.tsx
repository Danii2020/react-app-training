/* eslint-disable camelcase */
import { Grid, Avatar, Stack } from '@mui/material';
import React from 'react';
import MainUserInfo from '../../components/MainUserInfo/MainUserInfo';
import UserDescription from '../UserDescription/UserDescription';
import { props } from '../../services/users';

function UserCard({ user }:props) {
  return (
    <Grid
      container
      columns={{ xs: 4, sm: 8, md: 12 }}
      sx={{
        marginTop: '2rem',
      }}
    >
      <Grid item xs={3}>
        <Avatar
          alt="GitHub User"
          src={user.avatar_url}
          sx={{
            width: '80%',
            height: 'auto',
            marginLeft: '1rem',
          }}
        />
      </Grid>
      <Grid item xs={9}>
        <Stack
          direction="column"
          spacing={1}
          sx={{
            margin: '2rem',
          }}
        >
          <MainUserInfo user={user} />
          <UserDescription user={user} />
        </Stack>
      </Grid>
    </Grid>
  );
}

export default UserCard;
