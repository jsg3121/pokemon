import React from 'react'
import isEqual from 'fast-deep-equal'
import styled from 'styled-components'
import Ball from './Ball.component'

interface SwitchComponentProps {
  onChange: (value: boolean) => void
  name: string
  defaultValue?: boolean
  disabled?: boolean
}

const Switch = styled.div<{ disabled?: boolean }>`
  width: max-content;
  position: relative;

  .switch__checkbox {
    display: none;

    & + label {
      background-color: #4797f8;
    }

    &:checked {
      & + label {
        background-color: #41e835;
      }
    }
  }

  label {
    width: 4rem;
    height: 1.9rem;
    display: flex;
    align-items: center;
    border: 1px solid #bbbbbb;
    border-radius: 0.85rem;
    box-sizing: border-box;
    padding: 0.2rem;
    position: relative;
    transition: background-color 0.3s;
    cursor: pointer;
    overflow: hidden;

    p {
      margin: 0 0.3rem;
    }

    ${(props) => {
      if (props.disabled) {
        return `
          background-color: #dddddd !important;
          cursor:not-allowed;
          
          &::after {
            content: '';
            width: 100%;
            height: 100%;
            position: absolute;
            top: 0;
            left: 0;
            background-color: #90909079;
            z-index: 10;
          }
        `
      }
    }}
  }
`
const SwitchComponent: React.FC<SwitchComponentProps> = (props) => {
  const { name, defaultValue, disabled, onChange } = props
  const [value, setValue] = React.useState<boolean>(defaultValue ?? false)

  const handleChange = React.useCallback(() => {
    setValue(() => !value)
    onChange(value)
  }, [onChange, value])

  return (
    <Switch disabled={disabled}>
      <input
        type="checkbox"
        name={name}
        id={name}
        className="switch__checkbox"
        onChange={handleChange}
        disabled={disabled}
      />
      <label htmlFor={name}>
        <Ball value={value} />
      </label>
    </Switch>
  )
}

export default React.memo(SwitchComponent, isEqual)
