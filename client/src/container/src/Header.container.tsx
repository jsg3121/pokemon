import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import styled from 'styled-components'
import { Button } from '../../components'

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
  justify-content: space-between;

  h1 {
    color: #ffcc02;
    font-size: 3rem;
    font-weight: 900;
    -webkit-text-stroke: 2px #3861ad;

    span {
      font-size: 0.75rem;
      color: #aaaaaa;
      -webkit-text-stroke: 0;
    }
  }

  @media screen and (max-width: 475px) {
    height: 3.5rem;
    h1 {
      font-size: 2rem;
      -webkit-text-stroke: 1px #3861ad;
    }
  }
`

const HeaderContainer: React.FC = () => {
  const { pathname } = useLocation()

  return (
    <Header>
      <Link to="/" replace>
        <h1>
          Pokemon Dogam <span>v0.1.1</span>
        </h1>
      </Link>
      {pathname !== '/' && (
        <div className="detail__button--back">
          <Link to="/" replace>
            <Button buttonType="default" label="뒤로가기" />
          </Link>
        </div>
      )}
    </Header>
  )
}

export default HeaderContainer
