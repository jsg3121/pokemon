import { Home } from 'container'
import styled from 'styled-components'

const Main = styled.main`
  width: 720px;
  height: 100vh;
  margin: 0 auto;
`

function App() {
  return (
    <Main className="App">
      <Home />
    </Main>
  )
}

export default App
