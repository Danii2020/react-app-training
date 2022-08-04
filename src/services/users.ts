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
  created_at: string,
  message: string,
}

export interface props {
  user: IGitHubUser
}

export async function getGitHubUser(user: string):Promise<IGitHubUser> {
  const response: Response = await fetch(`${urlFetch}${user}`, {
    method: 'GET',
    headers: {
      Authorization: 'Bearer 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',
    },
  });
  return response.json();
}
