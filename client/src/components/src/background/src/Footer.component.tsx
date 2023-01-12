import React from 'react'
import styled from 'styled-components'
import { ArrowButton, Buttons, Status } from './bottom'

const Footer = styled.footer`
  width: 100%;
  height: 25%;
  display: flex;
  align-self: flex-end;
  justify-content: space-between;
  padding: 1rem 1rem 1rem;

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

const FooterComponent: React.FC = () => {
  return (
    <Footer>
      <div>
        <Buttons />
        <Status />
        <ArrowButton />
      </div>
    </Footer>
  )
}

export default FooterComponent
