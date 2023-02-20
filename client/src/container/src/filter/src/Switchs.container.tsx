import isEqual from 'fast-deep-equal'
import React from 'react'
import styled from 'styled-components'
import { Switch } from '../../../../components'
import { FilterContext } from '../../../../context'
import { FilterStore } from '../../../../store'

const Switchs = styled.div`
  width: 30rem;
  display: flex;
  align-items: center;
  justify-content: space-between;

  .switch__item {
    display: flex;
    align-items: center;

    p {
      margin-right: 0.75rem;
    }
  }
`

const SwitchsContainer: React.FC = () => {
  const { changeFilter } = React.useContext(FilterContext)

  const handleChange = React.useCallback(
    (data: { name: keyof FilterStore; value: boolean }) => {
      const { name, value } = data
      if (changeFilter) {
        changeFilter({ type: name, value })
      }
    },
    [changeFilter]
  )

  return (
    <Switchs>
      <div className="switch__item">
        <p className="item__title">메가진화</p>
        <Switch name="isMega" onChange={handleChange} />
      </div>
      <div className="switch__item">
        <p className="item__title">리전폼</p>
        <Switch name="isRegion" onChange={handleChange} />
      </div>
      <div className="switch__item">
        <p className="item__title">진화 여부</p>
        <Switch name="isEvolution" onChange={handleChange} />
      </div>
    </Switchs>
  )
}

export default React.memo(SwitchsContainer, isEqual)
