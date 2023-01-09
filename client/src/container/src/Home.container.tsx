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
  box-shadow: 0 0 0 #ffffff, inset 0 0 0 #ffffff, inset -16px -15px 0 #b90000;
`

const HomeContainer: React.FC = () => {
  return (
    <Home>
      <Footer />
    </Home>
  )
}

export default HomeContainer
