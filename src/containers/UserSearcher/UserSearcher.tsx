/* eslint-disable react/jsx-no-constructed-context-values */
/* eslint-disable no-undef */
import React, { useEffect, useState } from 'react';
import SearchBar from '../../components/SearchBar/Searchbar';
import { getGitHubUser, IGitHubUser } from '../../services/users';
import UserCard from '../UserCard/UserCard';

function UserSearcher(): JSX.Element {
  const [inputUser, setInputUser] = useState('octocat');
  const [userState, setUserState] = useState<IGitHubUser>(Object);
  const notFound:string = 'Not Found';

  const getUser = async (user: string) => {
    const userResponse:IGitHubUser = await getGitHubUser(user);

    if (inputUser === 'octocat') {
      localStorage.setItem('octocat', userResponse as unknown as string);
    }

    if (userResponse.message === notFound) {
      const { octocat } = localStorage;
      setInputUser(octocat);
    } else {
      setUserState(userResponse);
    }
  };

  useEffect(() => {
    getUser(inputUser);
  }, [inputUser]);

  return (
    <>
      <SearchBar setInputUser={setInputUser} />
      <UserCard user={userState} />
    </>

  )
}

export default UserSearcher;
