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

function LocationInfo(props: { userState: any }) {
  const { userState } = props;
  const
    {
      location,
      twitter_username,
      blog,
      company,
    } = userState;

  return (
    <Grid container>
      <Grid item xs={6}>
        <Stack>
          <LocationIcon />
          <Typography>{location}</Typography>
        </Stack>
      </Grid>
      <Grid item xs={6}>
        <Stack>
          <TwitterIcon />
          {twitter_username !== null ? (
            <Typography>{twitter_username}</Typography>
          ) : (
            <Typography>Twitter not available.</Typography>
          )}
        </Stack>
      </Grid>
      <Grid item xs={6}>
        <Stack>
          <LanguageIcon />
          {blog !== null ? (
            <Typography>
              <Link href={blog} underline="none">
                {blog}
              </Link>
            </Typography>
          ) : (
            <Typography>Blog not available.</Typography>
          )}
        </Stack>
      </Grid>
      <Grid item xs={6}>
        <Stack>
          <BusinessIcon />
          {company !== null ? (
            <Typography>{company}</Typography>
          ) : (
            <Typography>Company not available.</Typography>
          )}
        </Stack>
      </Grid>
    </Grid>
  );
}

export default LocationInfo;
