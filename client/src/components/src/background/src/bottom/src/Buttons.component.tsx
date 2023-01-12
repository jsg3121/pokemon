import React from 'react'
import isEqual from 'fast-deep-equal'
import styled from 'styled-components'

interface ButtonsComponentProps {}

const Buttons = styled.div`
  width: 9rem;
  height: 100%;
  padding: 1rem;

  .bg--button__circle {
    display: block;
    width: 7rem;
    height: 7rem;
    background-color: #222222;
    border-right: 1px solid #191919;
    border-bottom: 1px solid #191919;
    border-radius: 50%;
    box-shadow: 4px 3px 9px -1px #e54747, inset 5px 1px 8px -4px #767676,
      inset -6px -3px 5px -4px #050505;
  }

  .bg--button__dot {
    width: 4.5rem;
    height: 1rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 1.5rem auto 0;

    i {
      display: block;
      width: 0.8rem;
      height: 0.8rem;
      border-radius: 50%;
      background-color: #222222;
      border-right: 1px solid #191919;
      border-bottom: 1px solid #191919;
      box-shadow: 4px 3px 9px -1px #e54747, inset 3px 2px 7px -4px #767676,
        inset -6px -3px 5px -4px #050505;
    }
  }
`

const ButtonsComponent: React.FC<ButtonsComponentProps> = (props) => {
  return (
    <Buttons>
      <i className="bg--button__circle" />
      <div className="bg--button__dot">
        <i></i>
        <i></i>
      </div>
    </Buttons>
  )
}

export default React.memo(ButtonsComponent, isEqual)
