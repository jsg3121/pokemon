import React from 'react'
import isEqual from 'fast-deep-equal'
import styled from 'styled-components'

interface InputComponentProps {
  defaultValue: string
  type: 'text' | 'password'
  status: 'default' | 'danger' | 'waring'
}

const Input = styled.input<{ status: string }>`
  border: ${(props) => {
    switch (props.status) {
      case 'waring':
        return '1px solid #f5b62e;'
      case 'default':
        return '1px solid #4797f8;'
      case 'danger':
        return '1px solid #f84424;'
      default:
        return '1px solid #333333'
    }
  }};
  padding: 5px 0.75rem;
  border-radius: 0.75rem;
  font-size: 1rem;
`

const InputComponent: React.FC<InputComponentProps> = (props) => {
  const { defaultValue, type, status } = props

  return <Input type={type} defaultValue={defaultValue} status={status} />
}

export default React.memo(InputComponent, isEqual)
