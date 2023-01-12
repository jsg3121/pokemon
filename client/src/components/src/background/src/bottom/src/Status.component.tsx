import React from 'react'
import isEqual from 'fast-deep-equal'
import styled from 'styled-components'
import SignalComponent from './Signal.component'

interface StatusComponentProps {}

const Status = styled.div`
  width: 17rem;
  height: 100%;
  padding: 1rem;
  .bg--status__alert {
    height: 1rem;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 2rem;

    i {
      width: 48%;
      height: 1rem;
      flex-shrink: 0;
      border-radius: 0.2rem;

      &:first-child {
        background-color: #ff4d4d;
        // 불 들어온 효과 줄 때
        /* box-shadow: 4px 2px 5px -2px #ff1111, -1px -1px 3px 0px #ffa1a1,
          inset -2px -3px 2px #ff3b3b, inset 2px 3px 3px 0px #ff7474; */
        box-shadow: 4px 2px 5px -2px #ff1111, inset -2px -3px 2px #ff3b3b,
          inset 2px 3px 3px 0px #ff7474;
      }

      &:last-child {
        background-color: #5f68fe;
        // 불 들어온 효과 줄 때
        /* box-shadow: 4px 2px 5px -2px #424cff, -1px -1px 3px 0px #b5b9ff,
          inset -2px -3px 2px #535cff, inset 2px 3px 3px 0px #8087ff; */
        box-shadow: 4px 2px 5px -2px #424cff, inset -2px -3px 2px #535cff,
          inset 2px 3px 3px 0px #8087ff;
      }
    }
  }

  .bg--status__signal {
    width: 100%;
    height: 8rem;
    background-color: #222222;
    border-top: 3px solid #000000;
    border-left: 3px solid #000000;
    border-right: 3px solid #222222;
    border-bottom: 3px solid #222222;
    margin-top: 2rem;
    position: relative;

    .bg--status__line {
      width: 100%;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: space-between;
      position: relative;
      z-index: 10;

      i {
        &:first-child {
          height: 1px;
          width: 100%;
          background-color: #444444;
          position: absolute;
          top: 50%;
          transform: translate(0, -50%);
        }

        &:not(:first-child) {
          width: 1px;
          height: 100%;
          background-color: #444444;
        }
      }
    }
  }
`

const StatusComponent: React.FC<StatusComponentProps> = (props) => {
  return (
    <Status>
      <div className="bg--status__alert">
        <i></i>
        <i></i>
      </div>
      <div className="bg--status__signal">
        <div className="bg--status__line">
          <i></i>
          <i></i>
          <i></i>
          <i></i>
          <i></i>
          <i></i>
          <i></i>
        </div>
        <SignalComponent />
      </div>
    </Status>
  )
}

export default React.memo(StatusComponent, isEqual)
