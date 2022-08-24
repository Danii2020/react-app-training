/* eslint-disable no-undef */
import React, { Suspense } from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import UserSearcher from '../containers/UserSearcher/UserSearcher';
import { UserProvider } from '../context/UserContext';
import PageLayout from '../layouts/PageLayout';

function Home(): JSX.Element {
  return (
    <Suspense fallback={<CircularProgress />}>
      <UserProvider>
        <PageLayout body={<UserSearcher />} />
      </UserProvider>
    </Suspense>
  )
}

export default Home;
