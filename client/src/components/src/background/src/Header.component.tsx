import React from 'react'
import isEqual from 'fast-deep-equal'
import styled from 'styled-components'

interface HeaderComponentProps {}

const Header = styled.div`
  width: 100%;
  height: 10rem;
  background-color: #e32c2c;
  position: relative;
  z-index: 20;
`

const HeaderFrist = styled.div`
  width: 100%;
  height: 10rem;
  position: absolute;
  z-index: 10;

  & > i.header__bottom--first {
    width: 14rem;
    height: 3rem;
    background-color: #e32c2c;
    border-bottom-right-radius: 8rem;
    position: absolute;
    bottom: -3rem;
    z-index: 2;
    box-sizing: content-box;
  }
`

const HeaderSeconds = styled.div`
  width: 100%;
  height: 10rem;
  position: absolute;
  z-index: 20;

  & > i.header__bottom--second {
    width: 31rem;
    height: 3rem;
    background-color: #d12727;
    border-top-left-radius: 8rem;
    position: absolute;
    bottom: 0rem;
    right: 0;
    box-sizing: content-box;
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
    <>
      <HeaderFrist>
        <i className="header__bottom--first" />
      </HeaderFrist>
      <Header>
        <Gem className="header__gem" />
        <GemList>
          <i className="gem--red" />
          <i className="gem--yellow" />
          <i className="gem--green" />
        </GemList>
      </Header>
      <HeaderSeconds>
        <i className="header__bottom--second" />
      </HeaderSeconds>
    </>
  )
}

export default React.memo(HeaderComponent, isEqual)
