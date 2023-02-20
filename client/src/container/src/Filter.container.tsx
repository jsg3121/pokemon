import React from 'react'
import styled from 'styled-components'
import { Generations, Radio, Search, Types } from './filter'

const Filter = styled.header`
  width: 20rem;
  height: 100vh;
  border-right: 1px solid #333333;
  padding-right: 1rem;
  position: fixed;
  left: 0;
  top: 0;
`

const FilterContainer: React.FC = () => {
  return (
    <Filter>
      <Search />
      <Radio />
      <Types />
      <Generations />
    </Filter>
  )
}

export default FilterContainer
