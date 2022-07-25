/* eslint-disable camelcase */
import { Paper, Stack, Typography } from '@mui/material';
import React from 'react';

function PaperInfo(props: { userState: any }) {
  const { userState } = props;
  const { public_repos, followers, following } = userState;

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
          <Typography variant="h6">{public_repos}</Typography>
        </Stack>
        <Stack>
          <Typography variant="h5">Followers</Typography>
          <Typography variant="h6">{followers}</Typography>
        </Stack>
        <Stack>
          <Typography variant="h5">Following</Typography>
          <Typography>{following}</Typography>
        </Stack>
      </Stack>
    </Paper>
  );
}

export default PaperInfo;
