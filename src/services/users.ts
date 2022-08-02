import { urlFetch } from '../constants/index';

export interface IGitHubUser {
  login: string,
  avatar_url: string,
  name: string,
  company: string,
  blog: string,
  location: string,
  bio: string,
  twitter_username: string,
  public_repos: number,
  followers: number,
  following: number,
  created_at: string
}

export const getGitHubUser = async (user: String) => {
  const response: Response = await fetch(`${urlFetch}${user}`, {
    method: 'GET',
  });
  return response.json();
}
