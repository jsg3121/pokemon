import styled from 'styled-components'
import { Filter, List } from './container'
import { FilterProvider } from './context'
import MobxProvider from './store/src/MobxProvider'

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
      <MobxProvider>
        <FilterProvider>
          <Filter />
        </FilterProvider>
        <section>{/* <List /> */}</section>
      </MobxProvider>
    </Main>
  )
}

export default App
