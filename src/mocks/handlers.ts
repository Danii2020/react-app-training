/* eslint-disable import/no-extraneous-dependencies */
import { rest } from 'msw';
import { urlFetch } from '../constants/index';
import { users } from './users/users';

export const handlers = [
  rest.get(`${urlFetch}octocat`, (req, res, ctx) => res(
    ctx.json(users[0]),
  )),
];
