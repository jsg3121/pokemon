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

  & > div {
    height: 6rem;
  }
`

const RadioOptions = [
  { label: '존재', value: 'true' },
  { label: '존재하지 않음', value: 'false' },
  { label: '모두', value: 'all' },
]

const RadioContainer: React.FC = observer(() => {
  const { filter, changeFilter } = React.useContext(FilterContext)

  const handleSelect = React.useCallback(
    (data: { name: string; value: string }) => {
      const option = {
        type: data.name as keyof FilterStore,
        value: data.value,
      }

      if (changeFilter) {
        changeFilter(option)
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
        defaultValue={filter && filter.isMega !== undefined}
      />
      <RadioGroup
        title="리전폼"
        name="isRegion"
        options={RadioOptions}
        onSelect={handleSelect}
        defaultValue={filter && filter.isRegion !== undefined}
      />
      <RadioGroup
        title="진화여부"
        name="isEvolution"
        options={RadioOptions}
        onSelect={handleSelect}
        defaultValue={filter && filter.isEvolution !== undefined}
      />
    </Radio>
  )
})

export default React.memo(RadioContainer, isEqual)
