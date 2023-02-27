import React from 'react'
import styled from 'styled-components'

const Header = styled.header`
  width: 100%;
  height: 5rem;
  background-color: #ffffff;
  border-bottom: 1px solid #333333;
  padding: 1rem;
  position: fixed;
  top: 0;
  z-index: 100;
  display: flex;
  align-items: center;

  h1 {
    color: #ffcc02;
    font-size: 3rem;
    font-weight: 900;
    -webkit-text-stroke: 2px #3861ad;
  }
`

const HeaderContainer: React.FC = () => {
  return (
    <Header>
      <h1>Pokemon Dogam</h1>
    </Header>
  )
}

export default HeaderContainer
