import React from 'react'
import styled from 'styled-components'
import './common.css'
import { Router } from './router'
import { dailycount } from './service'

const Main = styled.main`
  width: 100%;
  height: 100vh;
  margin: 0 auto;

  @media screen and (max-width: 475px) {
    height: calc(var(--vh, 1vh) * 100);
  }
`

function App() {
  React.useEffect(() => {
    const vh = window.innerHeight * 0.01
    document.documentElement.style.setProperty('--vh', `${vh}px`)
  }, [])

  React.useEffect(() => {
    dailycount()
  }, [])

  return (
    <Main className="App">
      <Router />
    </Main>
  )
}

export default App
