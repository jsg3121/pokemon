import isEqual from 'fast-deep-equal'
import React from 'react'
import styled from 'styled-components'
import { FilterStore } from '../../../store'
import Radio from './Radio.component'

interface RadioComponentProps {
  title: string
  name: keyof FilterStore
  options: Array<{ label: string; value: string }>
  onSelect: (data: { type: keyof FilterStore; value: string }) => void
}

const RadioGroup = styled.div`
  width: 100%;
  height: 6rem;

  .item__title {
    font-size: 1.1rem;
    font-weight: 700;
    margin-bottom: 1rem;
    padding-bottom: 0.5rem;
    border-bottom: 1px solid #333333;
  }

  .radio__item {
    display: flex;
    align-items: center;
  }
`

const RadioGroupComponent: React.FC<RadioComponentProps> = (props) => {
  const { title, name, options, onSelect } = props

  const handleCheck = React.useCallback(
    (data: string) => {
      onSelect({ type: name, value: data })
    },
    [name, onSelect]
  )

  return (
    <RadioGroup>
      <p className="item__title">{title}</p>
      <div className="radio__item">
        {options.map((item, index) => {
          const { label, value } = item
          return (
            <Radio
              key={index}
              name={name}
              label={label}
              value={value}
              onChecked={handleCheck}
            />
          )
        })}
      </div>
    </RadioGroup>
  )
}

export default React.memo(RadioGroupComponent, isEqual)
