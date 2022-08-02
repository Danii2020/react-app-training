/* eslint-disable no-undef */
import React, { useEffect, useState } from 'react';
import SearchBar from '../../components/SearchBar/Searchbar';
import { getGitHubUser, IGitHubUser } from '../../services/users';
import UserCard from '../UserCard/UserCard';

function UserSearcher(): JSX.Element {
  const [inputUser, setInputUser] = useState('octocat');
  const [userState, setUserState] = useState<IGitHubUser>(Object);
  const notFound:string = 'Not Found';

  const getUser = async (user: String) => {
    const userResponse = await getGitHubUser(user);

    if (inputUser === 'octocat') {
      localStorage.setItem('octocat', userResponse);
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
      <UserCard userState={userState} />
    </>

  )
}

export default UserSearcher;
