import React from 'react'
import styled from 'styled-components'
import { Footer } from '../../components'

const Home = styled.section`
  width: 100%;
  height: 100vh;
  background-color: #d12727;
  border-radius: 1rem;
  position: relative;
  display: flex;
  overflow: hidden;
  border-right: 1px solid #750000;
  border-bottom: 1px solid #750000;
  box-shadow: 4px 0px 7px -1px #333333, inset 13px 10px 12px -2px #ff5050,
    inset -16px -15px 8px -7px #b90000;
`

const HomeContainer: React.FC = () => {
  return (
    <Home>
      <Footer />
    </Home>
  )
}

export default HomeContainer
