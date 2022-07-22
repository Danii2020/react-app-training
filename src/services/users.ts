import { urlFetch } from '../constants/index';

export const getGitHubUser = async (user: String) => {
  const response: Response = await fetch(`${urlFetch}${user}`, {
    method: 'GET',
  });
  return response.json();
};
