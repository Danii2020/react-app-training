/* eslint-disable camelcase */
import React from 'react';
import { Stack, Typography } from '@mui/material';
import { props } from '../../services/users';

function MainUserInfo({ user }:props) {
  return (
    <>
      <Stack
        direction="row"
        sx={{
          justifyContent: 'space-between',
        }}
      >
        <Typography variant="h4" aria-label="username">{user.name}</Typography>
        <Typography variant="subtitle2">{user.created_at}</Typography>
      </Stack>
      <Typography variant="caption">{`@${user.login}`}</Typography>
    </>
  );
}

export default MainUserInfo;
