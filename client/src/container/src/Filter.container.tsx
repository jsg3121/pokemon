import React from 'react'
import styled from 'styled-components'
import { Button } from '../../components'
import { useMobxStore } from '../../hook'
import { Generations, Radio, Search, Types } from './filter'

const Filter = styled.section`
  width: 20rem;
  height: 100vh;
  border-right: 1px solid #333333;
  padding-right: 1rem;
  position: fixed;
  left: 0;
  top: 5rem;
  background-color: #ffffff;

  .btn__reset {
    width: 100%;
    padding: 1rem 1rem 0 1rem;
    text-align: right;

    button {
      width: 100%;
    }
  }
`

const FilterContainer: React.FC = () => {
  const { filter } = useMobxStore()

  const handleClick = React.useCallback(() => {
    filter.clear()
  }, [filter])

  return (
    <Filter>
      <div className="btn__reset">
        <Button label="검색 초기화" onClick={handleClick} buttonType="waring" />
      </div>
      <Search />
      <Types />
      <Generations />
      <Radio />
    </Filter>
  )
}

export default FilterContainer
