import styled from 'styled-components'
import { Filter, List } from './container'

const Main = styled.main`
  margin: 0 auto;

  section {
    padding: 1rem;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
  }
`

function App() {
  return (
    <Main className="App">
      <Filter />
      <section>{/* <List /> */}</section>
    </Main>
  )
}

export default App
