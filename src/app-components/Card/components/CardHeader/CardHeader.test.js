import React from 'react';
import { render, screen, cleanup } from '@testing-library/react';
import CardHeader from './CardHeader';

afterAll(cleanup)

test('renders cardheader tag', () => {
  render(
	  <CardHeader/>
  );

  // container should exist
  expect(screen.getByTestId('cardheader-container'))
});
