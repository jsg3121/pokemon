import React from 'react'
import styled from 'styled-components'
import { Checkbox } from '../../components'
import { FilterProvider } from '../../context'
import { PokemonTypes } from '../../types'

const Filter = styled.header`
  width: 100%;
  height: 10rem;
`

const FilterContainer: React.FC = () => {
  const handleCheck = React.useCallback((val: string) => {
    console.log(val)
  }, [])

  return (
    <Filter>
      <FilterProvider>
        <div className="filter__type">
          {Object.entries(PokemonTypes).map((key) => {
            return (
              <Checkbox
                label={key[1]}
                value={key[0].toLowerCase()}
                onChecked={handleCheck}
              />
            )
          })}
        </div>
      </FilterProvider>
    </Filter>
  )
}

export default FilterContainer
