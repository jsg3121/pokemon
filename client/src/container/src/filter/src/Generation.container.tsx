import React from 'react'
import isEqual from 'fast-deep-equal'
import styled from 'styled-components'
import { FilterContext } from '../../../../context'
import { Checkbox } from '../../../../components'

const Generation = styled.div`
  width: 100%;
  height: 10rem;
  padding: 1rem;

  & > div {
    width: 100%;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: 1fr 1fr;
  }

  @media screen and (max-width: 475px) {
    height: 7rem;
    padding: 0 1rem;

    & > div {
      grid-template-columns: repeat(3, 1fr);
    }
  }
`

const GenerationContainer: React.FC = () => {
  const { filter, changeFilter } = React.useContext(FilterContext)

  const handleGenCheck = React.useCallback(
    (value: string) => {
      if (changeFilter) {
        changeFilter({ type: 'generation', value })
      }
    },
    [changeFilter]
  )

  return (
    <Generation className="filter__generation">
      <p className="filter__content--title">Generation</p>
      <div>
        <Checkbox
          label="1세대"
          value={'1'}
          onChecked={handleGenCheck}
          defaultChecked={filter && filter.generation.length !== 0}
        />
        <Checkbox
          label="2세대"
          value={'2'}
          onChecked={handleGenCheck}
          defaultChecked={filter && filter.generation.length !== 0}
        />
        <Checkbox
          label="3세대"
          value={'3'}
          onChecked={handleGenCheck}
          defaultChecked={filter && filter.generation.length !== 0}
        />
        <Checkbox
          label="4세대"
          value={'4'}
          onChecked={handleGenCheck}
          defaultChecked={filter && filter.generation.length !== 0}
        />
        <Checkbox
          label="5세대"
          value={'5'}
          onChecked={handleGenCheck}
          defaultChecked={filter && filter.generation.length !== 0}
        />
        <Checkbox
          label="6세대"
          value={'6'}
          onChecked={handleGenCheck}
          defaultChecked={filter && filter.generation.length !== 0}
        />
        <Checkbox
          label="7세대"
          value={'7'}
          onChecked={handleGenCheck}
          defaultChecked={filter && filter.generation.length !== 0}
        />
        <Checkbox
          label="8세대"
          value={'8'}
          onChecked={handleGenCheck}
          defaultChecked={filter && filter.generation.length !== 0}
        />
        <Checkbox
          label="9세대"
          value={'9'}
          onChecked={handleGenCheck}
          defaultChecked={filter && filter.generation.length !== 0}
        />
      </div>
    </Generation>
  )
}

export default React.memo(GenerationContainer, isEqual)
