/* eslint-disable no-undef */
import React from 'react';
import UserSearcher from '../containers/UserSearcher/UserSearcher';
import { UserProvider } from '../context/UserContext';
// import { getGitHubUser, IGitHubUser } from '../services/users';
import PageLayout from '../layouts/PageLayout';

function Home(): JSX.Element {
  // const [inputUser, setInputUser] = useState('octocat');
  // const [userState, setUserState] = useState<IGitHubUser>(Object);
  // const notFound:string = 'Not Found';

  // const getUser = async (user: string) => {
  //   const userResponse:IGitHubUser = await getGitHubUser(user);

  //   if (inputUser === 'octocat') {
  //     localStorage.setItem('octocat', userResponse as unknown as string);
  //   }

  //   if (userResponse.message === notFound) {
  //     const { octocat } = localStorage;
  //     setInputUser(octocat);
  //   } else {
  //     setUserState(userResponse);
  //   }
  // };

  // useEffect(() => {
  //   getUser(inputUser);
  // }, [inputUser]);
  return (
    <UserProvider>
      <PageLayout body={<UserSearcher />} />
    </UserProvider>
  )
}

export default Home;
