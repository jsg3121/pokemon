import styled from 'styled-components'
import { Filter, Header, List } from './container'
import { FilterProvider } from './context'
import { ListProvider } from './context/src/List.context'
import MobxProvider from './store/src/MobxProvider'

const Main = styled.main`
  width: 100%;
  height: 100vh;
  margin: 0 auto;

  .dashboard {
    display: flex;
    width: 100%;
  }

  .section__filter {
    width: 20rem;
    height: calc(100vh - 5rem);
    align-items: flex-start;
    position: relative;
    flex-shrink: 0;
    margin-top: 5rem;
  }

  .section__list {
    width: calc(100% - 20rem);
    padding: 2rem;
    margin-top: 5rem;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(14rem, auto));
    grid-column-gap: 1rem;
    grid-row-gap: 1rem;
  }
`

function App() {
  return (
    <Main className="App">
      <Header />
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
