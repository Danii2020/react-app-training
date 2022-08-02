/* eslint-disable no-undef */
import React from 'react';
import UserSearcher from '../containers/UserSearcher/UserSearcher';
import PageLayout from '../layouts/PageLayout';

function Home(): JSX.Element {
  return (
    <PageLayout body={<UserSearcher />} />
  )
}

export default Home;
