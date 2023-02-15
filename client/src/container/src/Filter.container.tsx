import React from 'react'
import styled from 'styled-components'
import { Search, Types } from './filter'

const Filter = styled.header`
  width: 100%;
  height: 10rem;
`

const FilterContainer: React.FC = () => {
  return (
    <Filter>
      <Search />
      <Types />
    </Filter>
  )
}

export default FilterContainer
