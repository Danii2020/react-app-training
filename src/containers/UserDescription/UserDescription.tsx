import { Stack, Typography } from '@mui/material';
import React from 'react';
import LocationInfo from '../../components/LocationInfo/LocationInfo';
import PaperInfo from '../../components/PaperInfo/PaperInfo';
import { props } from '../../services/users';

function UserDescription({ user }:props) {
  return (
    <>
      <Stack
        sx={{
          justifyContent: 'center',
        }}
      >
        {user.bio !== null ? (
          <Typography variant="body1">{user.bio}</Typography>
        ) : (
          <Typography variant="body1">This user does not have a bio.</Typography>
        )}
      </Stack>
      <PaperInfo user={user} />
      <LocationInfo user={user} />
    </>
  );
}

export default UserDescription;
