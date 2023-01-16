import React from 'react'
import isEqual from 'fast-deep-equal'
import styled from 'styled-components'

interface ArrowButtonComponentProps {}

const ArrowButton = styled.div`
  width: 15rem;
  height: 100%;
  padding: 1rem;

  .bg--arrow__cross {
    width: 10.3rem;
    height: 10.3rem;
    margin: 0 auto 1rem;
    position: relative;
    background-color: #be2b2b;
    border-top: 2px solid #951f1f;
    border-left: 2px solid #951f1f;
    border-right: 1px solid #951f1f;
    border-bottom: 1px solid #951f1f;
    border-radius: 5rem;
    box-shadow: inset 0px 1px 6px -1px #c30707;
    overflow: hidden;
    box-sizing: content-box;

    button {
      background-color: #3d3d3d;
      position: absolute;

      &::before,
      &::after {
        content: '';
        width: 0;
        height: 0;
        position: absolute;
      }

      &:hover {
        background-color: #222222;
      }
    }

    .cross--up {
      width: 2rem;
      height: 4rem;
      left: 50%;
      top: 0.5rem;
      transform: translate(-50%, 0);
      box-shadow: inset -3px 0 0 #222222;

      &::before {
        border-bottom: 1rem solid #be2b2b;
        border-left: 1rem solid transparent;
        bottom: -2px;
        right: -2px;
        filter: drop-shadow(-2px -2px 0px #222222);
      }

      &::after {
        border-bottom: 1rem solid #be2b2b;
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
      box-shadow: inset -3px -3px 0 #222222;

      &::before {
        border-bottom: 1rem solid transparent;
        border-left: 1rem solid #be2b2b;
        top: 0;
        left: 0;
      }

      &::after {
        border-bottom: 1rem solid #be2b2b;
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
      box-shadow: inset -3px -3px 0 #222222;

      &::before {
        border-bottom: 1rem solid transparent;
        border-left: 1rem solid #be2b2b;
        top: 0;
        left: 0;
      }

      &::after {
        border-bottom: 1rem solid transparent;
        border-right: 1rem solid #be2b2b;
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
      box-shadow: inset 0px -3px 0 #222222;

      &::before {
        border-bottom: 1rem solid #be2b2b;
        border-left: 1rem solid transparent;
        bottom: -2px;
        right: -2px;
        filter: drop-shadow(-2px -2px 0px #222222);
      }

      &::after {
        border-bottom: 1rem solid transparent;
        border-right: 1rem solid #be2b2b;
        top: 0;
        right: 0;
      }
    }
  }

  p {
    text-align: right;
    font-size: 0.5rem;
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
      <p>Copyright 2022.Sungyu Jang All rights reserved.</p>
    </ArrowButton>
  )
}

export default React.memo(ArrowButtonComponent, isEqual)
