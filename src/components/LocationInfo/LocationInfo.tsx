/* eslint-disable camelcase */
import React from 'react';
import
{
  Grid,
  Link,
  Stack,
  Typography,
} from '@mui/material';
import LocationIcon from '@mui/icons-material/LocationOn';
import TwitterIcon from '@mui/icons-material/Twitter';
import LanguageIcon from '@mui/icons-material/Language';
import BusinessIcon from '@mui/icons-material/Business';
import { props } from '../../services/users';

function LocationInfo({ user }:props) {
  return (
    <Grid
      container
      spacing={{ xs: 2, md: 3 }}
      columns={{ xs: 4, sm: 8, md: 12 }}
      sx={{
        marginTop: '1rem',
      }}
    >
      <Grid item xs={6}>
        <Stack
          direction="row"
          spacing={2}
        >
          <LocationIcon />
          {user.location !== null ? (
            <Typography>{user.location}</Typography>
          ) : (
            <Typography>Location not available.</Typography>
          )}
        </Stack>
      </Grid>
      <Grid item xs={6}>
        <Stack
          direction="row"
          spacing={2}
        >
          <TwitterIcon />
          {user.twitter_username !== null ? (
            <Typography>{user.twitter_username}</Typography>
          ) : (
            <Typography>Twitter not available.</Typography>
          )}
        </Stack>
      </Grid>
      <Grid item xs={6}>
        <Stack
          direction="row"
          spacing={2}
        >
          <LanguageIcon />
          {user.blog !== null ? (
            <Typography>
              <Link href={user.blog} underline="none">
                {user.blog}
              </Link>
            </Typography>
          ) : (
            <Typography>Blog not available.</Typography>
          )}
        </Stack>
      </Grid>
      <Grid item xs={6}>
        <Stack
          direction="row"
          spacing={2}
        >
          <BusinessIcon />
          {user.company !== null ? (
            <Typography>{user.company}</Typography>
          ) : (
            <Typography>Company not available.</Typography>
          )}
        </Stack>
      </Grid>
    </Grid>
  );
}

export default LocationInfo;
