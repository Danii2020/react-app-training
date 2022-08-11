/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-no-constructed-context-values */
import React, { createContext, useState, ReactNode } from 'react';
import { IGitHubUser } from '../services/users';
import { users } from '../mocks/users/users';

interface IUserContext {
  githubUser:IGitHubUser,
  setGithubUser:(data:IGitHubUser) => void
  inputUser:string,
  setInputUser:(data:string) => void,
}

interface IProps {
  children: ReactNode
}

export const UserContext = createContext<IUserContext>({
  githubUser: users[0],
  setGithubUser: () => {},
  inputUser: 'octocat',
  setInputUser: () => {},
});

export function UserProvider({ children }:IProps) {
  const [githubUser, setGithubUser] = useState<IGitHubUser>(users[0]);
  const [inputUser, setInputUser] = useState('octocat');

  return (
    <UserContext.Provider value={{
      githubUser,
      setGithubUser,
      inputUser,
      setInputUser,
    }}
    >
      {children}
    </UserContext.Provider>
  )
}
