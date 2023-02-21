import isEqual from 'fast-deep-equal'
import { observer } from 'mobx-react'
import React from 'react'
import styled from 'styled-components'
import { RadioGroup } from '../../../../components'
import { FilterContext } from '../../../../context'
import { FilterStore } from '../../../../store'

const Radio = styled.div`
  width: 100%;
  padding: 1rem;
`

const RadioOptions = [
  { label: '존재', value: 'true' },
  { label: '존재하지 않음', value: 'false' },
  { label: '모두', value: 'all' },
]

const RadioContainer: React.FC = observer(() => {
  const { changeFilter } = React.useContext(FilterContext)

  const handleSelect = React.useCallback(
    (data: { type: keyof FilterStore; value: string }) => {
      if (changeFilter) {
        changeFilter(data)
      }
    },
    [changeFilter]
  )

  return (
    <Radio>
      <RadioGroup
        title="메가진화"
        name="isMega"
        options={RadioOptions}
        onSelect={handleSelect}
      />
      <RadioGroup
        title="리전폼"
        name="isRegion"
        options={RadioOptions}
        onSelect={handleSelect}
      />
      <RadioGroup
        title="진화여부"
        name="isEvolution"
        options={RadioOptions}
        onSelect={handleSelect}
      />
    </Radio>
  )
})

export default React.memo(RadioContainer, isEqual)
