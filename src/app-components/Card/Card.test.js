import React from 'react';
import { render, screen, cleanup } from '@testing-library/react';
import Card from './Card';

afterAll(cleanup)

test('renders card tag', () => {
  render(
	  <Card/>
  );

  // container should exist
  expect(screen.getByTestId('card-container'))
});
