/* eslint-disable camelcase */
import { Stack, Typography } from '@mui/material';
import React from 'react';
import { IGitHubUser } from '../../services/users';

function MainUserInfo(props: { userState: IGitHubUser}) {
  const { userState } = props;
  const { name, login, created_at } = userState;

  return (
    <>
      <Stack
        direction="row"
        sx={{
          justifyContent: 'space-between',
        }}
      >
        <Typography variant="h4" aria-label="username">{name}</Typography>
        <Typography variant="subtitle2">{created_at}</Typography>
      </Stack>
      <Typography variant="caption">{`@${login}`}</Typography>
    </>
  );
}

export default MainUserInfo;
