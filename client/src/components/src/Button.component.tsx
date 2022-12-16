import isEqual from 'fast-deep-equal'
import React from 'react'
import styled from 'styled-components'

interface ButtonComponentProps {
  onClick: () => void
  buttonType: 'default' | 'danger' | 'waring'
}

const Button = styled.button<Pick<ButtonComponentProps, 'buttonType'>>`
  width: 5rem;
  height: 2rem;
  background-color: ${(props) => {
    switch (props.buttonType) {
      case 'default':
        return '#4797f8'
      case 'danger':
        return '#f84424'
      case 'waring':
        return '#f5b62e'
    }
  }};
  border-radius: 1rem;
  text-align: center;
  font-size: 1rem;
  font-weight: 700;
  color: #ffffff;
  border: 0;

  &:active {
    background-color: ${(props) => {
      switch (props.buttonType) {
        case 'default':
          return '#356eb4'
        case 'danger':
          return '#c4351c'
        case 'waring':
          return '#ce9823'
      }
    }};
  }
`

const ButtonComponent: React.FC<ButtonComponentProps> = (props) => {
  const { buttonType, onClick } = props

  const handleClick = React.useCallback(() => {
    onClick()
  }, [onClick])

  return (
    <Button onClick={handleClick} buttonType={buttonType}>
      Button
    </Button>
  )
}

export default React.memo(ButtonComponent, isEqual)