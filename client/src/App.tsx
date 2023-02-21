import styled from 'styled-components'
import { Filter, List } from './container'
import { FilterProvider } from './context'
import { ListProvider } from './context/src/List.context'
import MobxProvider from './store/src/MobxProvider'

const Main = styled.main`
  margin: 0 auto;

  .dashboard {
    display: flex;
    align-items: center;
  }

  .section__filter {
    width: 20rem;
    align-items: flex-start;
    position: relative;
  }

  .section__list {
    width: calc(100% - 20rem);
    padding: 2rem;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(14rem, auto));
    grid-column-gap: 1rem;
    grid-row-gap: 1rem;
  }
`

function App() {
  return (
    <Main className="App">
      <MobxProvider>
        <div className="dashboard">
          <FilterProvider>
            <section className="section__filter">
              <Filter />
            </section>
          </FilterProvider>
          <ListProvider>
            <section className="section__list">
              <List />
            </section>
          </ListProvider>
        </div>
      </MobxProvider>
    </Main>
  )
}

export default App
