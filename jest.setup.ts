/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable no-undef */
// eslint-disable-next-line no-unused-vars
import 'whatwg-fetch';
import '@testing-library/jest-dom';
import { server } from './src/mocks/server';

// Establish API mocking before all tests.
beforeAll(() => server.listen());
// Reset any request handlers that we may add during the tests,
// so they don't affect other tests.
afterEach(() => server.resetHandlers());
// Clean up after the tests are finished.
afterAll(() => server.close());
