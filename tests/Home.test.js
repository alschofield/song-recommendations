import React from 'react';
import { render, screen, fireEvent, cleanup } from '@testing-library/react';
import { ThemeProvider, themes } from 'schofield-themes';
import { themes as questionsThemes } from '../../../themes';
import Home from './Home';

beforeEach(() => {
  render(
    <ThemeProvider theme={{ ...themes.dark, ...questionsThemes.dark }}>
      <Home/>
    </ThemeProvider>
  );
})
afterAll(cleanup)

test('renders home page', () => {
  // home page should exist
  expect(screen.getByTestId('home-container'))
});

test('renders header', () => {
  expect(screen.getByTestId('header-container')).toHaveTextContent('Song Recommendations')
})

test('renders input', () => {
  expect(screen.getByTestId('input-container')).toHaveAttribute('placeholder', 'Genre/Artist/Vegetable/Favorite Bird/Chord/Instrument...')
})
