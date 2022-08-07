import { Stack, Typography } from '@mui/material';
import React, { useContext } from 'react';
import LocationInfo from '../../components/LocationInfo/LocationInfo';
import PaperInfo from '../../components/PaperInfo/PaperInfo';
import { UserContext } from '../../context/UserContext';

function UserDescription() {
  const user = useContext(UserContext).githubUser;
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
      <PaperInfo />
      <LocationInfo />
    </>
  );
}

export default UserDescription;
