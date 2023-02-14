import { observer } from 'mobx-react'
import React, { useContext } from 'react'
import styled from 'styled-components'
import { Checkbox } from '../../components'
import { FilterContext } from '../../context'
import { PokemonTypes } from '../../types'

const Filter = styled.header`
  width: 100%;
  height: 10rem;
`

const FilterContainer: React.FC = observer(() => {
  const { changeFilter, filter } = useContext(FilterContext)

  const handleTypeCheck = React.useCallback(
    (value: string) => {
      if (changeFilter) {
        changeFilter({ type: 'type', value })
      }
    },
    [changeFilter]
  )

  return (
    <Filter>
      <div className="filter__type">
        {Object.entries(PokemonTypes).map((key) => {
          return (
            <Checkbox
              key={key[0]}
              label={key[1]}
              value={key[0].toLowerCase()}
              onChecked={handleTypeCheck}
              disabled={
                filter?.type.length === 2 &&
                filter.type.indexOf(key[0].toLowerCase()) < 0
                  ? true
                  : false
              }
            />
          )
        })}
      </div>
    </Filter>
  )
})

export default FilterContainer
