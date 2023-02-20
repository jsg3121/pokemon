import React from 'react'
import styled from 'styled-components'
import { Generations, Search, Switchs, Types } from './filter'

const Filter = styled.header`
  width: 100%;
  height: 13rem;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
`

const FilterContainer: React.FC = () => {
  return (
    <Filter>
      <Search />
      {/* <Switchs /> */}
      <Generations />
      <Types />
    </Filter>
  )
}

export default FilterContainer
