import React from 'react'
import styled from 'styled-components'

const Footer = styled.footer`
  width: 100%;
  height: 30%;
  display: flex;
  align-self: flex-end;
  justify-content: space-between;
  padding: 1rem 1rem 3rem;

  > div {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;

    > div {
      flex-shrink: 0;
    }
  }
`

const Buttons = styled.div`
  width: 9rem;
  height: 100%;
  padding: 1rem;

  .bg--button__circle {
    display: block;
    width: 7rem;
    height: 7rem;
    background-color: #222222;
    border-radius: 50%;
    box-shadow: 4px 3px 9px -1px #111111, inset 4px 3px 8px -4px #767676;
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
      background-color: #333333;
    }
  }
`

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

    p {
      width: 48%;
      height: 1rem;
      flex-shrink: 0;

      &:first-child {
        background-color: green;
      }

      &:last-child {
        background-color: yellow;
      }
    }
  }

  .bg--status__signal {
    width: 100%;
    height: 8rem;
    background-color: gainsboro;
    margin-top: 2rem;
  }
`

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
      position: absolute;
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
      position: absolute;
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
      position: absolute;
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
      position: absolute;
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

const FooterComponent: React.FC = () => {
  return (
    <Footer>
      <div>
        <Buttons>
          <i className="bg--button__circle" />
          <div className="bg--button__dot">
            <i></i>
            <i></i>
          </div>
        </Buttons>
        <Status>
          <div className="bg--status__alert">
            <p>빨간 버튼</p>
            <p>파란 버튼</p>
          </div>
          <div className="bg--status__signal">초록 상태창</div>
        </Status>
        <ArrowButton>
          <div className="bg--arrow__cross">
            <button className="cross--up" />
            <button className="cross--right" />
            <button className="cross--down" />
            <button className="cross--left" />
          </div>
          <p>제작 정보 텍스트</p>
        </ArrowButton>
      </div>
    </Footer>
  )
}

export default FooterComponent
