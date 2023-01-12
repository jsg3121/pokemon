import React from 'react'
import isEqual from 'fast-deep-equal'
import styled from 'styled-components'

interface ArrowButtonComponentProps {}

const ArrowButton = styled.div`
  width: 17rem;
  height: 100%;
  padding: 1rem;

  .bg--arrow__cross {
    width: 10rem;
    height: 10rem;
    margin: 0 auto 1rem;
    position: relative;
    background-color: green;
    border-radius: 5rem;
    overflow: hidden;

    button {
      background-color: #333333;
      position: absolute;

      &::before,
      &::after {
        content: '';
        width: 0;
        height: 0;
        position: absolute;
      }

      &:hover {
        background-color: orange;
      }
    }

    .cross--up {
      width: 2rem;
      height: 4rem;
      left: 50%;
      top: 0.5rem;
      transform: translate(-50%, 0);

      &::before {
        border-bottom: 1rem solid green;
        border-left: 1rem solid transparent;
        bottom: 0;
        right: 0;
      }

      &::after {
        border-bottom: 1rem solid green;
        border-right: 1rem solid transparent;
        bottom: 0;
        left: 0;
      }
    }

    .cross--right {
      width: 4rem;
      height: 2rem;
      right: 0.5rem;
      top: 50%;
      transform: translate(0, -50%);

      &::before {
        border-bottom: 1rem solid transparent;
        border-left: 1rem solid green;
        top: 0;
        left: 0;
      }

      &::after {
        border-bottom: 1rem solid green;
        border-right: 1rem solid transparent;
        bottom: 0;
        left: 0;
      }
    }

    .cross--down {
      width: 2rem;
      height: 4rem;
      left: 50%;
      bottom: 0.5rem;
      transform: translate(-50%, 0);

      &::before {
        border-bottom: 1rem solid transparent;
        border-left: 1rem solid green;
        top: 0;
        left: 0;
      }

      &::after {
        border-bottom: 1rem solid transparent;
        border-right: 1rem solid green;
        top: 0;
        right: 0;
      }
    }

    .cross--left {
      width: 4rem;
      height: 2rem;
      left: 0.5rem;
      top: 50%;
      transform: translate(0, -50%);

      &::before {
        border-bottom: 1rem solid green;
        border-left: 1rem solid transparent;
        bottom: 0;
        right: 0;
      }

      &::after {
        border-bottom: 1rem solid transparent;
        border-right: 1rem solid green;
        top: 0;
        right: 0;
      }
    }
  }
`

const ArrowButtonComponent: React.FC<ArrowButtonComponentProps> = (props) => {
  return (
    <ArrowButton>
      <div className="bg--arrow__cross">
        <button className="cross--up" />
        <button className="cross--right" />
        <button className="cross--down" />
        <button className="cross--left" />
      </div>
      <p>제작 정보 텍스트</p>
    </ArrowButton>
  )
}

export default React.memo(ArrowButtonComponent, isEqual)
