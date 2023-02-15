import React from 'react'
import isEqual from 'fast-deep-equal'
import styled from 'styled-components'
import { FilterContext } from '../../../../context'
import { Checkbox } from '../../../../components'

const Generation = styled.div`
  width: 50rem;
  height: 5rem;
  padding: 1rem;

  .filter__generation--title {
    margin-bottom: 0.5rem;
    font-size: 1.1rem;
    font-weight: 700;
  }

  & > div {
    width: 45rem;
    display: grid;
    grid-template-columns: repeat(9, 1fr);
    grid-template-rows: 1fr 1fr;
  }
`

const GenerationContainer: React.FC = () => {
  const { changeFilter, filter } = React.useContext(FilterContext)

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
      <p className="filter__generation--title">Generation</p>
      <div>
        <Checkbox label="1세대" value={'1'} onChecked={handleGenCheck} />
        <Checkbox label="2세대" value={'2'} onChecked={handleGenCheck} />
        <Checkbox label="3세대" value={'3'} onChecked={handleGenCheck} />
        <Checkbox label="4세대" value={'4'} onChecked={handleGenCheck} />
        <Checkbox label="5세대" value={'5'} onChecked={handleGenCheck} />
        <Checkbox label="6세대" value={'6'} onChecked={handleGenCheck} />
        <Checkbox label="7세대" value={'7'} onChecked={handleGenCheck} />
        <Checkbox label="8세대" value={'8'} onChecked={handleGenCheck} />
        <Checkbox label="9세대" value={'9'} onChecked={handleGenCheck} />
      </div>
    </Generation>
  )
}

export default React.memo(GenerationContainer, isEqual)
