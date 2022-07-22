import { Stack, Typography } from '@mui/material';
import React from 'react';
import LocationInfo from '../../../components/LocationInfo/LocationInfo';
import PaperInfo from '../../../components/PaperInfo/PaperInfo';

function UserDescription(props: { userState: any }) {
  const { userState } = props;
  const { bio } = userState;

  return (
    <>
      <Stack>
        {bio !== null ? (
          <Typography>{bio}</Typography>
        ) : (
          <Typography>This user does not have a bio.</Typography>
        )}
      </Stack>
      <PaperInfo userState={userState} />
      <LocationInfo userState={userState} />
    </>
  );
}

export default UserDescription;
