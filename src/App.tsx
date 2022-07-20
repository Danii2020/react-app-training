import React, { useEffect, useState } from 'react';
import { Container } from '@mui/material';
import SearchBar from './components/SearchBar/Searchbar';
import { getGitHubUser } from '../services/users';

export function App() {
  const [inputUser, setInputUser] = useState('octocat');
  const [userState, setUserState] = useState('inputUser');

  const getUser = async (user: String) => {
    const userResponse = await getGitHubUser(user);

    if (userState === 'octocat') {
      localStorage.setItem('ocatocat', userResponse);
    }

    if (userResponse.message === 'Not found') {
      const { octocat } = localStorage;
      setInputUser(octocat);
    } else {
      setUserState(userResponse);
    }

    console.log(userResponse);
  }

  useEffect(() => {
    getUser(inputUser);
  }, [inputUser]);

  return (
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
      <SearchBar inputUser={inputUser} setInputUser={setInputUser} />
    </Container>
  );
}
