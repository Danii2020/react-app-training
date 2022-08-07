/* eslint-disable react/jsx-no-constructed-context-values */
/* eslint-disable no-undef */
import React, { useContext, useEffect } from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import SearchBar from '../../components/SearchBar/Searchbar';
import { getGitHubUser, IGitHubUser } from '../../services/users';
import UserCard from '../UserCard/UserCard';
import { UserContext } from '../../context/UserContext';
import ErrorFallback from '../../components/Error/ErrorFallback';

function UserSearcher(): JSX.Element {
  const data = useContext(UserContext);
  const notFound:string = 'Not Found';

  const getUser = async (user: string) => {
    const userResponse:IGitHubUser = await getGitHubUser(user);

    if (data.inputUser === 'octocat') {
      localStorage.setItem('octocat', userResponse as unknown as string);
    }

    if (userResponse.message === notFound) {
      const { octocat } = localStorage;
      data.setInputUser(octocat);
    } else {
      data.setGithubUser(userResponse);
    }
  };

  useEffect(() => {
    getUser(data.inputUser);
  }, [data.inputUser]);

  return (
    <ErrorBoundary FallbackComponent={ErrorFallback}>
      <SearchBar />
      <UserCard />
    </ErrorBoundary>
  )
}

export default UserSearcher;
