import React, { useEffect, useState } from 'react';
import { Container } from '@mui/material';
import SearchBar from './components/SearchBar/Searchbar';
import UserCard from './containers/UserCard/UserCard';
import { getGitHubUser } from './services/users';
import NavBar from './components/NavBar/NavBar';

function App() {
  const [inputUser, setInputUser] = useState('octocat');
  const [userState, setUserState] = useState('inputUser');
  const notFound:string = 'Not Found';

  const getUser = async (user: String) => {
    const userResponse = await getGitHubUser(user);

    if (userState === 'octocat') {
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
      <NavBar />
      <Container
        sx={{
          background: 'whitesmoke',
          width: '80vw',
          height: '500px',
          borderRadius: '16px',
          marginTop: '5rem',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <SearchBar setInputUser={setInputUser} />
        <UserCard userState={userState} />
      </Container>
    </>

  );
}

export default App;
