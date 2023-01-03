import React from 'react'
import styled from 'styled-components'

const Footer = styled.footer`
  width: 100%;
  height: 25%;
  background-color: blue;
  display: flex;
  align-self: flex-end;
  justify-content: space-between;
  padding: 1rem;

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
    width: 7rem;
    height: 7rem;
    background-color: #333333;
    border-radius: 50%;

    &:active {
      background-color: red;
    }
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
`

const FooterComponent: React.FC = () => {
  return (
    <Footer>
      <div>
        <Buttons>
          <button className="bg--button__circle">원형 버튼</button>
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
          <div>십자 버튼</div>
          <p>제작 정보 텍스트</p>
        </ArrowButton>
      </div>
    </Footer>
  )
}

export default FooterComponent
