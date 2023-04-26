import React from 'react'
import isEqual from 'fast-deep-equal'
import { FilterContext } from '../../../../context'
import { PokemonTypes } from '../../../../types'
import { Checkbox } from '../../../../components'
import { observer } from 'mobx-react'
import styled from 'styled-components'

const Types = styled.div`
  width: 100%;
  height: 14rem;
  padding: 1rem;

  .filter__content--title {
    span {
      font-size: 0.8rem;
      margin-left: 0.5rem;
      font-weight: 500;
      color: #666666;
    }
  }

  & > div {
    width: 100%;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: 1fr 1fr;
  }

  @media screen and (max-width: 475px) {
    height: 9rem;
    padding: 0 1rem;

    & > div {
      grid-template-columns: repeat(5, 1fr);
    }
  }
`

const TypesContainer: React.FC = observer(() => {
  const { changeFilter, filter } = React.useContext(FilterContext)

  const handleTypeCheck = React.useCallback(
    (value: string) => {
      if (changeFilter) {
        changeFilter({ type: 'type', value })
      }
    },
    [changeFilter]
  )

  return (
    <Types className="filter__type">
      <p className="filter__content--title">
        Type
        {filter && filter.type?.length === 2 && (
          <span>최대 두 타입까지 선택할 수 있습니다.</span>
        )}
      </p>
      <div>
        {Object.entries(PokemonTypes).map((key) => {
          return (
            <Checkbox
              key={key[0]}
              label={key[1]}
              value={key[1]}
              onChecked={handleTypeCheck}
              defaultChecked={filter && filter.type.indexOf(key[1]) >= 0}
              disabled={
                filter &&
                filter.type.length === 2 &&
                filter.type.indexOf(key[1]) < 0
                  ? true
                  : false
              }
            />
          )
        })}
      </div>
    </Types>
  )
})

export default React.memo(TypesContainer, isEqual)
