import React from 'react'
import isEqual from 'fast-deep-equal'
import { RadioGroup } from '../../../../components'
import styled from 'styled-components'

const Radio = styled.div`
  width: 100%;
  padding: 1rem;
`

const RadioOptions = [
  { label: '존재', value: 'true' },
  { label: '존재하지 않음', value: 'false' },
  { label: '모두', value: 'all' },
]

const RadioContainer: React.FC = () => {
  return (
    <Radio>
      <RadioGroup title="메가진화" name="isMega" options={RadioOptions} />
      <RadioGroup title="리전폼" name="isRegion" options={RadioOptions} />
      <RadioGroup title="진화여부" name="isEvolution" options={RadioOptions} />
    </Radio>
  )
}

export default React.memo(RadioContainer, isEqual)
