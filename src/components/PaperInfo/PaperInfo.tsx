/* eslint-disable camelcase */
import React from 'react';
import { Paper, Stack, Typography } from '@mui/material';
import { props } from '../../services/users';

function PaperInfo({ user }:props) {
  return (
    <Paper elevation={3}>
      <Stack
        spacing={3}
        direction="row"
        sx={{
          justifyContent: 'space-evenly',
          margin: '1rem',
        }}
      >
        <Stack>
          <Typography variant="h5">Repos</Typography>
          <Typography variant="h6">{user.public_repos}</Typography>
        </Stack>
        <Stack>
          <Typography variant="h5">Followers</Typography>
          <Typography variant="h6">{user.followers}</Typography>
        </Stack>
        <Stack>
          <Typography variant="h5">Following</Typography>
          <Typography>{user.following}</Typography>
        </Stack>
      </Stack>
    </Paper>
  );
}

export default PaperInfo;
