/* eslint-disable no-undef */
import '@testing-library/jest-dom/extend-expect';
import React from 'react';
import {
  render,
  screen,
} from '../../test/test.utils';
import Contact from '../pages/Contact';

describe('ContactPage test', () => {
  describe('when Contact page is redered', () => {
    it('must exists an Contact us title', () => {
      render(<Contact />);
      const contactTitle = screen.getByText('Contact us');
      expect(contactTitle).toHaveTextContent('Contact us');
    });

    it('must exists a form', () => {
      render(<Contact />);
      const firstNameField = screen.getByRole('textbox', { name: 'FirstName' });
      const lastNameField = screen.getByRole('textbox', { name: 'LastName' });
      const emailField = screen.getByRole('textbox', { name: 'Email' });
      const submitButton = screen.getByRole('button', { name: 'Submit' });

      expect(firstNameField).toBeInTheDocument();
      expect(lastNameField).toBeInTheDocument();
      expect(emailField).toBeInTheDocument();
      expect(submitButton).toHaveTextContent('Submit');
    });
  });
});
