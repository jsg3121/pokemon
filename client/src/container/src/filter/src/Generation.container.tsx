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
        {new Array(9).fill('').map((_, index) => {
          return (
            <React.Fragment key={index}>
              <Checkbox
                label={`${index + 1}세대`}
                value={`${index + 1}`}
                onChecked={handleGenCheck}
                defaultChecked={
                  filter && filter.generation.indexOf(`${index + 1}`) >= 0
                }
              />
            </React.Fragment>
          )
        })}
      </div>
    </Generation>
  )
}

export default React.memo(GenerationContainer, isEqual)
