/* eslint-disable camelcase */
import { Stack, Typography } from '@mui/material';
import React from 'react';

function MainUserInfo(props: { userState: any }) {
  const { userState } = props;
  const { name, login, created_at } = userState;

  return (
    <>
      <Stack>
        <Typography>{name}</Typography>
        <Typography>{created_at}</Typography>
      </Stack>
      <Typography>{login}</Typography>
    </>
  );
}

export default MainUserInfo;
