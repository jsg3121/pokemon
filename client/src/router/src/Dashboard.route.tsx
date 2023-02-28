import React from 'react'
import styled from 'styled-components'
import { Filter, List } from '../../container'
import { FilterProvider } from '../../context'
import { ListProvider } from '../../context/src/List.context'

const Dashboard = styled.div`
  display: flex;
  width: 100%;

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

const DashboardRoute: React.FC = () => {
  return (
    <Dashboard className="dashboard">
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
    </Dashboard>
  )
}

export default DashboardRoute
