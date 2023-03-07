import styled from 'styled-components'
import { Header } from './container'
import { Router } from './router'

const Main = styled.main`
  width: 100%;
  height: 100vh;
  margin: 0 auto;
`

function App() {
  return (
    <Main className="App">
      <Header />
      <Router />
    </Main>
  )
}

export default App
