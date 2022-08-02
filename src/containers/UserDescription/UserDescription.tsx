import { Stack, Typography } from '@mui/material';
import React from 'react';
import LocationInfo from '../../components/LocationInfo/LocationInfo';
import PaperInfo from '../../components/PaperInfo/PaperInfo';

function UserDescription(props: { userState: any }) {
  const { userState } = props;
  const { bio } = userState;

  return (
    <>
      <Stack
        sx={{
          justifyContent: 'center',
        }}
      >
        {bio !== null ? (
          <Typography variant="body1">{bio}</Typography>
        ) : (
          <Typography variant="body1">This user does not have a bio.</Typography>
        )}
      </Stack>
      <PaperInfo userState={userState} />
      <LocationInfo userState={userState} />
    </>
  );
}

export default UserDescription;
