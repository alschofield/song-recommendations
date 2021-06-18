import React from 'react';
import { render, screen, cleanup } from '@testing-library/react';
import CardFooter from './CardFooter';

afterAll(cleanup)

test('renders card footer tag', () => {
  render(
	  <CardFooter/>
  );

  // container should exist
  expect(screen.getByTestId('cardfooter-container'))
});
