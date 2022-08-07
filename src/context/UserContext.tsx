/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-no-constructed-context-values */
/* eslint-disable no-unused-vars */
import React, { createContext, useState, ReactNode } from 'react';
import { IGitHubUser, getGitHubUser } from '../services/users';
import { users } from '../mocks/users/users';

interface IUserContext {
  githubUser:IGitHubUser,
  setGithubUser:any,
  inputUser:string,
  setInputUser:any
}

interface IProps {
  children: ReactNode
}

export const UserContext = createContext<IUserContext>({
  githubUser: users[0],
  setGithubUser: users[0],
  inputUser: 'octocat',
  setInputUser: 'octocat',
});

export function UserProvider({ children }:IProps) {
  const [githubUser, setGithubUser] = useState<IGitHubUser>(users[0]);
  const [inputUser, setInputUser] = useState('octocat');

  return (
    <UserContext.Provider value={{
      githubUser, setGithubUser, inputUser, setInputUser,
    }}
    >
      {children}
    </UserContext.Provider>
  )
}
