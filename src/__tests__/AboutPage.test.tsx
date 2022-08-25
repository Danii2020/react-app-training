/* eslint-disable no-undef */
import '@testing-library/jest-dom/extend-expect';
import React from 'react';
import {
  render,
  screen,
} from '../../test/test.utils';
import About from '../pages/About';

describe('AboutPage test', () => {
  describe('when About page is redered', () => {
    it('must exists an About Us title', () => {
      render(<About />);
      const aboutTitle = screen.getByText('About us');
      expect(aboutTitle).toHaveTextContent('About us');
    });
  });
});
