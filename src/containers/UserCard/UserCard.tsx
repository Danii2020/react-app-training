/* eslint-disable camelcase */
import { Grid, Avatar, Stack } from '@mui/material';
import React from 'react';
import MainUserInfo from '../../components/MainUserInfo/MainUserInfo';
import UserDescription from '../UserDescription/UserDescription';

function UserCard(props: { userState: any }) {
  const { userState } = props;
  const { avatar_url } = userState;

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
          src={avatar_url}
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
          <MainUserInfo userState={userState} />
          <UserDescription userState={userState} />
        </Stack>
      </Grid>
    </Grid>
  );
}

export default UserCard;
