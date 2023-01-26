import React from 'react'
import isEqual from 'fast-deep-equal'
import styled from 'styled-components'

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

const Ball = styled.span<{ value: boolean }>`
  width: 1.3rem;
  height: 1.3rem;
  display: block;
  border-radius: 50%;
  background-color: #ffffff;
  border: 1px solid #aaaaaa;
  position: relative;
  ${(props) => {
    if (props.value) {
      return 'transform: translate(2rem, 0) rotate(0);'
    } else {
      return 'transform: translate(0, 0) rotate(-360deg);'
    }
  }}
  transition: transform 0.3s, rotate 0.3s;
  will-change: transform;

  .ball--top {
    width: 1.3rem;
    height: 0.65rem;
    background-color: #ff0000;
    border-top-left-radius: 0.65rem;
    border-top-right-radius: 0.65rem;
    border-bottom: 1px solid #000000;
    position: absolute;
    top: 0;
    left: 50%;
    transform: translate(-50%, 0);
    box-sizing: border-box;
    z-index: 1;
  }

  .ball--bottom {
    width: 1.3rem;
    height: 0.65rem;
    background-color: #ffffff;
    border-bottom-left-radius: 0.65rem;
    border-bottom-right-radius: 0.65rem;
    border-top: 1px solid #000000;
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translate(-50%, 0);
    box-sizing: border-box;
    z-index: 2;
  }

  .ball--center {
    width: 0.6rem;
    height: 0.6rem;
    background-color: #ffffff;
    border: 2px solid #000000;
    border-radius: 50%;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 3;
    box-sizing: border-box;
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
        <Ball value={value}>
          <i className="ball--top" />
          <i className="ball--center" />
          <i className="ball--bottom" />
        </Ball>
      </label>
    </Switch>
  )
}

export default React.memo(SwitchComponent, isEqual)
