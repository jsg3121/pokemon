import React from 'react'
import isEqual from 'fast-deep-equal'
import styled from 'styled-components'

interface BodyComponentProps {}

const Body = styled.div`
  width: 40rem;
  height: 28rem;
  background-color: #ffffff;
  position: relative;
  top: 5rem;
  left: 50%;
  transform: translate(-50%, 0);
`

const BodyComponent: React.FC<BodyComponentProps> = (props) => {
  return <Body></Body>
}

export default React.memo(BodyComponent, isEqual)
