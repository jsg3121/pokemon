import React from 'react'
import styled from 'styled-components'
import { Filter, List, Notice } from '../../container'
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

    @media screen and (max-width: 475px) {
      width: 0;
      height: calc(100vh - 3.5rem);
      margin-top: 3.5rem;
      position: absolute;
      top: 0;
      z-index: 10;
    }
  }

  .section__list {
    width: calc(100% - 20rem);
    padding: 1rem;
    margin-top: 5rem;
    position: relative;

    .list__notice--mobile {
      display: none;
    }

    @media screen and (max-width: 475px) {
      width: 100%;
      margin-top: 3.5rem;
    }
  }
`

const DashboardRoute: React.FC = () => {
  const filterRef = React.useRef<HTMLElement>(null)

  const handleFilterOpen = React.useCallback(() => {
    if (filterRef.current) {
      document.getElementsByTagName('body')[0].style.overflow = 'hidden'
      filterRef.current.querySelector('.filter')?.classList.remove('close')
      filterRef.current.querySelector('.filter')?.classList.add('open')
    }
  }, [])

  return (
    <Dashboard className="dashboard">
      <FilterProvider>
        <section className="section__filter" ref={filterRef}>
          <Filter />
        </section>
      </FilterProvider>
      <ListProvider>
        <section className="section__list">
          <Notice onClick={handleFilterOpen} />
          <List />
        </section>
      </ListProvider>
    </Dashboard>
  )
}

export default DashboardRoute
