import React from 'react'
import isEqual from 'fast-deep-equal'
import styled from 'styled-components'

interface HeaderComponentProps {}

const Header = styled.div`
  width: 100%;
  height: 10rem;
  background-color: #e32c2c;
  position: relative;

  &::before {
    content: '';
    width: 15rem;
    height: 10rem;
    background-color: #e32c2c;
    border-top-right-radius: 6rem;
    border-bottom-right-radius: 16rem;
    position: absolute;
    bottom: -4rem;
  }

  &::after {
    content: '';
    width: 100%;
    height: 10rem;
    background-color: #d12727;
    border-top-left-radius: 10rem;
    border-bottom-left-radius: 2rem;
    position: absolute;
    bottom: -6rem;
    left: 13rem;
  }
`

const Gem = styled.i`
  display: block;
  width: 9rem;
  height: 9rem;
  border-radius: 50%;
  border: 0.5rem solid #ffffff;
  position: absolute;
  top: 2rem;
  left: 2.5rem;
  z-index: 10;
`

const GemList = styled.div`
  width: 13rem;
  height: 4rem;
  display: flex;
  align-items: center;
  justify-content: space-around;
  position: absolute;
  top: 1rem;
  left: 15rem;

  i {
    width: 3.5rem;
    height: 3.5rem;
    border-radius: 50%;
    border: 0.5rem solid #ffffff;
  }
`

const HeaderComponent: React.FC<HeaderComponentProps> = (props) => {
  return (
    <Header>
      <Gem className="header__gem" />
      <GemList>
        <i className="gem--red" />
        <i className="gem--yellow" />
        <i className="gem--green" />
      </GemList>
    </Header>
  )
}

export default React.memo(HeaderComponent, isEqual)
