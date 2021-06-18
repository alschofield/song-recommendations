import React, { useState } from 'react'
import merge from 'lodash.merge'
import { Container } from 'schofield-common-components'
import { SchoNav as Nav, Footer } from 'schofield-main-components'
import { ThemeProvider, themes } from 'schofield-themes'
import { themes as songRecThemes } from '../themes'
import '../styles/app.css';

const TITLE = 'Song Recommendations'

export const Layout = ({ children }) => {
  let [state, updateState] = useState({
    themeName: 'dark',
    theme: merge(themes.dark, songRecThemes.dark)
  })

  const handleThemeToggle = () => {
    const name = (state.themeName === 'light') ? 'dark' : 'light';
    updateState({ theme: merge(themes[name], songRecThemes[name]), themeName: name });
  };

  return (
    <ThemeProvider theme={state.theme}>
      <Container data-testid="app-container">
        <Nav handleThemeToggle={handleThemeToggle} />

        {children}

        <Footer text={TITLE} />
      </Container>
    </ThemeProvider>
  )
}

export default Layout
