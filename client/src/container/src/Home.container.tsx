import React from 'react'
import isEqual from 'fast-deep-equal'
import styled from 'styled-components'

interface HomeContainerProps {}

const Home = styled.section`
  width: 100%;
  height: 100vh;
  background-color: #d12727;
  border-radius: 1rem;
  overflow: hidden;
`

const HomeContainer: React.FC<HomeContainerProps> = (props) => {
  const {} = props

  return <Home></Home>
}

export default React.memo(HomeContainer, isEqual)
