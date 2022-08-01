/* eslint-disable no-undef */
import '@testing-library/jest-dom/extend-expect';
import React from 'react';
import {
  render,
  screen,
  waitFor,
  fireEvent,
} from '../../test/test.utils';
import App from '../App';

describe('UserSearch test', () => {
  describe('if there is a octocat search', () => {
    it('renders its info', async () => {
      render(<App />);
      const input = screen.getByRole('textbox', { name: 'GitHub User' });
      const name = screen.getByLabelText('username');
      await waitFor(() => expect(input).toHaveAttribute('value', 'octocat'));
      await waitFor(() => expect(name).toHaveTextContent('The Octocat'));
    })
  })
  describe('if there is new user search', () => {
    it('renders its info', async () => {
      render(<App />);
      const input = screen.getByRole('textbox', { name: 'GitHub User' });
      const searchButton = screen.getByLabelText('searchButton');
      const name = screen.getByLabelText('username');
      fireEvent.change(input, { target: { value: 'danii2020' } })
      fireEvent.click(searchButton);
      await waitFor(() => expect(input).toHaveAttribute('value', 'danii2020'));
      await waitFor(() => expect(name).toHaveTextContent('Daniel Erazo'));
    })
  })
});
// to be document, search input an elements specific to that user
// firevent to change text, then click the button
// find the new user info, before use waitFor
