/* eslint-disable react/jsx-no-constructed-context-values */
/* eslint-disable no-undef */
import React, { useContext, useEffect } from 'react';
import SearchBar from '../../components/SearchBar/Searchbar';
import { getGitHubUser, IGitHubUser } from '../../services/users';
import UserCard from '../UserCard/UserCard';
import { UserContext } from '../../context/UserContext';

function UserSearcher(): JSX.Element {
  const data = useContext(UserContext);
  // const [inputUser, setInputUser] = useState('octocat');
  // const [userState, setUserState] = useState<IGitHubUser>(Object);
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
    <>
      <SearchBar />
      <UserCard />
    </>

  )
}

export default UserSearcher;
