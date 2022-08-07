/* eslint-disable no-undef */
import React from 'react';
import UserSearcher from '../containers/UserSearcher/UserSearcher';
import { UserProvider } from '../context/UserContext';
// import { getGitHubUser, IGitHubUser } from '../services/users';
import PageLayout from '../layouts/PageLayout';

function Home(): JSX.Element {
  return (
    <UserProvider>
      <PageLayout body={<UserSearcher />} />
    </UserProvider>
  )
}

export default Home;
