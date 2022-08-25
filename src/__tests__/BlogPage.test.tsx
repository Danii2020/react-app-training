/* eslint-disable no-undef */
import '@testing-library/jest-dom/extend-expect';
import React from 'react';
import {
  render,
  screen,
} from '../../test/test.utils';
import Blog from '../pages/Blog';

describe('BlogPage test', () => {
  describe('when Blog page is redered', () => {
    it('must exists an Blog title', () => {
      render(<Blog />);
      const blogTitle = screen.getByRole('heading', { name: 'Blog' })
      expect(blogTitle).toHaveTextContent('Blog');
    });
  });
});
