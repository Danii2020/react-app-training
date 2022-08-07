/* eslint-disable camelcase */
import React, { useContext } from 'react';
import { Stack, Typography } from '@mui/material';
import { UserContext } from '../../context/UserContext';

function MainUserInfo() {
  const user = useContext(UserContext).githubUser;
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
