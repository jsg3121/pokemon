import React from 'react'
import isEqual from 'fast-deep-equal'
import styled from 'styled-components'
import Ball from './Ball.component'

interface CheckboxComponentProps {
  value: string
  label: string
  disabled: boolean
  checked: boolean
  onChecked: (value: string) => boolean
}

const Checkbox = styled.div`
  padding: 0 0.5rem;

  input {
    display: none;
  }

  label {
    display: flex;
    align-items: center;
    position: relative;
    height: 1.3rem;

    .ball {
      width: 1.2em;
      height: 1.2rem;
      position: absolute;
      transform: scale(0);
      left: 0;
    }

    .checkbox__unchecked {
      width: 1rem;
      height: 1rem;
      border-radius: 0.3rem;
      border: 1px solid black;
      position: absolute;
      left: 0;
      z-index: 10;
      transform: scale(1);
      transition: transform 0.3s;
      will-change: transform;
    }

    & > .checkbox__text {
      height: 100%;
      margin-left: 1.5rem;
      font-size: 1rem;
      line-height: 1.5;
    }
  }

  input:checked + label {
    .ball {
      transform: scale(1);
    }
    .checkbox__unchecked {
      transform: scale(0);
    }
  }

  input:disabled + label {
    .ball {
      &::after {
        content: '';
        width: 100%;
        height: 100%;
        border-radius: 50%;
        position: absolute;
        top: 0;
        left: 0;
        background-color: rgba(0, 0, 0, 0.35);
        z-index: 10;
      }
    }

    .checkbox__text {
      color: rgba(0, 0, 0, 0.35);
    }
  }
`

const CheckboxComponent: React.FC<CheckboxComponentProps> = (props) => {
  const { label, value, checked, disabled, onChecked } = props

  const handleCheck = React.useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      onChecked(e.target.value)
    },
    [onChecked]
  )

  return (
    <Checkbox>
      <input
        type="checkbox"
        disabled={disabled}
        id={value}
        value={value}
        checked={checked}
        onChange={handleCheck}
      />
      <label htmlFor={value}>
        <i className="checkbox__unchecked" />
        <Ball value={checked} />
        <span className="checkbox__text">{label}</span>
      </label>
    </Checkbox>
  )
}

export default React.memo(CheckboxComponent, isEqual)
